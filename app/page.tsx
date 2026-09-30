import { MatrixRain } from "@/components/matrix-rain";
import { TypedIntro } from "@/components/typed-intro";
import { education, profile, roles, skillGroups } from "@/lib/profile";

const shell = "mx-auto w-[min(820px,calc(100%-2.5rem))]";
const label =
  "mb-3.5 text-center text-[0.72rem] font-medium tracking-[0.18em] text-phosphor uppercase";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-phosphor";

export default function Home() {
  return (
    <>
      <MatrixRain />
      <a
        className={`absolute top-[-4rem] left-4 z-20 bg-phosphor px-3 py-2 text-[#041208] focus:top-4 ${focusRing}`}
        href="#top"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-10 border-b border-phosphor/15 bg-bg/80 backdrop-blur-md max-[999px]:bg-bg/90">
        <div
          className={`${shell} flex min-h-11 flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[0.82rem]`}
        >
          <a
            className={`tracking-wide text-phosphor no-underline ${focusRing}`}
            href="#top"
            aria-label="Isaac La, back to top"
          >
            isaac@la
          </a>
          <nav className="flex gap-4" aria-label="Contact">
            <a
              className={`inline-flex min-h-6 items-center text-muted no-underline hover:text-phosphor ${focusRing}`}
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
            >
              Email
            </a>
            <a
              className={`inline-flex min-h-6 items-center text-muted no-underline hover:text-phosphor ${focusRing}`}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Isaac La on LinkedIn, opens in a new tab"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </header>

      <main
        id="top"
        tabIndex={-1}
        className="relative z-[1] scroll-mt-16 bg-transparent outline-none max-[999px]:bg-bg/60 max-[999px]:[text-shadow:0_1px_8px_#050806]"
      >
        <section className="pt-10 pb-4" aria-labelledby="profile-name">
          <div className={`${shell} flex flex-col items-center text-center`}>
            <p className="m-0 flex items-center gap-2 text-[0.7rem] tracking-[0.16em] text-phosphor uppercase">
              <span
                className="size-[0.45rem] rounded-full bg-phosphor shadow-[0_0_10px_#3dff7a]"
                aria-hidden="true"
              />
              Senior software engineer
            </p>
            <h1 className="m-0 mt-2 text-[clamp(2.15rem,4.2vw,3.15rem)] leading-none font-medium tracking-tight">
              <span id="profile-name">Isaac La</span>
              <span
                className="animate-blink text-phosphor motion-reduce:animate-none"
                aria-hidden="true"
              >
                _
              </span>
            </h1>
            <p className="m-0 mt-2 text-[0.82rem] text-muted">
              <span className="sr-only">{`${profile.location}. Currently at Yahoo.`}</span>
              <span aria-hidden="true">
                {profile.location}
                <span className="mx-2 text-phosphor">·</span>
                Yahoo
              </span>
            </p>
          </div>
        </section>

        <section className="scroll-mt-16 pt-5 pb-6" id="intro" aria-labelledby="intro-heading">
          <div className={shell}>
            <h2 id="intro-heading" className={label}>
              Intro
            </h2>
            <div className="mx-auto w-[min(36rem,100%)]">
              <TypedIntro text={profile.summary} />
            </div>
          </div>
        </section>

        <section
          className="scroll-mt-16 pt-5 pb-6"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className={shell}>
            <h2 id="experience-heading" className={label}>
              Experience
            </h2>
            <ol className="mx-auto w-max max-w-full list-none p-0" aria-label="Work experience">
              {roles.map((role, index) => (
                <li
                  className="group grid grid-cols-[12.5rem_1.1rem_max-content] gap-x-4 max-sm:grid-cols-[1.1rem_1fr]"
                  key={role.id}
                  aria-current={index === 0 ? "true" : undefined}
                >
                  <p className="m-0 pt-1 text-right text-[0.78rem] whitespace-nowrap text-muted max-sm:col-start-2 max-sm:row-start-1 max-sm:pb-1 max-sm:text-left">
                    {role.start}
                    <span className="sr-only"> to </span>
                    <span aria-hidden="true"> ~ </span>
                    {role.end}
                  </p>
                  <div
                    className="relative max-sm:col-start-1 max-sm:row-span-2 max-sm:row-start-1"
                    aria-hidden="true"
                  >
                    <span className="absolute top-[0.45rem] bottom-0 left-1/2 w-px -translate-x-1/2 bg-line group-last:bottom-auto group-last:h-[0.45rem]" />
                    <span
                      className={`absolute top-[0.28rem] left-1/2 size-[0.48rem] -translate-x-1/2 rounded-full border border-phosphor ${
                        index === 0 ? "bg-phosphor shadow-[0_0_12px_#3dff7a]" : "bg-bg"
                      }`}
                    />
                  </div>
                  <div className="pb-[0.85rem] max-sm:col-start-2 max-sm:row-start-2">
                    <h3 className="m-0 text-[1.05rem] font-medium tracking-tight">
                      {role.company}
                    </h3>
                    <p className="m-0 mt-0.5 text-[0.82rem] leading-snug text-muted">
                      {role.title}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="scroll-mt-16 pt-5 pb-8" id="stack" aria-labelledby="stack-heading">
          <div className={shell}>
            <h2 id="stack-heading" className={label}>
              Stack
            </h2>
            <dl className="mx-auto w-[min(40rem,100%)] border-t border-phosphor/15">
              {skillGroups.map((group) => (
                <div
                  className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-phosphor/15 py-2 max-sm:grid-cols-1 max-sm:gap-1"
                  key={group.label}
                >
                  <dt className="text-[0.75rem] tracking-[0.14em] text-phosphor uppercase">
                    {group.label}
                  </dt>
                  <dd className="m-0 leading-normal text-muted">
                    <span className="sr-only">{group.items.join(", ")}</span>
                    <span aria-hidden="true">{group.items.join(" · ")}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer
        className="relative z-[1] border-t border-phosphor/15 bg-transparent pb-6 max-[999px]:bg-bg/75"
        aria-label="Education and contact"
      >
        <div
          className={`${shell} flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4 text-[0.82rem] text-muted max-sm:flex-col max-sm:items-start`}
        >
          <p className="m-0">
            <span className="sr-only">{`${education.school}, ${education.degree}, ${education.years}`}</span>
            <span aria-hidden="true">
              {education.school} · {education.degree} · {education.years}
            </span>
          </p>
          <p className="m-0">
            <a
              className={`text-muted underline decoration-phosphor/40 underline-offset-4 hover:text-phosphor ${focusRing}`}
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
            >
              {profile.email}
            </a>
            <span aria-hidden="true"> · </span>
            <a
              className={`whitespace-nowrap text-muted underline decoration-phosphor/40 underline-offset-4 hover:text-phosphor ${focusRing}`}
              href={profile.phoneHref}
              aria-label={`Call ${profile.phone}`}
            >
              {profile.phone}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
