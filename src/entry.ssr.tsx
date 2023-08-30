/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

export default function (opts: RenderToStreamOptions) {
  const cookieStr = opts.serverData?.requestHeaders?.cookie || ''
  const themeMatch = cookieStr.match(/theme="([^"]+)"/);
  const themeValue = themeMatch ? themeMatch[1] : null;
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: "es-us",
      class: themeValue ?? "dark",
      ...opts.containerAttributes,
    },
  });
}
