
import { component$ } from "@builder.io/qwik";
import ImgPic from '~/media/images/pic.webp?jsx';

export default component$(() => {
    return (
        <div class="flex-grow m-[0_auto] max-w-4xl px-6 sm:px-4 ">
            <main class="flex justify-center">
                <div class="flex flex-col">
                    <h1 class="text-2xl font-bold my-2">About me</h1>
                    <p>
                        Hey! Me llamo Sebastián Cardoso, soy un desarrollador web en Argentina, Buenos Aires. Me gusta mucho escribir código y construir productos que ayuden a las personas a resolver sus problemas.
                    </p>
                    <br/>
                    <p>
                        Actualmente trabajo en <a href="https://morfi.pro/">Morfi</a> como desarrollador Frontend, donde trabajo con tecnologías como React y Cypress.
                    </p>
                    <br />
                    <p>
                        Nací en Montevideo, Uruguay y me mudé a Buenos Aires en 1996. Me gusta mucho viajar, conocer gente nueva y aprender sobre diferentes culturas.
                    </p>
                    <br />
                    <p>
                        En mi tiempo libre me gusta leer libros, ver películas, jugar videojuegos y nadar.
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
