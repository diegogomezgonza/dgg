/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./css/App.css";

const collections = [
  {
    slug: "draws",
    label: "DC / CHARACTERS",
    title: "DC Characters",
    description: "Retratos, estudios y versiones personales de algunos de los personajes que más han acompañado el archivo de GlezWorks.",
    image: "/pics/harley.webp",
    year: "2024—25",
    works: [
      { title: "Harley Quinn", tag: "PORTRAIT / 01", image: "/pics/harley.webp", tone: "warm" },
      { title: "Catwoman", tag: "PORTRAIT / 02", image: "/pics/catwoman.webp", tone: "cool" },
      { title: "Poison Ivy", tag: "PORTRAIT / 03", image: "/pics/poisonivy.webp", tone: "green" },
      { title: "Batman", tag: "PORTRAIT / 04", image: "/pics/batman.webp", tone: "dark" },
      { title: "Robin", tag: "PORTRAIT / 05", image: "/pics/robin.webp", tone: "red" },
      { title: "Nightwing", tag: "PORTRAIT / 06", image: "/pics/nightwing.webp", tone: "blue" },
    ],
  },
  {
    slug: "onepiece",
    label: "ONE PIECE",
    title: "One Piece",
    description: "Dos estudios de línea sobre movimiento, gesto y energía de la tripulación más reconocible del Grand Line.",
    image: "/pics/onepiece/luffy.webp",
    year: "2023",
    works: [
      { title: "Monkey D. Luffy", tag: "STUDY / 01", image: "/pics/onepiece/luffy.webp", tone: "red" },
      { title: "Roronoa Zoro", tag: "STUDY / 02", image: "/pics/onepiece/zoro.webp", tone: "green" },
    ],
  },
  {
    slug: "berserk",
    label: "BERSERK",
    title: "Berserk",
    description: "Una pieza única dedicada a la densidad del trazo, la armadura y la tensión dramática del universo de Miura.",
    image: "/pics/berserk/gutsBerserkArmor.webp",
    year: "2023",
    works: [
      { title: "Guts / Berserker Armor", tag: "STUDY / 01", image: "/pics/berserk/gutsBerserkArmor.webp", tone: "dark" },
    ],
  },
  {
    slug: "eldenring",
    label: "ELDEN RING",
    title: "Elden Ring",
    description: "Un estudio atmosférico sobre silueta, ornamento y luz dentro de las Tierras Intermedias.",
    image: "/pics/eldenring/messmer.webp",
    year: "2024",
    works: [
      { title: "Messmer the Impaler", tag: "STUDY / 01", image: "/pics/eldenring/messmer.webp", tone: "red" },
    ],
  },
];

const featuredWorks = [
  { eyebrow: "LATEST STUDY / 06", title: "Harley Quinn", collection: "DC Characters", image: "/pics/harley.webp", date: "06.2025", copy: "Una interpretación de color y gesto construida alrededor de una figura que no necesita pedir permiso." },
  { eyebrow: "LATEST STUDY / 05", title: "Messmer", collection: "Elden Ring", image: "/pics/eldenring/messmer.webp", date: "04.2024", copy: "Texturas, escala y una paleta encendida para capturar la quietud antes del combate." },
  { eyebrow: "LATEST STUDY / 04", title: "Guts", collection: "Berserk", image: "/pics/berserk/gutsBerserkArmor.webp", date: "11.2023", copy: "Una pieza de alto contraste sobre armadura, peso y la resistencia de seguir avanzando." },
];

