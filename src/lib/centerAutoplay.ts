type Entry = {
  root: HTMLElement;
  videos: HTMLVideoElement[];
};

const entries = new Set<Entry>();
let active: Entry | null = null;
let ticking = false;
let listening = false;

/** Idle look — matches the previous dimmed treatment. */
const IDLE_OPACITY = 0.4;
const IDLE_BLUR_PX = 0.5;
/** Distance (as a fraction of viewport height) over which focus eases 0 → 1. Wider = slower. */
const FOCUS_RANGE = 0.65;

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

function clearFocusStyles(root: HTMLElement) {
  root.style.opacity = "";
  root.style.filter = "";
}

function applyFocus(root: HTMLElement, focus: number) {
  const opacity = IDLE_OPACITY + (1 - IDLE_OPACITY) * focus;
  const blur = IDLE_BLUR_PX * (1 - focus);
  root.style.opacity = String(opacity);
  root.style.filter = blur > 0.02 ? `blur(${blur}px)` : "none";
}

/** Continuous focus amount from distance to viewport center (Apple scrollTransition-style). */
function focusFor(entry: Entry): number {
  // First-fold: keep everything clear until the user has scrolled a bit
  if (window.scrollY < 64) return 1;

  const rect = entry.root.getBoundingClientRect();
  if (rect.height <= 0) return 0;

  const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
  if (visible <= 0) return 0;

  const viewportCenter = window.innerHeight / 2;
  const center = rect.top + rect.height / 2;
  const dist = Math.abs(center - viewportCenter);
  const maxDist = window.innerHeight * FOCUS_RANGE;

  // easeInOut falloff — same idea as scrollTransition(.interactive(timingCurve: .easeInOut))
  return smoothstep(1 - dist / maxDist);
}

function pickClosest(): Entry | null {
  if (window.scrollY < 64) return null;

  const viewportCenter = window.innerHeight / 2;
  const hysteresis = window.innerHeight * 0.12;
  let best: Entry | null = null;
  let bestDist = Infinity;
  let activeDist = Infinity;
  let activeVisible = false;

  for (const entry of entries) {
    const rect = entry.root.getBoundingClientRect();
    const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
    if (rect.height <= 0 || visible / rect.height < 0.2) continue;

    const center = rect.top + rect.height / 2;
    const dist = Math.abs(center - viewportCenter);

    if (entry === active) {
      activeVisible = true;
      activeDist = dist;
    }

    if (dist < bestDist) {
      bestDist = dist;
      best = entry;
    }
  }

  if (!best) return null;

  if (active && activeVisible && best !== active && activeDist - bestDist < hysteresis) {
    return active;
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

function syncFocus() {
  for (const entry of entries) {
    applyFocus(entry.root, focusFor(entry));
  }
}

function sync() {
  ticking = false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (const entry of entries) {
      setPlaying(entry, false);
      clearFocusStyles(entry.root);
    }
    active = null;
    return;
  }

  syncFocus();

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
    clearFocusStyles(entry.root);
    if (active === entry) {
      setPlaying(entry, false);
      active = null;
    }
    if (entries.size === 0) teardownListeners();
    else requestSync();
  };
}
