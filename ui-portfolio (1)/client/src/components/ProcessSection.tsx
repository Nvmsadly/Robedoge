/* ============================================================
   COMPONENT: ProcessSection
   Design: Horizontal numbered steps with aurora connector lines,
   glassmorphism step cards, staggered reveal
   ============================================================ */
import { useEffect, useRef } from "react";
import { Search, Lightbulb, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Deep-dive into your goals, users, and competitors. I map out the problem space before touching a single frame.",
    accent: "oklch(0.72 0.18 195)",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Ideate",
    description:
      "Rapid wireframing and concept exploration — testing multiple directions before committing to the strongest solution.",
    accent: "oklch(0.62 0.22 290)",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "High-fidelity screens, polished components, and micro-interactions — every detail considered and crafted.",
    accent: "oklch(0.55 0.22 265)",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deliver",
    description:
      "Developer-ready Figma files, design tokens, and a complete handoff package so your team can build with confidence.",
    accent: "oklch(0.70 0.15 220)",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".process-card");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => {
            setTimeout(() => (card as HTMLElement).classList.add("visible"), i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: "oklch(0.10 0.022 265)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag-badge mb-4 inline-block">How I Work</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[oklch(0.95_0.005_265)] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My Design{" "}
            <span className="aurora-text">Process</span>
          </h2>
          <p
            className="text-[oklch(0.62_0.015_265)] max-w-md mx-auto text-base leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            A structured, collaborative approach that turns ambiguous briefs into
            polished, ship-ready designs.
          </p>
          <div className="aurora-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.72 0.18 195 / 0.3), oklch(0.62 0.22 290 / 0.5), oklch(0.55 0.22 265 / 0.5), oklch(0.70 0.15 220 / 0.3))",
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="process-card section-reveal relative"
              >
                {/* Number + icon circle */}
                <div className="flex flex-col items-center mb-6">
                  <div
                    className="relative w-24 h-24 rounded-full flex items-center justify-center mb-0"
                    style={{
                      background: `radial-gradient(circle, ${step.accent}20, ${step.accent}08)`,
                      border: `2px solid ${step.accent}40`,
                      boxShadow: `0 0 24px ${step.accent}20`,
                    }}
                  >
                    <Icon size={28} style={{ color: step.accent }} />
                    {/* Step number */}
                    <span
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: step.accent,
                        color: "oklch(0.09 0.02 265)",
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div
                  className="glass-card p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: `${step.accent}20`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${step.accent}40`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${step.accent}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${step.accent}20`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      color: step.accent,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-[oklch(0.62_0.015_265)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
