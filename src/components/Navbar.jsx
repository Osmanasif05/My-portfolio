export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-slate-50">
          Osman Asif
        </a>

        <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#skills" className="hover:text-sky-400">Skills</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#timeline" className="hover:text-sky-400">Timeline</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
        </div>
      </nav>
    </header>
  );
}
