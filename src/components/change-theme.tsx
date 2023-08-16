import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const ChangeTheme = component$(() => {
    const theme = useSignal('dark')

    const changeTheme$ = $((newTheme: string) => {
        // Store theme in a cookie
        document.cookie = `theme=${JSON.stringify(newTheme)};max-age=86400;path=/`;
        theme.value = newTheme
        if (theme.value == 'dark') {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    });

    useVisibleTask$(() => {
        console.log('aaa')
        const result = new RegExp('(?:^|; )' + encodeURIComponent('theme') + '=([^;]*)').exec(document.cookie);
        if(result){
            const cookieTheme = JSON.parse(result[1]);
            if (cookieTheme == 'dark') {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            theme.value = cookieTheme
        }
    })

    return (
        <div class="relative">
            {theme.value === 'light'
                ? (
                    <button
                        aria-label="Select theme"
                        class="relative flex h-10 w-10 items-center justify-center rounded-full outline-none transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-neutral-200 dark:focus:ring-neutral-600 opacity-50"
                        type="button"
                        aria-haspopup="listbox"
                        data-headlessui-state=""
                        onClick$={() => changeTheme$('dark')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"></path>
                        </svg>
                    </button>
                ) : (
                    <button
                        aria-label="Select theme"
                        class="relative flex h-10 w-10 items-center justify-center rounded-full outline-none transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-neutral-200 dark:focus:ring-neutral-600 opacity-50"
                        type="button"
                        aria-haspopup="listbox"
                        data-headlessui-state=""
                        onClick$={() => changeTheme$('light')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                )
            }
        </div>
    );
});