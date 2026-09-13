import { ImageTrail } from "@/components/ui/image-trail";
import ParticleField from "./components/particle-field";
import Reveal from "./components/reveal";
import StoryThread, { type StoryBeat } from "./components/story-thread";

const storyBeats: StoryBeat[] = [
  {
    chapter: "01",
    label: "the maker",
    kind: "maker",
    line: "It starts in a workshop.",
    detail:
      "A small brand finishes a run of twelve denim shirts. Good ones. The kind that deserve to be seen by more people than happen to walk past the door.",
  },
  {
    chapter: "02",
    label: "the listing",
    kind: "listing",
    line: "By evening, it's on Krifth.",
    detail:
      "Photographed, priced, listed. It stops being something sitting in a shop and becomes something sitting in a pocket.",
  },
  {
    chapter: "03",
    label: "the scroll",
    kind: "scroll",
    line: "2:43am. Someone can't sleep.",
    detail:
      "They're deep in the Discover feed — past african print, past bags, past caps. Then the denim stops them.",
  },
  {
    chapter: "04",
    label: "the wishlist",
    kind: "wishlist",
    line: "They're not ready. They save it anyway.",
    detail:
      "Straight to the wishlist. Not buying yet, not letting go either. It waits.",
  },
  {
    chapter: "05",
    label: "the checkout",
    kind: "checkout",
    line: "Three days later, they stop waiting.",
    detail:
      "Two taps. Across town, a brand's phone lights up. One of twelve just found where it was going.",
  },
];

const categoryImages = [
  { src: "/wear1.jpg", alt: "Two-piece tee and shorts set on Krifth" },
  { src: "/bag.jpg", alt: "Bags on Krifth" },
  { src: "/necklace.jpg", alt: "Necklaces on Krifth" },
  { src: "/cap.jpg", alt: "Caps on Krifth" },
  { src: "/footwear.jpg", alt: "Footwear on Krifth" },
  { src: "/wear2.jpg", alt: "Full outfit with cap and sneakers on Krifth" },
  { src: "/keyholder.jpg", alt: "Keyholders on Krifth" },
  { src: "/gadget.jpg", alt: "Gadgets on Krifth" },
  { src: "/phone%20case.jpg", alt: "Phone cases on Krifth" },
  { src: "/cap2.jpg", alt: "Caps on Krifth" },
];

