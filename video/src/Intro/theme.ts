// ── Identidad visual del video ──
// Cambia estos valores y cambia todo el video de golpe.

export const COLORS = {
  ink: "#FFFFFF",
  inkMuted: "#A8BECF",
  accent: "#00E39A", // verde mercado
  accentAlt: "#4DA3FF", // azul
  previewBg: "#0A0E13", // solo para la vista previa
};

// Zonas seguras para 1080x1920 (9:16).
// TikTok, Reels y Shorts tapan la parte de abajo con botones y descripcion,
// por eso el texto nunca baja de `bottomSafe`.
export const LAYOUT = {
  side: 90,
  bottomSafe: 430,
};

// Sombra para que el texto blanco se lea sobre cualquier grabacion.
export const TEXT_SHADOW = "0 4px 24px rgba(0,0,0,0.75), 0 1px 3px rgba(0,0,0,0.9)";
