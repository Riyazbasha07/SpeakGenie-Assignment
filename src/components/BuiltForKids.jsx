export default function BuiltForKids() {
  const features = [
    { title: 'Ad-Free & Safe', text: 'Child-first design with privacy controls and no external ads.' },
    { title: 'Rewards that Motivate', text: 'Stars, badges, and gentle streaks encourage healthy habits.' },
    { title: 'Offline Access', text: 'Download favorite sessions for calm on the go.' },
    { title: 'Sleep Mode', text: 'Fade-out music and dim visuals help kids drift off peacefully.' },
    { title: 'Classroom Friendly', text: 'Teacher packs with 5-minute start-of-class resets and posters.' },
    { title: 'Multi-Child Profiles', text: 'Personalized tracks for each child in the family.' },
  ]
  return (
    <section id="features">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Built for Kids, Loved by Parents</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="card p-6">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


