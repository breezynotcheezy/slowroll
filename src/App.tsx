import { useEffect, useState } from "react";
import "./App.css";
import { FeltTable } from "./components/FeltTable";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={`page${ready ? " page--ready" : ""}`}>
      <header className="topbar">
        <a className="topbar__brand" href="#top" aria-label="Slowroll home">
          <span className="topbar__mark" aria-hidden="true" />
          Slowroll
        </a>
        <nav className="topbar__nav" aria-label="Primary">
          <a href="#sessions">Sessions</a>
          <a href="#tables">Tables</a>
          <a className="topbar__cta" href="#seat">
            Take a seat
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-brand">
          <div className="hero__atmosphere" aria-hidden="true" />
          <div className="hero__content">
            <p className="hero__brand" id="hero-brand">
              Slowroll
            </p>
            <h1 className="hero__headline">Play the long hand.</h1>
            <p className="hero__lede">
              Session tools and home-game tables for players who think before
              they shove.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#seat">
                Take a seat
              </a>
              <a className="btn btn--ghost" href="#sessions">
                See how it works
              </a>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <FeltTable />
          </div>
        </section>

        <section className="band" id="sessions">
          <div className="band__inner">
            <p className="band__eyebrow">For the home-game grind</p>
            <h2 className="band__title">Know your stack before the flop.</h2>
            <p className="band__copy">
              Track buy-ins, clock sessions, and settle up without a napkin full
              of IOUs. Built for Friday-night tables, not nine-tabling
              grinders.
            </p>
          </div>
        </section>

        <section className="rail" id="tables">
          <div className="rail__inner">
            <h2 className="rail__title">Feel the table, not the spreadsheet.</h2>
            <p className="rail__copy">
              Soft felt greens, clear chip counts, and a pace that matches how
              real poker is played — face to face, one hand at a time.
            </p>
            <ul className="rail__list">
              <li>
                <span className="rail__chip rail__chip--red" aria-hidden="true" />
                Live session clock with blinds that actually make sense
              </li>
              <li>
                <span className="rail__chip rail__chip--gold" aria-hidden="true" />
                Bankroll ledger you can trust after a late night
              </li>
              <li>
                <span className="rail__chip rail__chip--navy" aria-hidden="true" />
                Invite links for the regulars — no app store scavenger hunt
              </li>
            </ul>
          </div>
        </section>

        <section className="seat" id="seat">
          <div className="seat__inner">
            <h2 className="seat__title">Ready when you are.</h2>
            <p className="seat__copy">
              Pull up a chair. Your next home game starts with a clearer stack.
            </p>
            <a className="btn btn--primary btn--lg" href="mailto:hello@slowroll.poker">
              Start free
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="footer__brand">Slowroll</span>
        <span className="footer__note">Play patient. Play honest.</span>
      </footer>
    </div>
  );
}

export default App;
