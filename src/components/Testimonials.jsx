export default function Testimonials() {
  const items = [
    'Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.',
    'The 5-minute reset before homework has been a game changer for focus.',
    'Our class uses the breathing games after lunch. Kids come back calm and ready.',
  ]
  return (
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Families Say</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map((t, i) => (
          <div key={i} className="card p-6">
            <div className="text-yellow-500">★★★★★</div>
            <p className="mt-2 text-slate-700">“{t}”</p>
          </div>
        ))}
      </div>
    </section>
  )
}


