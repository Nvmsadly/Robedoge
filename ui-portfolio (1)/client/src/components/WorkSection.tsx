/* ============================================================
   COMPONENT: WorkSection
   Design: Asymmetric project grid, glassmorphism cards, aurora tag badges,
   hover lift + glow, section fade-in on scroll
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

// Placeholder images - easily editable through the visual editor
const PROJECT1 = "/manus-storage/Group29_122276f3.png";
const PROJECT2 = "/manus-storage/Group28(1)_2a2f6af7.png";
const PROJECT3 = "/manus-storage/Group12(1)_b49b16c5.png";

const projects = [
  {
    id: 1,
    title: "Rebirth — Game UI",
    description:
      "A polished Roblox game UI featuring the Rebirth mechanic interface. Clean design with inventory slots, action buttons, and intuitive user flow for seamless gameplay experience.",
    tags: ["Roblox", "UI Design", "Game Mechanics"],
    image: PROJECT1,
    accent: "oklch(0.72 0.18 195)",
    featured: true,
  },
  {
    id: 2,
    title: "Codes — Redemption System UI",
    description:
      "A community-focused codes redemption interface for Roblox games. Features a clean input field for code entry and a prominent redeem button, designed to encourage player engagement and reward participation.",
    tags: ["Roblox", "UI Design", "Community"],
    image: PROJECT2,
    accent: "oklch(0.62 0.22 290)",
    featured: false,
  },
  {
    id: 3,
    title: "Shop — In-Game Store UI",
    description:
      "A vibrant and engaging in-game shop interface featuring exclusive items and limited-time offers. Designed with clear visual hierarchy and enticing product displays to maximize player engagement and monetization.",
    tags: ["Roblox", "UI Design", "Monetization"],
    image: PROJECT3,
    accent: "oklch(0.55 0.22 265)",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const handleCardClick = () => {
    window.open("https://discord.gg/SVqa7fz9gj", "_blank");
  };

  return (
    <div
      ref={cardRef}
      className="section-reveal group relative overflow-hidden rounded-2xl cursor-pointer"
      onClick={handleCardClick}
      style={{
        background: "oklch(0.12 0.025 265)",
        border: `1px solid ${hovered ? project.accent + "40" : "oklch(1 0 0 / 0.08)"}`,
        transition: "border-color 300ms ease, transform 250ms var(--ease-out), box-shadow 300ms ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 60px ${project.accent}20, 0 0 0 1px ${project.accent}20`
          : "0 4px 24px oklch(0 0 0 / 0.3)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    style={{ transform: hovered ? "scale(1.04)" : "scale(1)", minHeight: "250px" }}
                  />
        {/* Image overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, oklch(0.12 0.025 265) 100%)`,
          }}
        />
        {/* Hover shimmer */}
        {hovered && <div className="shimmer-line" />}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="tag-badge">Featured</span>
          </div>
        )}

        {/* External link icon */}
        <div
          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{
            background: "oklch(0 0 0 / 0.5)",
            backdropFilter: "blur(8px)",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.8)",
          }}
        >
          <ExternalLink size={14} color="oklch(0.85 0.005 265)" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full"
              style={{
                background: `${project.accent}15`,
                color: project.accent,
                border: `1px solid ${project.accent}30`,
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

                <h3
                  className="text-xl font-bold mb-2 text-[oklch(0.93_0.005_265)] cursor-pointer hover:text-[oklch(0.72_0.18_195)] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  title="Click to edit project title"
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-[oklch(0.62_0.015_265)] cursor-pointer hover:text-[oklch(0.70_0.015_265)] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  title="Click to edit project description"
                >
                  {project.description}
                </p>

        {/* View link */}
        <div
          className="flex items-center gap-1.5 mt-4 text-sm font-medium transition-all duration-200"
          style={{
            color: project.accent,
            opacity: hovered ? 1 : 0.6,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Get it on Discord
          <ArrowRight
            size={14}
            style={{
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 200ms var(--ease-out)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
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
    <section id="work" className="py-24 md:py-32" style={{ background: "oklch(0.09 0.02 265)" }}>
      <div className="container">
        {/* Section header */}
        <div ref={titleRef} className="section-reveal mb-16">
          <span
            className="tag-badge mb-4 inline-block"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Selected Work
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-[oklch(0.95_0.005_265)]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Recent{" "}
              <span className="aurora-text">Projects</span>
            </h2>
            <p
              className="text-[oklch(0.62_0.015_265)] max-w-sm text-sm leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              A curated selection of UI design work spanning mobile apps, web platforms,
              and SaaS products.
            </p>
          </div>
          <div className="aurora-divider mt-8" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
