'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, MoveRight, Play, Plus, X } from 'lucide-react'

const destinations = [
  { number: '01', region: 'México', title: 'La quietud de Oaxaca', detail: '8 días · Desde 2.480€', image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=85' },
  { number: '02', region: 'Patagonia', title: 'Donde termina el mapa', detail: '11 días · Desde 4.260€', image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1200&q=85' },
  { number: '03', region: 'Colombia', title: 'El pulso de la Sierra', detail: '10 días · Desde 2.980€', image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85' },
]

const experiences = [
  { label: 'Aventura', title: 'Caminar hasta que el paisaje cambie', copy: 'Rutas remotas, guías locales y el lujo de no mirar el reloj.', image: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=1400&q=85' },
  { label: 'Lento', title: 'Quedarse un poco más', copy: 'Casas con historia, sobremesas largas y días sin agenda.', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=85' },
  { label: 'Cultura', title: 'Mirar de cerca', copy: 'Una conversación, un mercado, una mesa: el lugar contado por quienes lo habitan.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85' },
]

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: .8, ease: [.22, 1, .36, 1] } }

export function TravelLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeExperience, setActiveExperience] = useState(0)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 800], [0, 160])

  return (
    <main className="overflow-hidden bg-[#f3f0ea] text-[#202923]">
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-7">
        <div className="flex items-center justify-between border-b border-white/30 pb-4 text-white mix-blend-difference">
          <a href="#inicio" className="font-serif text-2xl tracking-[-.06em]" aria-label="Rastro, inicio">rastro<span className="text-[#9a6f5b]">.</span></a>
          <nav className="hidden items-center gap-9 text-[10px] font-medium uppercase tracking-[.22em] md:flex" aria-label="Navegación principal">
            <a href="#viajes" className="transition-opacity hover:opacity-60">Viajes</a>
            <a href="#manera" className="transition-opacity hover:opacity-60">Nuestra manera</a>
            <a href="#contacto" className="transition-opacity hover:opacity-60">Hablemos</a>
          </nav>
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-[.2em] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {menuOpen ? <X size={17} /> : <Menu size={17} />} Menú
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-2 flex flex-col gap-5 rounded-sm bg-[#202923] p-6 text-white md:hidden">
            <a href="#viajes" onClick={() => setMenuOpen(false)} className="font-serif text-3xl">Viajes</a>
            <a href="#manera" onClick={() => setMenuOpen(false)} className="font-serif text-3xl">Nuestra manera</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)} className="font-serif text-3xl">Hablemos</a>
          </motion.nav>}
        </AnimatePresence>
      </header>

      <section id="inicio" className="relative flex min-h-[92svh] items-end overflow-hidden bg-[#22362c] text-white sm:min-h-screen">
        <motion.div style={{ y: heroY }} className="absolute inset-0 -top-20 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#202923]/80 via-[#202923]/10 to-transparent" />
        <div className="relative z-10 w-full px-5 pb-9 sm:px-10 sm:pb-14 lg:px-16">
          <div className="mb-12 flex items-end justify-between gap-5 text-[10px] uppercase tracking-[.2em] text-white/75 sm:mb-16">
            <span>Viajes con sentido<br />para mirar más cerca</span><span className="hidden sm:block">Latitud 19°25′ N<br />Longitud 99°07′ O</span>
          </div>
          <motion.h1 {...fadeUp} className="max-w-5xl font-serif text-[clamp(4rem,11vw,10rem)] leading-[.8] tracking-[-.075em]">Viajar<br /><em className="ml-[12vw]">deja</em><br />rastro<span className="text-[#9a6f5b]">.</span></motion.h1>
          <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-white/30 pt-5 sm:flex-row sm:items-end">
            <p className="max-w-xs text-sm leading-relaxed text-white/85">Diseñamos viajes íntimos por Latinoamérica. Los que empiezan cuando el mapa se queda corto.</p>
            <a href="#viajes" className="group flex items-center gap-3 text-[10px] uppercase tracking-[.2em]">Explorar viajes <span className="flex size-11 items-center justify-center rounded-full border border-white/60 transition-colors group-hover:bg-[#d8cabe] group-hover:border-[#9a6f5b]"><ArrowUpRight size={15} /></span></a>
          </div>
        </div>
        <span className="absolute bottom-12 right-5 hidden -rotate-90 text-[9px] uppercase tracking-[.25em] text-white/70 sm:block">Desliza para comenzar</span>
      </section>

      <section id="manera" className="px-5 py-24 sm:px-10 sm:py-40 lg:px-16">
        <motion.div {...fadeUp} className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <div><p className="eyebrow">01 — Una forma de mirar</p><div className="mt-16 hidden h-px w-28 bg-[#d8cabe] lg:block" /></div>
          <div><h2 className="max-w-4xl font-serif text-[clamp(2.7rem,6.5vw,6.5rem)] leading-[.92] tracking-[-.06em]">No vendemos destinos.<br /><em>Te acercamos</em> a lo<br />que los hace vivos<span className="text-[#9a6f5b]">.</span></h2><p className="mt-12 max-w-md text-sm leading-7 text-[#526058]">Creemos que el viaje sucede en los detalles: el café que se toma de pie, el nombre que alguien te enseña a pronunciar, la carretera que no aparecía en el plan.</p></div>
        </motion.div>
        <div className="mt-24 grid grid-cols-3 border-y border-[#202923]/20 py-7 sm:mt-40 sm:ml-[25%] sm:max-w-2xl">
          {[['12', 'años diseñando'], ['34', 'rutas propias'], ['2.8k', 'historias compartidas']].map(([number, label]) => <div key={number}><div className="font-serif text-4xl tracking-[-.08em] sm:text-6xl">{number}</div><div className="mt-2 text-[9px] uppercase leading-4 tracking-[.15em] text-[#526058]">{label}</div></div>)}
        </div>
      </section>

      <section id="viajes" className="bg-[#d8cabe] px-5 py-20 text-[#202923] sm:px-10 sm:py-32 lg:px-16">
        <div className="flex items-end justify-between border-b border-[#202923]/30 pb-5"><div><p className="eyebrow">02 — Elige tu horizonte</p><h2 className="mt-10 font-serif text-5xl tracking-[-.07em] sm:text-7xl">Rutas con pulso</h2></div><span className="hidden text-[10px] uppercase tracking-[.2em] sm:block">3 historias<br />para empezar</span></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">{destinations.map((destination, i) => <motion.a {...fadeUp} transition={{ ...fadeUp.transition, delay: i * .1 }} href="#contacto" key={destination.number} className={`group relative overflow-hidden ${i === 1 ? 'md:mt-20' : ''} ${i === 2 ? 'md:mt-8' : ''}`}><div className="aspect-[.78] overflow-hidden rounded-t-[10rem] bg-[#92705f]"><div className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url(${destination.image})` }} /></div><div className="flex items-start justify-between border-b border-[#202923]/30 py-4"><div><p className="text-[9px] uppercase tracking-[.2em]">{destination.region}</p><h3 className="mt-2 font-serif text-3xl tracking-[-.05em]">{destination.title}</h3></div><span className="font-serif text-xl">{destination.number}</span></div><p className="mt-3 text-[10px] uppercase tracking-[.15em]">{destination.detail}</p></motion.a>)}</div>
      </section>

      <section className="bg-[#202923] px-5 py-24 text-[#f3f0ea] sm:px-10 sm:py-36 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-[#9a6f5b]">03 — La experiencia</p><h2 className="mt-14 max-w-sm font-serif text-5xl leading-[.9] tracking-[-.07em] sm:text-7xl">El viaje<br /><em>a tu manera.</em></h2><p className="mt-10 max-w-xs text-sm leading-6 text-white/60">Tres formas de entrar en un lugar. Ninguna se parece a la anterior.</p></div><div><div className="mb-8 flex flex-wrap gap-x-7 gap-y-3 border-b border-white/20 pb-5">{experiences.map((experience, i) => <button key={experience.label} onClick={() => setActiveExperience(i)} className={`text-[10px] uppercase tracking-[.2em] transition-colors ${activeExperience === i ? 'text-[#9a6f5b]' : 'text-white/50 hover:text-white'}`}>{experience.label}</button>)}</div><AnimatePresence mode="wait"><motion.div key={activeExperience} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .35 }} className="grid gap-8 sm:grid-cols-[1fr_.9fr] sm:items-end"><div className="aspect-[.9] overflow-hidden rounded-b-[10rem]"><div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${experiences[activeExperience].image})` }} /></div><div className="pb-5"><h3 className="font-serif text-4xl leading-[.95] tracking-[-.06em] sm:text-5xl">{experiences[activeExperience].title}</h3><p className="mt-6 max-w-xs text-sm leading-6 text-white/60">{experiences[activeExperience].copy}</p><a href="#contacto" className="mt-9 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-[#9a6f5b]">Descubrir <MoveRight size={15} /></a></div></motion.div></AnimatePresence></div></div>
      </section>

      <section className="px-5 py-24 sm:px-10 sm:py-36 lg:px-16"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">04 — Lo que dicen</p><div className="mt-12 flex size-16 items-center justify-center rounded-full border border-[#202923]/30"><Play size={15} fill="currentColor" /></div></div><div><blockquote className="max-w-4xl font-serif text-[clamp(2.6rem,5vw,5.5rem)] leading-[.94] tracking-[-.06em]">“Volvimos con menos fotos de las que esperábamos y muchas más historias de las que cabían en la maleta.”</blockquote><div className="mt-12 flex items-center gap-4 border-t border-[#202923]/20 pt-5"><div className="size-10 rounded-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80')] bg-cover" /><div><p className="text-xs">Clara y Mateo</p><p className="mt-1 text-[9px] uppercase tracking-[.16em] text-[#526058]">Ruta Oaxaca · 2024</p></div></div></div></div></section>

      <div className="overflow-hidden border-y border-[#202923]/20 py-5"><div className="marquee flex w-max gap-12 font-serif text-3xl italic tracking-[-.05em] text-[#526058]">Viajar con sentido <span className="text-[#9a6f5b]">✳</span> Lugares que se quedan <span className="text-[#9a6f5b]">✳</span> Viajar con sentido <span className="text-[#9a6f5b]">✳</span> Lugares que se quedan <span className="text-[#9a6f5b]">✳</span></div></div>

      <section id="contacto" className="bg-[#d8cabe] px-5 py-24 sm:px-10 sm:py-32 lg:px-16"><div className="grid gap-14 lg:grid-cols-[1.3fr_.7fr]"><div><p className="eyebrow">05 — Empecemos por aquí</p><h2 className="mt-14 max-w-3xl font-serif text-[clamp(3.8rem,8vw,8rem)] leading-[.82] tracking-[-.08em]">Cuéntanos<br /><em>qué buscas.</em></h2></div><form className="flex flex-col gap-5 self-end" onSubmit={(e) => e.preventDefault()}><label className="sr-only" htmlFor="name">Tu nombre</label><input id="name" placeholder="Tu nombre" className="border-b border-[#202923]/50 bg-transparent py-4 text-sm outline-none placeholder:text-[#202923]/60 focus:border-[#202923]" /><label className="sr-only" htmlFor="email">Tu email</label><input id="email" type="email" placeholder="Tu email" className="border-b border-[#202923]/50 bg-transparent py-4 text-sm outline-none placeholder:text-[#202923]/60 focus:border-[#202923]" /><label className="sr-only" htmlFor="idea">¿Qué tienes en mente?</label><textarea id="idea" placeholder="¿Qué tienes en mente?" rows={3} className="resize-none border-b border-[#202923]/50 bg-transparent py-4 text-sm outline-none placeholder:text-[#202923]/60 focus:border-[#202923]" /><button type="submit" className="mt-5 flex items-center justify-between border border-[#202923] px-5 py-4 text-[10px] uppercase tracking-[.2em] transition-colors hover:bg-[#202923] hover:text-[#f3f0ea]">Enviar consulta <ArrowUpRight size={15} /></button></form></div></section>

      <footer className="bg-[#202923] px-5 pb-8 pt-16 text-[#f3f0ea] sm:px-10 sm:pt-24 lg:px-16"><div className="flex flex-col justify-between gap-12 border-b border-white/20 pb-16 md:flex-row"><div><p className="font-serif text-[clamp(5rem,14vw,13rem)] leading-[.7] tracking-[-.1em]">rastro<span className="text-[#9a6f5b]">.</span></p><p className="mt-10 max-w-xs text-xs leading-5 text-white/50">Viajes diseñados para volver distintos.</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[10px] uppercase tracking-[.18em] text-white/70"><a href="#viajes" className="hover:text-[#9a6f5b]">Viajes</a><a href="#manera" className="hover:text-[#9a6f5b]">Nosotros</a><a href="#contacto" className="hover:text-[#9a6f5b]">Contacto</a><a href="#" className="hover:text-[#9a6f5b]">Instagram</a></div></div><div className="flex flex-col justify-between gap-4 pt-6 text-[9px] uppercase tracking-[.16em] text-white/40 sm:flex-row"><span>© 2025 Rastro viajes</span><span>Hecho para perderse un poco</span></div></footer>
    </main>
  )
}

