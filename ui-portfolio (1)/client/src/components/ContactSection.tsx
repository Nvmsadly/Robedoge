/* ============================================================
   COMPONENT: ContactSection
   Design: Two-column — left info panel with aurora accents, right glassmorphism form
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Mail, MessageSquare, Twitter, Linkedin, Dribbble } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Discord",
    value: "robedogett",
    accent: "oklch(0.72 0.18 195)",
  },
  {
    icon: MessageSquare,
    label: "Response Time",
    value: "Within 24 hours",
    accent: "oklch(0.62 0.22 290)",
  },
];

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Dribbble, label: "Dribbble", href: "#" },
];

export default function ContactSection() {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);



  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: "oklch(0.09 0.02 265)" }}
    >
      <div className="container">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)",
          }}
        >
          <span className="tag-badge mb-4 inline-block">Get In Touch</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[oklch(0.95_0.005_265)] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Start Your{" "}
            <span className="aurora-text">Project</span>
          </h2>
          <p
            className="text-[oklch(0.62_0.015_265)] max-w-md mx-auto text-base leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Have a project in mind? I'd love to hear about it. Let's build something
            extraordinary together.
          </p>
          <div className="aurora-divider mt-8 max-w-xs mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact info panel */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 700ms 100ms var(--ease-out), transform 700ms 100ms var(--ease-out)",
            }}
          >
            {/* Availability card */}
            <div
              className="glass-card p-6"
              style={{ borderColor: "oklch(0.72 0.18 195 / 0.2)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: "oklch(0.72 0.18 195)",
                    boxShadow: "0 0 8px oklch(0.72 0.18 195 / 0.8)",
                    animation: "blink 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="text-sm font-semibold text-[oklch(0.72_0.18_195)]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Available for Work
                </span>
              </div>
              <p
                className="text-sm text-[oklch(0.62_0.015_265)] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Currently accepting new UI design projects. Typical turnaround is 1–3 weeks
                depending on scope.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="glass-card p-4 flex items-center gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${item.accent}15`,
                        border: `1px solid ${item.accent}25`,
                      }}
                    >
                      <Icon size={18} style={{ color: item.accent }} />
                    </div>
                    <div>
                      <p
                        className="text-xs text-[oklch(0.50_0.015_265)] mb-0.5"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm font-medium text-[oklch(0.85_0.01_265)]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>


        </div>
      </div>
    </section>
  );
}
