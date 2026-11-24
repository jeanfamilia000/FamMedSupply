# Videos JCF Trading

Videos verticales (9:16) hechos con [Remotion](https://remotion.dev): React que se
renderiza a video.

## Comandos

```bash
npm install          # solo la primera vez
npm run dev          # abre Remotion Studio: vista previa y ajuste de tiempos
npm run render       # video final .mp4
npm run render:overlay   # solo los rótulos, con fondo transparente (.mov)
npm run lint         # revisa errores antes de renderizar
```

El Studio (`npm run dev`) abre en `localhost:3000`. Ahí puedes arrastrar la línea
de tiempo y ver los cambios al instante, que es la forma cómoda de cuadrar los
tiempos con tu voz.

## Video: "Soy profesor… y también opero el NASDAQ"

45 segundos, 1080×1920, 30 fps. Dos versiones:

| Composición | Para qué sirve |
|---|---|
| `Intro-Completo` | Video autónomo: fondo diseñado + tus frases en pantalla. Úsalo tal cual o con tu voz grabada encima. |
| `Intro-Overlay` | Solo los rótulos, fondo transparente y anclados abajo para no taparte la cara. Para montar sobre tu grabación. |

### Si grabas tu video a cámara

Dos caminos:

1. **Montar en tu editor**: renderiza `npm run render:overlay` y pon el `.mov`
   como capa encima de tu grabación. Mantiene la transparencia.
2. **Hacerlo todo en Remotion**: copia tu grabación a `public/` (por ejemplo
   `public/jean.mp4`), abre el Studio y escribe `jean.mp4` en la propiedad
   `footage`. Remotion la pone de fondo y dibuja los rótulos encima.

## Ajustar los tiempos

Todo el cronometraje está en **`src/Intro/timeline.ts`**, en segundos. Es el único
archivo que necesitas tocar cuando grabes y tu voz no cuadre exactamente con el
guion. `PILLAR_OFFSETS` controla cuándo entra cada pilar (ACCIONES, FUTUROS
NASDAQ, INTELIGENCIA ARTIFICIAL).

Los colores y márgenes están en `src/Intro/theme.ts`.

## Estructura

```
src/Intro/
  timeline.ts      ← los tiempos del guion (empieza aquí)
  theme.ts         ← colores, márgenes, zonas seguras
  fonts.ts         ← carga de la tipografía
  Intro.tsx        ← monta las escenas en orden
  scenes/          ← una escena por bloque del guion
  components/      ← piezas reutilizables (fondo, textos, animación de entrada)
```

## Dos cosas aprendidas a la fuerza

**La tipografía va dentro del proyecto.** Los archivos están en `public/fonts/`
y se cargan desde ahí, no desde Google Fonts. El navegador que usa Remotion para
renderizar no valida el certificado de `fonts.gstatic.com` a través de un proxy, y
además la versión *variable* de Inter que sirve Google no funciona en ese
navegador: carga sin error pero no dibuja sus glifos. Por eso hay un archivo por
peso, sacados del paquete `@fontsource/inter`.

**Para fondo transparente, ProRes 4444 y no WebM.** El comando está en
`npm run render:overlay`. Exportar a WebM (VP8 o VP9) produce un archivo que
*dice* tener transparencia (`ALPHA_MODE: 1`) pero cuyo canal alfa sale vacío, lo
que borra también el texto. Si cambias ese comando, verifica que el formato de
píxel sea `yuva444p10le`: sin `--pixel-format`, ProRes exporta sin alfa aunque
pidas el perfil 4444.
