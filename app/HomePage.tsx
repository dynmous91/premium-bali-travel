"use client";

import { useMemo, useState } from "react";
import { localeLabels, locales, type Locale } from "@/lib/locales";
import { pageCopy } from "@/lib/page-copy";

const whatsapp = (message: string) => `https://wa.me/6281244444268?text=${encodeURIComponent(message)}`;
const googleReviewsUrl = "https://www.google.com/maps/place/Khas+Bali+-+Luxury+Car+Rental+%26+Premium+Transport+Service/@-8.7179025,115.1808644,17z/data=!4m8!3m7!1s0x2dd247b3caecb35b:0xb7688bf1404b25b!8m2!3d-8.7179078!4d115.1857353!9m1!1b1!16s%2Fg%2F11vs_w10gh?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D";
const formatMarkedUpPrice = (price: string) => {
  const basePrice = Number(price.replaceAll(",", ""));

  return `IDR ${new Intl.NumberFormat("en-US").format(basePrice)}`;
};
const internationalPriceConfig: Partial<Record<Locale, {
  currency: string;
  idrPerUnit: number;
  locale: string;
  priceRange: string;
  step: number;
}>> = {
  en: { currency: "USD", idrPerUnit: 17944, locale: "en-US", priceRange: "USD 44 - USD 200", step: 1 },
  ja: { currency: "JPY", idrPerUnit: 111.8727, locale: "ja-JP", priceRange: "JPY 7,100 - JPY 32,100", step: 100 },
  ko: { currency: "KRW", idrPerUnit: 12.27, locale: "ko-KR", priceRange: "KRW 64,000 - KRW 293,000", step: 1000 },
  zh: { currency: "CNY", idrPerUnit: 2679.32, locale: "zh-CN", priceRange: "CNY 300 - CNY 1,340", step: 10 },
};
const formatDisplayPrice = (price: string, locale: Locale) => {
  const basePrice = Number(price.replaceAll(",", ""));
  const config = internationalPriceConfig[locale];

  if (!config) {
    return formatMarkedUpPrice(price);
  }

  const converted = (basePrice * 1.12) / config.idrPerUnit;
  const rounded = Math.ceil(converted / config.step) * config.step;

  return new Intl.NumberFormat(config.locale, {
    currency: config.currency,
    maximumFractionDigits: 0,
    style: "currency",
  }).format(rounded);
};

const fleet = [
  ["Toyota All New Alphard", "luxury", "5", "3,200,000", "/fleet/all-new-alphard.png"],
  ["Toyota Alphard Transformer Facelift", "luxury", "5", "2,200,000", "/fleet/alphard-transformer-facelift.png"],
  ["Toyota Hiace Premio Luxury", "van", "9", "2,500,000", "/fleet/hiace-premio-luxury.png"],
  ["President Suite Hiace", "van", "confirm", "quote", "/fleet/president-suite-hiace.png"],
  ["Toyota Hiace Commuter Luxury", "van", "confirm", "2,000,000", "/fleet/hiace-commuter-luxury.png"],
  ["Toyota Hiace Premio Standard", "van", "10", "1,500,000", "/fleet/hiace-premio-standard.png"],
  ["Toyota Hiace Commuter Standard", "van", "15", "1,100,000", "/fleet/hiace-commuter-standard.png"],
  ["Isuzu ELF NLR Microbus Short", "bus", "12", "900,000", "/fleet/isuzu-elf-nlr-short.png"],
  ["Toyota Kijang Innova Zenix G", "mpv", "7", "1,200,000", "/fleet/zenix-g.png"],
  ["Toyota Kijang Innova Zenix Q HEV", "mpv", "7", "1,400,000", "/fleet/zenix-q-hev.png"],
  ["Toyota Kijang Innova Reborn", "mpv", "7", "900,000", "/fleet/innova-reborn.png"],
  ["Toyota Fortuner", "suv", "6", "1,500,000", "/fleet/fortuner.png"],
  ["Mitsubishi Pajero Sport", "suv", "6", "1,500,000", "/fleet/pajero-sport.png"],
  ["Toyota All New Avanza / Daihatsu All New Xenia", "mpv", "7", "700,000", "/fleet/avanza-xenia.png"],
] as const;

