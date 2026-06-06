/* ============================================================
   COMPONENT: Navbar
   Design: Glassmorphism top nav, aurora logo accent, smooth scroll links
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.09 0.02 265 / 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.08)" : "none",
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.18 195), oklch(0.62 0.22 290))",
                fontFamily: "'Space Grotesk', sans-serif",
                color: "oklch(0.09 0.02 265)",
              }}
            >
              R
            </div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              RobeDoge <span className="aurora-text">Commissions</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-medium transition-colors duration-200 hover:text-[oklch(0.72_0.18_195)] text-[oklch(0.75_0.01_265)]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNav("#contact")}
              className="glow-btn px-5 py-2 rounded-lg text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.18 195), oklch(0.62 0.22 290))",
                color: "oklch(0.09 0.02 265)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden glass-card mx-4 mb-4 p-6"
          style={{ background: "oklch(0.11 0.025 265 / 0.95)" }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left text-base font-medium text-[oklch(0.85_0.01_265)] hover:text-[oklch(0.72_0.18_195)] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav("#contact")}
                className="w-full glow-btn px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
                style={{
                  background: "linear-gradient(135deg, oklch(0.72 0.18 195), oklch(0.62 0.22 290))",
                  color: "oklch(0.09 0.02 265)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
