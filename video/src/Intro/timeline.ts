// ── Guion cronometrado ──
// Todos los tiempos del video viven aqui, en segundos.
// Cuando grabes y tu voz no coincida exactamente, ajusta SOLO este archivo.

export const FPS = 30;

/** Convierte segundos a fotogramas. */
export const sec = (seconds: number) => Math.round(seconds * FPS);

export const TIMELINE = {
  hook: { from: sec(0), duration: sec(3) }, // "De lunes a viernes ensenio..."
  identity: { from: sec(3), duration: sec(9) }, // "Me llamo Jean..."
  pillars: { from: sec(12), duration: sec(16) }, // "En esta cuenta voy a explicar..."
  rule: { from: sec(28), duration: sec(10) }, // "Y una regla: aqui no te voy a decir..."
  cta: { from: sec(38), duration: sec(7) }, // "Si quieres entender el mercado..."
};

/**
 * Momento en que entra cada pilar, medido desde el inicio de su escena (12 s).
 * Ahora: 18 s, 20.5 s y 23 s de video.
 * Los dices al final de la frase, asi que muevelos cuando tengas el audio real.
 */
export const PILLAR_OFFSETS = [sec(6), sec(8.5), sec(11)];

export const TOTAL_FRAMES = sec(45);
