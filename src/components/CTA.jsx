export default function CTA({ onStartFree }) {
  return (
    <section className="bg-gradient-to-br from-sky-50 to-violet-50 rounded-3xl p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Start Your Child’s Mindfulness Journey</h3>
          <p className="mt-1 text-slate-600">Try it free. Build calm, focus, and kindness—one small practice a day.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={onStartFree} className="btn-primary">Create Account</button>
          <a className="btn-secondary" href="#">Download App</a>
        </div>
      </div>
    </section>
  )
}


