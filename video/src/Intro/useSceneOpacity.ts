import { interpolate, useCurrentFrame } from "remotion";

/**
 * Entrada y salida suaves de una escena completa.
 * Dentro de un <Sequence>, el fotograma empieza en 0, asi que esto
 * funciona igual en cualquier escena sin recalcular nada.
 */
export const useSceneOpacity = (
  durationInFrames: number,
  fadeIn = 8,
  fadeOut = 10,
) => {
  const frame = useCurrentFrame();

  return interpolate(
    frame,
    [0, fadeIn, durationInFrames - fadeOut, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
};
