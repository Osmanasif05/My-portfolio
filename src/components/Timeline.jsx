import { timeline } from "../data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-10">Work Timeline</h2>

      <div className="space-y-10 border-l border-slate-700 pl-6">
        {timeline.map((job) => (
          <div key={job.role} className="relative">
            <div className="absolute -left-3 w-3 h-3 bg-blue-400 rounded-full"></div>

            <h3 className="text-xl font-semibold text-white">{job.role}</h3>
            <p className="text-blue-300">{job.org} — {job.date}</p>
            <p className="text-slate-300 mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
