export default function Benefits() {
  const items = [
    { title: 'Guided Adventures', text: 'Short, age-wise journeys that help kids calm their bodies and name their feelings.' },
    { title: 'Tools for Big Feelings', text: 'Quick reset audios for anger, worry, jitters, and bedtime battles.' },
    { title: 'Guides & Routines', text: 'Weekly tips, printable charts, and routines for home or school.' },
  ]
  return (
    <section id="why">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Mindery Kids?</h2>
      <p className="mt-3 text-slate-600 max-w-2xl">Children learn best through play and stories. Our sessions blend gentle breathing, imagery, and music.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.title} className="card p-6">
            <div className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">Story Meditations</div>
            <h3 className="mt-3 font-semibold text-lg">{it.title}</h3>
            <p className="mt-2 text-slate-600">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


