import React from "react";
import { AbsoluteFill } from "remotion";
import { LAYOUT } from "../theme";
import type { Variant } from "../types";

/**
 * Coloca el contenido de cada escena.
 * - "completo": centrado verticalmente, aprovecha todo el cuadro.
 * - "overlay": anclado abajo, por encima de la zona de botones de la app,
 *   para que no te tape la cara.
 */
export const Stack: React.FC<{
  children: React.ReactNode;
  variant: Variant;
  opacity: number;
}> = ({ children, variant, opacity }) => {
  if (variant === "overlay") {
    return (
      <AbsoluteFill style={{ opacity }}>
        <div
          style={{
            position: "absolute",
            left: LAYOUT.side,
            right: LAYOUT.side,
            bottom: LAYOUT.bottomSafe,
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {children}
        </div>
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill
      style={{
        opacity,
        justifyContent: "center",
        padding: `0 ${LAYOUT.side}px`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
        {children}
      </div>
    </AbsoluteFill>
  );
};
