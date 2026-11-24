import React from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";

import { Backdrop } from "./components/Backdrop";
import { Hook } from "./scenes/Hook";
import { Identity } from "./scenes/Identity";
import { Pillars } from "./scenes/Pillars";
import { Rule } from "./scenes/Rule";
import { Cta } from "./scenes/Cta";
import { TIMELINE } from "./timeline";
import { COLORS } from "./theme";

export const introSchema = z.object({
  variant: z.enum(["completo", "overlay"]),
  /**
   * Opcional. Nombre de tu grabación dentro de la carpeta `public/`
   * (por ejemplo "jean.mp4"). Si lo dejas vacío no se usa video de fondo.
   */
  footage: z.string(),
});

/** Línea de progreso arriba: ayuda a que la gente se quede hasta el final. */
const Progress: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 7 }}>
      <div
        style={{
          width: `${(frame / durationInFrames) * 100}%`,
          height: "100%",
          background: COLORS.accent,
          boxShadow: `0 0 18px ${COLORS.accent}`,
        }}
      />
    </div>
  );
};

export const Intro: React.FC<z.infer<typeof introSchema>> = ({
  variant,
  footage,
}) => {
  const completo = variant === "completo";

  return (
    <AbsoluteFill>
      {/* Tu grabación, si la pusiste en public/ */}
      {footage ? (
        <AbsoluteFill>
          <OffthreadVideo src={staticFile(footage)} style={{ objectFit: "cover" }} />
        </AbsoluteFill>
      ) : null}

      {/* Fondo diseñado: solo cuando no hay grabación y es el video autónomo */}
      {completo && !footage ? <Backdrop /> : null}

      <Sequence from={TIMELINE.hook.from} durationInFrames={TIMELINE.hook.duration}>
        <Hook variant={variant} />
      </Sequence>

      <Sequence
        from={TIMELINE.identity.from}
        durationInFrames={TIMELINE.identity.duration}
      >
        <Identity variant={variant} />
      </Sequence>

      <Sequence
        from={TIMELINE.pillars.from}
        durationInFrames={TIMELINE.pillars.duration}
      >
        <Pillars variant={variant} />
      </Sequence>

      <Sequence from={TIMELINE.rule.from} durationInFrames={TIMELINE.rule.duration}>
        <Rule variant={variant} />
      </Sequence>

      <Sequence from={TIMELINE.cta.from} durationInFrames={TIMELINE.cta.duration}>
        <Cta variant={variant} />
      </Sequence>

      {completo ? <Progress /> : null}
    </AbsoluteFill>
  );
};
