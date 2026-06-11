const services = [
  ['01', 'Web design', 'Visually stunning web designs that captivate your audience and reflect your brand voice.'],
  ['02', 'Development', 'Custom web development with smooth interactions, responsive layouts, and scalable structure.'],
  ['03', 'Content & SEO', 'SEO-focused content and strategy to improve visibility and bring in qualified traffic.'],
];

const works = [
  ['Space', 'Webdesign'],
  ['Nova', 'Webdesign'],
  ['Sonic', 'Webdesign'],
  ['Solar', 'Webdesign'],
];

const steps = [
  ['Discovery Call', 'We learn about your goals, audience, and business needs to shape a focused strategy.'],
  ['Concept & Strategy', 'I turn your vision into wireframes and a simple interaction plan.'],
  ['Design', 'High-end visuals and interface details are crafted to stand out and convert.'],
  ['Development', 'The site is built with clean structure, motion, and responsive behavior.'],
  ['Launch', 'You receive onboarding, tutorials, and a polished website ready to grow.'],
];

const testimonials = [
  ['Amazing results with Arik’s premium web design services.', 'Arik created a design that feels premium and performs beautifully.'],
  ['Professional, collaborative experience.', 'The process was smooth and the final website exceeded what we imagined.'],
  ['Expert web design and SEO services.', 'The online presence improved quickly and the site feels modern and trustworthy.'],
  ['High-quality web design with great detail.', 'Everything from structure to visuals was carefully handled and delivered on time.'],
];

