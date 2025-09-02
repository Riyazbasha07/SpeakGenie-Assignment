export function SocialFooter() {
  const socials = [
    { name: 'Instagram', href: '#', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-2.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
      </svg>
    ) },
    { name: 'YouTube', href: '#', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3 3 0 00-2.113-2.122C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.385.564A3 3 0 00.502 6.186 31.19 31.19 0 000 12a31.19 31.19 0 00.502 5.814 3 3 0 002.113 2.122C4.5 20.5 12 20.5 12 20.5s7.5 0 9.385-.564a3 3 0 002.113-2.122A31.19 31.19 0 0024 12a31.19 31.19 0 00-.502-5.814zM9.75 8.75l6.5 3.25-6.5 3.25v-6.5z"/>
      </svg>
    ) },
    { name: 'X', href: '#', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.9 2H22l-7.7 8.8L23.5 22H16l-5-6-5.8 6H2l8.4-9.5L.8 2H8l4.6 5.5L18.9 2z"/>
      </svg>
    ) },
    { name: 'YouTube Kids', href: '#', svg: null },
  ]
  return (
    <footer className="mt-20 border-t bg-white/60 backdrop-blur">
      <div className="container-responsive py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-emerald-400" />
            <div>
              <div className="text-slate-800 font-semibold">Topmind Care</div>
              <div className="text-xs text-slate-500">Mindfulness for growing minds.</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a key={s.name} href={s.href} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow hover:shadow-lg text-slate-700 text-sm">
                {s.svg}
                <span>{s.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
          <div>© 2025 Mindery Kids</div>
          <div className="space-x-4">
            <a className="hover:text-slate-700" href="#">Privacy</a>
            <a className="hover:text-slate-700" href="#">Terms</a>
            <a className="hover:text-slate-700" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


