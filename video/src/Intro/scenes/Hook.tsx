import React from "react";
import { Reveal } from "../components/Reveal";
import { Stack } from "../components/Stack";
import { HeroLabel } from "../components/HeroLabel";
import { Narration } from "../components/Narration";
import { useSceneOpacity } from "../useSceneOpacity";
import { TIMELINE } from "../timeline";
import { COLORS } from "../theme";
import type { Variant } from "../types";

/** 0–3 s · GANCHO */
export const Hook: React.FC<{ variant: Variant }> = ({ variant }) => {
  const opacity = useSceneOpacity(TIMELINE.hook.duration, 6, 8);

  return (
    <Stack variant={variant} opacity={opacity}>
      <Reveal>
        <HeroLabel size={118} color={COLORS.ink} uppercase>
          Profesor
        </HeroLabel>
      </Reveal>

      <Reveal delay={5}>
        <HeroLabel size={118} uppercase>
          + Trader
        </HeroLabel>
      </Reveal>

      {variant === "completo" ? (
        <Reveal delay={12}>
          <Narration size={40}>
            Antes de clase ya estoy mirando el NASDAQ.
          </Narration>
        </Reveal>
      ) : null}
    </Stack>
  );
};
