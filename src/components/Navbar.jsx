import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Gallery",  href: "#gallery"  },
  { label: "Featured", href: "#featured" },
  { label: "Contact",  href: "#contact"  },
];

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [activeLink,  setActiveLink]  = useState("#home");
  const [menuOpen,    setMenuOpen]    = useState(false);

  /* ── Scroll shadow + active section tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Find which section is in view
      const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
      let current = "#home";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = `#${id}`;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Smooth scroll handler ── */
  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.getElementById(href.replace("#", ""));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="text-2xl font-serif font-bold tracking-tight text-primary hover:text-secondary transition-colors"
        >
          AJIT<span className="text-secondary">.</span>ARTS
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`relative font-sans text-sm font-medium transition-all duration-300 hover:text-secondary ${
                  activeLink === href 
                    ? "text-secondary" 
                    : "text-primary/70"
                }`}
              >
                {label}
                {activeLink === href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-secondary rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleClick(e, href)}
            className={`font-serif text-4xl font-semibold transition-colors ${
              activeLink === href ? "text-secondary" : "text-primary/50"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
