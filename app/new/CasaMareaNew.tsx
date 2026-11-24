"use client";
/* eslint-disable @next/next/no-img-element -- el diseño anima/recorta las <img> con CSS (clip-path, scale, parallax) */

import { useEffect, useRef, useState, type ReactNode } from "react";

const WHATSAPP = "5490000000000";
const waLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

const heroSlides = [
  { src: "/fotos/mar.jpg", alt: "Vista al mar y la playa desde la ventana del departamento" },
  { src: "/fotos/balcon.jpg", alt: "Living con sillón y salida al balcón" },
  { src: "/fotos/living.jpg", alt: "Living comedor con sillón turquesa y balcón" },
];

const marquee = [
  "Vista al océano",
  "50 pasos a la playa",
  "Balcón con parrilla",
  "Atardeceres dorados",
  "Piscina climatizada",
  "Check-in flexible",
];

const stats = [
  { n: 68, label: "m² totales + balcón" },
  { n: 4, label: "huéspedes cómodos" },
  { n: 50, label: "pasos hasta el mar" },
  { n: 7, label: "piso, vista abierta" },
];

const gallery = [
  { src: "/fotos/living.jpg", alt: "Living comedor con sillón turquesa", caption: "Living comedor" },
  { src: "/fotos/dormitorio.jpg", alt: "Dormitorio con cama doble", caption: "Dormitorio" },
  { src: "/fotos/edificio.jpg", alt: "Frente del edificio", caption: "Frente del edificio" },
  { src: "/fotos/cocina.jpg", alt: "Cocina equipada", caption: "Cocina equipada" },
  { src: "/fotos/comedor.jpg", alt: "Mesa de comedor", caption: "Comedor" },
  { src: "/fotos/bano.jpg", alt: "Baño completo", caption: "Baño completo" },
];
const delays = ["", " d1", " d2"];

const rooms = [
  { src: "/fotos/tv.jpg", alt: "Living con TV y aire acondicionado", name: "Living", text: 'Ventanal de piso a techo, sofá cama y Smart TV 55".' },
  { src: "/fotos/dormitorio.jpg", alt: "Dormitorio con cama doble", name: "Dormitorio", text: "Cama queen, sábanas de algodón egipcio y blackout." },
  { src: "/fotos/cocina.jpg", alt: "Cocina equipada", name: "Cocina", text: "Integrada, con cafetera de cápsulas, horno y lavavajillas." },
  { src: "/fotos/balcon.jpg", alt: "Living con salida al balcón", name: "Balcón", text: "Parrilla, mesa para 4 y reposeras para ver el atardecer." },
];

