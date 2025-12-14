// src/components/sections/ProjectCard.jsx
import Image from "next/image";

export default function ProjectCard({ project }) {
    return (
        <article className="bg-gray-700 rounded-2xl overflow-hidden">
            <div className="w-full h-90 relative bg-gray-500">
                <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-contain"
                />
            </div>

            <div className="p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-white">{project.short}</p>

                <div className="mt-3 text-xs flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="inline-block px-2 py-1 bg-gray-100 rounded text-xs"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="mt-4 flex gap-3 text-white">
                    {project.github && (
                        <a
                            className="underline"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    )}
                    {project.demo && (
                        <a
                            className="underline"
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live demo
                        </a>
                    )}
                    {project.appStore && (
                        <a
                            className="underline"
                            href={project.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            App Store
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
