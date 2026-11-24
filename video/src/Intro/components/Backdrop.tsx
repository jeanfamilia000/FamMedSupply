import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "../theme";

/** Grafico de fondo: zigzag con tendencia alcista, siempre el mismo. */
const buildChart = (width: number, height: number) => {
  const deltas = [3, -1, 4, 2, -2, 5, 1, -3, 4, 3, -1, 2, 5, -2, 3, 4, -1, 6, 2, -3, 5, 3, 1, -2, 4, 3];
  const max = 50;
  let value = 2;

  return deltas
    .map((d, i) => {
      value += d;
      const x = (i / (deltas.length - 1)) * width;
      const y = height - (value / max) * height * 0.9;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
};

export const Backdrop: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();

  // Deriva lentisima: da vida al fondo sin distraer del texto.
  const drift = interpolate(frame, [0, durationInFrames], [0, -120]);

  const chartH = 640;
  const points = buildChart(width, chartH);

  return (
    <AbsoluteFill>
      {/* Base */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(170deg, #101822 0%, ${COLORS.previewBg} 45%, #06090D 100%)`,
        }}
      />

      {/* Rejilla */}
      <AbsoluteFill
        style={{
          opacity: 0.5,
          transform: `translateY(${drift}px)`,
          backgroundImage: `linear-gradient(rgba(168,190,207,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(168,190,207,0.07) 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Grafico: cruza todo el ancho, apoyado en la base */}
      <svg
        width={width}
        height={chartH}
        viewBox={`0 0 ${width} ${chartH}`}
        style={{ position: "absolute", left: 0, top: height - chartH }}
      >
        <defs>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.accent} stopOpacity="0.22" />
            <stop offset="100%" stopColor={COLORS.accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`0,${chartH} ${points} ${width},${chartH}`} fill="url(#fade)" />
        <polyline
          points={points}
          fill="none"
          stroke={COLORS.accent}
          strokeWidth={3}
          strokeOpacity={0.45}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Vinieta: oscurece bordes y centra la atencion en el texto */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(70% 50% at 50% 55%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
