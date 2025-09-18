import React from "react";
import { cn } from "../lib/utils";

export function AuroraTextEffect({
  text = "Hi, I'm Sherif Emad",
  className,
  textClassName,
  fontSize = "3rem",
  colors = ["#06b6d4", "#facc15", "#E7D1BB", "#a855f7"], // cyan, yellow, green, purple
  animationSpeed = "8s",
}) {
  const keyframes = `
    @keyframes aurora-gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <div
      className={cn("flex items-center justify-center text-center", className)}
    >
      <style>{keyframes}</style>
      <h2
        className={cn(
          "font-extrabold tracking-tight bg-clip-text text-transparent",
          textClassName
        )}
        style={{
          fontSize,
          backgroundImage: `linear-gradient(270deg, ${colors.join(", ")})`,
          backgroundSize: "600% 600%",
          animation: `aurora-gradient ${animationSpeed} ease infinite`,
        }}
      >
        {text}
      </h2>
    </div>
  );
}
