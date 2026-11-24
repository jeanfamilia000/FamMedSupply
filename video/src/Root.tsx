import { Composition } from "remotion";
import { Intro, introSchema } from "./Intro/Intro";
import { FPS, TOTAL_FRAMES } from "./Intro/timeline";

// Vertical 9:16 para TikTok, Reels y Shorts.
const VERTICAL = { width: 1080, height: 1920 } as const;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Video autónomo: fondo diseñado + tus frases en pantalla. */}
      <Composition
        id="Intro-Completo"
        component={Intro}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        {...VERTICAL}
        schema={introSchema}
        defaultProps={{ variant: "completo" as const, footage: "" }}
      />

      {/* Solo rótulos, fondo transparente, para montar sobre tu grabación. */}
      <Composition
        id="Intro-Overlay"
        component={Intro}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        {...VERTICAL}
        schema={introSchema}
        defaultProps={{ variant: "overlay" as const, footage: "" }}
      />
    </>
  );
};