const App = () => {
  return (
    <main style={{ fontFamily: 'Arial, Helvetica, sans-serif', background: '#0e0e0e', color: '#dac5a7', minHeight: '100vh' }}>
      <header style={{ padding: '28px 24px 0' }}>
        <nav style={{ maxWidth: 1400, margin: '0 auto', border: '1px solid rgba(218,197,167,0.15)', background: 'rgba(218,197,167,0.05)', borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px' }}>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 1.5 }}>ARIK.</div>
          <div style={{ display: 'flex', gap: 18, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: 12, color: 'rgba(218,197,167,0.85)' }}>
            <span>Services</span><span>Work</span><span>About</span><span>Blog</span>
          </div>
          <button style={{ background: '#dac5a7', color: '#0e0e0e', border: 'none', borderRadius: 2, padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '1.5px', cursor: 'pointer' }}>Let’s talk</button>
        </nav>
      </header>

      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '72px 24px 40px', display: 'grid', gap: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24, alignItems: 'center' }}>
          <div>
            <p style={{ textTransform: 'uppercase', letterSpacing: '3px', color: 'rgba(218,197,167,0.8)', fontSize: 13, marginBottom: 12 }}>Portfolio Website</p>
            <h1 style={{ fontSize: 'clamp(3.8rem, 11vw, 6rem)', lineHeight: 1.02, margin: '0 0 18px', maxWidth: 780 }}>Web designer & developer</h1>
            <p style={{ maxWidth: 640, color: 'rgba(218,197,167,0.75)', fontSize: 18, lineHeight: 1.7, marginBottom: 24 }}>Premium web design, development, and SEO services to help your business stand out with a refined portfolio presence.</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button style={{ background: '#dac5a7', color: '#0e0e0e', border: 'none', borderRadius: 2, padding: '12px 16px', textTransform: 'uppercase', letterSpacing: '1.5px', cursor: 'pointer' }}>Get in touch</button>
              <button style={{ border: '1px solid rgba(218,197,167,0.2)', background: 'rgba(218,197,167,0.04)', color: '#dac5a7', borderRadius: 2, padding: '12px 16px', textTransform: 'uppercase', letterSpacing: '1.5px', cursor: 'pointer' }}>View work</button>
            </div>
          </div>
          <div style={{ minHeight: 420, borderRadius: 2, border: '1px solid rgba(218,197,167,0.15)', background: 'linear-gradient(145deg, rgba(218,197,167,0.08), rgba(218,197,167,0.02))', padding: 18 }}>
            <div style={{ height: '100%', borderRadius: 2, background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(218,197,167,0.08)), radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 25%), linear-gradient(180deg, #111 0%, #171717 100%)', border: '1px solid rgba(218,197,167,0.08)', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', padding: 24 }}>
              <div style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(218,197,167,0.8)', fontSize: 12 }}>Featured portfolio concept</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '8px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, borderTop: '1px solid rgba(218,197,167,0.12)', borderBottom: '1px solid rgba(218,197,167,0.12)', padding: '18px 0' }}>
          {['Airtable', 'Notion', 'Figma', 'Framer', 'Webflow', 'Shopify'].map((name) => (
            <div key={name} style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(218,197,167,0.7)', fontSize: 12 }}>{name}</div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '24px 24px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {services.map(([num, title, text]) => (
            <article key={title} style={{ border: '1px solid rgba(218,197,167,0.15)', background: 'rgba(218,197,167,0.05)', borderRadius: 2, padding: 28 }}>
              <p style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(218,197,167,0.7)', fontSize: 12 }}>{num}</p>
              <h2 style={{ fontSize: 24, margin: '8px 0 12px' }}>{title}</h2>
              <p style={{ color: 'rgba(218,197,167,0.75)', lineHeight: 1.7 }}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 18, marginBottom: 18 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.05, margin: 0 }}>Selected work</h2>
          <button style={{ border: '1px solid rgba(218,197,167,0.18)', background: 'rgba(218,197,167,0.04)', color: '#dac5a7', borderRadius: 2, padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '1.5px', cursor: 'pointer' }}>See all</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {works.map(([title, tag], idx) => (
            <article key={title} style={{ border: '1px solid rgba(218,197,167,0.15)', borderRadius: 2, overflow: 'hidden', background: idx % 2 ? 'linear-gradient(145deg, rgba(218,197,167,0.08), rgba(218,197,167,0.02))' : 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(218,197,167,0.06))', minHeight: 280 }}>
              <div style={{ padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(218,197,167,0.75)', fontSize: 12 }}>{tag}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                  <h3 style={{ fontSize: 28, margin: 0 }}>{title}</h3>
                  <span style={{ border: '1px solid rgba(218,197,167,0.18)', borderRadius: 999, padding: '8px 10px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Open</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px 64px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', textAlign: 'center', marginBottom: 12 }}>Your website in 5 steps</h2>
        <p style={{ textAlign: 'center', color: 'rgba(218,197,167,0.75)', maxWidth: 640, margin: '0 auto 32px' }}>A clear process that keeps the project collaborative, strategic, and easy to navigate.</p>
        <div style={{ display: 'grid', gap: 18 }}>
          {steps.map(([title, text], idx) => (
            <article key={title} style={{ border: '1px solid rgba(218,197,167,0.15)', background: 'rgba(218,197,167,0.05)', borderRadius: 2, padding: 20, display: 'grid', gridTemplateColumns: '90px 1fr', gap: 18 }}>
              <div style={{ borderRadius: 999, border: '1px solid rgba(218,197,167,0.18)', width: 48, height: 48, display: 'grid', placeItems: 'center', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: 12 }}>{String(idx + 1).padStart(2, '0')}</div>
              <div>
                <h3 style={{ margin: '0 0 8px', fontSize: 22 }}>{title}</h3>
                <p style={{ margin: 0, color: 'rgba(218,197,167,0.75)', lineHeight: 1.7 }}>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px 64px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', textAlign: 'center', marginBottom: 12 }}>What clients say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {testimonials.map(([title, text]) => (
            <article key={title} style={{ border: '1px solid rgba(218,197,167,0.15)', background: 'rgba(218,197,167,0.05)', borderRadius: 2, padding: 24 }}>
              <h3 style={{ fontSize: 22, margin: '0 0 10px' }}>{title}</h3>
              <p style={{ margin: 0, color: 'rgba(218,197,167,0.75)', lineHeight: 1.7 }}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px 64px' }}>
        <article style={{ border: '1px solid rgba(218,197,167,0.15)', background: 'linear-gradient(145deg, rgba(218,197,167,0.08), rgba(218,197,167,0.02))', borderRadius: 2, padding: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <p style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(218,197,167,0.75)', fontSize: 12 }}>About</p>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', margin: '8px 0 12px' }}>A website that leaves a lasting impression.</h2>
            <p style={{ color: 'rgba(218,197,167,0.75)', lineHeight: 1.7 }}>Hi, I’m Arik Andersson — a freelancer focused on premium web design, development, and SEO. I bring a personal touch to every project and aim to create work that feels modern, clear, and memorable.</p>
          </div>
          <div style={{ border: '1px solid rgba(218,197,167,0.15)', background: 'rgba(0,0,0,0.18)', borderRadius: 2, padding: 18, display: 'grid', alignContent: 'end' }}>
            <div style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(218,197,167,0.75)', fontSize: 12 }}>Current focus</div>
            <div style={{ fontSize: 28, marginTop: 8 }}>Premium visuals, responsive build, SEO-ready structure.</div>
          </div>
        </article>
      </section>

      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px 64px' }}>
        <article style={{ border: '1px solid rgba(218,197,167,0.15)', background: 'rgba(218,197,167,0.05)', borderRadius: 2, padding: 28, textAlign: 'center' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(218,197,167,0.75)', fontSize: 12 }}>Project in mind?</p>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', margin: '8px 0 12px' }}>Let’s make your website shine.</h2>
          <p style={{ color: 'rgba(218,197,167,0.75)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 18px' }}>Bring your idea to life with a refined portfolio design, clear messaging, and a build that feels polished on every screen.</p>
          <button style={{ background: '#dac5a7', color: '#0e0e0e', border: 'none', borderRadius: 2, padding: '12px 16px', textTransform: 'uppercase', letterSpacing: '1.5px', cursor: 'pointer' }}>Get in touch</button>
        </article>
      </section>

      <footer style={{ borderTop: '1px solid rgba(218,197,167,0.12)', padding: '18px 24px 32px', color: 'rgba(218,197,167,0.65)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <span>© 2026 Arik Portfolio</span>
          <span>Services · Work · About · Contact</span>
        </div>
      </footer>
    </main>
  );
};

export default App;