const getStructuredData = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "#business",
      name: "Premium Bali Travel",
      description: pageCopy[locale].seoDescription,
      areaServed: "Bali, Indonesia",
      telephone: "+6281244444268",
      priceRange: locale === "id" ? "IDR 700,000 - IDR 3,200,000" : internationalPriceConfig[locale]?.priceRange,
      openingHours: "Mo-Su 00:00-23:59",
      serviceType: [
        "Private car with driver",
        "Bali airport transfer",
        "Custom Bali day tour",
        "Multi-day Bali transportation",
      ],
      sameAs: [googleReviewsUrl],
    },
    {
      "@type": "FAQPage",
      "@id": "#faq",
      mainEntity: pageCopy[locale].faq.items.slice(0, 6).map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
});

const BenefitIcon = ({ type }: { type: string }) => {
  if (type === "vehicle") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 26h28l-4-10H14l-4 10Z" />
        <path d="M8 26v9h32v-9" />
        <path d="M15 35h.1M33 35h.1" />
        <path d="M15 16l-3 10M33 16l3 10" />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M13 21a11 11 0 0 1 22 0v9" />
        <path d="M13 25h-2a4 4 0 0 0 0 8h2v-8ZM35 25h2a4 4 0 0 1 0 8h-2v-8Z" />
        <path d="M35 31v2a7 7 0 0 1-7 7h-4" />
        <path d="M22 40h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M13 36c8-13 14-13 22-24" />
      <path d="M12 36h10M31 12h5v5" />
      <path d="M14 14a4 4 0 1 0 0 .1M34 34a4 4 0 1 0 0 .1" />
      <path d="M18 16c5 2 9 6 12 12" />
    </svg>
  );
};

