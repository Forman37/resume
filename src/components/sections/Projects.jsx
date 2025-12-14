// src/components/sections/Projects.jsx
import projects from "@/data/projects.js";
import ProjectCard from "@/components/sections/ProjectCard.jsx";

export default function Projects() {
    return (
        <section id="projects" className="m-3">
            <div className="flex items-center justify-center flex-col container-max border-2 border-black bg-white p-4 m-3">
                <h2 className="underline text-bold text-3xl font-bold mb-6">Projects</h2>

                <div className="grid grid-cols-1 gap-6">
                    {projects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
