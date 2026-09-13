const particles = [
  { left: "6%", top: "12%", size: 3, duration: 14, delay: -2, drift: 24 },
  { left: "13%", top: "68%", size: 2, duration: 11, delay: -6, drift: -18 },
  { left: "21%", top: "34%", size: 4, duration: 17, delay: -1, drift: 30 },
  { left: "29%", top: "82%", size: 2, duration: 10, delay: -4, drift: -22 },
  { left: "37%", top: "18%", size: 3, duration: 15, delay: -8, drift: 20 },
  { left: "44%", top: "58%", size: 2, duration: 12, delay: -3, drift: -26 },
  { left: "52%", top: "8%", size: 3, duration: 16, delay: -9, drift: 18 },
  { left: "59%", top: "74%", size: 4, duration: 13, delay: -5, drift: -30 },
  { left: "67%", top: "28%", size: 2, duration: 11, delay: -7, drift: 24 },
  { left: "74%", top: "88%", size: 3, duration: 18, delay: -2, drift: -16 },
  { left: "81%", top: "45%", size: 2, duration: 10, delay: -10, drift: 28 },
  { left: "88%", top: "16%", size: 4, duration: 15, delay: -4, drift: -20 },
  { left: "93%", top: "64%", size: 3, duration: 12, delay: -6, drift: 22 },
  { left: "17%", top: "6%", size: 2, duration: 14, delay: -11, drift: -24 },
  { left: "48%", top: "94%", size: 3, duration: 13, delay: -1, drift: 16 },
  { left: "63%", top: "52%", size: 2, duration: 17, delay: -8, drift: -28 },
] as const;

export default function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={
            {
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--duration": `${p.duration}s`,
              "--delay": `${p.delay}s`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