function SiteHeader() {
  const location = useLocation();
  const isCollection = collections.some((collection) => `/${collection.slug}` === location.pathname);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <span>GLEZWORKS / DRAWING ARCHIVE</span>
        <div className="utility-links">
          <a href="https://www.instagram.com/dgg.draws/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.artstation.com/dggdibujo" target="_blank" rel="noreferrer">ArtStation</a>
        </div>
      </div>

      <div className="brand-row">
        <NavLink to="/" className="brand-mark" aria-label="GlezWorks, volver al inicio">
          <span className="brand-initials">GlezWorks</span>
          <span className="brand-caption">DIGITAL DRAWINGS<br />&amp; VISUAL NOTES</span>
        </NavLink>
        <span className="edition-number">NO. 07 / 26</span>
      </div>

      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>INDEX</NavLink>
        <NavLink to="/draws" className={isCollection ? "active" : ""}>COLLECTIONS</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>ABOUT ME</NavLink>
        <span className="nav-rule" />
        <span className="language-switch">ES / EN</span>
      </nav>
    </header>
  );
}

function SectionHeading({ kicker, title, action }) {
  return (
    <div className="section-heading">
      <div>
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  );
}

function WorkImage({ work, priority = false }) {
  return (
    <div className={`work-image ${work.tone || ""}`}>
      <img src={work.image} alt={work.title} loading={priority ? "eager" : "lazy"} />
      <span className="image-index">{work.tag}</span>
    </div>
  );
}

function HomePage() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featured = featuredWorks[featuredIndex];
  const nextFeatured = () => setFeaturedIndex((index) => (index + 1) % featuredWorks.length);
  const previousFeatured = () => setFeaturedIndex((index) => (index - 1 + featuredWorks.length) % featuredWorks.length);

  return (
    <main>
      <section className="hero-grid page-width">
        <div className="hero-copy">
          <span className="kicker">WELCOME TO THE ARCHIVE</span>
          <h1>Draw what<br /><em>stays with you.</em></h1>
          <p>Un archivo vivo de ilustración, personajes y obsesiones visuales. GlezWorks es el lugar donde las referencias encuentran una nueva línea.</p>
          <div className="hero-meta">
            <span>SCROLL TO EXPLORE</span>
            <span className="down-arrow">↓</span>
          </div>
        </div>
        <div className="hero-frame">
          <img src="/pics/berserk/gutsBerserkArmor.webp" alt="Guts con la armadura Berserker" />
          <div className="hero-label hero-label-top">FEATURED IMAGE / 01</div>
          <div className="hero-label hero-label-bottom">GUTS — BERSERK<br /><span>ARMOR STUDY / 2023</span></div>
        </div>
      </section>

      <section className="statement-band page-width">
        <span className="kicker">01 / THE POINT OF VIEW</span>
        <p>“The work begins with a character, but it ends somewhere else.”</p>
        <span className="statement-note">GLEZWORKS, ON PROCESS</span>
      </section>

      <section className="featured-section page-width">
        <SectionHeading kicker="02 / SELECTED WORK" title="From the desk" action={<NavLink to="/draws" className="text-link">VIEW ALL COLLECTIONS <span>↗</span></NavLink>} />
        <div className="featured-layout">
          <div className="featured-visual">
            <img src={featured.image} alt={featured.title} key={featured.image} />
            <span className="featured-stamp">GW<br /><small>ARCHIVE</small></span>
          </div>
          <div className="featured-info">
            <div className="feature-counter"><span>0{featuredIndex + 1}</span><span className="counter-line" /><span>0{featuredWorks.length}</span></div>
            <span className="kicker">{featured.eyebrow}</span>
            <h3>{featured.title}</h3>
            <p className="feature-collection">{featured.collection}</p>
            <p className="feature-copy">{featured.copy}</p>
            <div className="feature-footer"><span>{featured.date}</span><span>PERSONAL WORK</span></div>
            <div className="slider-controls">
              <button type="button" onClick={previousFeatured} aria-label="Obra anterior">←</button>
              <button type="button" onClick={nextFeatured} aria-label="Siguiente obra">→</button>
            </div>
          </div>
        </div>
      </section>

      <section className="collections-section page-width">
        <SectionHeading kicker="03 / THE ARCHIVE" title="Collections" action={<span className="section-count">04 SERIES</span>} />
        <div className="collection-list">
          {collections.map((collection, index) => (
            <NavLink to={`/${collection.slug}`} className="collection-row" key={collection.slug}>
              <span className="collection-number">0{index + 1}</span>
              <span className="collection-name">{collection.label}</span>
              <span className="collection-description">{collection.description}</span>
              <span className="collection-arrow">↗</span>
            </NavLink>
          ))}
        </div>
      </section>

    </main>
  );
}

