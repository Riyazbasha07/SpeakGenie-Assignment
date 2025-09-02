export default function Header({ onStartFree }) {
  return (
    <section className="container-responsive pt-12 md:pt-16 lg:pt-20" id="hero">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-sm font-medium shadow">
            <span>Calm Minds, Happy Hearts</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Mindfulness & Meditation for Kids (4–14)
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto md:mx-0">
            Fun, story-based meditations that build focus, kindness, and confidence. Safe, ad-free, and crafted with child-development experts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <button onClick={onStartFree} className="btn-primary">Start Free Trial</button>
            <a href="#programs" className="btn-secondary">Explore Programs</a>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              'Improves Focus',
              'Reduces Stress',
              'Better Sleep',
              'Builds Empathy',
            ].map((label) => (
              <div key={label} className="card px-4 py-3 text-center text-sm font-semibold text-slate-700">
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img className="aspect-[4/3] w-full object-cover rounded-3xl shadow-[0_18px_40px_-16px_rgba(2,6,23,0.35)]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcRY72hL8bRrLAqziMIrCueOccxDj50-Ewg&s" alt="Kid practicing mindfulness" referrerpolicy="no-referrer" loading="lazy" />
          <div className="absolute -bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-72 bg-white rounded-2xl shadow-lg p-4 rotate-[-3deg]">
            <p className="font-semibold text-slate-800">Today's Journey</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
              <li>Dragon Breath (3 min)</li>
              <li>Butterfly Body Scan (5 min)</li>
              <li>Sleep Story: Star Boat (7 min)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


