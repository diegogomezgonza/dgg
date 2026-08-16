/* eslint-disable react/prop-types */
import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./css/App.css";

const collections = [
  {
    slug: "manga",
    label: "MANGA",
    title: "MANGA",
    image: "/pics/Zoro.jpg",
    year: "2023—26",
    works: [
      { id: "zoro", title: "Zoro", image: "/pics/Zoro.jpg" },
      { id: "guts-new", title: "Guts", image: "/pics/Guts Berserker.jpg" },
      { id: "guts-armor", title: "Guts", image: "/pics/berserk/gutsBerserkArmor.webp" },
      { id: "misa", title: "Misa", image: "/pics/Misa.jpg" },
      { id: "majin-vegeta", title: "Majin Vegeta", image: "/pics/Majin Vegeta.jpg" },
      { id: "roronoa-zoro", title: "Roronoa Zoro", image: "/pics/Roronoa Zoro.jpg" },
      { id: "thorkell", title: "Thorkell", image: "/pics/Thorkell.jpg" },
      { id: "vasto-lorde", title: "Vasto Lorde", image: "/pics/Vasto Lorde.jpg" },
      { id: "luffy", title: "Monkey D. Luffy", image: "/pics/onepiece/luffy.webp" },
      { id: "zoro-study", title: "Roronoa Zoro", image: "/pics/onepiece/zoro.webp" },
    ],
  },
  {
    slug: "videojuegos",
    label: "VIDEOGAMES",
    title: "VIDEOGAMES",
    image: "/pics/Kratos.jpg",
    year: "2023—26",
    works: [
      { id: "bayle", title: "Bayle the Dread", image: "/pics/Bayle the dread_.jpg" },
      { id: "joel", title: "Joel", image: "/pics/Joel_ The last of us.jpg" },
      { id: "kratos", title: "Kratos", image: "/pics/Kratos.jpg" },
      { id: "messmer", title: "Messmer", image: "/pics/eldenring/messmer.webp" },
    ],
  },
  {
    slug: "superheroes",
    label: "SUPERHEROS",
    title: "SUPERHEROS",
    image: "/pics/Spider-Man vs Venom.jpg",
    year: "2023—26",
    works: [
      { id: "deadpool", title: "Deadpool", image: "/pics/Deadpool.jpg" },
      { id: "spider-man-venom", title: "Spider-Man vs Venom", image: "/pics/Spider-Man vs Venom.jpg" },
      { id: "harley-quinn", title: "Harley Quinn", image: "/pics/harley.webp" },
      { id: "catwoman", title: "Catwoman", image: "/pics/catwoman.webp" },
      { id: "poison-ivy", title: "Poison Ivy", image: "/pics/poisonivy.webp" },
      { id: "batman", title: "Batman", image: "/pics/batman.webp" },
      { id: "robin", title: "Robin", image: "/pics/robin.webp" },
      { id: "nightwing", title: "Nightwing", image: "/pics/nightwing.webp" },
    ],
  },
  {
    slug: "original-art",
    label: "ORIGINAL ART",
    title: "ORIGINAL ART",
    image: "/pics/OC/celina.png",
    year: "2026",
    works: [
      { id: "celina", title: "Celina", image: "/pics/OC/celina.png" },
      { id: "reaper", title: "Reaper", image: "/pics/OC/reaper.png" },
      { id: "skate", title: "Skate", image: "/pics/OC/skate.png" },
      { id: "sonne", title: "Sonne", image: "/pics/OC/sonne.png" },
    ],
  },
];

const featuredWorks = [
  { title: "Guts", collection: "MANGA", image: "/pics/Guts Berserker.jpg" },
  { title: "Kratos", collection: "VIDEOGAMES", image: "/pics/Kratos.jpg" },
  { title: "Spider-Man vs Venom", collection: "SUPERHEROS", image: "/pics/Spider-Man vs Venom.jpg" },
];

function SiteHeader() {
  const location = useLocation();
  const isCollection = collections.some((collection) => `/${collection.slug}` === location.pathname);

  return (
    <header className="site-header">
      <div className="brand-row">
        <NavLink to="/" className="brand-mark" aria-label="GlezWorks, volver al inicio">
          <span className="brand-initials">GlezWorks</span>
          <span className="brand-caption">Diego Gómez González</span>
        </NavLink>
      </div>

      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>INDEX</NavLink>
        <NavLink to="/manga" className={isCollection ? "active" : ""}>COLLECTIONS</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>ABOUT ME</NavLink>
      </nav>
    </header>
  );
}

