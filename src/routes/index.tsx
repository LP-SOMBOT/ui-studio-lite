import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  CircleUserRound,
  Crown,
  Gamepad2,
  Gift,
  Headphones,
  ShieldCheck,
  Signal,
  WalletCards,
  Wifi,
} from "lucide-react";
import heroImage from "@/assets/pubg-hero.jpg";
import eventImage from "@/assets/booyah-event.jpg";
import gameCovers from "@/assets/game-covers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OskarShop — Game Top Up" },
      { name: "description", content: "Fast and reliable mobile game top ups, events, and offers." },
      { property: "og:title", content: "OskarShop — Game Top Up" },
      { property: "og:description", content: "Fast and reliable mobile game top ups, events, and offers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const games = [
  { name: "Free Fire", x: "0%", y: "0%" },
  { name: "PUBG Mobile", x: "100%", y: "0%" },
  { name: "Blood Strike", x: "0%", y: "100%" },
  { name: "Arena Breakout", x: "100%", y: "100%" },
];

const shortcuts = [
  { label: "Top Up", icon: Gamepad2 },
  { label: "Games", icon: Gamepad2 },
  { label: "Events", icon: Gift },
  { label: "Support", icon: Headphones },
];

function SectionTitle({ type, children }: { type: "games" | "events"; children: React.ReactNode }) {
  return (
    <div className="section-title">
      <div className="section-heading">
        {type === "games" ? <Gamepad2 aria-hidden="true" /> : <CalendarDays aria-hidden="true" />}
        <h2>{children}</h2>
      </div>
      <button type="button" className="see-all">See All <ArrowRight aria-hidden="true" /></button>
    </div>
  );
}

function Index() {
  return (
    <main className="page-shell">
      <div className="phone-frame">
        <header className="shop-header">
          <div className="status-row">
            <time>9:41</time>
            <div className="status-icons"><Signal /><Wifi /><span>100</span></div>
          </div>
          <div className="brand-row">
            <div className="brand-mark" aria-label="OskarShop logo"><ShieldCheck /><Gamepad2 /></div>
            <div className="brand-copy">
              <h1>OSKAR<span>SHOP</span></h1>
              <p>N1 Somali game topup</p>
            </div>
            <button type="button" className="profile-button" aria-label="Open profile"><CircleUserRound /></button>
          </div>
        </header>

        <section className="content-area no-bottom-nav">
          <div className="welcome-row">
            <div><h2>Hello, Gamer <span>👋</span></h2><p>Top up. Play. Win.</p></div>
            <button type="button" className="wallet-card">
              <WalletCards aria-hidden="true" />
              <span><small>My Wallet</small><strong>$0.00</strong></span>
              <ChevronRight aria-hidden="true" />
            </button>
          </div>

          <section className="hero-banner" aria-label="PUBG Mobile UC Top Up">
            <img src={heroImage} alt="Battle royale player arriving over an island" width={1536} height={768} />
            <div className="hero-copy">
              <p className="hero-kicker">FAST <i /> SAFE <i /> RELIABLE</p>
              <h2>PUBG MOBILE<br /><span>UC TOP UP</span></h2>
              <p className="hero-description">Get your UC in seconds<br />and enjoy the game!</p>
              <button type="button" className="buy-button">Buy Now <ArrowRight /></button>
            </div>
            <div className="hero-brand">PUBG<small>MOBILE</small></div>
            <div className="slider-dots"><i className="active" /><i /><i /><i /></div>
          </section>

          <nav className="shortcut-panel" aria-label="Shop shortcuts">
            {shortcuts.map(({ label, icon: Icon }, index) => (
              <button type="button" key={label} className="shortcut-item">
                <span><Icon aria-hidden="true" /></span><strong>{label}</strong>
                {index < shortcuts.length - 1 && <i className="divider" />}
              </button>
            ))}
          </nav>

          <section className="games-section">
            <SectionTitle type="games">Popular Games</SectionTitle>
            <div className="games-grid">
              {games.map((game) => (
                <article className="game-card" key={game.name}>
                  <div className="cover-crop"><img src={gameCovers} alt="" loading="lazy" width={1024} height={1024} style={{ objectPosition: `${game.x} ${game.y}` }} /></div>
                  <h3>{game.name}</h3>
                  <button type="button">Top Up</button>
                </article>
              ))}
            </div>
          </section>

          <section className="events-section">
            <SectionTitle type="events">Events &amp; Offers</SectionTitle>
            <article className="event-banner">
              <img src={eventImage} alt="Blue-haired fantasy warrior for the September event" loading="lazy" width={1536} height={512} />
              <div className="event-copy">
                <div className="event-title"><Crown /><h3>BOOYAH PASS<br /><span>SEPTEMBER</span></h3></div>
                <p>New missions, exclusive rewards,<br />new vibes!</p>
                <button type="button">Get Now <ArrowRight /></button>
              </div>
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}
