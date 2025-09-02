import { useEffect } from 'react'

export default function Modal({ open, onClose }) {
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose()
    if (open) document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">
        <button onClick={onClose} className="absolute right-3 top-3 text-slate-500 hover:text-slate-700">✕</button>
        <h3 className="text-xl font-bold text-slate-900">Start Free Trial</h3>
        <p className="mt-1 text-slate-600">Fill out the form and we’ll reach out.</p>
        <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input className="col-span-1 sm:col-span-1 rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Name" />
          <input className="col-span-1 sm:col-span-1 rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Email" type="email" />
          <input className="col-span-1 sm:col-span-1 rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Phone Number" />
          <input className="col-span-1 sm:col-span-1 rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Class" />
          <textarea className="col-span-1 sm:col-span-2 rounded-xl border p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Message" />
          <button type="submit" className="col-span-1 sm:col-span-2 btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}


