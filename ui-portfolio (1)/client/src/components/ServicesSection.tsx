/* ============================================================
   COMPONENT: ServicesSection
   Design: Aurora-gradient icon cards, glassmorphism panels, staggered reveal
   ============================================================ */
import { useEffect, useRef } from "react";
import { Zap } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Roblox",
    description:
      "Custom Roblox game UI design and development — creating immersive, user-friendly interfaces that enhance player experience and engagement.",
    accent: "oklch(0.72 0.18 195)",
    gradient: "linear-gradient(135deg, oklch(0.72 0.18 195 / 0.15), oklch(0.72 0.18 195 / 0.03))",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="section-reveal group relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
      style={{
        background: service.gradient,
        border: "1px solid oklch(1 0 0 / 0.08)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${service.accent}35`;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${service.accent}15`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(1 0 0 / 0.08)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `${service.accent}20`, border: `1px solid ${service.accent}30` }}
      >
        <Icon size={22} style={{ color: service.accent }} />
      </div>

      <h3
        className="text-lg font-bold mb-2 text-[oklch(0.93_0.005_265)]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm leading-relaxed text-[oklch(0.62_0.015_265)]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {service.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
      />
    </div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
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
      id="services"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.10 0.022 265)" }}
    >
      <div className="container">
        {/* Section header */}
        <div ref={titleRef} className="section-reveal mb-16 text-center">
          <span className="tag-badge mb-4 inline-block">What I Do</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[oklch(0.95_0.005_265)] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Services I{" "}
            <span className="aurora-text">Offer</span>
          </h2>
          <p
            className="text-[oklch(0.62_0.015_265)] max-w-lg mx-auto text-base leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From concept to polished deliverable — I cover the full spectrum of UI design
            to help your product stand out.
          </p>
          <div className="aurora-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
