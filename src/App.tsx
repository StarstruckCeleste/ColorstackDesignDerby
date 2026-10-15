import { useEffect, useState } from "react"

type Page =
  | "home"
  | "runs"
  | "join"
  | "partners"
  | "gear"
  | "cover"
  | "decisionLog"

const pages: {
  id: Exclude<Page, "cover" | "decisionLog">
  label: string
}[] = [
  { id: "home", label: "Home" },
  { id: "runs", label: "Weekly runs" },
  { id: "join", label: "Join" },
  { id: "partners", label: "Partners" },
  { id: "gear", label: "Gear" },
]

const runs = [
  {
    day: "Tuesday",
    time: "6:30 PM",
    name: "Social Run",
    distance: "3 miles",
    start: "Bean Counter Coffee",
    evening: true,
    routeNote: "Starts and ends at Bean Counter Coffee",
  },
  {
    day: "Thursday",
    time: "6:30 PM",
    name: "Tempo Run",
    distance: "5 miles",
    start: "Bean Counter Coffee",
    evening: true,
    routeNote: "Starts and ends at Bean Counter Coffee",
  },
  {
    day: "Saturday",
    time: "8:00 AM",
    name: "Long Run",
    distance: "6 to 10 miles",
    start: "Bean Counter Coffee",
    routeNote: "Starts and ends at Bean Counter Coffee",
  },
  {
    day: "Sunday",
    time: "9:00 AM",
    name: "Recovery Walk or Jog",
    distance: "2 miles",
    start: "Eastside Trailhead",
    routeNote: "Ends at Bean Counter Coffee",
  },
]

const specialRuns = [
  {
    date: "Saturday, October 17",
    name: "Fall Kickoff Long Run",
    start: "Bean Counter Coffee",
  },
  {
    date: "Saturday, October 17",
    name: "Charity 5K for the Food Bank",
    start: "Bean Counter Coffee",
  },
  {
    date: "Saturday, October 31",
    name: "Costume Run",
    start: "Bean Counter Coffee",
  },
  {
    date: "Saturday, November 8",
    name: "Gear Swap and Brunch Run",
    start: "Eastside Trailhead",
  },
  {
    date: "Saturday, November 14",
    name: "Turkey Trot Training Run",
    start: "Bean Counter Coffee",
  },
]

const tickerItems = [
  "Free to join",
  "All paces welcome",
  "Four runs every week",
  "Coffee after every run",
  "Old Fourth Ward",
  "Show up. We will pace you.",
]

const heroImage = "/beltline-run-club-hero.png"
const groupImage =
  "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"
const motionImage =
  "https://images.unsplash.com/photo-1634921363975-46fa99024422?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"

function Icon({
  name,
  size = 20,
}: {
    name:
      | "arrow"
      | "upRight"
      | "clock"
      | "pin"
      | "coffee"
      | "check"
      | "menu"
      | "close"
  size?: number
}) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    upRight: (
      <>
        <path d="M5 19 19 5" />
        <path d="M8 5h11v11" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    coffee: (
      <>
        <path d="M4 8h12v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z" />
        <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M6 4h8" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  page,
  secondary = false,
}: {
  children: React.ReactNode
  page: Page
  secondary?: boolean
}) {
  return (
    <a
      href={`#${page}`}
      className={`button ${secondary ? "button-secondary" : ""}`}
    >
      {children}
      <Icon name="arrow" />
    </a>
  )
}

function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        aria-label="BeltLine Pace Run Club home"
      >
        <span className="brand-mark">BP</span>
        <span>
          BeltLine Pace
          <br />
          Run Club
        </span>
      </a>
      <div className="mobile-nav-actions">
        <a className="mobile-nav-cta" href="#join">
          Join a run
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </div>
      <nav className={open ? "nav-open" : ""} aria-label="Main navigation">
        {pages.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={page === item.id ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="#join" className="nav-cta" onClick={() => setOpen(false)}>
          Join a run <Icon name="arrow" />
        </a>
      </nav>
    </header>
  )
}

function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text: string
}) {
  return (
    <section className="page-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <p className="intro-copy">{text}</p>
    </section>
  )
}

