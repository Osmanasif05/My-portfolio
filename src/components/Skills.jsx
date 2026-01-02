import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-blue-300 capitalize">
              {category}
            </h3>
            <ul className="mt-2 space-y-1 text-slate-300">
              {items.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
