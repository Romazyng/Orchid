"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let dots: { x: number; y: number; speed: number; radius: number }[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDots();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function createDots() {
      dots = [];
      const numDots = Math.floor(window.innerWidth / 15);
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          speed: 0.2 + Math.random() * 0.2,
          radius: 1 + Math.random() * 2,
        });
      }
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      

      for (let dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();

        dot.y += dot.speed;
        if (dot.y > canvas.height) {
          dot.y = 0;
          dot.x = Math.random() * canvas.width;
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[-1] bg-black" />;
}