export default function Home() {
  return (
    <main>
      <div className="store-page">
        <header className="store-header">
          <a href="/" className="brand-lockup" aria-label="Krifth home">
            <span className="brand-word">
              Krifth<span className="brand-dot" aria-hidden="true" />
            </span>
          </a>

          {/* CSS-only toggle — the menu still opens if JS never runs */}
          <input
            type="checkbox"
            id="nav-toggle"
            className="nav-toggle"
            aria-label="Toggle navigation menu"
          />
          <label htmlFor="nav-toggle" className="nav-burger" aria-hidden="true">
            <span />
          </label>

          <nav className="store-nav" aria-label="Primary">
            <a href="#about">about</a>
            <a href="#features">features</a>
            <a href="#pricing">pricing</a>
            <a href="#faq">faq</a>
            <a href="#contact">contact</a>
          </nav>

          <a href="#download" className="get-app-pill">
            Get App
          </a>
        </header>

        <section className="hero-scene">
          <ParticleField />
          {/* both wrappers are display:contents on desktop, so the layout there
              is untouched. on mobile they give the composition its own screen. */}
          <div className="hero-frame">
            <div className="hero-stage">
              <span className="hero-word hero-word-left">Krifth</span>
              <span className="hero-word hero-word-right hero-word-accent">app</span>

              <div className="hero-model">
                {/* intrinsic size reserves the box before the png lands —
                    without it this element has no height on load */}
                <img
                  src="/outfit3.png"
                  alt="Person styled with an outfit discovered on Krifth"
                  width={447}
                  height={525}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          <div className="hero-copy">
            <h1>Discover what feels like you.</h1>
            <p>
              Krifth is a fashion discovery app that helps you find, save and
              shop the pieces that match your style — all in one place.
            </p>
          </div>

          <div className="mini-collection" id="download">
            <div className="mini-product-frame">
              <img src="/app1.jpeg" alt="Screenshot of the Krifth app Discover feed" />
            </div>
            <div className="store-badges">
              <a href="#" className="store-badge" aria-label="Download Krifth on the App Store">
                <svg className="badge-icon-apple" viewBox="0 0 384 512" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.9c0 26.2 4.8 53.3 14.4 81.2 12.8 37 59 127.6 107.2 126.1 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-83.1 102.6-120.2-65.2-30.7-61.7-90-61.7-92.3zm-56.6-165.7c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
                <span>
                  <small>Download on the</small>
                  App Store
                </span>
              </a>
              <a href="#" className="store-badge" aria-label="Get Krifth on Google Play">
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <polygon points="18,12 70.5,40.5 18,50" fill="#4285F4" />
                  <polygon points="18,88 18,50 70.5,59.5" fill="#34A853" />
                  <polygon points="18,50 70.5,40.5 70.5,59.5" fill="#FBBC05" />
                  <polygon points="70.5,40.5 88,50 70.5,59.5" fill="#EA4335" />
                </svg>
                <span>
                  <small>Get it on</small>
                  Google Play
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <section id="about" className="story-section">
        <div className="section-inner">
          <Reveal className="story-intro">
            <span className="eyebrow">how it actually goes</span>
            <h2>
              Every piece on Krifth
              <br />
              has a night like this.
            </h2>
          </Reveal>

          <StoryThread beats={storyBeats} />

          <Reveal className="story-coda">
            <p>
              Now multiply that by every brand, every category, every
              restless 2am scroll.
            </p>
            <p className="story-coda-punch">That&apos;s Krifth.</p>
            <div className="story-coda-links">
              <a href="#download">
                Shopping? It&apos;s free <span aria-hidden="true">→</span>
              </a>
              <a href="#contact">
                Selling? Let&apos;s talk <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="features" className="gallery-section">
        <div className="gallery-inner">
          <ImageTrail
            images={categoryImages}
            className="gallery-trail"
            imageClassName="gallery-trail-img"
          >
            <div className="gallery-copy">
              <span className="eyebrow">the full lineup</span>
              <h2>One app. Every category.</h2>
              <p>
                African print, bags, beanies, bracelets, caps, footwear,
                gadgets, keyholders, necklaces, phone cases, scarves —
                everything waiting inside Krifth.
                <span className="hint-cursor"> Move your cursor to look around.</span>
                <span className="hint-touch"> Drag across to look around.</span>
              </p>
            </div>
          </ImageTrail>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="section-inner">
          <span className="eyebrow price-eyebrow">what it costs</span>

          <div className="price-sheet">
            <article className="price-row">
              <div className="price-figure">
              <span className="price-number price-number-word">Free</span>
             
              </div>

              <div className="price-body">
                <h3>
                  For shoppers.
                  <em> Forever.</em>
                </h3>
                <p>
                  Wishlist, Top Picks, secure checkout — all of it, on iOS and
                  Android. No fee, no subscription, nothing to cancel.
                </p>
                <a href="#download" className="price-link">
                  Get the app <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>

            <article className="price-row price-row-brand">
              <div className="price-figure">
                <span className="price-number price-number-word">Custom</span>
              </div>

              <div className="price-body">
                <h3>
                  For brands.
                  <em> Priced around your catalog.</em>
                </h3>
                <p>
                  Product listings and inventory tools, storefront analytics,
                  priority placement in Top Picks, and a real person to talk to.
                </p>
                <a href="#contact" className="price-link price-link-accent">
                  Talk to us <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="section-inner">
          <div className="section-head">
            <span className="eyebrow">good to know</span>
            <h2>Frequently asked questions</h2>
          </div>

          <div className="faq-list">
            <details className="faq-item">
              <summary>Is Krifth free to use?</summary>
              <p>
                Yes — downloading and shopping on Krifth is completely free
                for individuals.
              </p>
            </details>
            <details className="faq-item">
              <summary>What can I find on Krifth?</summary>
              <p>
                Everything from african print and bags to beanies,
                bracelets, caps, footwear, gadgets, keyholders, necklaces,
                phone cases and scarves — all from real brands.
              </p>
            </details>
            <details className="faq-item">
              <summary>How do I save items for later?</summary>
              <p>
                Add any product to your wishlist with one tap, then revisit
                it anytime from the app.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can my brand sell on Krifth?</summary>
              <p>
                Yes. Reach out through the contact section below and our
                team will help you get listed.
              </p>
            </details>
            <details className="faq-item">
              <summary>Is checkout secure?</summary>
              <p>All payments on Krifth are processed securely at checkout.</p>
            </details>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="section-inner footer-grid">
          <div className="footer-brand">
            <span className="brand-word">
              Krifth<span className="brand-dot" aria-hidden="true" />
            </span>
            <p>Discover what feels like you.</p>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Explore</span>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Get in touch</span>
            <a href="mailto:hello@krifth.com">contact@krifth.com</a>
            <a href="#download">Download the app</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Krifth. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
