export default function ParentHub() {
  return (
    <section id="parents" className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Parent & Teacher Hub</h2>
      <p className="mt-2 text-slate-600">Practical guides, printable routines, and progress insights.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {['Download Starter Kit (PDF)', '7-Day Calm Plan', 'Classroom Pack'].map((l) => (
          <a key={l} href="#" className="px-4 py-2 rounded-full bg-white shadow hover:shadow-lg text-slate-700 font-medium">
            {l}
          </a>
        ))}
      </div>
    </section>
  )
}