function CollectionPage({ collection }) {
  const [filter, setFilter] = useState("ALL WORK");
  const filters = ["ALL WORK", ...(collection.works.some((work) => work.tag.startsWith("PORTRAIT")) ? ["PORTRAITS"] : []), ...(collection.works.some((work) => work.tag.startsWith("STUDY")) ? ["STUDIES"] : [])];
  const visibleWorks = useMemo(() => filter === "ALL WORK" ? collection.works : collection.works.filter((work) => work.tag.startsWith(filter === "PORTRAITS" ? "PORTRAIT" : "STUDY")), [collection, filter]);

  return (
    <main className="collection-page page-width">
      <div className="collection-intro"><div><span className="kicker">COLLECTION / {collection.year}</span><h1>{collection.title}</h1></div><p>{collection.description}</p></div>
      <div className="collection-controls"><span>{String(collection.works.length).padStart(2, "0")} WORKS</span><div>{filters.map((item) => <button type="button" key={item} className={filter === item ? "selected" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      <div className="collection-feature"><div className="collection-feature-image"><img src={collection.image} alt={collection.title} /></div><div className="collection-feature-copy"><span className="kicker">SERIES NOTE</span><p>Una colección de imágenes encontradas, redibujadas y vueltas a mirar hasta que algo nuevo aparece.</p><span className="vertical-caption">GLEZWORKS / {collection.label}</span></div></div>
      <div className="work-grid">{visibleWorks.map((work, index) => <article className="work-card" key={work.title}><WorkImage work={work} priority={index < 2} /><div className="work-card-meta"><h2>{work.title}</h2><span>{work.tag}</span></div></article>)}</div>
      <div className="collection-end"><span>END OF SERIES</span><NavLink to="/" className="text-link">BACK TO INDEX <span>↗</span></NavLink></div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="about-page page-width">
      <div className="page-intro"><span className="kicker">ABOUT ME</span><h1>About<br /><em>the artist.</em></h1><p>I am a traditional and digital artist. This is my art portfolio, where I share my drawings. If you have any questions, <a className="email-link" href="mailto:diegodibujando@gmail.com">write to me at diegodibujando@gmail.com</a>.</p></div>
      <div className="about-grid"><p className="about-lead">Traditional and digital drawings, collected in one place.</p><div className="about-facts"><div><span>ARTIST</span><strong>GlezWorks</strong></div><div><span>FOCUS</span><strong>Characters<br />&amp; visual worlds</strong></div><div><span>CONTACT</span><a href="mailto:diegodibujando@gmail.com">diegodibujando@gmail.com ↗</a></div></div></div>
      <div className="about-image"><img src="/pics/poisonivy.webp" alt="Poison Ivy, estudio de personaje" /><span>AN ARCHIVE IS NEVER FINISHED.</span></div>
    </main>
  );
}

function SiteFooter() {
  return <footer className="site-footer page-width"><div className="footer-mark">GlezWorks<span>© 2025</span></div><div className="footer-links"><a href="https://www.instagram.com/dgg.draws/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.pinterest.es/dggDraws/_created" target="_blank" rel="noreferrer">Pinterest ↗</a><a href="https://github.com/diegogomezgonza" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>;
}

function App() {
  return <BrowserRouter><div className="App" id="top"><SiteHeader /><Routes><Route path="/" element={<HomePage />} />{collections.map((collection) => <Route key={collection.slug} path={`/${collection.slug}`} element={<CollectionPage collection={collection} />} />)}<Route path="/about" element={<AboutPage />} /></Routes><SiteFooter /></div></BrowserRouter>;
}

export default App;
