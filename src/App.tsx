import { useMemo, useState } from 'react'
import { categories, tools, type Category } from './tools.ts'

const features = [
  { icon: '💬', title: 'AI Chat', text: 'Ask anything, draft content and brainstorm ideas with the best AI assistants.' },
  { icon: '✨', title: 'Prompt Improver', text: 'Turn rough ideas into clear, detailed prompts that get better results.' },
  { icon: '▶️', title: 'YouTube Tools', text: 'Titles, thumbnails, SEO and shorts — everything a channel needs to grow.' },
  { icon: '🎨', title: 'Image Generation', text: 'Create artwork, product shots and social graphics from a few words.' },
  { icon: '🎬', title: 'Video Tools', text: 'Generate, edit, caption and repurpose video in minutes, not hours.' },
  { icon: '⚡', title: 'Productivity', text: 'Notes, slides, research and automations that give you hours back.' },
]

const audiences = ['Creators', 'Students', 'YouTubers', 'Businesses']

export default function App() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<Category | 'All'>('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return tools.filter(
      (t) =>
        (active === 'All' || t.category === active) &&
        (!q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)),
    )
  }, [query, active])

  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">
          <span className="logo-mark">T</span>ToolMela<span className="accent">AI</span>
        </a>
        <nav>
          <a href="#features">Features</a>
          <a href="#tools">Tools</a>
          <a href="#tools" className="btn btn-small">Explore</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">// {tools.length}+ curated AI tools</p>
          <h1>
            Your AI toolkit,
            <br />
            <span className="grad">all in one place.</span>
          </h1>
          <p className="lede">
            ToolMela AI brings together the best AI tools for chat, YouTube, images, video and
            productivity — so you spend less time searching and more time creating.
          </p>
          <div className="hero-cta">
            <a href="#tools" className="btn">Browse tools</a>
            <a href="#features" className="btn btn-ghost">What's inside</a>
          </div>
          <ul className="audiences">
            {audiences.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

        <section id="features" className="section">
          <h2>Everything you need to create with AI</h2>
          <div className="features">
            {features.map((f) => (
              <article key={f.title} className="feature">
                <span className="feature-icon" aria-hidden>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="section">
          <div className="tools-head">
            <h2>Top curated AI tools</h2>
            <input
              type="search"
              placeholder="Search tools…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search tools"
            />
          </div>
          <div className="chips" role="tablist">
            {(['All', ...categories] as const).map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={active === c ? 'chip chip-active' : 'chip'}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="empty">No tools match “{query}”. Try another search.</p>
          ) : (
            <div className="grid">
              {filtered.map((t) => (
                <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" className="card">
                  <div className="card-top">
                    <span className="card-avatar">{t.name[0]}</span>
                    <span className={`badge badge-${t.pricing.toLowerCase()}`}>{t.pricing}</span>
                  </div>
                  <h3>{t.name}</h3>
                  <p>{t.description}</p>
                  <span className="card-cat">{t.category} ↗</span>
                </a>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} ToolMela AI · Built for creators, students, YouTubers and
          businesses.
        </p>
      </footer>
    </>
  )
}
