import React, { useEffect, useState } from "react";

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
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => handleClick(e, "#home")}
        className="navbar-logo"
      >
        A·B
      </a>

      {/* Desktop links */}
      <ul className="navbar-links">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`navbar-link ${activeLink === href ? "navbar-link--active" : ""}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleClick(e, href)}
            className={`mobile-link ${activeLink === href ? "mobile-link--active" : ""}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
