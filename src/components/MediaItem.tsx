"use client";

import { useEffect, useRef, type RefObject, type VideoHTMLAttributes } from "react";
import type { Media, StageLayer } from "@/content/site";
import { registerCenterAutoplay } from "@/lib/centerAutoplay";

function AutoplayVideo({
  layout = "fill",
  ...props
}: VideoHTMLAttributes<HTMLVideoElement> & { layout?: "fill" | "portrait" }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;
    return registerCenterAutoplay(root, [video]);
  }, []);

  const className = layout === "portrait" ? "media-item media-item--portrait" : "media-item";

  return (
    <div ref={rootRef} className={className}>
      <video ref={videoRef} muted loop playsInline preload="metadata" disableRemotePlayback {...props} />
    </div>
  );
}

function StageLayerView({
  layer,
  className,
  alt,
  videoRef,
}: {
  layer: StageLayer;
  className: string;
  alt?: string;
  videoRef?: RefObject<HTMLVideoElement | null>;
}) {
  if (layer.type === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img className={className} src={layer.src} alt={alt ?? ""} draggable={false} aria-hidden={!alt} />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      src={layer.src}
      muted
      loop
      playsInline
      preload="metadata"
      disableRemotePlayback
      aria-label={alt}
      aria-hidden={!alt}
    />
  );
}

function StageMedia({
  background,
  foreground,
  alt,
  fit = "frame",
}: {
  background: StageLayer;
  foreground: StageLayer;
  alt: string;
  fit?: "frame" | "content" | "tall";
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;
    return registerCenterAutoplay(root, [video]);
  }, []);

  const bgVideoRef = background.type === "video" ? videoRef : undefined;
  const fgVideoRef = foreground.type === "video" ? videoRef : undefined;
  const className = [
    "media-item",
    "media-item--stage",
    fit === "content" && "media-item--stage-content",
    fit === "tall" && "media-item--stage-tall",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={rootRef} className={className}>
      <StageLayerView layer={background} className="media-stage__background" videoRef={bgVideoRef} />
      <StageLayerView
        layer={foreground}
        className="media-stage__foreground"
        alt={alt}
        videoRef={fgVideoRef}
      />
    </div>
  );
}

export function MediaItem({ media }: { media: Media }) {
  if (media.type === "image") {
    return (
      <div className="media-item">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={media.src} alt={media.alt} loading="lazy" draggable={false} />
      </div>
    );
  }

  if (media.type === "video") {
    return <AutoplayVideo src={media.src} aria-label={media.alt} layout={media.layout} />;
  }

  if (media.type === "stage") {
    return (
      <StageMedia
        background={media.background}
        foreground={media.foreground}
        alt={media.alt}
        fit={media.fit}
      />
    );
  }

  return (
    <div className="media-item">
      <div
        className="media-placeholder"
        style={{ background: media.tint }}
        role="img"
        aria-label={media.alt}
      />
    </div>
  );
}
