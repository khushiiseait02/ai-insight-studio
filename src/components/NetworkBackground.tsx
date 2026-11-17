import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, active: false };
    const particles: Particle[] = [];
    let frame = 0;
    let pointerTimeout: number | undefined;
    let width = 0;
    let height = 0;

    const scheduleDraw = () => {
      if (!frame) frame = window.requestAnimationFrame(draw);
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.7);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(95, Math.max(32, Math.round((width * height) / 15000)));
      particles.length = 0;
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: 1 + Math.random() * 0.7,
        });
      }
      scheduleDraw();
    };

    function draw() {
      frame = 0;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (pointer.active) {
            const dx = pointer.x - particle.x;
            const dy = pointer.y - particle.y;
            const distance = Math.hypot(dx, dy);
            if (distance > 0 && distance < 125) {
              const strength = (1 - distance / 125) * 0.003;
              particle.vx += (dx / distance) * strength;
              particle.vy += (dy / distance) * strength;
            }
          }

          particle.vx *= 0.999;
          particle.vy *= 0.999;
          if (particle.x < 0) particle.x = width;
          if (particle.x > width) particle.x = 0;
          if (particle.y < 0) particle.y = height;
          if (particle.y > height) particle.y = 0;
        }
      });

      particles.forEach((particle, index) => {
        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const distance = Math.hypot(particle.x - next.x, particle.y - next.y);
          if (distance < 118) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(next.x, next.y);
            context.strokeStyle = `rgba(166, 78, 55, ${(1 - distance / 118) * 0.2})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        const pointerDistance = pointer.active
          ? Math.hypot(pointer.x - particle.x, pointer.y - particle.y)
          : Infinity;
        const isHovered = pointerDistance < 34;
        if (pointerDistance < 125) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(pointer.x, pointer.y);
          context.strokeStyle = `rgba(182, 91, 63, ${(1 - pointerDistance / 125) * 0.5})`;
          context.lineWidth = isHovered ? 1.2 : 0.8;
          context.stroke();
        }

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius + (isHovered ? 1.8 : 0),
          0,
          Math.PI * 2,
        );
        context.fillStyle = isHovered
          ? "rgba(255, 207, 174, 0.95)"
          : "rgba(182, 91, 63, 0.55)";
        if (isHovered) {
          context.shadowColor = "rgba(166, 78, 55, 0.65)";
          context.shadowBlur = 14;
        }
        context.fill();
        context.shadowBlur = 0;
      });

      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    }

    const updatePointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      if (pointerTimeout !== undefined) window.clearTimeout(pointerTimeout);
      scheduleDraw();
    };

    const releasePointer = () => {
      pointerTimeout = window.setTimeout(() => {
        pointer.active = false;
        scheduleDraw();
      }, 900);
    };

    const leaveWindow = () => {
      pointer.active = false;
      scheduleDraw();
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("pointerdown", updatePointer, { passive: true });
    window.addEventListener("pointerup", releasePointer, { passive: true });
    window.addEventListener("pointerleave", leaveWindow);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerdown", updatePointer);
      window.removeEventListener("pointerup", releasePointer);
      window.removeEventListener("pointerleave", leaveWindow);
      if (pointerTimeout !== undefined) window.clearTimeout(pointerTimeout);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
