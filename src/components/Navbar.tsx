import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "WHY US", href: "#why-us" },
  { label: "PROPERTIES", href: "#properties" },
  { label: 'Q & A', href: '#qna' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/20 ${
        scrolled ? "bg-[#0d0d0d]/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-24 h-16 flex items-center justify-between">
        {/* Logo + Name */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-2"
        >
          <span
            className="font-black leading-none"
            style={{
              fontSize: "22px",
              background:
                "linear-gradient(180deg, #f5e27a 0%, #c8a96e 40%, #8b6914 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "Georgia, serif",
              letterSpacing: "-1px",
            }}
          >
            LH
          </span>
          <span
            className="tracking-[4px] text-sm font-black"
            style={{
              fontFamily: "Georgia, serif",
              background:
                "linear-gradient(180deg, #f5e27a 0%, #c8a96e 40%, #8b6914 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            LATENT
          </span>
          <span
            className="tracking-[4px] text-sm font-black"
            style={{
              fontFamily: "Georgia, serif",
              background:
                "linear-gradient(180deg, #f5e27a 0%, #c8a96e 40%, #8b6914 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            HOMES
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative text-white/70 hover:text-white text-[11px] tracking-[2px] transition-all duration-300 py-1 group"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {link.label}
              {/* White underline on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* CONTACT US — pill button */}
          <a
            href="#inquiry"
            onClick={(e) => scrollToSection(e, '#inquiry')}
            className="text-[#0d0d0d] bg-white text-[10px] tracking-[2px] font-semibold hover:bg-white/80 transition-all duration-300 rounded-full"
            style={{
              fontFamily: 'Georgia, serif',
              padding: '10px 28px',
              whiteSpace: 'nowrap',
            }}
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d]/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white/60 hover:text-white text-[11px] tracking-[2px] transition-all duration-300 py-1 border-b border-white/5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inquiry"
            onClick={(e) => scrollToSection(e, "#inquiry")}
            className="text-white text-[11px] tracking-[2px] px-5 py-2.5 border border-white/40 text-center hover:bg-white hover:text-[#0d0d0d] transition-all duration-300"
            style={{ fontFamily: "Georgia, serif" }}
          >
            CONTACT US
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
