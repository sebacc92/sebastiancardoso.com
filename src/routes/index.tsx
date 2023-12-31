import { component$ } from "@builder.io/qwik";
import { useTranslate } from 'qwik-speak';
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const t = useTranslate();
  return (
    <main class="flex-grow flex items-center justify-center">
      <div class="flex flex-col items-center">
        <img src="/images/me.webp" alt="Foto de sebastian" class="rounded-full w-32 h-32 object-cover border border-blue-500 shadow-xl my-4" />
        <div class="mt-4 text-4xl animated jello">👋</div>
        <div class="text-3xl font-bold my-2">Sebastián Cardoso</div>
        {/* <div class="text-lg my-2">Web developer</div> */}
        <div class="typewriter-effect">{t('home.description@@Hello! I\'m Frontend developer.')}</div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Sebastian Cardoso - Web developer",
  meta: [
    {
      name: "description",
      content: "Web developer",
    },
  ],
};
