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
      className={`group relative flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 hover:shadow-3xl hover:border-blue-500/50 h-80 mx-2`}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
            {project.name}
          </h3>
          <p className="text-blue-400 font-medium mb-3 text-sm">{project.type}</p>
          <p className="text-gray-300 leading-relaxed text-sm line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="mt-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs rounded-full font-medium shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 6 && (
              <span className="px-3 py-1 bg-gray-600 text-gray-300 text-xs rounded-full font-medium">
                +{project.tech.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn relative px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-lg font-semibold text-sm text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn relative px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 rounded-lg font-semibold text-sm text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Source Code
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
      </div>
    </div>
  );
}