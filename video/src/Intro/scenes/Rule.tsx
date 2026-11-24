import React from "react";
import { Reveal } from "../components/Reveal";
import { Stack } from "../components/Stack";
import { HeroLabel } from "../components/HeroLabel";
import { Narration } from "../components/Narration";
import { AccentBar } from "../components/AccentBar";
import { useSceneOpacity } from "../useSceneOpacity";
import { TIMELINE } from "../timeline";
import { COLORS } from "../theme";
import type { Variant } from "../types";

/** 28–38 s · LA REGLA DE LA CUENTA */
export const Rule: React.FC<{ variant: Variant }> = ({ variant }) => {
  const opacity = useSceneOpacity(TIMELINE.rule.duration);

  return (
    <Stack variant={variant} opacity={opacity}>
      {variant === "completo" ? (
        <Reveal>
          <Narration size={46}>
            Aquí no te voy a decir qué comprar ni qué vender. Todo viene de
            fuentes oficiales de las propias empresas. Mi trabajo es enseñarte a
            leerlas.
          </Narration>
        </Reveal>
      ) : null}

      <Reveal delay={variant === "completo" ? 16 : 0}>
        <AccentBar width={120} color={COLORS.accentAlt} />
      </Reveal>

      <Reveal delay={variant === "completo" ? 20 : 4}>
        <HeroLabel size={66} color={COLORS.ink}>
          Sin señales.
        </HeroLabel>
      </Reveal>

      <Reveal delay={variant === "completo" ? 28 : 12}>
        <HeroLabel size={66} color={COLORS.accentAlt}>
          Solo fuentes oficiales.
        </HeroLabel>
      </Reveal>
    </Stack>
  );
};
