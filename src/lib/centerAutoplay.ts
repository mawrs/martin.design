type Entry = {
  root: HTMLElement;
  videos: HTMLVideoElement[];
};

const entries = new Set<Entry>();
let active: Entry | null = null;
let ticking = false;
let listening = false;

function pickClosest(): Entry | null {
  // First-fold media can sit near viewport center on load — require scroll first
  if (window.scrollY < 64) return null;

  const viewportCenter = window.innerHeight / 2;
  // Only play when a video's center is near the viewport middle
  const maxDist = window.innerHeight * 0.2;
  let best: Entry | null = null;
  let bestDist = Infinity;

  for (const entry of entries) {
    const rect = entry.root.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= window.innerHeight) continue;

    const center = rect.top + rect.height / 2;
    const dist = Math.abs(center - viewportCenter);
    if (dist > maxDist || dist >= bestDist) continue;

    bestDist = dist;
    best = entry;
  }

  return best;
}

function setPlaying(entry: Entry | null, play: boolean) {
  if (!entry) return;
  for (const video of entry.videos) {
    if (play) void video.play().catch(() => {});
    else video.pause();
  }
}

function sync() {
  ticking = false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (const entry of entries) setPlaying(entry, false);
    active = null;
    return;
  }

  const next = pickClosest();

  if (next === active) {
    if (next) setPlaying(next, true);
    return;
  }

  setPlaying(active, false);
  active = next;
  setPlaying(active, true);
}

function requestSync() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(sync);
}

function ensureListeners() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync, { passive: true });
}

function teardownListeners() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", requestSync);
  window.removeEventListener("resize", requestSync);
}

/** Register one or more videos that play/pause together, keyed by the root's distance to viewport center. */
export function registerCenterAutoplay(root: HTMLElement, videos: HTMLVideoElement[]) {
  const entry: Entry = { root, videos };
  entries.add(entry);
  ensureListeners();
  requestSync();

  return () => {
    entries.delete(entry);
    if (active === entry) {
      setPlaying(entry, false);
      active = null;
    }
    if (entries.size === 0) teardownListeners();
    else requestSync();
  };
}
