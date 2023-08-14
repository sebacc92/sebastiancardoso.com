import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
  defaultLocale: { lang: 'es-AR', currency: 'ARS', timeZone: 'America/Argentina/Buenos_Aires' },
  supportedLocales: [
    { lang: 'es-AR', currency: 'ARS', timeZone: 'America/Argentina/Buenos_Aires' },
    { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' }
  ],
  assets: [
    'app', // Translations shared by the pages
    'about',
    'header',
    'home'
  ]
};