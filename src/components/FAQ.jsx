import { useState } from 'react'

const faqs = [
  { q: 'What ages is this for?', a: 'Designed for children 4–14 with age-specific programs.' },
  { q: 'How long are the sessions?', a: 'Most sessions are 3–7 minutes.' },
  { q: 'Is it safe and ad-free?', a: 'Yes. Private by design and no external ads.' },
  { q: 'Can schools use it?', a: 'Yes, with teacher-friendly packs and routines.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
      <div className="mt-4 divide-y rounded-2xl border bg-white">
        {faqs.map((f, i) => (
          <button key={f.q} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-5 hover:bg-slate-50">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800">{f.q}</span>
              <span className="text-slate-500">{open === i ? '–' : '+'}</span>
            </div>
            {open === i && <p className="mt-2 text-slate-600">{f.a}</p>}
          </button>
        ))}
      </div>
    </section>
  )
}


