/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./css/App.css";

const LightboxContext = createContext(null);

const collections = [
  {
    slug: "nexus",
    label: "NEXUS",
    title: "NEXUS",
    image: "/pics/nexus/cero-general.jpg",
    year: "2026",
    description: "Nexus is a universe created by me, drawing inspiration from Half-Life 2 and Metal Gear Solid.",
    works: [
      { id: "nexus-cero", title: "Cero", image: "/pics/nexus/cero-general.jpg", fit: "contain" },
    ],
  },
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
    image: "/pics/absoluteBatman.jpg",
    year: "2023—26",
    works: [
      { id: "absolute-batman", title: "Absolute Batman", image: "/pics/absoluteBatman.jpg" },
      { id: "bane-vs-batman-absolute", title: "Bane versus Batman (Absolute Universe)", image: "/pics/Bane versus Batman.jpg" },
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
      { id: "cero", title: "Cero", image: "/pics/nexus/cero-general.jpg", fit: "contain" },
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
  const isCollection = collections.some((collection) => collection.slug !== "nexus" && `/${collection.slug}` === location.pathname);

  return (
    <header className="site-header">
      <div className="brand-row">
        <NavLink to="/" className="brand-mark" aria-label="Nexus, volver al inicio">
          <img className="brand-logo" src="/pics/nexus/nexus-logo.png" alt="Nexus" draggable="false" />
        </NavLink>
      </div>

      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>INDEX</NavLink>
        <NavLink to="/manga" className={isCollection ? "active" : ""}>COLLECTIONS</NavLink>
        <NavLink to="/nexus" className={({ isActive }) => `nexus-tab ${isActive ? "active" : ""}`.trim()}>NEXUS</NavLink>
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

function ProtectedImage({ src, alt, className = "", openOnClick = true, ...props }) {
  const lightbox = useContext(LightboxContext);
  const openImage = () => {
    if (openOnClick) lightbox.open({ src, alt });
  };
  const handleKeyDown = (event) => {
    if (openOnClick && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openImage();
    }
  };

  return <img {...props} src={src} alt={alt} className={`protected-image ${className}`.trim()} draggable="false" onClick={openImage} onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()} onKeyDown={handleKeyDown} role={openOnClick ? "button" : undefined} tabIndex={openOnClick ? 0 : undefined} />;
}

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Vista ampliada de ${image.alt}`} onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Cerrar imagen">×</button>
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <ProtectedImage src={image.src} alt={image.alt} className="lightbox-image" openOnClick={false} />
      </div>
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
        <div className="hero-frame hero-frame-artwork">
          <ProtectedImage src="/pics/nexus/cero-general.jpg" alt="Cero, concept art from Nexus" />
          <div className="hero-label hero-label-bottom hero-label-dark">CERO · NEXUS</div>
        </div>
      </section>

      <section className="featured-section page-width">
        <SectionHeading kicker="01 / SELECTED WORK" title="Selected work" action={<NavLink to="/manga" className="text-link">VIEW ALL COLLECTIONS <span>↗</span></NavLink>} />
        <div className="featured-layout">
          <div className="featured-visual">
            <ProtectedImage src={featured.image} alt={featured.title} key={featured.image} />
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
  return <div className={`work-image ${work.fit === "contain" ? "work-image-contain" : ""}`.trim()}><ProtectedImage src={work.image} alt={work.title} loading={priority ? "eager" : "lazy"} /></div>;
}

function CollectionPage({ collection }) {
  const featuredWork = collection.works[0];

  return (
    <main className="collection-page page-width">
      <div className="collection-intro"><div><span className="kicker">COLLECTION / {collection.year}</span><h1>{collection.title}</h1>{collection.description && <p className="collection-description">{collection.description}</p>}</div></div>
      <div className="collection-controls">
        <span>{String(collection.works.length).padStart(2, "0")} WORKS</span>
        <div className="collection-switcher" aria-label="Cambiar de colección">
          {collections.map((item) => <NavLink to={`/${item.slug}`} className={({ isActive }) => `${item.slug === "nexus" ? "nexus-tab" : ""} ${isActive ? "active" : ""}`.trim()} key={item.slug}>{item.label}</NavLink>)}
        </div>
      </div>
      <div className="collection-feature"><div className={`collection-feature-image ${featuredWork.fit === "contain" ? "collection-feature-image-contain" : ""}`.trim()}><ProtectedImage src={featuredWork.image} alt={featuredWork.title} /></div><div className="collection-feature-copy"><h2>{featuredWork.title}</h2></div></div>
      <div className="work-grid">{collection.works.map((work, index) => <article className="work-card" key={work.id}><WorkImage work={work} priority={index < 2} /><div className="work-card-meta"><h2>{work.title}</h2></div></article>)}</div>
      <div className="collection-end"><span>END OF SERIES</span><NavLink to="/" className="text-link">BACK TO INDEX <span>↗</span></NavLink></div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="about-page page-width">
      <div className="page-intro"><h1>About<br /><em>the artist.</em></h1><p>I’m a traditional and digital artist, as well as a developer. This portfolio is a collection of my drawings and creative work. If you have any questions or would like to get in touch, feel free to email me at <a className="email-link" href="mailto:diegodibujando@gmail.com"><strong>diegodibujando@gmail.com</strong></a>.</p></div>
      <div className="about-image about-image-artwork"><ProtectedImage src="/pics/nexus/cero-general.jpg" alt="Cero, concept art from Nexus" /></div>
    </main>
  );
}

function SiteFooter() {
  return <footer className="site-footer page-width"><div className="footer-mark"><img className="footer-logo" src="/pics/nexus/nexus-logo.png" alt="Nexus" draggable="false" /><span>© {new Date().getFullYear()}</span></div><div className="footer-links"><a href="https://www.instagram.com/glezworks/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.artstation.com/glezworks" target="_blank" rel="noreferrer">ArtStation ↗</a><a href="https://www.pinterest.es/dggDraws/_created" target="_blank" rel="noreferrer">Pinterest ↗</a><a href="https://github.com/diegogomezgonza" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>;
}

function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return <LightboxContext.Provider value={{ open: setLightboxImage }}><BrowserRouter><div className="App" id="top"><SiteHeader /><Routes><Route path="/" element={<HomePage />} />{collections.map((collection) => <Route key={collection.slug} path={`/${collection.slug}`} element={<CollectionPage collection={collection} />} />)}<Route path="/about" element={<AboutPage />} /></Routes><SiteFooter /><ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} /></div></BrowserRouter></LightboxContext.Provider>;
}

export default App;
