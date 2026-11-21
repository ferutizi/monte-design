import Image from "next/image";
import type { ReactNode } from "react";

const gutter = "px-[clamp(16px,4vw,56px)]";
const sectionY = "py-[clamp(64px,9vw,128px)]";
const eyebrow = "m-0 text-sm font-semibold uppercase tracking-[.14em] text-muted";
const h2 =
  "m-0 font-display text-[clamp(36px,4.5vw,64px)] font-bold leading-none tracking-[-0.03em]";

function Icon({ children, size = 24, className }: { children: ReactNode; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

const wifi = (
  <>
    <path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0" />
    <circle cx="12" cy="18.5" r="1" />
  </>
);

const facts = [
  {
    title: "[50] m al mar",
    text: "Cruzás y estás en la playa",
    icon: (
      <>
        <path d="M3 18c2 0 2-1.5 4.5-1.5S9.5 18 12 18s2-1.5 4.5-1.5S19 18 21 18" />
        <path d="M12 4v9M8 8l4-4 4 4" />
      </>
    ),
  },
  {
    title: "Hasta [4] huéspedes",
    text: "[2] dormitorios · [1] baño",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 19c0-3.3 2.7-5 6-5s6 1.7 6 5M15 14.5c3 0 6 1.4 6 4.5" />
      </>
    ),
  },
  {
    title: "Vista al mar",
    text: "Y balcón con vista abierta",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="12" rx="1" />
        <path d="M3 13h18M8 21h8" />
      </>
    ),
  },
  { title: "Wi‑Fi y cochera", text: "Aire acondicionado", icon: wifi },
];

const gallery = [
  { src: "/fotos/balcon.jpg", alt: "Living con sillón y balcón", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/fotos/cocina.jpg", alt: "Cocina equipada", span: "" },
  { src: "/fotos/comedor.jpg", alt: "Mesa de comedor", span: "" },
  { src: "/fotos/dormitorio.jpg", alt: "Dormitorio con cama doble", span: "sm:col-span-2", pos: "object-[center_70%]" },
  { src: "/fotos/tv.jpg", alt: "Living con TV y aire acondicionado", span: "", pos: "object-[center_55%]" },
  { src: "/fotos/bano.jpg", alt: "Baño completo", span: "", pos: "object-[center_60%]" },
  { src: "/fotos/edificio.jpg", alt: "Frente del edificio", span: "sm:col-span-2", pos: "object-[center_30%]" },
];

const amenities = [
  { label: "Ropa de cama y toallas", icon: <path d="M3 10h18v8H3zM6 10V6h12v4" /> },
  {
    label: "Cocina equipada",
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M4 9h16M8 6h1" />
      </>
    ),
  },
  { label: "Aire acondicionado", icon: <path d="M12 3v18M5 7l14 10M19 7L5 17" /> },
  { label: "Cochera cubierta", icon: <path d="M3 17h18M5 17l2-6h10l2 6M8 20h.01M16 20h.01" /> },
  { label: "Wi‑Fi de alta velocidad", icon: wifi },
  {
    label: "TV en el living",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="12" rx="1" />
        <path d="M8 21h8" />
      </>
    ),
  },
];

const distances = [
  { place: "Playa", time: "[1 min] a pie" },
  { place: "Centro y restaurantes", time: "[5 min] a pie" },
  { place: "Supermercado", time: "[3 min] a pie" },
  { place: "Terminal / aeropuerto", time: "[15 min] en auto" },
];

const rates = [
  { season: "Temporada baja", price: "[$ 00.000]", detail: "[Mar a Nov] · Mínimo [2] noches", featured: false },
  { season: "Temporada alta", price: "[$ 00.000]", detail: "[Dic a Feb] · Mínimo [7] noches", featured: true },
  { season: "Fines de semana largos", price: "[$ 00.000]", detail: "Feriados y Semana Santa", featured: false },
];

