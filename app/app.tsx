'use client';
import About from "./about/about";
//import Contact from "./contact/contact";
import { useLanguage } from "./context/LanguajeContext";
import Projects from "./proyects/proyects";
//import Projects from "./proyects/proyects";

export default function App() {
    const { translate } = useLanguage();
    return (
        <main className="flex flex-col flex-grow items-center justify-center pt-40 sm:pt-50 px-4 sm:px-10">
            {/* Aquí irán las páginas y componentes de la app */}
            <h1 className="text-4xl font-bold text-center sm:text-5xl">
                {translate('intro')}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-center sm:max-w-3xl">
                {translate('description')}
            </h2>
            <About />
            <Projects />
            {/*<Contact /> */}
        </main>
    );
}