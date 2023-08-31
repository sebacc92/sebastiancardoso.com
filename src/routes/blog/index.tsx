import { component$ } from "@builder.io/qwik";
import { useSpeakLocale } from 'qwik-speak';
import { useNavigate } from '@builder.io/qwik-city';

const articlesEn = [
    {
        title: 'Resumability: An Overhead-Free Alternative',
        date: 'Ago 31 2023',
        slug: 'resumability-an-overhead-free-alternative'
    }
]

const articlesEs = [
    {
        title: 'Reanudación: Una Alternativa sin Sobrecostes',
        date: '31 Ago 2023',
        slug: 'reanudacion-una-alternativa-sin-sobrecostes'
    }
]

export default component$(() => {
    const nav = useNavigate();
    const selectedValue = useSpeakLocale();
    const articles = selectedValue.lang === 'en-US' ? articlesEn : articlesEs;
    return (
        <div class="flex-grow m-[0_auto] max-w-4xl px-6 sm:px-4 ">
            <main class="mt-4">
                <h1 class="font-bold text-lg">Blog.</h1>
                {articles.map(article => (
                    <div
                        key={article.slug}
                        class="flex justify-between items-center rounded-lg shadow-lg hover:shadow-xl cursor-pointer p-4 mb-4"
                        onClick$={() => nav(`/blog/${article.slug}`)}
                    >
                        <p class="text-gray-500 text-sm mr-8">{article.date}</p>
                        <h2 class="text-xl font-bold">{article.title}</h2>
                    </div>
                ))}
            </main>
        </div>
    );
});
