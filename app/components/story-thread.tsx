"use client";

import { useEffect, useRef } from "react";

export type BeatKind =
  | "maker"
  | "listing"
  | "scroll"
  | "wishlist"
  | "checkout";

export interface StoryBeat {
  chapter: string;
  label: string;
  line: string;
  detail: string;
  kind: BeatKind;
}

const FALLOFF = 420;
const EDGE = 160;

/* Each beat is paired with a fragment of the app itself — the story is told
   through the product's own interface, using its real strings. */
function Artifact({ kind }: { kind: BeatKind }) {
  if (kind === "maker") {
    return (
      <div className="artifact artifact-run">
        <span className="artifact-label">workshop</span>
        <strong>12 pieces</strong>
        <div className="artifact-dots" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <i key={i} style={{ "--i": i } as React.CSSProperties} />
          ))}
        </div>
        <span className="artifact-foot">finished · unlisted</span>
      </div>
    );
  }

  if (kind === "listing") {
    return (
      <div className="artifact artifact-card">
        <div className="artifact-photo">
          <img src="/wear1.jpg" alt="" />
          <span className="artifact-chip artifact-chip-name">
            Project 2504 blue denim
          </span>
          <span className="artifact-chip artifact-chip-price">GHS 350</span>
        </div>
        <span className="artifact-foot">live on Krifth</span>
      </div>
    );
  }

  if (kind === "scroll") {
    return (
      <div className="artifact artifact-feed">
        <div className="artifact-status">
          <strong>2:43</strong>
          <span aria-hidden="true">▪ ▪ ▪</span>
        </div>
        <span className="artifact-title">Discover</span>
        <div className="artifact-pills">
          <em>All</em>
          <span>African Print</span>
          <span>Bags</span>
          <span>Caps</span>
        </div>
        <div className="artifact-scrollbar" aria-hidden="true">
          <i />
        </div>
      </div>
    );
  }

  if (kind === "wishlist") {
    return (
      <div className="artifact artifact-saved">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 21s-8-4.9-8-10.4A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8 3.6C20 16.1 12 21 12 21z"
          />
        </svg>
        <div>
          <strong>Saved to wishlist</strong>
          <span className="artifact-foot">1 item waiting</span>
        </div>
      </div>
    );
  }

  return (
    <div className="artifact artifact-receipt">
      <div className="artifact-receipt-row">
        <span>Project 2504 blue denim</span>
        <strong>GHS 350</strong>
      </div>
      <div className="artifact-receipt-line" aria-hidden="true" />
      <div className="artifact-receipt-row artifact-receipt-done">
        <span>Order confirmed</span>
        <em aria-hidden="true">✓</em>
      </div>
      <span className="artifact-foot">the brand just got paid</span>
    </div>
  );
}

export default function StoryThread({ beats }: { beats: StoryBeat[] }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = ref.current;
    if (!list) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (!finePointer || reduced) return;

    const items = Array.from(list.querySelectorAll<HTMLLIElement>(".beat"));
    let frame = 0;
    let px = -9999;
    let py = -9999;

    const apply = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const inside =
        py > rect.top - EDGE &&
        py < rect.bottom + EDGE &&
        px > rect.left - EDGE &&
        px < rect.right + EDGE;

      list.style.setProperty("--active", inside ? "1" : "0");
      list.style.setProperty("--mx", `${px - rect.left}px`);
      list.style.setProperty("--my", `${py - rect.top}px`);

      for (const item of items) {
        const box = item.getBoundingClientRect();
        const cy = box.top + box.height / 2;
        const cx = box.left + box.width / 2;
        const near = Math.max(0, 1 - Math.abs(py - cy) / FALLOFF);
        item.style.setProperty("--near", near.toFixed(3));
        item.style.setProperty(
          "--tilt-x",
          (((py - cy) / box.height) * -7).toFixed(2)
        );
        item.style.setProperty(
          "--tilt-y",
          (((px - cx) / box.width) * 7).toFixed(2)
        );
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onPointerMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      schedule();
    };

    // scroll carries no coordinates — reuse the last known cursor position
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={ref} className="story-thread">
      <span className="story-glow" aria-hidden="true" />
      <span className="story-rail-node" aria-hidden="true" />

      {beats.map((beat) => (
        <li key={beat.chapter} className="beat">
          <div className="beat-text">
            <span className="beat-chapter">
              <em>{beat.chapter}</em> {beat.label}
            </span>
            <p className="beat-line">{beat.line}</p>
            <p className="beat-detail">{beat.detail}</p>
          </div>
          <div className="beat-artifact">
            <Artifact kind={beat.kind} />
          </div>
        </li>
      ))}
    </ol>
  );
}
