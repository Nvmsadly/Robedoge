/* ============================================================
   COMPONENT: Footer
   Design: Minimal dark footer with aurora logo, nav links, copyright
   ============================================================ */

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="py-12 border-t"
      style={{
        background: "oklch(0.08 0.018 265)",
        borderColor: "oklch(1 0 0 / 0.07)",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2"
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.18 195), oklch(0.62 0.22 290))",
                fontFamily: "'Space Grotesk', sans-serif",
                color: "oklch(0.09 0.02 265)",
              }}
            >
              R
            </div>
            <span
              className="text-base font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.85 0.005 265)" }}
            >
              RobeDoge <span className="aurora-text">Commissions</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm text-[oklch(0.52_0.015_265)] hover:text-[oklch(0.72_0.18_195)] transition-colors duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </nav>


        </div>

        {/* Aurora divider */}
        <div className="aurora-divider mt-8 opacity-40" />

        <p
          className="text-center text-xs text-[oklch(0.35_0.01_265)] mt-6"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Designed & crafted with passion — pushing the boundaries of digital aesthetics.
        </p>
      </div>
    </footer>
  );
}
