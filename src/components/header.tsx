import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import { ChangeLocale } from "./change-locale";
import { useTranslate } from "qwik-speak";
import { ChangeTheme } from "./change-theme";

export default component$(() => {
    const t = useTranslate();
    return (
        <header class="sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-2 dark:border-neutral-900 dark:bg-black/75 sm:py-3 backdrop-blur-xl">
            <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
                <nav class="flex items-center justify-between">
                    <Link class="grid grid-flow-col items-center" href="/">
                        <img alt="Sebastian Cardoso" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" class="mr-3 rounded-full opacity-100" style="color:transparent" src="https://sebastiancardoso.com/images/me.webp" />
                        <span class="font-bold">Sebastián Cardoso</span>
                    </Link>
                    <div class="flex flex-row-reverse items-center gap-3 sm:flex-row sm:gap-4">
                        <ul class="hidden grid-flow-col gap-6 text-sm font-medium sm:grid">
                            <li><Link class="hover:opacity-60 transition-opacity" href="/about">{t('header.nav.about@@About me')}</Link></li>
                            <li><Link class="hover:opacity-60 transition-opacity" href="/blog">Blog</Link></li>
                            <li><Link class="hover:opacity-60 transition-opacity" href="/projects">{t('header.nav.projects@@Projects')}</Link></li>
                        </ul>
                        <div class="sm:hidden">
                            <button aria-label="Open navigation menu" class="fill-black p-2 dark:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
                                    <path d="M3 6h18v2.016H3V6zm0 6.984v-1.969h18v1.969H3zM3 18v-2.016h18V18H3z"></path>
                                </svg>
                            </button>
                        </div>
                        <ChangeTheme />
                        <ChangeLocale />
                    </div>
                </nav>
            </div>
        </header>
    );
});
