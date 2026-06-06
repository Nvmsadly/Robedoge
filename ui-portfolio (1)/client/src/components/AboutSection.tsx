/* ============================================================
   COMPONENT: AboutSection
   Design: Two-column layout — holographic orb left, bio + skill bars right
   Aurora animated skill progress bars, glassmorphism tool badges
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const ABOUT_ORB =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663735650790/THvrM47NgCA82Bqd4iJ7kd/about-visual-dyKUSxUcNs4BTTz3XwdL2t.webp";

const skills = [
  { label: "UI Design (Figma)", value: 96, accent: "oklch(0.72 0.18 195)" },
  { label: "Mobile App Design", value: 92, accent: "oklch(0.62 0.22 290)" },
  { label: "Web UI / Landing Pages", value: 90, accent: "oklch(0.55 0.22 265)" },
  { label: "Design Systems", value: 85, accent: "oklch(0.70 0.15 220)" },
  { label: "Prototyping & Animation", value: 88, accent: "oklch(0.65 0.20 310)" },
];

const tools = [
  "Figma", "Adobe XD", "Framer", "Protopie",
  "Illustrator", "Photoshop", "Spline", "Lottie",
];

function SkillBar({ skill, visible }: { skill: typeof skills[0]; visible: boolean }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span
          className="text-sm font-medium text-[oklch(0.82_0.01_265)]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {skill.label}
        </span>
        <span
          className="text-xs font-bold"
          style={{ color: skill.accent, fontFamily: "'Space Mono', monospace" }}
        >
          {skill.value}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "oklch(1 0 0 / 0.08)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: visible ? `${skill.value}%` : "0%",
            background: `linear-gradient(90deg, ${skill.accent}, ${skill.accent}80)`,
            transitionTimingFunction: "var(--ease-out)",
            boxShadow: `0 0 8px ${skill.accent}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: "oklch(0.09 0.02 265)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Orb visual */}
          <div
            className="relative flex items-center justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 700ms var(--ease-out), transform 700ms var(--ease-out)",
            }}
          >
            {/* Glow ring */}
            <div
              className="absolute w-80 h-80 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.72 0.18 195 / 0.12) 0%, transparent 70%)",
              }}
            />
            <img
              src={ABOUT_ORB}
              alt="Holographic design orb"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full"
              style={{
                boxShadow:
                  "0 0 60px oklch(0.72 0.18 195 / 0.25), 0 0 120px oklch(0.62 0.22 290 / 0.15)",
              }}
            />

            {/* Floating badge — top right */}
            <div
              className="absolute top-4 right-4 md:top-8 md:right-0 glass-card px-4 py-3 text-center"
              style={{ minWidth: "100px" }}
            >
              <div
                className="text-2xl font-bold aurora-text"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                50+
              </div>
              <div
                className="text-xs text-[oklch(0.58_0.015_265)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Projects
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div
              className="absolute bottom-4 left-4 md:bottom-8 md:left-0 glass-card px-4 py-3 text-center"
              style={{ minWidth: "100px" }}
            >
              <div
                className="text-2xl font-bold aurora-text"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                4 yrs
              </div>
              <div
                className="text-xs text-[oklch(0.58_0.015_265)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Experience
              </div>
            </div>
          </div>

          {/* Right — Bio + skills */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 700ms 150ms var(--ease-out), transform 700ms 150ms var(--ease-out)",
            }}
          >
            <span className="tag-badge mb-4 inline-block">About Me</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[oklch(0.95_0.005_265)] mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Designing the{" "}
              <span className="aurora-text">Future</span>,<br />
              One Pixel at a Time
            </h2>
            <p
              className="text-[oklch(0.65_0.015_265)] leading-relaxed mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I'm a UI designer with 4+ years of experience crafting digital products that
              blend cutting-edge aesthetics with intuitive usability. My work spans mobile
              apps, SaaS platforms, and e-commerce — always pushing the visual boundary
              while keeping the user at the center.
            </p>
            <p
              className="text-[oklch(0.65_0.015_265)] leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I believe great UI design is the intersection of art and engineering — where
              every interaction feels inevitable, every screen feels crafted, and every
              product feels alive.
            </p>

            {/* Skill bars */}
            <div className="mb-8">
              {skills.map((skill) => (
                <SkillBar key={skill.label} skill={skill} visible={visible} />
              ))}
            </div>

            {/* Tools */}
            <div>
              <p
                className="text-xs uppercase tracking-widest text-[oklch(0.50_0.015_265)] mb-3"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Tools & Software
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-lg text-sm font-medium text-[oklch(0.80_0.01_265)]"
                    style={{
                      background: "oklch(1 0 0 / 0.06)",
                      border: "1px solid oklch(1 0 0 / 0.10)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
