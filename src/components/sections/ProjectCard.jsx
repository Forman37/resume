export default function ProjectCard({ project }) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {project.short}
        </p>
        <div className="mt-3 text-xs">
          {project.tech.map((t) => (
            <span
              key={t}
              className="mr-2 inline-block px-2 py-1 bg-gray-100 rounded"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {project.github && (
            <a className="underline" href={project.github}>
              GitHub
            </a>
          )}
          {project.demo && (
            <a className="underline" href={project.demo}>
              Live demo
            </a>
          )}
          {project.appStore && (
            <a className="underline" href={project.appStore}>
              App Store
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
