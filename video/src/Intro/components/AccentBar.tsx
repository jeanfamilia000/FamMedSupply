import React from "react";
import { COLORS } from "../theme";

/** Barra corta de color: separa la narracion del rotulo. */
export const AccentBar: React.FC<{ width?: number; color?: string }> = ({
  width = 96,
  color = COLORS.accent,
}) => (
  <div
    style={{
      width,
      height: 8,
      borderRadius: 4,
      background: color,
      boxShadow: `0 0 28px ${color}80`,
    }}
  />
);
