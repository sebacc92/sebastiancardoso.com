
import { component$ } from "@builder.io/qwik";
import { useTranslate } from 'qwik-speak';
import ImgPic from '~/media/images/pic.webp?jsx';

export default component$(() => {
    const t = useTranslate();
    return (
        <div class="flex-grow m-[0_auto] max-w-4xl px-6 sm:px-4 ">
            <main class="flex justify-center">
                <div class="flex flex-col">
                    <h1 class="text-2xl font-bold my-2">{t('about.title@@About me')}</h1>
                    <p>
                        {t('about.p1@@Hey! My name is Sebastian Cardoso, I am a web developer in Argentina, Buenos Aires. I really like to write code and build products that help people solve their problems.')}
                    </p>
                    <br />
                    <p>
                        {t('about.p2@@I was born in Montevideo, Uruguay and moved to Buenos Aires in 1996. I love to travel, meet new people and learn about different cultures.')}
                    </p>
                    <br />
                    <p>
                        {t('about.p3@@I currently work at {{link}} as a Frontend developer, where I work with technologies such as React and Cypress.', { link: <a href="https://morfi.pro/">Morfi</a> })}
                    </p>
                    <br />
                    <p>
                        {t('about.p4@@In my free time I like to read books, watch movies, play video games and swim.')}
                    </p>
                    <br />
                    <div class="flex">
                        <ImgPic alt="Foto de sebastian" class="object-cover shadow-lg" />
                    </div>
                </div>
            </main>
        </div>
    );
});
