interface Project {
  name: string;
  type: string;
  description: string;
  tech: string[];
  live: string;
  code: string;
}

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export default function ProjectCard({ project, reverse }: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden`}
    >
      {/* Text content */}
      <div className="flex-1 p-6">
        <h3 className="text-3xl font-bold text-white">{project.name}</h3>
        <p className="text-indigo-400 font-medium">{project.type}</p>
        <p className="mt-3 text-gray-300 leading-relaxed">{project.description}</p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md font-semibold text-sm"
          >
            Live
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold text-sm"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
