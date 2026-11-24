import React from "react";
import { useCurrentFrame } from "remotion";
import { Reveal } from "../components/Reveal";
import { Stack } from "../components/Stack";
import { HeroLabel } from "../components/HeroLabel";
import { Narration } from "../components/Narration";
import { useSceneOpacity } from "../useSceneOpacity";
import { TIMELINE } from "../timeline";
import { COLORS } from "../theme";
import type { Variant } from "../types";

/** 38–45 s · LLAMADO A LA ACCIÓN */
export const Cta: React.FC<{ variant: Variant }> = ({ variant }) => {
  const frame = useCurrentFrame();
  const opacity = useSceneOpacity(TIMELINE.cta.duration, 8, 14);

  // Rebote continuo de la flecha: llama la atencion al comentario.
  const bounce = Math.sin((frame / 30) * Math.PI * 2) * 14;

  return (
    <Stack variant={variant} opacity={opacity}>
      {variant === "completo" ? (
        <Reveal>
          <Narration size={46}>
            Si quieres entender el mercado en vez de adivinarlo, sígueme.
          </Narration>
        </Reveal>
      ) : null}

      <Reveal delay={variant === "completo" ? 14 : 0}>
        <HeroLabel size={70} color={COLORS.ink}>
          ¿Qué empresa analizamos primero?
        </HeroLabel>
      </Reveal>

      <Reveal delay={variant === "completo" ? 22 : 8}>
        <div
          style={{
            fontSize: 104,
            lineHeight: 1,
            transform: `translateY(${bounce}px)`,
            filter: `drop-shadow(0 0 30px ${COLORS.accent}66)`,
          }}
        >
          👇
        </div>
      </Reveal>
    </Stack>
  );
};
