import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home",      href: "#home"      },
  { label: "Rooms",     href: "#rooms"     },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact",   href: "#contact"   },
];

export const Navbar = () => {
  const [active,    setActive]    = useState("home");
  const [hovered,   setHovered]   = useState(null);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [mobileHov, setMobileHov] = useState(null);

  // Lock body scroll when side menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const displayActive       = hovered   ?? active;
  const displayActiveMobile = mobileHov ?? active;

  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 md:px-20 py-4">
        <h1 className="text-2xl font-black text-white">Resorty</h1>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center rounded-4xl bg-white/5 px-3 py-2 ring-1 ring-white/10 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const id       = item.href.slice(1);
            const isActive = displayActive === id;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActive(id)}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  rounded-4xl px-5 py-3 capitalize transition-all duration-200
                  ${isActive
                    ? "bg-white text-black ring-4 ring-white"
                    : "text-white hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button className="hidden md:block rounded-4xl bg-white/5 px-6 py-3 text-white ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white hover:text-black">
          Sign in
        </button>

        {/* ── Hamburger (mobile only) ── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center gap-1.25 w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/15"
        >
          {/* Three bars that animate into an X */}
          <span
            className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 origin-center
              ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200
              ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 origin-center
              ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}`}
          />
        </button>
      </header>

      {/* ── Backdrop ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ── Side drawer ── */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-72 flex flex-col
          bg-white/5 ring-1 ring-white/10 backdrop-blur-xl
          transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="text-xl font-black text-white">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white transition hover:bg-white/15"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-2 p-4 flex-1">
          {NAV_ITEMS.map((item) => {
            const id       = item.href.slice(1);
            const isActive = displayActiveMobile === id;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(id)}
                onMouseEnter={() => setMobileHov(id)}
                onMouseLeave={() => setMobileHov(null)}
                className={`
                  rounded-2xl px-5 py-4 capitalize transition-all duration-200 text-base font-medium
                  ${isActive
                    ? "bg-white text-black ring-4 ring-white"
                    : "text-white hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Sign in at the bottom */}
        <div className="p-4 border-t border-white/10">
          <button className="w-full rounded-2xl bg-white/5 px-6 py-3 text-white ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white hover:text-black">
            Sign in
          </button>
        </div>
      </aside>
    </>
  );
};