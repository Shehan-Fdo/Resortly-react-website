import { useEffect, useState } from "react";

const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];

const galleryConfigs = [
  { top: 0,    left: 40,   right: null, bottom: null, rotate: -3, zIndex: 10 },
  { top: 48,   left: null, right: 40,   bottom: null, rotate: 4,  zIndex: 20 },
  { top: null, left: 20,   right: null, bottom: 40,   rotate: 2,  zIndex: 0  },
  { top: null, left: null, right: 20,   bottom: 0,    rotate: -2, zIndex: 30 },
];

const GallerySlider = ({ imageIndex, direction }) => {
  const [current, setCurrent] = useState(imageIndex);
  const [next, setNext] = useState(null);
  const [phase, setPhase] = useState("idle");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (imageIndex === current) return;
    setNext(imageIndex);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setPhase("animating"));
    });
  }, [imageIndex, current]);

  const handleTransitionEnd = () => {
    setCurrent(next);
    setNext(null);
    setPhase("idle");
  };

  const outX = direction === "left" ? "-110%" : "110%";
  const inX  = direction === "left" ? "110%"  : "-110%";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        height: "200px",
        overflow: "hidden",
        borderRadius: "1.5rem",
        position: "relative",
        boxShadow: hovered
          ? "0 24px 64px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,255,255,0.18)"
          : "0 8px 28px rgba(0,0,0,0.4)",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
        cursor: "pointer",
      }}
    >
      {/* Current image — slides out */}
      <img
        src={images[current]}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: phase === "animating" ? `translateX(${outX})` : "translateX(0)",
          transition: phase === "animating" ? "transform 0.6s cubic-bezier(0.77,0,0.18,1)" : "none",
        }}
      />

      {/* Next image — slides in */}
      {next !== null && (
        <img
          src={images[next]}
          onTransitionEnd={handleTransitionEnd}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: phase === "animating" ? "translateX(0)" : `translateX(${inX})`,
            transition: phase === "animating" ? "transform 0.6s cubic-bezier(0.77,0,0.18,1)" : "none",
          }}
        />
      )}

      {/* Hover shimmer overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.07) 50%, transparent 80%)"
            : "transparent",
          transition: "background 0.4s ease",
          pointerEvents: "none",
          borderRadius: "1.5rem",
        }}
      />
    </div>
  );
};

export const Gallery = () => {
  const [slots, setSlots] = useState(() =>
    [...images.keys()].sort(() => Math.random() - 0.5)
  );
  const [directions, setDirections] = useState(() =>
    galleryConfigs.map(() => (Math.random() > 0.5 ? "left" : "right"))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const slotToChange = Math.floor(Math.random() * galleryConfigs.length);
      const usedSet = new Set(slots);
      const available = images.map((_, i) => i).filter((i) => !usedSet.has(i));
      const candidates =
        available.length > 0
          ? available
          : images.map((_, i) => i).filter((i) => i !== slots[slotToChange]);

      const nextImg = candidates[Math.floor(Math.random() * candidates.length)];
      const newDir = Math.random() > 0.5 ? "left" : "right";

      setDirections((prev) => {
        const d = [...prev];
        d[slotToChange] = newDir;
        return d;
      });

      setSlots((prev) => {
        const s = [...prev];
        s[slotToChange] = nextImg;
        return s;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [slots]);

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "900px", height: "500px", margin: "0 auto" }}>
      {galleryConfigs.map((cfg, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "50%",
            top:    cfg.top    ?? undefined,
            left:   cfg.left   ?? undefined,
            right:  cfg.right  ?? undefined,
            bottom: cfg.bottom ?? undefined,
            transform: `rotate(${cfg.rotate}deg)`,
            zIndex: cfg.zIndex,
          }}
        >
          <GallerySlider imageIndex={slots[i]} direction={directions[i]} />
        </div>
      ))}
    </div>
  );
};