export default function Comparison() {
  const rows = [
    ['Child-Friendly Guided Meditations', 'Story-based, fun & short', 'Generic adult content'],
    ['Safe & Ad-Free Environment', '100% secure for kids', 'Ads & distractions'],
    ['Age-Specific Programs', 'Tailored for 4–14', 'One-size-fits-all'],
    ['Parent & Teacher Support', 'Guides, printables, insights', 'Limited or none'],
  ]
  return (
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Choose Mindery Kids Over Others?</h2>
      <div className="mt-6 overflow-hidden rounded-2xl border">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4">Feature</th>
              <th className="p-4">Mindery Kids</th>
              <th className="p-4">Other Apps</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="odd:bg-white even:bg-slate-50">
                <td className="p-4 font-medium text-slate-800">{r[0]}</td>
                <td className="p-4 text-emerald-700">{r[1]}</td>
                <td className="p-4 text-rose-600">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}


