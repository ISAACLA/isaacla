import { Experience } from "@/components/experience";
import { LocalTime } from "@/components/local-time";
import { education, notes, practices, profile, skillGroups } from "@/lib/profile";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <header className="site-header">
        <div className="shell">
          <a className="brand" href="#top">
            {profile.name}
          </a>
          <nav className="nav" aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#stack">Stack</a>
            <a href="#practice">Craft</a>
            <a href="#notes">Notes</a>
          </nav>
          <a className="linkedin" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="shell">
            <div className="hero-kicker">
              <span>{profile.role}</span>
              <span>
                {profile.location} · <LocalTime />
              </span>
            </div>
            <h1>
              Isaac <em>La</em>
            </h1>
            <div className="hero-grid">
              <div>
                <p className="lede">{profile.headline}</p>
                <p className="intro">{profile.intro}</p>
                <div className="cta-row">
                  <a className="button button-solid" href="#work">
                    See the work
                  </a>
                  <a className="button button-ghost" href={`mailto:${profile.email}`}>
                    Email me
                  </a>
                </div>
              </div>
              <dl className="dossier">
                <div>
                  <dt>Now</dt>
                  <dd>Senior Software Engineer at Yahoo</dd>
                </div>
                <div>
                  <dt>Based</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Craft</dt>
                  <dd>System design, schema, servers, and UI</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="shell">
            <div className="section-head">
              <h2>Selected work</h2>
              <p className="eyebrow">2017 — now</p>
            </div>
            <Experience />
          </div>
        </section>

        <section className="section" id="stack">
          <div className="shell">
            <div className="section-head">
              <h2>Stack</h2>
              <p className="eyebrow">What the work is built with</p>
            </div>
            <dl className="stack">
              {skillGroups.map((group) => (
                <div className="stack-row" key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="practice">
          <div className="shell">
            <div className="section-head">
              <h2>Full stack, in order</h2>
              <p className="eyebrow">Schema to screen</p>
            </div>
            <div className="practice-list">
              {practices.map((item) => (
                <article className="practice-card" key={item.index}>
                  <span>{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="notes">
          <div className="shell">
            <div className="section-head">
              <h2>From the people nearby</h2>
              <p className="eyebrow">Public notes</p>
            </div>
            <div className="notes">
              {notes.map((note) => (
                <figure className="note" key={note.name}>
                  <p>“{note.quote}”</p>
                  <figcaption>
                    <strong>{note.name}</strong>
                    {note.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="shell education">
            <div>
              <p className="eyebrow">{education.years}</p>
              <h2>{education.school}</h2>
              <p>{education.degree}</p>
            </div>
            <a className="button button-solid" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <p>Isaac La · Irvine</p>
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden="true"> · </span>
            <a href={profile.phoneHref}>{profile.phone}</a>
          </p>
        </div>
      </footer>
    </>
  );
}
