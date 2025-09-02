export default function Navbar({ onStartFree }) {
  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b">
      <div className="container-responsive h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-emerald-400 shadow" />
          <span className="font-semibold text-slate-800">Topmind Care</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a className="hover:text-slate-900" href="#why">Why</a>
          <a className="hover:text-slate-900" href="#programs">Programs</a>
          <a className="hover:text-slate-900" href="#features">Features</a>
          <a className="hover:text-slate-900" href="#parents">For Parents</a>
          <a className="hover:text-slate-900" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={onStartFree} className="btn-primary">Start Free</button>
        </div>
      </div>
    </header>
  )
}