const navLinks = [
  { href: "#galeria", label: "Galería" },
  { href: "#depto", label: "El departamento" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#tarifas", label: "Tarifas" },
];

function Field({ label, children, grow }: { label: string; children: ReactNode; grow: string }) {
  return (
    <label className={`${grow} flex flex-col gap-1 rounded-[14px] bg-sand px-4 py-2.5`}>
      <span className="text-xs font-semibold uppercase tracking-[.06em] text-muted">{label}</span>
      {children}
    </label>
  );
}

export default function Home() {
  return (
    <div id="inicio" className="w-full bg-sand font-sans text-ink">
      {/* HERO */}
      <header
        className={`relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#1C6E8C] pt-7 pb-10 ${gutter}`}
      >
        <Image
          src="/fotos/mar.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,42,58,.35)_0%,rgba(11,42,58,0)_30%,rgba(11,42,58,0)_55%,rgba(11,42,58,.72)_100%)]"
        />

        <nav className="relative flex items-center justify-between gap-6 text-white">
          <a
            href="#inicio"
            className="flex items-center gap-2.5 font-display text-[22px] font-bold tracking-[-0.01em] text-white no-underline hover:text-white"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#FFFFFF" strokeWidth={2} aria-hidden="true">
              <circle cx="14" cy="10" r="5" />
              <path d="M2 20c3 0 3-2 6-2s3 2 6 2 3-2 6-2 3 2 6 2" />
              <path d="M2 25c3 0 3-2 6-2s3 2 6 2 3-2 6-2 3 2 6 2" />
            </svg>
            Casa Marea
          </a>
          <div className="hidden items-center gap-8 text-[15px] font-medium min-[821px]:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-white no-underline hover:text-white/80">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#reservar"
            className="inline-flex min-h-11 items-center rounded-full bg-white px-[22px] py-3.5 text-[15px] font-semibold text-ink no-underline"
          >
            Reservar
          </a>
        </nav>

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-7 text-white">
          <p className="m-0 inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[.14em]">
            <span className="inline-block h-0.5 w-9 bg-accent" />
            Frente al mar · [Ciudad de playa]
          </p>
          <h1 className="m-0 text-accent font-display text-[clamp(64px,13vw,200px)] font-bold leading-[.86] tracking-[-0.045em]">
            Tu verano
            <br />
            empieza acá.
          </h1>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <p className="m-0 max-w-[480px] text-[clamp(17px,1.6vw,21px)] leading-normal text-ink">
              Un departamento luminoso a pasos de la arena, con el mar a la vista y todo listo para que
              solo te ocupes de descansar.
            </p>

            <form
              id="reservar"
              className="flex flex-[0_1_760px] scroll-mt-6 flex-wrap items-stretch gap-1.5 rounded-[20px] bg-white p-2.5 text-ink shadow-[0_30px_60px_rgba(11,42,58,.35)]"
            >
              <Field label="Llegada" grow="flex-[1_1_150px]">
                <input type="date" name="llegada" className="border-0 bg-transparent p-0 text-base text-ink" />
              </Field>
              <Field label="Salida" grow="flex-[1_1_150px]">
                <input type="date" name="salida" className="border-0 bg-transparent p-0 text-base text-ink" />
              </Field>
              <Field label="Huéspedes" grow="flex-[1_1_120px]">
                <select name="huespedes" className="border-0 bg-transparent p-0 text-base text-ink">
                  <option>2 personas</option>
                  <option>3 personas</option>
                  <option>4 personas</option>
                </select>
              </Field>
              <button
                type="button"
                className="min-h-14 flex-[1_1_180px] cursor-pointer rounded-[14px] border-0 bg-accent px-[22px] py-4 text-base font-bold text-ink"
              >
                Consultar disponibilidad
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* FACTS STRIP */}
      <section className={`bg-ink py-7 text-white ${gutter}`}>
        <div className="mx-auto grid max-w-[1328px] grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
          {facts.map((f) => (
            <div key={f.title} className="flex items-center gap-3.5">
              <Icon size={26}>{f.icon}</Icon>
              <div>
                <div className="font-display text-xl font-semibold">{f.title}</div>
                <div className="text-sm text-mist">{f.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className={`pt-[clamp(64px,9vw,128px)] ${gutter}`}>
        <div className="mx-auto flex max-w-[1328px] flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="m-0 max-w-[820px] font-display text-[clamp(40px,6vw,88px)] font-bold leading-[.95] tracking-[-0.035em]">
              Mirá dónde te vas a despertar.
            </h2>
            <a href="#galeria" className="inline-flex min-h-11 items-center gap-2 text-base font-semibold">
              Ver todas las fotos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="grid auto-rows-[300px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g) => (
              <div key={g.src} className={`relative overflow-hidden rounded-3xl bg-[#E9E4DC] ${g.span}`}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`object-cover ${g.pos ?? "object-center"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EL DEPARTAMENTO */}
      <section id="depto" className={`${sectionY} ${gutter}`}>
        <div className="mx-auto flex max-w-[1328px] flex-wrap items-center gap-[clamp(32px,5vw,80px)]">
          <div className="relative min-h-[640px] flex-[1_1_520px] overflow-hidden rounded-[32px] bg-[#E9E4DC]">
            <Image
              src="/fotos/living.jpg"
              alt="Living comedor con sillón turquesa y salida al balcón"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_60%]"
            />
          </div>
          <div className="flex flex-[1_1_420px] flex-col gap-7">
            <p className={eyebrow}>El departamento</p>
            <h2 className={h2}>Luz, brisa y el mar a la vista.</h2>
            <p className="m-0 text-lg leading-[1.65] text-body">
              [Contá en dos o tres frases qué hace especial al departamento: la vista, la tranquilidad del
              edificio, lo cerca que queda todo. Esta es la parte donde el huésped se imagina ahí.]
            </p>
            <ul className="m-0 grid list-none grid-cols-2 gap-x-6 gap-y-[18px] p-0 text-base font-medium">
              {amenities.map((a) => (
                <li key={a.label} className="flex items-center gap-3">
                  <Icon size={22} className="shrink-0">
                    {a.icon}
                  </Icon>
                  {a.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FULL-BLEED QUOTE */}
      <section className={`flex items-end bg-ink py-[clamp(64px,9vw,140px)] ${gutter}`}>
        <p className="m-0 mx-auto w-full max-w-[1328px] font-display text-[clamp(40px,7vw,112px)] font-semibold leading-[.95] tracking-[-0.04em] text-white">
          Despertate con el sonido de las olas.
        </p>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" className={`${sectionY} ${gutter}`}>
        <div className="mx-auto flex max-w-[1328px] flex-wrap-reverse items-center gap-[clamp(32px,5vw,80px)]">
          <div className="flex flex-[1_1_420px] flex-col gap-7">
            <p className={eyebrow}>Ubicación</p>
            <h2 className={h2}>Todo cerca. Sobre todo, el mar.</h2>
            <div className="flex flex-col border-b border-line">
              {distances.map((d) => (
                <div key={d.place} className="flex justify-between gap-4 border-t border-line py-[18px] text-[17px]">
                  <span>{d.place}</span>
                  <span className="font-display font-semibold">{d.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="map-placeholder relative min-h-[520px] flex-[1_1_520px] overflow-hidden rounded-[32px]">
            <div className="absolute top-[46%] left-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center gap-1.5">
              <span className="rounded-xl bg-ink px-3.5 py-2.5 text-sm font-semibold whitespace-nowrap text-white">
                Casa Marea
              </span>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#FF7A59" stroke="#0B2A3A" strokeWidth={1.4} aria-hidden="true">
                <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" fill="#FFFFFF" />
              </svg>
            </div>
            <span className="absolute bottom-4 left-4 rounded-full bg-sand/90 px-3 py-2 text-xs leading-none font-medium tracking-[.04em] text-ink">
              Mapa embebido
            </span>
          </div>
        </div>
      </section>

      {/* TARIFAS */}
      <section id="tarifas" className={`bg-sand-dark ${sectionY} ${gutter}`}>
        <div className="mx-auto flex max-w-[1328px] flex-col gap-12">
          <h2 className={h2}>Tarifas por temporada</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
            {rates.map((r) => (
              <div
                key={r.season}
                className={`flex flex-col gap-4 rounded-3xl p-8 ${r.featured ? "bg-ink text-white" : "bg-sand"}`}
              >
                <p
                  className={`m-0 text-sm font-semibold uppercase tracking-[.1em] ${r.featured ? "text-accent" : "text-muted"}`}
                >
                  {r.season}
                </p>
                <p className="m-0 font-display text-5xl font-bold tracking-[-0.03em]">
                  {r.price}
                  <span className={`text-lg font-medium ${r.featured ? "text-mist" : "text-muted"}`}> / noche</span>
                </p>
                <p className={`m-0 text-base ${r.featured ? "text-mist" : "text-body"}`}>{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className={`relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#1C6E8C] py-[clamp(64px,8vw,120px)] text-center ${gutter}`}
      >
        <Image src="/fotos/balcon.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />
        <div className="relative flex max-w-[980px] flex-col items-center gap-8 text-white">
          <h2 className="m-0 font-display text-[clamp(48px,9vw,136px)] font-bold leading-[.9] tracking-[-0.045em]">
            Las fechas de verano vuelan.
          </h2>
          <p className="m-0 max-w-[560px] text-[clamp(17px,1.6vw,21px)] leading-normal text-white/90">
            Escribinos y te respondemos en el día con disponibilidad y precio final.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#reservar"
              className="inline-flex min-h-14 items-center gap-2.5 rounded-full bg-accent px-[30px] py-[18px] text-[17px] font-bold text-ink no-underline"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B2A3A" strokeWidth={2} aria-hidden="true">
                <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
              </svg>
              Escribir por WhatsApp
            </a>
            <a
              href="#reservar"
              className="inline-flex min-h-14 items-center rounded-full border-[1.5px] border-white/80 px-[30px] py-[18px] text-[17px] font-semibold text-white no-underline hover:text-white"
            >
              Consultar fechas
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`bg-ink py-10 text-mist ${gutter}`}>
        <div className="mx-auto flex max-w-[1328px] flex-wrap justify-between gap-5 text-[15px]">
          <span className="font-display text-xl font-bold text-white">Casa Marea</span>
          <span>[Dirección] · [Ciudad de playa]</span>
          <span>[@instagram] · [teléfono]</span>
        </div>
      </footer>
    </div>
  );
}
