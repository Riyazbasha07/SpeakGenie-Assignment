export default function Programs() {
  const blocks = [
    { title: 'Little Explorers (4–6)', badges: ['Cozy Corner', 'Calm Music', 'Sticker Badges'] },
    { title: 'Brave Thinkers (7–10)', badges: ['Focus Timer', 'Gratitude Notes', 'Streak Rewards'] },
    { title: 'Calm & Curious (11–14)', badges: ['Mindset Minis', 'Sleep Stories', 'Goal Cards'] },
  ]
  return (
    <section id="programs">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Programs for Every Age</h2>
      <p className="mt-2 text-slate-600 max-w-2xl">Pick a track or mix and match. Each program grows with your child.</p>
      <div className="mt-8 grid grid-cols-2 grid-rows-3 gap-6">
        {/* Row 1, Col 1: Image */}
        <div className="card overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1400&auto=format&fit=crop"
            alt="Mindful kids program"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        {/* Row 1, Col 2: Text */}
        <div className="card p-6 flex flex-col justify-center">
          <h3 className="font-semibold text-lg text-slate-900">{blocks[0].title}</h3>
          <p className="mt-2 text-slate-600 text-sm">Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {blocks[0].badges.map((b) => (
              <span key={b} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">{b}</span>
            ))}
          </div>
        </div>

        {/* Row 2, Col 1: Text */}
        <div className="card p-6 flex flex-col justify-center">
          <h3 className="font-semibold text-lg text-slate-900">{blocks[1].title}</h3>
          <p className="mt-2 text-slate-600 text-sm">Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {blocks[1].badges.map((b) => (
              <span key={b} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">{b}</span>
            ))}
          </div>
        </div>

        {/* Row 2, Col 2: Image */}
        <div className="card overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="data:image/jpeg;base64,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"
            alt="Mindful kids program"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        {/* Row 3, Col 1: Image */}
        <div className="card overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBQljmYbcdxTni_AaFhA21x4sXp0qltQWVQ&s"
            alt="Child calm reflection"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        {/* Row 3, Col 2: Text */}
        <div className="card p-6 flex flex-col justify-center">
          <h3 className="font-semibold text-lg text-slate-900">{blocks[2].title}</h3>
          <p className="mt-2 text-slate-600 text-sm">Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {blocks[2].badges.map((b) => (
              <span key={b} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


