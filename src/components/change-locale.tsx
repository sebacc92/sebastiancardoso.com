import { $, component$, useSignal } from '@builder.io/qwik';
import type { SpeakLocale } from 'qwik-speak';
import { useSpeakConfig, useSpeakLocale } from 'qwik-speak';

export const ChangeLocale = component$(() => {
  const isVisibleSelectLocale = useSignal(false)
  const selectedValue = useSpeakLocale();

  const getLabelByLang = (lang: string) => {
    switch (lang) {
      case 'en-US':
        return 'English'
      case 'es-AR':
        return 'Español'
      default:
        return 'Español'
    }
  }

  const config = useSpeakConfig();

  const changeLocale$ = $((newLocale: SpeakLocale) => {
    // Store locale in a cookie 
    document.cookie = `locale=${JSON.stringify(newLocale)};max-age=86400;path=/`;
    location.reload();
  });

  return (
    <div class="relative">
      <button
        aria-label="Select language"
        aria-expanded={isVisibleSelectLocale.value}
        class="relative flex items-center justify-center rounded-full outline-none transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-neutral-200 dark:focus:ring-neutral-600 bg-neutral-100 opacity-100 dark:bg-neutral-800"
        onClick$={() => isVisibleSelectLocale.value = !isVisibleSelectLocale.value}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
          <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <path d="M2 10h16M10 2v16M3.5 5.5q3 3 6 0M3.5 14.5q3-3 6 0M16.5 5.5q-3 3-6 0M16.5 14.5q-3-3-6 0" stroke="currentColor" fill="none"/>
        </svg>
      </button>
      {isVisibleSelectLocale.value && <ul class="w-42 bg-blur absolute right-0 mt-2 max-h-60 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-lg focus:outline-none dark:bg-neutral-900 sm:text-sm xl:left-0 xl:right-[unset]" role="listbox">
        {config.supportedLocales.map(value => (
          <li
            key={value.lang}
            class="relative select-none rounded-md py-2 pl-10 pr-4 text-sm hover:bg-neutral-100 hover:dark:bg-neutral-800 cursor-pointer"
            onClick$={async () => await changeLocale$(value)}
          >
            <button>
              {selectedValue.lang === value.lang && (
                <span class="text-primary absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.7374 16.3232 10.2626 16.3232 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z" fill="currentColor"></path>
                  </svg>
                </span>
              )}
              {getLabelByLang(value.lang)}
            </button>
          </li>
        ))}
      </ul>}
    </div>
  );
});