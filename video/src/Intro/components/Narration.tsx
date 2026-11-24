import React from "react";
import { COLORS, TEXT_SHADOW } from "../theme";
import { fontFamily } from "../fonts";

/**
 * Lo que dices en voz alta, escrito en pantalla.
 * Solo aparece en la version "completo": en el overlay tu voz ya lo dice.
 */
export const Narration: React.FC<{ children: React.ReactNode; size?: number }> = ({
  children,
  size = 54,
}) => (
  <p
    style={{
      fontFamily,
      fontWeight: 600,
      fontSize: size,
      lineHeight: 1.32,
      letterSpacing: "-0.015em",
      color: COLORS.ink,
      textShadow: TEXT_SHADOW,
      margin: 0,
      textWrap: "balance",
    }}
  >
    {children}
  </p>
);
