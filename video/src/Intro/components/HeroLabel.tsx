import React from "react";
import { COLORS, TEXT_SHADOW } from "../theme";
import { fontFamily } from "../fonts";

/** El rotulo grande: el "texto en pantalla" de tu guion. */
export const HeroLabel: React.FC<{
  children: React.ReactNode;
  size?: number;
  color?: string;
  uppercase?: boolean;
}> = ({ children, size = 82, color = COLORS.accent, uppercase = false }) => (
  <div
    style={{
      fontFamily,
      fontWeight: 800,
      fontSize: size,
      lineHeight: 1.05,
      letterSpacing: uppercase ? "0.02em" : "-0.03em",
      textTransform: uppercase ? "uppercase" : "none",
      color,
      textShadow: TEXT_SHADOW,
    }}
  >
    {children}
  </div>
);
