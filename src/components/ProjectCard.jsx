export default function ProjectCard({ title, date, description, tools, link }) {
  return (
    <div className="p-6 bg-slate-800 rounded-xl shadow hover:shadow-xl transition border border-slate-700">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-blue-300 mb-2">{date}</p>
      <p className="text-slate-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((t) => (
          <span key={t} className="text-xs bg-slate-700 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      {link && (
        <a className="text-blue-400 hover:text-blue-300 underline" href={link} target="_blank">
          View Project →
        </a>
      )}
    </div>
  );
}
