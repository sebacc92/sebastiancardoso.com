import { component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from '@builder.io/qwik-city';
import { ChangeLocale } from "./change-locale";
import { useTranslate } from "qwik-speak";
import { ChangeTheme } from "./change-theme";

export default component$(() => {
    const isOpenMenu = useSignal(false);
    
    const t = useTranslate();
    const location = useLocation();
    const pathname = location.url.pathname;
    
    return (
        <header class={`sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-2 dark:border-neutral-900 dark:bg-black/75 sm:py-3 sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-2 dark:border-neutral-900 dark:bg-black/75 sm:py-3 ${isOpenMenu.value ? '' : 'backdrop-blur-xl'}`}>
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
                            <button aria-label="Open navigation menu" class="fill-black p-2 dark:fill-white" onClick$={() => isOpenMenu.value = !isOpenMenu.value}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
                                    <path d="M3 6h18v2.016H3V6zm0 6.984v-1.969h18v1.969H3zM3 18v-2.016h18V18H3z"></path>
                                </svg>
                            </button>
                            {!!isOpenMenu.value && <nav class="fixed bottom-0 left-0 right-0 top-0 z-10 bg-white dark:bg-black">
                                <div class="absolute right-0 px-6 py-2">
                                    <button aria-label="Close navigation menu" class="fill-black p-2 dark:fill-white" onClick$={() => isOpenMenu.value = !isOpenMenu.value}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
                                            <path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <ul class="margin-0 flex h-full flex-1 flex-col items-center justify-center space-y-5 text-2xl" onClick$={() => isOpenMenu.value = !isOpenMenu.value}>
                                    <li><Link class={`transition-opacity hover:opacity-100 ${pathname === '/' ? 'opacity-100' : 'opacity-50'}`} href="/">Home</Link></li>
                                    <li><Link class={`transition-opacity hover:opacity-100 ${pathname === '/about/' ? 'opacity-100' : 'opacity-50'}`} href="/about">About</Link></li>
                                    <li><Link class={`transition-opacity hover:opacity-100 ${pathname === '/blog/' ? 'opacity-100' : 'opacity-50'}`} href="/blog">Blog</Link></li>
                                    <li><Link class={`transition-opacity hover:opacity-100 ${pathname === '/projects/' ? 'opacity-100' : 'opacity-50'}`} href="/projects">Projects</Link></li>
                                </ul>
                            </nav>}
                        </div>
                        <ChangeTheme />
                        <ChangeLocale />
                    </div>
                </nav>
            </div>
        </header>
    );
});
