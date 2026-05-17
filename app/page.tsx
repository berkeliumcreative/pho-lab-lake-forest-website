// @ts-nocheck
"use client";

import { DM_Serif_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import content from "../data/content.json";

const display = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });

// Modern Vietnamese — deep teal + saffron + ivory
const TEAL = "#0F4C4A";
const TEAL_DEEP = "#062827";
const SAFFRON = "#E8A33D";
const IVORY = "#FBF6EC";
const TEXT = "#1C2826";
const MUTED = "#576865";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: IVORY, color: TEXT }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes steamRise { 0% { opacity: 0; transform: translateY(0) scale(1); } 50% { opacity: 0.4; } 100% { opacity: 0; transform: translateY(-50px) scale(1.4); } }
        .fade-up { animation: fadeUp 0.85s cubic-bezier(.2,.7,.2,1) forwards; }
        .fade-in { animation: fadeIn 1.1s ease-out forwards; }
        .steam { animation: steamRise 4s ease-out infinite; }
        .d1 { animation-delay: .1s; opacity: 0; }
        .d2 { animation-delay: .22s; opacity: 0; }
        .d3 { animation-delay: .34s; opacity: 0; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(251,246,236,0.92)", backdropFilter: "blur(14px)", borderBottom: `1px solid ${TEAL}15` }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-1">
            <span className={display.className} style={{ fontSize: "1.5rem", color: TEAL }}>Phở</span>
            <span className={mono.className + " text-xs uppercase tracking-[0.25em]"} style={{ color: TEAL, opacity: 0.7 }}>· LAB</span>
          </a>
          <div className="hidden md:flex items-center gap-9 text-sm" style={{ color: TEAL }}>
            <a href="#menu" className="hover:opacity-60 transition">Menu</a>
            <a href="#story" className="hover:opacity-60 transition">The broth</a>
            <a href="#visit" className="hover:opacity-60 transition">Visit</a>
          </div>
          <a href={content.hero.ctaLink} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-transform hover:scale-105" style={{ backgroundColor: SAFFRON, color: TEAL_DEEP }}>
            Order online
          </a>
        </div>
      </nav>

      {/* HERO — split horizontal */}
      <section id="top" className="pt-24 min-h-[100vh] grid md:grid-cols-2">
        <div className="flex items-center px-8 md:px-14 py-16">
          <div>
            <p className={mono.className + " fade-in d1 text-xs uppercase tracking-[0.3em] mb-6"} style={{ color: SAFFRON }}>
              Open 7 days · Lake Forest
            </p>
            <h1 className={display.className + " fade-up d1"} style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", color: TEAL_DEEP, fontWeight: 400, lineHeight: 0.98, letterSpacing: "-0.015em" }}>
              Phở, broken down to its <em style={{ color: SAFFRON }}>molecules.</em>
            </h1>
            <p className="fade-up d2 mt-7 text-lg leading-relaxed max-w-md" style={{ color: MUTED }}>
              {content.hero.subheading}
            </p>
            <div className="fade-up d3 mt-10 flex flex-col sm:flex-row gap-3">
              <a href={content.hero.ctaLink} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full text-sm font-semibold transition-transform hover:scale-105" style={{ backgroundColor: TEAL, color: IVORY }}>
                Order online →
              </a>
              <a href="#menu" className="px-8 py-4 rounded-full text-sm font-semibold border-2 transition-colors" style={{ borderColor: TEAL, color: TEAL }}>
                See the menu
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[{ n: "12hr", l: "Broth simmer" }, { n: "7", l: "Days a week" }, { n: "<24hr", l: "Ingredients in" }].map((x, i) => (
                <div key={i}>
                  <p className={display.className} style={{ fontSize: "1.8rem", color: TEAL, fontWeight: 400 }}>{x.n}</p>
                  <p className={mono.className + " text-[10px] uppercase tracking-wider mt-1"} style={{ color: MUTED }}>{x.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative min-h-[420px] md:min-h-0 bg-cover bg-center fade-in d2" style={{ backgroundImage: `url("${content.hero.image}")` }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,76,74,0.2) 0%, rgba(15,76,74,0.5) 100%)" }} />
          <div className="absolute top-10 left-10 steam w-3 h-3 rounded-full" style={{ backgroundColor: IVORY, opacity: 0.5 }} />
          <div className="absolute top-14 left-16 steam w-2 h-2 rounded-full" style={{ backgroundColor: IVORY, opacity: 0.4, animationDelay: "1s" }} />
          <div className="absolute top-8 left-20 steam w-2.5 h-2.5 rounded-full" style={{ backgroundColor: IVORY, opacity: 0.45, animationDelay: "2s" }} />
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="px-6 py-24 md:py-32" style={{ backgroundColor: TEAL_DEEP, color: IVORY }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className={mono.className + " text-xs uppercase tracking-[0.3em] mb-4"} style={{ color: SAFFRON }}>
              The methodology
            </p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: IVORY, fontWeight: 400, lineHeight: 1.02 }}>
              {content.about.heading}
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed" style={{ color: "#CDDCDA" }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* MENU — two-column */}
      <section id="menu" className="px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className={mono.className + " text-xs uppercase tracking-[0.3em] mb-3"} style={{ color: SAFFRON }}>The menu</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: TEAL_DEEP, fontWeight: 400, lineHeight: 1 }}>
              From <em style={{ color: SAFFRON }}>our kitchen</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
            {content.services.map((s, i) => (
              <div key={i} className="py-5 flex items-baseline justify-between gap-6" style={{ borderBottom: `1px dotted ${TEAL}33` }}>
                <div className="flex-1">
                  <h3 className={display.className} style={{ fontSize: "1.35rem", fontWeight: 400, color: TEAL_DEEP }}>{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: MUTED }}>{s.description}</p>
                </div>
                {s.price && (
                  <div className={mono.className + " text-base font-semibold tabular-nums"} style={{ color: SAFFRON, whiteSpace: "nowrap" }}>{s.price}</div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm" style={{ color: MUTED }}>
            Full vegetarian and gluten-free menu in store. Quart-size broth available to take home.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      {content.gallery && (
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
            {content.gallery.map((src, i) => (
              <div key={i} className={`${i === 0 ? "col-span-3 md:col-span-2 aspect-[16/9]" : "col-span-3 md:col-span-1 aspect-square"} rounded-2xl bg-cover bg-center`} style={{ backgroundImage: `url("${src}")` }} />
            ))}
          </div>
        </section>
      )}

      {/* REVIEWS */}
      <section className="px-6 py-24" style={{ backgroundColor: "#EEE5D2" }}>
        <div className="max-w-6xl mx-auto">
          <p className={mono.className + " text-xs uppercase tracking-[0.3em] mb-3 text-center"} style={{ color: SAFFRON }}>Word of mouth</p>
          <h2 className={display.className + " text-center mb-14"} style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: TEAL_DEEP, fontWeight: 400 }}>
            What our <em style={{ color: SAFFRON }}>regulars</em> say
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {content.reviews.slice(0, 3).map((r, i) => (
              <div key={i} className="p-7 rounded-2xl" style={{ backgroundColor: IVORY }}>
                <div className="flex gap-1 mb-4" style={{ color: SAFFRON }}>
                  {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className={display.className} style={{ fontSize: "1.1rem", color: TEAL_DEEP, lineHeight: 1.5, fontStyle: "italic" }}>"{r.text}"</p>
                <p className={mono.className + " mt-5 text-xs uppercase tracking-wider"} style={{ color: TEAL }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className={mono.className + " text-xs uppercase tracking-[0.3em] mb-4"} style={{ color: SAFFRON }}>Come visit</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: TEAL_DEEP, fontWeight: 400, lineHeight: 1 }}>
              Pull up <em style={{ color: SAFFRON }}>a bowl.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: MUTED }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className} style={{ display: "block", marginTop: "0.75rem", fontSize: "1.85rem", color: TEAL, fontWeight: 400 }}>
              {content.contact.phone}
            </a>
            <table className="mt-10 w-full text-sm">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} style={{ borderBottom: `1px solid ${TEAL}1a` }}>
                    <td className={mono.className + " py-3 text-xs uppercase tracking-wider"} style={{ color: TEAL_DEEP }}>{day}</td>
                    <td className={mono.className + " py-3 text-xs text-right"} style={{ color: MUTED }}>{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {content.orderOnline && (
              <div className="mt-10">
                <p className={mono.className + " text-xs uppercase tracking-[0.25em] mb-4"} style={{ color: MUTED }}>Order in</p>
                <div className="flex flex-wrap gap-3">
                  {content.orderOnline.map((o, i) => (
                    <a key={i} href={o.url} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full text-xs font-semibold transition" style={{ backgroundColor: TEAL, color: IVORY }}>
                      {o.label} →
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="rounded-2xl overflow-hidden h-[520px]" style={{ border: `2px solid ${TEAL}` }}>
            <iframe title="Pho Lab location" width="100%" height="100%" loading="lazy" style={{ border: 0 }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: TEAL_DEEP, color: IVORY }}>
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">
          <div>
            <p className="flex items-baseline gap-1">
              <span className={display.className} style={{ fontSize: "2rem", color: IVORY }}>Phở</span>
              <span className={mono.className + " text-xs uppercase tracking-[0.3em]"} style={{ color: SAFFRON }}>· LAB</span>
            </p>
            <p className="mt-3 text-sm" style={{ color: "#CDDCDA" }}>Engineered broth · Lake Forest</p>
          </div>
          <div>
            <p className={mono.className + " text-xs uppercase tracking-[0.3em] mb-3"} style={{ color: SAFFRON }}>WHERE</p>
            <p className="text-sm" style={{ color: "#CDDCDA" }}>{content.contact.address}</p>
            <p className={mono.className + " mt-1 text-sm"} style={{ color: IVORY }}>{content.contact.phone}</p>
          </div>
          <div>
            <p className={mono.className + " text-xs uppercase tracking-[0.3em] mb-3"} style={{ color: SAFFRON }}>FOLLOW</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {content.social && Object.entries(content.social).map(([k, v]) => (
                <a key={k} href={String(v)} target="_blank" rel="noreferrer" className="capitalize hover:text-white transition" style={{ color: "#CDDCDA" }}>{k}</a>
              ))}
            </div>
          </div>
        </div>
        <div className={mono.className + " py-5 text-center text-xs uppercase tracking-[0.3em]"} style={{ borderTop: `1px solid ${SAFFRON}22`, color: "#7DA09D" }}>
          © {new Date().getFullYear()} Pho Lab Lake Forest
        </div>
      </footer>
    </main>
  );
}