import { useEffect, useRef } from "react";

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]=/\\@#$%&*";

const CyberBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix rain canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -100);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(7, 10, 15, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Brighter head, dimmer tail
        const alpha = 0.12 + Math.random() * 0.1;
        ctx.fillStyle = `hsla(180, 85%, 50%, ${alpha})`;
        ctx.fillText(char, x, y);

        // Occasionally make a char brighter
        if (Math.random() > 0.97) {
          ctx.fillStyle = `hsla(180, 85%, 70%, 0.4)`;
          ctx.fillText(char, x, y);
        }

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.05 + Math.random() * 0.03;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Particles + columns
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements: HTMLDivElement[] = [];

    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.style.position = "absolute";
      p.style.width = `${2 + Math.random() * 3}px`;
      p.style.height = p.style.width;
      p.style.borderRadius = "50%";
      p.style.background = `hsl(180 85% 50% / ${0.1 + Math.random() * 0.2})`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.animation = `float-particle ${3 + Math.random() * 5}s ease-in-out infinite`;
      p.style.animationDelay = `${Math.random() * 4}s`;
      container.appendChild(p);
      elements.push(p);
    }

    return () => {
      elements.forEach((e) => e.remove());
    };
  }, []);

  return (
    <div className="cyber-bg" ref={containerRef}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.7 }}
      />
      <div className="cyber-grid" />
      
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />
    </div>
  );
};

export default CyberBackground;
