import Hero from "@/components/sections/Hero.jsx";
import About from "@/components/sections/About.jsx";
import ContactMe from "@/components/sections/ContactMe.jsx";
import Projects from "@/components/sections/Projects.jsx";

export default function Home() {
    return (
        <div className="bg-gray-500 h-screen">
            <Hero />
            <div className="flex flex-row justify-center gap-2 bg-gray-500">
                <div className="flex flex-col justify-center max-w-3xl">
                    <About />
                    <div className="flex flex-col gap-2 bg-gray-500">
                        <Projects />
                    </div>
                </div>
                <ContactMe />
            </div>
        </div>
    );
}
