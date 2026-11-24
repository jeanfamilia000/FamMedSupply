import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

/**
 * La fuente vive dentro del proyecto (public/fonts), no se descarga de Google.
 * Ventaja: el render siempre da el mismo resultado y funciona sin internet.
 *
 * Los archivos salieron del paquete `@fontsource/inter` (ver devDependencies).
 * Para actualizarlos:
 *   cp node_modules/@fontsource/inter/files/inter-latin-<peso>-normal.woff2 \
 *      public/fonts/inter-<peso>.woff2
 *
 * Nota: un peso = un archivo. La version "variable" de Google Fonts no
 * funciona en el navegador que usa Remotion para renderizar.
 */
export const fontFamily = "Inter";

const WEIGHTS = ["400", "600", "700", "800"] as const;

WEIGHTS.forEach((weight) => {
  loadFont({
    family: fontFamily,
    url: staticFile(`fonts/inter-${weight}.woff2`),
    weight,
  });
});
