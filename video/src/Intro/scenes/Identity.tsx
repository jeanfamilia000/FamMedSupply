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

/** 3–12 s · QUIÉN ERES */
export const Identity: React.FC<{ variant: Variant }> = ({ variant }) => {
  const opacity = useSceneOpacity(TIMELINE.identity.duration);

  return (
    <Stack variant={variant} opacity={opacity}>
      {variant === "completo" ? (
        <Reveal>
          <Narration>
            Soy profesor de tecnología y robótica, y llevo tiempo estudiando los
            mercados de Estados Unidos con un método propio.
          </Narration>
        </Reveal>
      ) : null}

      <Reveal delay={variant === "completo" ? 14 : 0}>
        <AccentBar />
      </Reveal>

      <Reveal delay={variant === "completo" ? 18 : 4}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
          <HeroLabel size={96} color={COLORS.ink}>
            Jean
          </HeroLabel>
          <HeroLabel size={54}>JCF Trading</HeroLabel>
        </div>
      </Reveal>
    </Stack>
  );
};