function SectionHeading({ kicker, title, action }) {
  return (
    <div className="section-heading">
      <div>
        {kicker && <span className="kicker">{kicker}</span>}
        <h2>{title}</h2>
      </div>
      {action}
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
          <h1>Explore</h1>
        </div>
        <div className="hero-frame">
          <img src="/pics/Zoro.jpg" alt="Zoro" />
          <div className="hero-label hero-label-bottom">ZORO</div>
        </div>
      </section>

      <section className="featured-section page-width">
        <SectionHeading kicker="01 / SELECTED WORK" title="Selected work" action={<NavLink to="/manga" className="text-link">VIEW ALL COLLECTIONS <span>↗</span></NavLink>} />
        <div className="featured-layout">
          <div className="featured-visual">
            <img src={featured.image} alt={featured.title} key={featured.image} />
            <span className="featured-stamp">GW<br /><small>ARCHIVE</small></span>
          </div>
          <div className="featured-info">
            <div className="feature-counter"><span>0{featuredIndex + 1}</span><span className="counter-line" /><span>0{featuredWorks.length}</span></div>
            <h3>{featured.title}</h3>
            <p className="feature-collection">{featured.collection}</p>
            <div className="slider-controls">
              <button type="button" onClick={previousFeatured} aria-label="Obra anterior">←</button>
              <button type="button" onClick={nextFeatured} aria-label="Siguiente obra">→</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function WorkImage({ work, priority = false }) {
  return <div className="work-image"><img src={work.image} alt={work.title} loading={priority ? "eager" : "lazy"} /></div>;
}

function CollectionPage({ collection }) {
  const featuredWork = collection.works[0];

  return (
    <main className="collection-page page-width">
      <div className="collection-intro"><span className="kicker">COLLECTION / {collection.year}</span><h1>{collection.title}</h1></div>
      <div className="collection-controls">
        <span>{String(collection.works.length).padStart(2, "0")} WORKS</span>
        <div className="collection-switcher" aria-label="Cambiar de colección">
          {collections.map((item) => <NavLink to={`/${item.slug}`} className={({ isActive }) => isActive ? "active" : ""} key={item.slug}>{item.label}</NavLink>)}
        </div>
      </div>
      <div className="collection-feature"><div className="collection-feature-image"><img src={featuredWork.image} alt={featuredWork.title} /></div><div className="collection-feature-copy"><h2>{featuredWork.title}</h2></div></div>
      <div className="work-grid">{collection.works.map((work, index) => <article className="work-card" key={work.id}><WorkImage work={work} priority={index < 2} /><div className="work-card-meta"><h2>{work.title}</h2></div></article>)}</div>
      <div className="collection-end"><span>END OF SERIES</span><NavLink to="/" className="text-link">BACK TO INDEX <span>↗</span></NavLink></div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="about-page page-width">
      <div className="page-intro"><h1>About<br /><em>the artist.</em></h1><p>I’m a traditional and digital artist, as well as a developer. This portfolio is a collection of my drawings and creative work. If you have any questions or would like to get in touch, feel free to email me at <a className="email-link" href="mailto:diegodibujando@gmail.com"><strong>diegodibujando@gmail.com</strong></a>.</p></div>
      <div className="about-image"><img src="/pics/poisonivy.webp" alt="Poison Ivy, estudio de personaje" /></div>
    </main>
  );
}

function SiteFooter() {
  return <footer className="site-footer page-width"><div className="footer-mark">GlezWorks<span>© {new Date().getFullYear()}</span></div><div className="footer-links"><a href="https://www.instagram.com/glezworks/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.pinterest.es/dggDraws/_created" target="_blank" rel="noreferrer">Pinterest ↗</a><a href="https://github.com/diegogomezgonza" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>;
}

function App() {
  return <BrowserRouter><div className="App" id="top"><SiteHeader /><Routes><Route path="/" element={<HomePage />} />{collections.map((collection) => <Route key={collection.slug} path={`/${collection.slug}`} element={<CollectionPage collection={collection} />} />)}<Route path="/about" element={<AboutPage />} /></Routes><SiteFooter /></div></BrowserRouter>;
}

export default App;
