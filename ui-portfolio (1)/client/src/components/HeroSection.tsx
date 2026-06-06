/* ============================================================
   COMPONENT: HeroSection
   Design: Full-bleed deep-space nebula background, animated typewriter headline,
   glassmorphism stats bar, floating particle field, aurora CTA button
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663735650790/THvrM47NgCA82Bqd4iJ7kd/hero-bg-HfsCrw5QNhEpiQTemshc4k.webp";

const TYPEWRITER_WORDS = ["Dreams", "Visions", "Ideas", "Games", "Worlds"];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function Particles() {
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 4 + 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.id % 3 === 0
              ? "oklch(0.72 0.18 195)"
              : p.id % 3 === 1
              ? "oklch(0.62 0.22 290)"
              : "oklch(0.85 0.005 265)",
            animation: `float-particle ${p.duration}s ${p.delay}s ease-in-out infinite`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const typed = useTypewriter(TYPEWRITER_WORDS);
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollDown = () => {
    const work = document.querySelector("#work");
    if (work) work.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(0.09 0.02 265)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.45,
        }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.09 0.02 265 / 0.3) 0%, oklch(0.09 0.02 265 / 0.6) 60%, oklch(0.09 0.02 265) 100%)",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="tag-badge flex items-center gap-1.5">
              <Sparkles size={10} />
              Available for projects
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="block text-[oklch(0.95_0.005_265)]">Making</span>
            <span className="block aurora-text min-h-[1.1em]">
              {typed}
              <span
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "0.85em",
                  background: "oklch(0.72 0.18 195)",
                  marginLeft: "4px",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
            <span className="block text-[oklch(0.95_0.005_265)]">Come True</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl text-[oklch(0.68_0.015_265)] max-w-xl mb-10 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            I design futuristic, immersive digital experiences — from mobile apps to
            complex dashboards — that feel like they're from the future.
          </p>



          {/* Stats bar */}
          <div className="glass-card inline-flex flex-wrap gap-8 px-8 py-5">
            {[
              { value: "1 yr", label: "Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl font-bold aurora-text"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-[oklch(0.60_0.015_265)] mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[oklch(0.55_0.015_265)] hover:text-[oklch(0.72_0.18_195)] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>
          Scroll
        </span>
        <ArrowDown size={16} style={{ animation: "scroll-bounce 2s ease-in-out infinite" }} />
      </button>
    </section>
  );
}