const amenities: { title: string; text: string; icon: ReactNode }[] = [
  { title: "Wi-Fi 300 Mb", text: "Ideal para trabajo remoto", icon: <><path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" /><circle cx="12" cy="19.5" r=".8" /></> },
  { title: "Aire frío / calor", text: "En living y dormitorio", icon: <path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9" /> },
  { title: "Piscina climatizada", text: "Abierta todo el año", icon: <path d="M3 12h18M5 12V8a3 3 0 0 1 6 0M3 12v3a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-3" /> },
  { title: "Cochera cubierta", text: "1 lugar incluido", icon: <><rect x="3" y="11" width="18" height="7" rx="2" /><path d="M6 11l2-5h8l2 5M7 18v2M17 18v2" /></> },
  { title: "Seguridad 24 h", text: "Acceso con llave digital", icon: <><path d="M4 21h16M6 21V10l6-6 6 6v11" /><path d="M10 21v-6h4v6" /></> },
  { title: "Pet friendly", text: "Mascotas pequeñas", icon: <><circle cx="7" cy="7" r="2" /><circle cx="17" cy="7" r="2" /><circle cx="4" cy="13" r="2" /><circle cx="20" cy="13" r="2" /><path d="M12 13c-3 0-5 3-5 5s2 3 5 3 5-1 5-3-2-5-5-5z" /></> },
  { title: "Parrilla en balcón", text: "Con utensilios", icon: <path d="M5 21l2-9h10l2 9M8 12V7a4 4 0 0 1 8 0v5M3 21h18" /> },
  { title: "Lavarropas", text: "Y tendedero en el lavadero", icon: <><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="13" r="4" /><path d="M8 6h.01M11 6h.01" /></> },
];

const distances = [
  ["Playa", "1 min"],
  ["Restaurantes y cafés", "4 min"],
  ["Supermercado", "6 min"],
  ["Centro y feria artesanal", "10 min"],
  ["Aeropuerto", "25 min"],
];

const reviews = [
  { quote: "Abrir la cortina a la mañana y ver el mar fue lo mejor del viaje. Impecable, mejor que en las fotos.", initials: "LM", name: "Lucía M.", meta: "Enero · viajó en pareja" },
  { quote: "La ubicación es imbatible. Bajábamos a la playa con los chicos en un minuto.", initials: "JP", name: "Juan P.", meta: "Febrero · familia" },
  { quote: "Trabajé remoto una semana con vista al océano. El Wi-Fi vuela.", initials: "SR", name: "Sofía R.", meta: "Marzo · viaje de trabajo" },
];

const rates = [
  { season: "Temporada baja", months: "Abr — Nov", price: 120, perks: ["Mínimo 2 noches", "Check-in flexible", "Cancelación gratis 7 días antes"], hot: false },
  { season: "Temporada alta", months: "Ene — Feb", price: 210, perks: ["Mínimo 5 noches", "Kit de playa incluido", "Limpieza de mitad de estadía"], hot: true },
  { season: "Media temporada", months: "Dic · Mar", price: 160, perks: ["Mínimo 3 noches", "Late check-out sin cargo", "Cancelación gratis 14 días antes"], hot: false },
];

/** Palabra del título del hero que sube con retraso. */
function Word({ delay, children }: { delay: number; children: ReactNode }) {
  return (
    <span className="w">
      <span style={{ animationDelay: `${delay}s` }}>{children}</span>
    </span>
  );
}

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

export function CasaMareaNew() {
  const rootRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const waRef = useRef<HTMLAnchorElement>(null);
  const expandRef = useRef<HTMLElement>(null);
  const expandStickyRef = useRef<HTMLDivElement>(null);
  const hScrollRef = useRef<HTMLDivElement>(null);
  const hTrackRef = useRef<HTMLDivElement>(null);
  const hProgRef = useRef<HTMLElement>(null);
  const finalRef = useRef<HTMLElement>(null);
  const finalImgRef = useRef<HTMLImageElement>(null);
  const inRef = useRef<HTMLInputElement>(null);
  const bookLinkRef = useRef<HTMLAnchorElement>(null);

  /* --- slideshow del hero --- */
  const [slide, setSlide] = useState(0);
  const [cycle, setCycle] = useState(0);
  const goTo = (i: number) => {
    setSlide((i + heroSlides.length) % heroSlides.length);
    setCycle((c) => c + 1);
  };
  useEffect(() => {
    const t = setTimeout(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
      setCycle((c) => c + 1);
    }, 6000);
    return () => clearTimeout(t);
  }, [slide, cycle]);

  /* --- reserva → WhatsApp --- */
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 adultos");
  const bookHref = waLink(
    `Hola! Quiero consultar disponibilidad en Casa Marea.\nLlegada: ${checkIn || "a definir"}\nSalida: ${checkOut || "a definir"}\nHuéspedes: ${guests}`,
  );
  useEffect(() => {
    // La fecha mínima se calcula en el navegador para no desfasar el HTML del servidor.
    if (inRef.current) inRef.current.min = new Date().toISOString().slice(0, 10);
  }, []);

  /* --- lightbox --- */
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const lbOpen = lbIndex !== null;
  const showLb = (i: number) => setLbIndex((i + gallery.length) % gallery.length);
  useEffect(() => {
    if (!lbOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLbIndex(null);
      if (e.key === "ArrowRight") setLbIndex((i) => ((i ?? 0) + 1) % gallery.length);
      if (e.key === "ArrowLeft") setLbIndex((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length);
    };
    addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      removeEventListener("keydown", onKey);
    };
  }, [lbOpen]);

  /* --- aparición al scrollear + contadores --- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          el.classList.add("in");
          io.unobserve(el);
          const counter = el.classList.contains("pre") && el.querySelector<HTMLElement>("[data-count]");
          if (counter) {
            const end = Number(counter.dataset.count);
            const t0 = performance.now();
            const step = (t: number) => {
              const p = Math.min((t - t0) / 1400, 1);
              counter.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        }),
      { threshold: 0.15 },
    );
    // Lo visible al cargar queda quieto: sólo se anima lo que arranca fuera de pantalla.
    root.querySelectorAll<HTMLElement>(".rv").forEach((el) => {
      if (!reduce && el.getBoundingClientRect().top > innerHeight) el.classList.add("pre");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  /* --- efectos ligados al scroll --- */
  useEffect(() => {
    const nav = navRef.current!;
    const wa = waRef.current!;
    const ex = expandRef.current!;
    const exS = expandStickyRef.current!;
    const hs = hScrollRef.current!;
    const ht = hTrackRef.current!;
    const hp = hProgRef.current!;
    const fin = finalRef.current!;
    const fi = finalImgRef.current!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const y = scrollY;
      const vh = innerHeight;
      nav.classList.toggle("solid", y > vh * 0.85);
      wa.classList.toggle("show", y > vh * 0.6);

      // imagen que se expande
      const er = ex.getBoundingClientRect();
      const p = clamp(-er.top / (er.height - vh));
      const e = 1 - Math.pow(1 - clamp(p / 0.7), 3);
      exS.style.setProperty("--ins", `${18 * (1 - e)}%`);
      exS.style.setProperty("--insx", `${(innerWidth < 860 ? 6 : 26) * (1 - e)}%`);
      exS.style.setProperty("--rad", `${28 * (1 - e)}px`);
      exS.style.setProperty("--sc", String(1.25 - 0.25 * e));
      exS.style.setProperty("--shade", String(0.1 + 0.3 * e));
      exS.style.setProperty("--to", String(clamp((p - 0.45) / 0.3)));

      // espacios en horizontal
      const hr = hs.getBoundingClientRect();
      const hpv = clamp(-hr.top / (hr.height - vh));
      const max = ht.scrollWidth - innerWidth;
      ht.style.transform = `translateX(${-max * hpv}px)`;
      hp.style.setProperty("--hp", String(hpv));

      // parallax final
      const fr = fin.getBoundingClientRect();
      if (fr.top < vh && fr.bottom > 0) fi.style.setProperty("--py", `${(fr.top / vh) * -8}%`);
    };

    if (reduce) {
      exS.style.setProperty("--ins", "0%");
      exS.style.setProperty("--insx", "0%");
      exS.style.setProperty("--to", "1");
      onScroll();
      return;
    }
    const onScrollFrame = () => requestAnimationFrame(onScroll);
    addEventListener("scroll", onScrollFrame, { passive: true });
    addEventListener("resize", onScroll);
    onScroll();
    return () => {
      removeEventListener("scroll", onScrollFrame);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="cm" ref={rootRef}>
      {/* NAV */}
      <header className="nav" ref={navRef}>
        <a href="#top" className="logo">
          <span className="logo-mark" />
          Casa Marea
        </a>
        <nav className="nav-links">
          <a href="#depto">El depto</a>
          <a href="#galeria">Galería</a>
          <a href="#espacios">Espacios</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#tarifas">Tarifas</a>
        </nav>
        <a href="#reservar" className="btn btn-sun">
          Reservar
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="slides">
          {heroSlides.map((s, i) => (
            <div key={s.src} className={`slide${i === slide ? " on" : ""}`}>
              <img src={s.src} alt={s.alt} fetchPriority={i === 0 ? "high" : undefined} />
            </div>
          ))}
        </div>
        <div className="grain" />

        <div className="hero-meta">
          <div className="price-pill">
            <small>desde</small>
            <b>USD 120</b>
            <small>/noche</small>
          </div>
          <div className="rating">
            <span className="stars">★★★★★</span>
            <span>
              <b>4,97</b> · 186 reseñas
            </span>
          </div>
        </div>

        <div className="hero-inner">
          <span className="hero-tag">
            <span className="dot" />
            Disponible para esta temporada · Bahía Serena
          </span>
          <h1>
            <span>
              <Word delay={0.15}>Despertá</Word>
            </span>
            <br />
            <span>
              <Word delay={0.27}>frente</Word> <Word delay={0.39}>al</Word>
            </span>{" "}
            <em>
              <Word delay={0.51}>mar.</Word>
            </em>
          </h1>
          <div className="hero-row">
            <p className="hero-copy">
              Departamento de 2 ambientes con balcón al océano, a 50 pasos de la arena. Atardeceres incluidos.
            </p>
            <form
              className="book"
              onSubmit={(e) => {
                e.preventDefault();
                bookLinkRef.current?.click();
              }}
            >
              <label>
                <small>Llegada</small>
                <input
                  type="date"
                  ref={inRef}
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (checkOut && checkOut < e.target.value) setCheckOut("");
                  }}
                />
              </label>
              <label>
                <small>Salida</small>
                <input
                  type="date"
                  min={checkIn || undefined}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </label>
              <label>
                <small>Huéspedes</small>
                <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                  <option>2 adultos</option>
                  <option>1 adulto</option>
                  <option>3 personas</option>
                  <option>4 personas</option>
                </select>
              </label>
              <a className="btn btn-sun" ref={bookLinkRef} href={bookHref} target="_blank" rel="noopener">
                Ver disponibilidad <span className="arr">→</span>
              </a>
            </form>
          </div>
          <div className="hero-foot">
            <div className="slide-ctrl">
              <span>
                0{slide + 1} / 0{heroSlides.length}
              </span>
              <div className="bars">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    aria-label={`Foto ${i + 1}`}
                    className={i === slide ? "on" : i < slide ? "done" : ""}
                    onClick={() => goTo(i)}
                  >
                    {/* la key reinicia la animación de la barra en cada cambio */}
                    <i key={i === slide ? cycle : "idle"} />
                  </button>
                ))}
              </div>
            </div>
            <span className="hide-m">Wi-Fi 300 Mb · Cochera · Pet friendly</span>
            <a href="#depto" className="scroll-cue">
              <span />
              Descubrir
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="intro" id="depto">
        <div className="wrap">
          <div className="intro-grid">
            <p className="eyebrow rv">— El departamento</p>
            <div>
              <h2 className="rv">
                Un refugio luminoso donde la{" "}
                <span className="inline-img">
                  <img src="/fotos/mar.jpg" alt="" />
                </span>{" "}
                arena empieza en tu <em>puerta</em> y el día termina en el balcón.
              </h2>
              <p className="lead rv d1">
                Pensado para parejas y familias chicas que buscan calma sin resignar nada: cocina equipada, ropa
                blanca de hotel, aire acondicionado en todos los ambientes y una terraza que mira directo al horizonte.
              </p>
            </div>
          </div>
          <div className="stats">
            {stats.map((s, i) => (
              <div key={s.label} className={`stat rv${["", " d1", " d2", " d3"][i]}`}>
                <b data-count={s.n}>{s.n}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPANDING IMAGE */}
      <section className="expand" ref={expandRef}>
        <div className="expand-sticky" ref={expandStickyRef}>
          <div className="expand-media">
            <img src="/fotos/mar.jpg" alt="Vista al mar desde el departamento" />
          </div>
          <div className="expand-text">
            <p className="eyebrow">La vista desde el balcón</p>
            <h3>
              Todo el
              <br />
              <em>horizonte</em> es tuyo
            </h3>
            <p>Orientación norte · sol todo el día</p>
          </div>
          <div className="expand-cap">
            <span>Piso 7 · Frente costero</span>
            <span>Foto real del balcón</span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="galeria">
        <div className="wrap">
          <div className="section-head">
            <h2 className="rv">
              Mirá cada
              <br />
              <em className="serif" style={{ color: "var(--sea)" }}>
                rincón
              </em>
            </h2>
            <p className="rv d1">
              Fotos del departamento y del complejo. Tocá cualquier imagen para verla en pantalla completa.
            </p>
          </div>
          <div className="bento">
            {gallery.map((g, i) => (
              <figure
                key={g.src}
                className={`tile t${i + 1} rv${delays[i % 3]}`}
                onClick={() => showLb(i)}
              >
                <img src={g.src} alt={g.alt} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
                {i === gallery.length - 1 && <div className="see-all">+12 fotos</div>}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* HORIZONTAL SPACES */}
      <section className="spaces" id="espacios">
        <div className="h-scroll" ref={hScrollRef}>
          <div className="h-sticky">
            <div className="h-head">
              <h2>
                Cuatro espacios,
                <br />
                <em>una sola vista.</em>
              </h2>
              <div className="h-prog">
                <i ref={hProgRef} />
              </div>
            </div>
            <div className="h-track" ref={hTrackRef}>
              {rooms.map((r, i) => (
                <article key={r.name} className="room">
                  <div className="ph">
                    <img src={r.src} alt={r.alt} loading="lazy" />
                  </div>
                  <div className="meta">
                    <div>
                      <span className="num">0{i + 1}</span>
                      <h4>{r.name}</h4>
                      <p>{r.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="amen">
        <div className="wrap amen-grid">
          <div className="amen-photo rv">
            <img src="/fotos/comedor.jpg" alt="Comedor del departamento" loading="lazy" />
            <span className="chip">☀ 28° promedio en verano</span>
            <div className="float">
              <b>Todo incluido</b>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>
                Toallas de playa, sombrilla y 2 reposeras para llevar a la arena.
              </span>
            </div>
          </div>
          <div>
            <p className="eyebrow rv">— Comodidades</p>
            <h2
              className="serif rv d1"
              style={{ fontSize: "clamp(44px,5.4vw,84px)", lineHeight: 0.95, letterSpacing: "-.03em", marginTop: 14 }}
            >
              Llegás con la valija.
              <br />
              <em style={{ color: "var(--sea)" }}>Lo demás está.</em>
            </h2>
            <div className="amen-list">
              {amenities.map((a, i) => (
                <div key={a.title} className={`am rv${i % 2 ? " d1" : ""}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {a.icon}
                  </svg>
                  <div>
                    <b>{a.title}</b>
                    <span>{a.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="loc" id="ubicacion">
        <div className="wrap">
          <div className="loc-card rv">
            <div className="map" role="img" aria-label="Mapa ilustrativo de la ubicación">
              <svg viewBox="0 0 600 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <pattern id="cm-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M28 0H0V28" fill="none" stroke="rgba(244,238,228,.06)" />
                  </pattern>
                  <linearGradient id="cm-sea" x1="0" x2="1">
                    <stop offset="0" stopColor="#1D5E66" />
                    <stop offset="1" stopColor="#2F7C83" />
                  </linearGradient>
                </defs>
                <rect width="600" height="560" fill="url(#cm-grid)" />
                <path
                  d="M600 0 L420 0 C390 90 450 150 400 230 C350 310 430 380 380 460 C360 500 380 540 370 560 L600 560Z"
                  fill="url(#cm-sea)"
                />
                <path
                  d="M420 0 C390 90 450 150 400 230 C350 310 430 380 380 460 C360 500 380 540 370 560"
                  fill="none"
                  stroke="#E9D9BB"
                  strokeWidth="14"
                  opacity=".55"
                />
                <g fill="none" stroke="rgba(244,238,228,.22)" strokeWidth="2">
                  <path d="M0 140 H380" />
                  <path d="M0 300 H360" />
                  <path d="M0 430 H370" />
                  <path d="M120 0 V560" />
                  <path d="M250 0 V560" />
                </g>
                <path d="M40 60 Q200 120 330 260" fill="none" stroke="#FFB596" strokeWidth="2" strokeDasharray="6 8" />
                <text
                  x="452"
                  y="320"
                  fontSize="34"
                  fontStyle="italic"
                  fill="rgba(255,255,255,.5)"
                  style={{ fontFamily: "var(--serif)" }}
                >
                  Océano
                </text>
              </svg>
              <span className="poi" style={{ left: "14%", top: "20%" }}>Centro</span>
              <span className="poi" style={{ left: "24%", top: "56%" }}>Supermercado</span>
              <span className="poi" style={{ left: "30%", top: "80%" }}>Puerto</span>
              <span className="poi" style={{ left: "8%", top: "44%" }}>Restaurantes</span>
              <div className="pin">
                <b>Casa Marea</b>
                <i />
                <u />
              </div>
            </div>
            <div className="loc-info">
              <p className="eyebrow" style={{ color: "#FFB596" }}>
                — Ubicación
              </p>
              <h2>
                En el mejor tramo de <em>Bahía Serena</em>
              </h2>
              <p style={{ opacity: 0.75, maxWidth: 440 }}>
                Sobre la costanera, en una zona tranquila pero a minutos caminando de todo. La dirección exacta se
                comparte al confirmar la reserva.
              </p>
              <div className="dist">
                {distances.map(([place, time]) => (
                  <div key={place}>
                    <span>{place}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <div className="wrap">
          <div className="score rv">
            <b>4,97</b>
            <div>
              <div style={{ color: "var(--sun)", fontSize: 22, letterSpacing: 3 }}>★★★★★</div>
              <p style={{ color: "var(--muted)" }}>
                Promedio de 186 reseñas verificadas
                <br />
                Superanfitrión desde 2021
              </p>
            </div>
          </div>
          <div className="rev-grid">
            {reviews.map((r, i) => (
              <div key={r.name} className={`rev${i === 0 ? " big" : ""} rv${delays[i]}`}>
                <q>{r.quote}</q>
                <div className="who">
                  <span className="av">{r.initials}</span>
                  <div>
                    {r.name}
                    <small>{r.meta}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RATES */}
      <section className="rates" id="tarifas">
        <div className="wrap">
          <div className="section-head">
            <h2 className="rv">
              Tarifas por
              <br />
              <em className="serif" style={{ color: "var(--sea)" }}>
                temporada
              </em>
            </h2>
            <p className="rv d1">
              Precios por noche para hasta 4 huéspedes. Estadía mínima según temporada. 10% off reservando 7 noches o
              más.
            </p>
          </div>
          <div className="rate-grid">
            {rates.map((r, i) => (
              <div key={r.season} className={`rate${r.hot ? " hot" : ""} rv${delays[i]}`}>
                {r.hot && <span className="badge">Más pedida</span>}
                <h4>{r.season}</h4>
                <div className="months">{r.months}</div>
                <div className="p">
                  ${r.price} <small>USD / noche</small>
                </div>
                <ul>
                  {r.perks.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final" id="reservar" ref={finalRef}>
        <img ref={finalImgRef} src="/fotos/balcon.jpg" alt="Living con salida al balcón" loading="lazy" />
        <div className="in">
          <p className="eyebrow rv" style={{ marginBottom: 18 }}>
            Las fechas de verano vuelan
          </p>
          <h2 className="rv d1">
            Tu próximo
            <br />
            <em>atardecer</em> te espera
          </h2>
          <p className="rv d2">Escribinos y te respondemos en menos de una hora con disponibilidad y precio final.</p>
          <div className="ctas rv d3">
            <a
              className="btn btn-sun"
              href={waLink("Hola! Quiero consultar disponibilidad en Casa Marea")}
              target="_blank"
              rel="noopener"
            >
              Consultar por WhatsApp <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="#top">
              Elegir fechas
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <a href="#top" className="logo">
            <span className="logo-mark" />
            Casa Marea
          </a>
          <span>Costanera 1240, piso 7 · Bahía Serena</span>
          <span>hola@casamarea.com · Reservas también por Airbnb y Booking</span>
        </div>
      </footer>

      <a
        className="wa"
        ref={waRef}
        href={waLink("Hola! Quiero consultar disponibilidad en Casa Marea")}
        target="_blank"
        rel="noopener"
        aria-label="Escribir por WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3z" />
        </svg>
      </a>

      {/* LIGHTBOX */}
      <div
        className={`lb${lbOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Galería"
        onClick={(e) => {
          if (e.target === e.currentTarget) setLbIndex(null);
        }}
      >
        <button type="button" className="x" aria-label="Cerrar" onClick={() => setLbIndex(null)}>
          ✕
        </button>
        <button type="button" className="prev" aria-label="Anterior" onClick={() => showLb((lbIndex ?? 0) - 1)}>
          ←
        </button>
        {lbOpen && <img src={gallery[lbIndex].src} alt={gallery[lbIndex].alt} />}
        <button type="button" className="next" aria-label="Siguiente" onClick={() => showLb((lbIndex ?? 0) + 1)}>
          →
        </button>
        <span className="cnt">{lbOpen ? `${lbIndex + 1} / ${gallery.length}` : ""}</span>
      </div>
    </div>
  );
}

