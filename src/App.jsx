/* eslint-disable react/prop-types */
import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./css/App.css";

const collections = [
  {
    slug: "manga",
    label: "MANGA",
    title: "MANGA",
    image: "/pics/Guts Berserker.jpg",
    year: "2023—26",
    works: [
      { id: "guts-new", title: "Guts", image: "/pics/Guts Berserker.jpg" },
      { id: "guts-armor", title: "Guts", image: "/pics/berserk/gutsBerserkArmor.webp" },
      { id: "misa", title: "Misa", image: "/pics/Misa.jpg" },
      { id: "majin-vegeta", title: "Majin Vegeta", image: "/pics/Majin Vegeta.jpg" },
      { id: "roronoa-zoro", title: "Roronoa Zoro", image: "/pics/Roronoa Zoro.jpg" },
      { id: "zoro", title: "Zoro", image: "/pics/Zoro.jpg" },
      { id: "thorkell", title: "Thorkell", image: "/pics/Thorkell.jpg" },
      { id: "vasto-lorde", title: "Vasto Lorde", image: "/pics/Vasto Lorde.jpg" },
      { id: "luffy", title: "Monkey D. Luffy", image: "/pics/onepiece/luffy.webp" },
      { id: "zoro-study", title: "Roronoa Zoro", image: "/pics/onepiece/zoro.webp" },
    ],
  },
  {
    slug: "videojuegos",
    label: "VIDEOJUEGOS",
    title: "VIDEOJUEGOS",
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
    label: "SUPERHEROES",
    title: "SUPERHEROES",
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
];

const featuredWorks = [
  { title: "Guts", collection: "MANGA", image: "/pics/Guts Berserker.jpg" },
  { title: "Kratos", collection: "VIDEOJUEGOS", image: "/pics/Kratos.jpg" },
  { title: "Spider-Man vs Venom", collection: "SUPERHEROES", image: "/pics/Spider-Man vs Venom.jpg" },
];

function SiteHeader() {
  const location = useLocation();
  const isCollection = collections.some((collection) => `/${collection.slug}` === location.pathname);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <span>GLEZWORKS / DRAWING PORTFOLIO</span>
        <div className="utility-links">
          <a href="https://www.instagram.com/dgg.draws/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.artstation.com/dggdibujo" target="_blank" rel="noreferrer">ArtStation</a>
        </div>
      </div>

      <div className="brand-row">
        <NavLink to="/" className="brand-mark" aria-label="GlezWorks, volver al inicio">
          <span className="brand-initials">GlezWorks</span>
        </NavLink>
        <span className="edition-number">NO. 07 / 26</span>
      </div>

      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>INDEX</NavLink>
        <NavLink to="/manga" className={isCollection ? "active" : ""}>COLLECTIONS</NavLink>
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

      <section className="statement-band page-width">
        <span className="kicker">01 / THE POINT OF VIEW</span>
        <p>“The work begins with a character, but it ends somewhere else.”</p>
        <span className="statement-note">GLEZWORKS, ON PROCESS</span>
      </section>

      <section className="featured-section page-width">
        <SectionHeading kicker="02 / SELECTED WORK" title="From the desk" action={<NavLink to="/manga" className="text-link">VIEW ALL COLLECTIONS <span>↗</span></NavLink>} />
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

      <section className="collections-section page-width">
        <SectionHeading kicker="03 / THE ARCHIVE" title="Collections" action={<span className="section-count">03 SERIES</span>} />
        <div className="collection-list">
          {collections.map((collection, index) => (
            <NavLink to={`/${collection.slug}`} className="collection-row" key={collection.slug}>
              <span className="collection-number">0{index + 1}</span>
              <span className="collection-name">{collection.label}</span>
              <span className="collection-arrow">↗</span>
            </NavLink>
          ))}
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
      <div className="collection-controls"><span>{String(collection.works.length).padStart(2, "0")} WORKS</span></div>
      <div className="collection-feature"><div className="collection-feature-image"><img src={featuredWork.image} alt={featuredWork.title} /></div><div className="collection-feature-copy"><h2>{featuredWork.title}</h2></div></div>
      <div className="work-grid">{collection.works.map((work, index) => <article className="work-card" key={work.id}><WorkImage work={work} priority={index < 2} /><div className="work-card-meta"><h2>{work.title}</h2></div></article>)}</div>
      <div className="collection-end"><span>END OF SERIES</span><NavLink to="/" className="text-link">BACK TO INDEX <span>↗</span></NavLink></div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="about-page page-width">
      <div className="page-intro"><span className="kicker">ABOUT ME</span><h1>About<br /><em>the artist.</em></h1><p>I am a traditional and digital artist. This is my art portfolio, where I share my drawings. If you have any questions, <a className="email-link" href="mailto:diegodibujando@gmail.com">write to me at diegodibujando@gmail.com</a>.</p></div>
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