export default function HomePage({ locale }: { locale: Locale }) {
  const copy = pageCopy[locale];
  const [filter, setFilter] = useState("all");
  const [menu, setMenu] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [guests, setGuests] = useState("");
  const [luggage, setLuggage] = useState("");
  const [service, setService] = useState("");
  const [color, setColor] = useState("");
  const wa = useMemo(() => whatsapp(copy.wa.main), [copy.wa.main]);
  const presidentWa = useMemo(() => whatsapp(copy.wa.president), [copy.wa.president]);
  const categories = [
    ["all", copy.fleetSection.items.labels.all],
    ["luxury", copy.fleetSection.items.categories.luxury],
    ["van", copy.fleetSection.items.categories.van],
    ["suv", copy.fleetSection.items.categories.suv],
    ["mpv", copy.fleetSection.items.categories.mpv],
    ["bus", copy.fleetSection.items.categories.bus],
  ] as const;
  const visibleFleet = filter === "all" ? fleet : fleet.filter((v) => v[1] === filter);
  const recommendationWa = whatsapp(copy.wa.recommendation({
    guests: guests || copy.wa.notSelected,
    luggage: luggage || copy.wa.notSelected,
    service: service || copy.wa.notSelected,
    color: color || copy.wa.noPreference,
  }));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData(locale)) }}
      />
      <header className="site-header">
        <a className="brand logo-brand" href={`/${locale}#home`} aria-label="Premium Bali Travel">
          <img src="/logo-mark.png" alt="" aria-hidden="true" />
          <span><em>Premium</em> Bali Travel</span>
        </a>
        <nav className={menu ? "nav open" : "nav"}>
          {copy.nav.map((item, index) => {
            const ids = ["home", "services", "fleet", "how-it-works", "policies", "faq"];
            return <a key={item} href={`#${ids[index]}`} onClick={() => setMenu(false)}>{item}</a>;
          })}
        </nav>
        <div className="language-switcher">
          <button
            type="button"
            aria-label="Select language"
            aria-expanded={languageOpen}
            onClick={() => setLanguageOpen(!languageOpen)}
          >
            <span className="language-code">{locale.toUpperCase()}</span>
            <span className="language-name">{localeLabels[locale]}</span>
            <span className="language-arrow">⌄</span>
          </button>
          {languageOpen && (
            <div className="language-menu">
              {locales.map((item) => (
                <a
                  className={item === locale ? "active" : ""}
                  href={`/${item}`}
                  hrefLang={item}
                  key={item}
                >
                  <span>{item.toUpperCase()}</span>
                  {localeLabels[item]}
                </a>
              ))}
            </div>
          )}
        </div>
        <a className="button button-dark header-cta" href={wa} target="_blank" rel="noreferrer">{copy.cta}</a>
        <button className="menu" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>{menu ? "×" : "☰"}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-bg" style={{ backgroundImage: "linear-gradient(90deg,rgba(6,18,17,.95) 0%,rgba(6,18,17,.72) 45%,rgba(6,18,17,.2) 76%),url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2000&q=88')" }} />
        <div className="hero-content wrap">
          <p className="eyebrow light">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}<br/><em>{copy.hero.emphasis}</em></h1>
          <p className="hero-copy">{copy.hero.copy}</p>
          <div className="hero-actions"><a className="button button-gold" href="#vehicle-finder">{copy.hero.primary} <span>↓</span></a><a className="text-link light" href="#fleet">{copy.hero.secondary} ↓</a></div>
          <div className="hero-proof">{copy.hero.proof.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="vehicle-finder" id="vehicle-finder"><div className="wrap finder-layout"><div className="finder-copy"><p className="eyebrow">{copy.finder.eyebrow}</p><h2>{copy.finder.title}<br/><em>{copy.finder.emphasis}</em></h2><p>{copy.finder.copy}</p><div className="finder-trust">{copy.finder.trust.map(x=><span key={x}>✓ {x}</span>)}</div></div><div className="finder-form"><fieldset><legend>{copy.finder.legends[0]}</legend><div className="choice-grid">{copy.finder.guests.map(x=><button type="button" className={guests===x?"selected":""} onClick={()=>setGuests(x)} key={x}>{x}</button>)}</div></fieldset><fieldset><legend>{copy.finder.legends[1]}</legend><div className="choice-grid three">{copy.finder.luggage.map(x=><button type="button" className={luggage===x?"selected":""} onClick={()=>setLuggage(x)} key={x}>{x}</button>)}</div></fieldset><fieldset><legend>{copy.finder.legends[2]}</legend><div className="choice-grid">{copy.finder.services.map(x=><button type="button" className={service===x?"selected":""} onClick={()=>setService(x)} key={x}>{x}</button>)}</div></fieldset><fieldset><legend>{copy.finder.legends[3]}</legend><div className="color-grid">{[[copy.finder.colors[0],"#f4f2eb"],[copy.finder.colors[1],"#171b1b"],[copy.finder.colors[2],"#adb3b4"],[copy.finder.colors[3],"linear-gradient(135deg,#f4f2eb 0 33%,#171b1b 33% 66%,#adb3b4 66%)"]].map(([name,swatch])=><button type="button" className={color===name?"selected":""} onClick={()=>setColor(name)} key={name}><i style={{background:swatch}}/>{name}</button>)}</div></fieldset><a className={`button finder-submit ${guests&&luggage&&service?"ready":""}`} href={recommendationWa} target="_blank" rel="noreferrer">{copy.finder.submit} ↗</a><small>{copy.finder.helper}</small></div></div></section>

      <section className="section intro">
        <div className="wrap">
          <div className="section-head split"><div><p className="eyebrow">{copy.intro.eyebrow}</p><h2>{copy.intro.title}<br/><em>{copy.intro.emphasis}</em></h2></div><p>{copy.intro.copy}</p></div>
          <div className="benefit-grid">{copy.intro.benefits.map(([icon, title, desc]) => <article className="benefit" key={title}><span className="benefit-icon"><BenefitIcon type={icon} /></span><h3>{title}</h3><p>{desc}</p></article>)}</div>
          <p className="partner-note">{copy.intro.note}</p>
        </div>
      </section>

      <section className="section services" id="services"><div className="wrap"><div className="section-head"><p className="eyebrow">{copy.servicesSection.eyebrow}</p><h2>{copy.servicesSection.title}<br/><em>{copy.servicesSection.emphasis}</em></h2></div><div className="service-grid">{copy.servicesSection.items.map((s) => <article className="service-card" key={s.title}><span className="number">{s.n}</span><h3>{s.title}</h3><p>{s.desc}</p><ul>{s.points.map(p => <li key={p}>{p}</li>)}</ul><a href={wa} target="_blank" rel="noreferrer">{s.cta} ↗</a></article>)}</div></div></section>

      <section className="section fleet" id="fleet"><div className="wrap"><div className="section-head split"><div><p className="eyebrow">{copy.fleetSection.eyebrow}</p><h2>{copy.fleetSection.title}<br/><em>{copy.fleetSection.emphasis}</em></h2></div><p>{copy.fleetSection.copy}</p></div><div className="filters" role="group" aria-label={copy.fleetSection.filterAria}>{categories.map(([id,label]) => <button className={filter === id ? "active" : ""} onClick={() => setFilter(id)} key={id}>{label}</button>)}</div><div className="fleet-grid">{visibleFleet.map(([name, category, seats, price, image]) => { const index = fleet.findIndex(v => v[0] === name); const labels = copy.fleetSection.items.labels; const categoryLabel = copy.fleetSection.items.categories[category]; const displayName = copy.fleetSection.items.names[index] ?? name; const seatLabel = seats === "confirm" ? labels.confirmSeats : `${seats} ${labels.seats}`; const priceLabel = price === "quote" ? labels.requestQuotation : formatDisplayPrice(price, locale); const contact = name === "President Suite Hiace" ? presidentWa : whatsapp(copy.wa.fleet(displayName)); const priceNote = price === "quote" ? labels.confirmAvailability : locale === "id" ? labels.upTo12Hours : `${labels.upTo12Hours} · ${labels.taxIncluded}`; return <article className="fleet-card" key={name}><div className="vehicle-photo"><img src={image} alt={`${displayName} - ${labels.displayReferenceAlt}`} loading="lazy"/><span>{categoryLabel}</span><small>{labels.displayReference}</small></div><div className="fleet-body"><div className="fleet-top"><span className="tag">{categoryLabel}</span><span className="seats">{seatLabel}</span></div><h3>{displayName}</h3><p>{copy.fleetSection.items.uses[index]}</p><div className="price"><small>{price === "quote" ? labels.price : labels.from}</small><strong>{priceLabel}</strong><span>{priceNote}</span></div><a className="button button-outline" href={contact} target="_blank" rel="noreferrer">{labels.actualPhotosCta}</a></div></article>; })}</div><p className="fleet-disclaimer"><strong>{copy.fleetSection.items.labels.disclaimerTitle}</strong> {copy.fleetSection.items.labels.disclaimer}</p></div></section>

      <section className="section guidance"><div className="wrap guidance-grid"><div><p className="eyebrow">{copy.guidance.eyebrow}</p><h2>{copy.guidance.title}<br/><em>{copy.guidance.emphasis}</em></h2><p>{copy.guidance.copy}</p><a className="button button-dark" href={wa} target="_blank" rel="noreferrer">{copy.guidance.cta}</a></div><ul className="check-list">{copy.guidance.checklist.map(x => <li key={x}><span>✓</span>{x}</li>)}</ul></div></section>

      <section className="section process" id="how-it-works"><div className="wrap"><div className="section-head center"><p className="eyebrow">{copy.process.eyebrow}</p><h2>{copy.process.title}<br/><em>{copy.process.emphasis}</em></h2></div><div className="process-grid">{copy.process.items.map(([t,d], i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="section destinations"><div className="wrap"><div className="section-head split"><div><p className="eyebrow">{copy.destinations.eyebrow}</p><h2>{copy.destinations.title}<br/><em>{copy.destinations.emphasis}</em></h2></div><p>{copy.destinations.copy}</p></div><div className="destination-grid">{copy.destinations.items.map(([n,detail,img])=><article key={n} aria-label={`${n}: ${detail}`} style={{backgroundImage:`linear-gradient(180deg,transparent 35%,rgba(8,20,20,.9)),url(${img})`}}><div className="destination-caption"><h3>{n}</h3><p>{detail}</p></div></article>)}</div><p className="destination-note">{copy.destinations.note}</p></div></section>

      <section className="section details" id="policies"><div className="wrap"><div className="section-head center"><p className="eyebrow">{copy.details.eyebrow}</p><h2>{copy.details.title}<br/><em>{copy.details.emphasis}</em></h2></div><div className="detail-grid"><article><h3>{copy.details.includedTitle}</h3><ul className="tick-list">{copy.details.included.map(x=><li key={x}>✓ {x}</li>)}</ul><p className="fine">{copy.details.includedNote}</p></article><article><h3>{copy.details.costsTitle}</h3><ul>{copy.details.costs.map(x=><li key={x}>{x}</li>)}</ul></article></div><div className="charges">{copy.details.charges.map(([label,value,note])=><div key={label}><span>{label}</span><strong>{value}</strong>{note && <p>{note}</p>}</div>)}</div><p className="center fine">{copy.details.chargeNote}</p></div></section>

      <section className="section policy"><div className="wrap"><div className="section-head"><p className="eyebrow">{copy.policy.eyebrow}</p><h2>{copy.policy.title}<br/><em>{copy.policy.emphasis}</em></h2></div><div className="policy-grid">{copy.policy.items.map(([title,body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section className="section reviews"><div className="wrap"><div className="section-head split"><div><p className="eyebrow">{copy.reviews.eyebrow}</p><h2>{copy.reviews.title}<br/><em>{copy.reviews.emphasis}</em></h2></div><p>{copy.reviews.copy}</p></div><div className="google-review-card"><div className="google-rating"><span>Google</span><strong>4.7</strong><div aria-label={copy.reviews.ratingAria}>★★★★★</div><small>{copy.reviews.ratingLabel}</small></div><div className="google-review-copy"><h3>{copy.reviews.businessName}</h3><p>{copy.reviews.body}</p><ul>{copy.reviews.facts.map(x=><li key={x}>{x}</li>)}</ul><a className="button button-dark" href={googleReviewsUrl} target="_blank" rel="noreferrer">{copy.reviews.cta} ↗</a></div></div></div></section>

      <section className="section faq" id="faq"><div className="wrap faq-layout"><div className="faq-title"><p className="eyebrow">{copy.faq.eyebrow}</p><h2>{copy.faq.title}<br/><em>{copy.faq.emphasis}</em></h2><p>{copy.faq.copy}</p><a className="text-link" href={wa} target="_blank" rel="noreferrer">{copy.faq.cta} ↗</a></div><div>{copy.faq.items.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta"><div className="wrap center"><p className="eyebrow light">{copy.finalCta.eyebrow}</p><h2>{copy.finalCta.title}<br/><em>{copy.finalCta.emphasis}</em></h2><p>{copy.finalCta.copy}</p><a className="button button-gold" href="#vehicle-finder">{copy.finalCta.cta} ↑</a></div></section>

      <footer><div className="wrap footer-grid"><div><a className="brand light logo-brand footer-logo" href={`/${locale}#home`} aria-label="Premium Bali Travel"><img src="/logo-mark.png" alt="" aria-hidden="true" /><span><em>Premium</em> Bali Travel</span></a><p>{copy.footer.copy}</p></div><div><h4>{copy.footer.explore}</h4>{copy.nav.slice(1).map((x,i)=>{ const ids=["services","fleet","how-it-works","policies","faq"]; return <a key={x} href={`#${ids[i]}`}>{x}</a>; })}</div><div><h4>{copy.footer.contact}</h4><a href={wa} target="_blank" rel="noreferrer">+62 812-4444-4268</a><span>{copy.footer.hours}</span></div></div><div className="wrap footer-bottom"><span>© 2026 Premium Bali Travel</span><div><a href="#policies">{copy.footer.privacy}</a><a href="#policies">{copy.footer.bookingPolicy}</a></div></div></footer>
      <a className="floating-wa" href={wa} target="_blank" rel="noreferrer" aria-label={copy.footer.floatingAria}>{copy.footer.floating}</a>
    </main>
  );
}
