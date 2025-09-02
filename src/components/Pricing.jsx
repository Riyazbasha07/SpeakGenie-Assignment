export default function Pricing({ onStartFree }) {
  const tiers = [
    { name: 'Starter', price: 'Free', features: ['5 guided meditations', '2 sleep stories', 'Parent starter kit'], cta: 'Get Started' },
    { name: 'Premium', price: '₹299/mo', features: ['Unlimited meditations', 'Sleep stories & calming music', 'Printable guides'], cta: 'Upgrade Now', highlight: true },
    { name: 'Family', price: '₹499/mo', features: ['4 child profiles', 'Rewards & streaks', 'Classroom pack'], cta: 'Get Family Plan' },
  ]
  return (
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Choose Your Plan</h2>
      <p className="mt-1 text-slate-600">Start free, cancel anytime. No hidden charges.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {tiers.map((t) => (
          <div key={t.name} className={`card p-6 ${t.highlight ? 'ring-2 ring-violet-500' : ''}`}>
            <h3 className="text-slate-800 font-semibold">{t.name}</h3>
            <div className="mt-1 text-3xl font-bold">{t.price}</div>
            <ul className="mt-4 space-y-1 text-slate-600 text-sm">
              {t.features.map((f) => (
                <li key={f}>✔ {f}</li>
              ))}
            </ul>
            <button
              onClick={onStartFree}
              className={`mt-5 w-full ${t.highlight ? 'btn-primary' : 'btn-secondary'}`}
            >
              {t.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}