function RunCard({ run, index }: { run: typeof runs[number]; index: number }) {
  return (
    <article className="run-card">
      <div className="run-number">0{index + 1}</div>
      <div>
        <p className="eyebrow">{run.day}</p>
        <h3>{run.name}</h3>
      </div>
      <div className="run-detail">
        <Icon name="clock" />
        <span>
          <b>{run.time}</b>
          <small>{run.distance}</small>
        </span>
      </div>
      <div className="run-detail">
        <Icon name="pin" />
        <span>
          <b>{run.start}</b>
          <small>{run.routeNote}</small>
        </span>
      </div>
      {run.evening && (
        <div className="safety-badge">
          Bring a light and run with a buddy
        </div>
      )}
    </article>
  )
}

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <img
            src={heroImage}
            alt="BeltLine Pace Run Club members stretching together outdoors"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow light">Atlanta · Old Fourth Ward</p>
            <h1>
              Show up.
              <br />
              <span>We will pace you.</span>
            </h1>
            <p>
              Four pace groups. Zero fees. Really good coffee at the finish.
            </p>
            <div className="hero-actions">
              <Button page="join">Join a run</Button>
              <Button page="runs" secondary>
                See this week’s runs
              </Button>
            </div>
          </div>
          <div className="hero-stamp">
            <span>Every run ends with</span>
            <b>Coffee</b>
            <span>at Bean Counter</span>
          </div>
        </section>

        <section className="ticker" aria-label="Club highlights">
          <div>
            {[0, 1].map((group) => (
              <span key={group} aria-hidden={group === 1}>
                {tickerItems.map((item) => (
                  <span key={item}>
                    {item}
                    <i />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </section>

        <section className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">This week on the BeltLine</p>
              <h2>
                Pick your pace.
                <br />
                We’ve got the route.
              </h2>
            </div>
            <Button page="runs" secondary>
              Full schedule
            </Button>
          </div>
          <div className="run-list">
            {[runs[0], runs[3], runs[2]].map((run, i) => (
              <RunCard key={run.day} run={run} index={i} />
            ))}
          </div>
        </section>

        <section className="pace-section">
          <div className="pace-image">
            <img src={groupImage} alt="Friends running together outdoors" />
            <span className="image-label">No one gets left behind</span>
          </div>
          <div className="pace-copy">
            <p className="eyebrow">Your pace is the right pace</p>
            <h2>
              Fast is optional.
              <br />
              Showing up isn’t.
            </h2>
            <p>
              New to group running? Perfect. Every run has four friendly pace
              groups, and our leads make sure you know where you’re going.
            </p>
            <div className="pace-grid">
              <div>
                <b>Walk</b>
                <span>Move easy</span>
              </div>
              <div>
                <b>Social</b>
                <span>About 12 min/mi</span>
              </div>
              <div>
                <b>Steady</b>
                <span>About 10 min/mi</span>
              </div>
              <div>
                <b>Tempo</b>
                <span>8 min/mi or faster</span>
              </div>
            </div>
            <Button page="join">What to expect</Button>
          </div>
        </section>

        <section className="stats wrap">
          <div>
            <strong>15</strong>
            <span>runners at the start</span>
          </div>
          <div>
            <strong>60</strong>
            <span>regulars and counting</span>
          </div>
          <div>
            <strong>200</strong>
            <span>our goal this year</span>
          </div>
          <div>
            <strong>$0</strong>
            <span>always free to join</span>
          </div>
        </section>
      </main>
    </>
  )
}

function Runs() {
  return (
    <main>
      <PageIntro
        eyebrow="The weekly lineup"
        title="Four chances to find your stride."
        text="Same welcoming crew, a different kind of run. Pick one or make it a streak—every run is free."
      />
      <section className="wrap section compact">
        <div className="run-list">
          {runs.map((run, i) => (
            <RunCard key={run.day} run={run} index={i} />
          ))}
        </div>
      </section>
      <section className="safety-banner">
        <div>
          <p className="eyebrow">Evening run note</p>
          <h2>Light up. Buddy up.</h2>
        </div>
        <p>
          Bring a light for Tuesday and Thursday evening runs, and run with a
          buddy. We look out for each other out there.
        </p>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Save the date</p>
            <h2>Special runs this fall</h2>
          </div>
        </div>
        <div className="schedule-key" aria-label="Schedule categories">
          <span><i /> Recurring weekly run</span>
          <span><i /> One-time event</span>
        </div>
        <div className="event-list">
          <article className="recurring-event">
            <span>W</span>
            <div>
              <p>Every Saturday · 8:00 AM</p>
              <h3>Saturday Long Run</h3>
            </div>
            <div className="event-location">
              <Icon name="pin" />
              Bean Counter Coffee
            </div>
          </article>
          {specialRuns.map((event, i) => (
            <article className="one-time-event" key={`${event.date}-${event.name}`}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p>One-time event · {event.date} · 8:00 AM</p>
                <h3>{event.name}</h3>
              </div>
              <div className="event-location">
                <Icon name="pin" />
                <span>
                  {event.start}
                  {event.start === "Eastside Trailhead" && (
                    <small>Ends at Bean Counter Coffee</small>
                  )}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function Join() {
  return (
    <main>
      <PageIntro
        eyebrow="Your first run starts here"
        title="New faces belong at the front."
        text="No signup fee. No audition. No pressure to be fast. Just choose a run and meet us at the start."
      />
      <section className="join-layout wrap">
        <div className="join-photo">
          <img
            src={motionImage}
            alt="A group of runners heading down a city street"
          />
          <div>
            <b>First time?</b>
            <span>
              Come 10 minutes early. We’ll introduce you to your pace lead.
            </span>
          </div>
        </div>
        <div className="join-steps">
          <p className="eyebrow">What to expect</p>
          <h2>Three steps. Then coffee.</h2>
          {[
            [
              "01",
              "Choose your run",
              "Tuesday Social Run and Sunday Recovery Walk or Jog are extra-friendly first starts.",
            ],
            [
              "02",
              "Meet the crew",
              "Find us at Bean Counter Coffee or Eastside Trailhead. Look for the yellow.",
            ],
            [
              "03",
              "Pick your pace",
              "Walk, Social, Steady or Tempo. You can always switch groups.",
            ],
          ].map(([n, t, d]) => (
            <div className="step" key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bring-section">
        <div className="wrap bring-grid">
          <div>
            <p className="eyebrow">Pack light</p>
            <h2>
              Bring the basics.
              <br />
              We’ll bring the energy.
            </h2>
          </div>
          <ul>
            {[
              "Water",
              "Shoes you can run in",
              "A light for evening runs",
              "A little curiosity",
            ].map((x) => (
              <li key={x}>
                <span>
                  <Icon name="check" />
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="faq wrap section">
        <p className="eyebrow">Good questions</p>
        <h2>Before you lace up</h2>
        <div>
          <article>
            <h3>Do I need to be fast?</h3>
            <p>No. Every run has a walk group and a social pace group.</p>
          </article>
          <article>
            <h3>Does it cost money?</h3>
            <p>No. Every run is free.</p>
          </article>
          <article>
            <h3>What should I bring?</h3>
            <p>Water, shoes you can run in and a light for evening runs.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

function Partners() {
  const tiers = [
    { name: "Pacer", price: "$150", features: ["Logo on the website"] },
    {
      name: "Mile Marker",
      price: "$400",
      features: ["Logo on the website", "A mention at one run"],
      featured: true,
    },
    {
      name: "Title Partner",
      price: "$900",
      features: [
        "Logo on the website",
        "Run naming",
        "A table at the Gear Swap",
      ],
    },
  ]
  return (
    <main>
      <PageIntro
        eyebrow="Run with Atlanta"
        title="Put your name behind the pace."
        text="Help a free, volunteer-led club keep Atlanta moving—and meet a growing community of about 60 regular runners."
      />
      <section className="partner-packages wrap">
        {tiers.map((tier) => (
          <article className={tier.featured ? "featured" : ""} key={tier.name}>
            {tier.featured && <span className="popular">Good stride</span>}
            <p className="eyebrow">{tier.name}</p>
            <h2>{tier.price}</h2>
            <span className="one-time">One-time package</span>
            <ul>
              {tier.features.map((f) => (
                <li key={f}>
                  <Icon name="check" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:partners@beltlinepace.example?subject=${tier.name}%20partnership`}
            >
              Choose {tier.name}
              <Icon name="arrow" />
            </a>
          </article>
        ))}
      </section>
      <section className="leadership wrap section">
        <div>
          <p className="eyebrow">The people behind the pace</p>
          <h2>
            Volunteer led.
            <br />
            Community powered.
          </h2>
        </div>
        <div className="leader-list">
          {[
            ["Jordan Reeves", "Founder"],
            ["Maya Okafor", "Pace Lead"],
            ["Chris Tran", "Safety Lead"],
            ["Lena Ruiz", "Owner, Bean Counter Coffee"],
          ].map(([name, role], i) => (
            <div key={name}>
              <span>0{i + 1}</span>
              <b>{name}</b>
              <small>{role}</small>
            </div>
          ))}
        </div>
      </section>
      <section className="contact-strip">
        <div>
          <p className="eyebrow">Let’s move together</p>
          <h2>Ready to partner?</h2>
        </div>
        <a href="mailto:partners@beltlinepace.example">
          partners@beltlinepace.example <Icon name="arrow" />
        </a>
      </section>
    </main>
  )
}

function Gear() {
  return (
    <main>
      <PageIntro
        eyebrow="Wear the pace"
        title="Gear for the run and the coffee after."
        text="Simple club staples for regular miles, recovery walks and letting Atlanta know who you run with."
      />
      <section className="gear-grid wrap">
        <article>
          <div className="product-art shirt">
            <span>BP</span>
            <b>
              BeltLine
              <br />
              Pace Run Club
            </b>
          </div>
          <div className="product-info">
            <div>
              <p className="eyebrow">Club shirt</p>
              <h2>$25</h2>
            </div>
            <button
              onClick={() =>
                alert(
                  "Gear reservations are coming soon. Ask a volunteer lead at your next run.",
                )
              }
            >
              Reserve at a run <Icon name="arrow" />
            </button>
          </div>
        </article>
        <article>
          <div className="product-art hat">
            <div>
              <span>BP</span>
            </div>
            <i />
          </div>
          <div className="product-info">
            <div>
              <p className="eyebrow">Club hat</p>
              <h2>$18</h2>
            </div>
            <button
              onClick={() =>
                alert(
                  "Gear reservations are coming soon. Ask a volunteer lead at your next run.",
                )
              }
            >
              Reserve at a run <Icon name="arrow" />
            </button>
          </div>
        </article>
      </section>
      <section className="gear-note wrap">
        <Icon name="coffee" size={34} />
        <div>
          <h3>Try it on after your run</h3>
          <p>
            Ask a volunteer lead about sizes and availability when we finish at
            Bean Counter Coffee.
          </p>
        </div>
      </section>
    </main>
  )
}

function CoverCard({
  label,
  children,
  className = "",
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`cover-card ${className}`}>
      <p className="cover-card-label">{label}</p>
      {children}
    </div>
  )
}

function Cover() {
  const team = [
    ["Maanuv Manojj", "Product Researcher"],
    ["Celeste Tung", "Design Lead"],
    ["Benjamin Akusaki", "Page Designer"],
    ["Chloe Gates", "Content / Accessibility Researcher"],
  ]
  return (
    <main className="project-cover">
      <div className="cover-topline">
        <span>Project cover — Option A</span>
        <div className="cover-top-actions">
          <a href="/">View client website</a>
          <a className="cover-join-cta" href="/#join">
            Join a Run
          </a>
        </div>
      </div>

      <div className="cover-content">
        <section className="cover-identity">
          <div>
            <h1>BeltLine Pace Run Club</h1>
            <p>A welcoming running-club website for Atlanta’s Old Fourth Ward.</p>
          </div>
          <div className="cover-motion-mark">
            <Icon name="upRight" size={130} />
          </div>
        </section>

        <section className="cover-section cover-overview">
          <div>
            <p className="cover-label">Design intention</p>
            <p>
              Make a nervous first-timer feel welcome, informed and ready to
              join a free run.
            </p>
          </div>
          <div>
            <p className="cover-label">Website pages</p>
            <p>Home · Weekly Runs · Join · Partners · Gear</p>
            <small>Five responsive client-facing pages at a 1440px frame.</small>
          </div>
        </section>

        <section className="cover-section cover-team-goals">
          <div className="cover-column">
            <p className="cover-label">Team</p>
            <CoverCard label="Team name">
              <strong>4 ppl</strong>
            </CoverCard>
            <CoverCard label="Team members & roles">
              <div className="cover-team-list">
                {team.map(([name, role]) => (
                  <div key={name}>
                    <strong>{name}</strong>
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </CoverCard>
          </div>
          <div className="cover-column">
            <p className="cover-label">Audience and goal</p>
            <CoverCard label="Main intended website visitor">
              <strong className="cover-goal">Nervous first timer</strong>
            </CoverCard>
            <CoverCard label="Primary goal">
              <strong className="cover-goal">
                Get first-timers to show up by clicking the primary Join a Run
                button
              </strong>
            </CoverCard>
          </div>
        </section>

        <section className="cover-section cover-ai-log">
          <CoverCard label="AI log">
            <p>
              Used Gemini (Google AI) during Phase 1 &amp; 2 to audit client
              packet contradictions, calculate WCAG AA color contrast ratios
              (#FFC93C vs. #1E2A32 and #FFFFFF), and format our Decision Log.
            </p>
          </CoverCard>
        </section>

        <section className="cover-decisions">
          <p className="cover-label">Decision log</p>
          <div className="cover-card cover-decision-card">
            <div className="cover-decision-heading">
              <div>
                <strong>Complete Decision Log</strong>
                <p>Three pages · contradictions, decisions and reasoning</p>
              </div>
              <a href="/cover/decision-log">
                View all pages <Icon name="arrow" />
              </a>
            </div>
            <iframe
              className="cover-pdf-preview"
              src="/decision-log.pdf#page=1&toolbar=0&navpanes=0"
              title="Decision Log first-page preview"
            />
          </div>
        </section>
      </div>
    </main>
  )
}

function DecisionLog() {
  return (
    <main className="decision-log-page">
      <header>
        <div>
          <p className="cover-label">Option A · Project documentation</p>
          <h1>Decision Log</h1>
          <p>
            The complete three-page record of contradictions, final decisions
            and team reasoning.
          </p>
        </div>
        <div className="decision-log-actions">
          <a href="/cover">Back to project cover</a>
          <a className="decision-log-join" href="/#join">
            Join a Run
          </a>
        </div>
      </header>
      <iframe
        src="/decision-log.pdf"
        title="Complete BeltLine Pace Run Club Decision Log"
      />
      <p className="decision-log-fallback">
        If the document does not appear,{" "}
        <a href="/decision-log.pdf">open the PDF directly</a>.
      </p>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">BP</span>
            <span>
              BeltLine Pace
              <br />
              Run Club
            </span>
          </a>
          <p>
            Free miles, good people and coffee at the finish. Old Fourth Ward,
            Atlanta.
          </p>
        </div>
        <div>
          <p className="eyebrow light">Explore</p>
          {pages.map((p) => (
            <a key={p.id} href={`#${p.id}`}>
              {p.label}
            </a>
          ))}
        </div>
        <div>
          <p className="eyebrow light">Next run</p>
          <strong>Tuesday · 6:30 PM</strong>
          <span>Social Run · 3 miles</span>
          <span>Bean Counter Coffee</span>
          <a className="footer-cta" href="#join">
            Join a run <Icon name="arrow" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 BeltLine Pace Run Club</span>
        <div>
          <span>Show up. We will pace you.</span>
          <a href="/cover">Project cover</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const getPage = (): Page => {
    if (
      window.location.pathname
        .replace(/\/+$/, "")
        .endsWith("/cover/decision-log")
    ) {
      return "decisionLog"
    }
    if (window.location.pathname.replace(/\/+$/, "").endsWith("/cover")) {
      return "cover"
    }
    const hash = window.location.hash.slice(1) as Page
    return hash === "cover" || pages.some((p) => p.id === hash) ? hash : "home"
  }
  const [page, setPage] = useState<Page>(getPage)
  useEffect(() => {
    const onHash = () => {
      setPage(getPage())
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])
  const Current = {
    home: Home,
    runs: Runs,
    join: Join,
    partners: Partners,
    gear: Gear,
    cover: Cover,
    decisionLog: DecisionLog,
  }[page]
  if (page === "decisionLog") {
    return <DecisionLog />
  }
  if (page === "cover") {
    return <Cover />
  }
  return (
    <div className="app-shell">
      <Header page={page} />
      <Current />
      <Footer />
    </div>
  )
}
