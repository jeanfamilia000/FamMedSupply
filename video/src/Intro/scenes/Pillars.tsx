import React from "react";
import { Reveal } from "../components/Reveal";
import { Stack } from "../components/Stack";
import { Narration } from "../components/Narration";
import { useSceneOpacity } from "../useSceneOpacity";
import { PILLAR_OFFSETS, TIMELINE } from "../timeline";
import { COLORS, TEXT_SHADOW } from "../theme";
import { fontFamily } from "../fonts";
import type { Variant } from "../types";

const PILLARS = ["Acciones", "Futuros NASDAQ", "Inteligencia Artificial"];

const Pillar: React.FC<{ label: string }> = ({ label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
    <div
      style={{
        width: 14,
        height: 14,
        borderRadius: 7,
        background: COLORS.accent,
        boxShadow: `0 0 20px ${COLORS.accent}`,
        flexShrink: 0,
      }}
    />
    <span
      style={{
        fontFamily,
        fontWeight: 800,
        fontSize: 50,
        letterSpacing: "0.01em",
        textTransform: "uppercase",
        color: COLORS.ink,
        textShadow: TEXT_SHADOW,
      }}
    >
      {label}
    </span>
  </div>
);

/** 12–28 s · QUÉ VAS A ENCONTRAR AQUÍ */
export const Pillars: React.FC<{ variant: Variant }> = ({ variant }) => {
  const opacity = useSceneOpacity(TIMELINE.pillars.duration);

  return (
    <Stack variant={variant} opacity={opacity}>
      {variant === "completo" ? (
        <Reveal>
          <Narration size={46}>
            Aquí voy a hacer lo mismo que hago en el aula: explicar. Para que lo
            entiendas, no para que lo copies.
          </Narration>
        </Reveal>
      ) : null}

      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        {PILLARS.map((label, i) => (
          <Reveal key={label} delay={PILLAR_OFFSETS[i]} distance={28}>
            <Pillar label={label} />
          </Reveal>
        ))}
      </div>
    </Stack>
  );
};
