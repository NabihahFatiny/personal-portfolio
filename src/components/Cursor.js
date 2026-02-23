import { useState, useEffect, useRef } from "react";

export const Cursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [smoothPos, setSmoothPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const posRef = useRef(pos);
  posRef.current = pos;

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Smooth follow loop for cute trailing effect
  useEffect(() => {
    if (!visible) return;
    let rafId;
    const update = () => {
      const target = posRef.current;
      setSmoothPos((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.18,
        y: prev.y + (target.y - prev.y) * 0.18,
      }));
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [visible]);

  return (
    <>
      <div
        className="cursor-arrow cursor-dot"
        style={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
      <div
        className="cursor-arrow cursor-trail"
        style={{ left: smoothPos.x, top: smoothPos.y, opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      >
        ➜
      </div>
    </>
  );
};
