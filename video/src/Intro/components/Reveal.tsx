import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Entrada de un elemento: sube y aparece.
 * `delay` se cuenta en fotogramas desde el inicio de la escena.
 */
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  distance?: number;
}> = ({ children, delay = 0, distance = 36 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // damping alto = sin rebote, movimiento serio
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
    durationInFrames: 18,
  });

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * distance}px)`,
      }}
    >
      {children}
    </div>
  );
};
