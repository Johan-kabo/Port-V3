const assetPathPrefix = "/assets";

const imgArrowUpRight = `${assetPathPrefix}/986d1.svg`;
const imgImage88 = `${assetPathPrefix}/362d9.png`;
const imgFrame47 = `${assetPathPrefix}/7fe5d.png`;
const imgImage2076 = `${assetPathPrefix}/c0389.png`;
const imgLogoMstVersionNoire11 = `${assetPathPrefix}/99908.png`;
const imgLogoVitale1 = `${assetPathPrefix}/dacce.png`;
const imgLogosMtn1Layerstyle1 = `${assetPathPrefix}/87d1d.png`;
const imgImage12 = `${assetPathPrefix}/8f4d2.png`;
const imgLogoSabc1 = `${assetPathPrefix}/393e7.png`;
const imgLogooCastle121 = `${assetPathPrefix}/56fa4.png`;
const imgLogoCcaa1 = `${assetPathPrefix}/612e1.png`;
const imgLogoBvmac1 = `${assetPathPrefix}/25ce6.png`;
const imgLogoPad1 = `${assetPathPrefix}/bf43a.png`;
const imgImage2080 = `${assetPathPrefix}/f790f.png`;
const imgImage2081 = `${assetPathPrefix}/8ff17.png`;
const imgIPhone15ProMockup = `${assetPathPrefix}/4525d.png`;
const imgMockupSmartphoneGauche = `${assetPathPrefix}/d92f5.png`;
const imgDisplayingNextLevel = `${assetPathPrefix}/60165.png`;
const imgLogYamoNxtLvl = `${assetPathPrefix}/b3a8f.png`;
const imgImage2074 = `${assetPathPrefix}/65e07.png`;
const imgLightningBolt1 = `${assetPathPrefix}/a251a.png`;
const imgFamiconsMailOpen = `${assetPathPrefix}/b32c5.svg`;
const imgEllipse1 = `${assetPathPrefix}/9f66d.svg`;
const imgComponent1 = `${assetPathPrefix}/74068.svg`;
const imgLightningBolt = `${assetPathPrefix}/77a05.svg`;

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <img alt="" className={className || "w-6 h-6"} src={imgArrowUpRight} />
  );
}

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="flex items-center justify-between overflow-hidden pl-[10px] pr-[26px] py-[14px] rounded-full shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]"
        style={{ background: "#1e1e1e", gap: "140px", height: "74px" }}
      >
        {/* Logo */}
        <div className="bg-white overflow-hidden rounded-full flex items-center justify-center" style={{ width: 55, height: 55 }}>
          <span
            className="text-black text-[28px] tracking-[-2px]"
            style={{ fontFamily: "'Gabriela:Regular', Gabriela, serif", fontWeight: 400 }}
          >
            JK
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-[53px]">
          <div
            className="flex items-center gap-[39px] text-[rgba(255,255,255,0.5)] text-[20px] tracking-[-0.5px] text-center"
            style={{ fontFamily: "'DM Sans:Medium', 'DM Sans', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14' }}
          >
            <a href="#projets" className="hover:text-white transition-colors cursor-pointer leading-none">Projets</a>
            <a href="#projets" className="hover:text-white transition-colors cursor-pointer leading-none">Réalisations</a>
            <a href="#services" className="hover:text-white transition-colors cursor-pointer leading-none">Services</a>
          </div>
          <a
            href="#contact"
            className="bg-white border border-[#e1e1e1] flex items-center justify-center px-[25px] py-[11px] rounded-full shadow-[0px_2px_2px_0px_rgba(233,233,233,0.25)] text-black text-[20px] tracking-[-1px] text-center hover:bg-gray-100 transition-colors"
            style={{ fontFamily: "'DM Sans:Medium', 'DM Sans', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14' }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#f5f5f3", minHeight: 826 }}>
      {/* Grid background */}
      <div className="absolute inset-0 opacity-60 overflow-hidden pointer-events-none" style={{ left: "50%", transform: "translateX(-50%)", top: -774, width: 2440 }}>
        {Array.from({ length: 12 }).map((_, row) => (
          <div key={row} className="flex">
            {Array.from({ length: 8 }).map((_, col) => (
              <div
                key={col}
                style={{
                  width: 305,
                  height: 236,
                  border: "1.44px solid #dddcdb",
                  flexShrink: 0
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,255,255,1) 0%, rgba(217,217,217,0) 100%)"
        }}
      />

      {/* Hero content */}
      <div className="relative flex flex-col items-center gap-12 px-6 pt-[262px] pb-[96px]">
        {/* Headline row 1 */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[1920px]">
          <div className="flex flex-col items-center gap-[18px] w-full">
            {/* "Hello, je suis [photo] Johan KABO" */}
            <div className="flex items-center gap-3 justify-center" style={{ height: 81 }}>
              <span
                className="text-[#171717] text-[62px] tracking-[-3px] leading-none opacity-50"
                style={{ fontFamily: "'Bricolage Grotesque:Regular', 'Bricolage Grotesque', sans-serif", fontWeight: 400, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                Hello, je suis
              </span>
              {/* Photo pill */}
              <div
                className="rounded-full overflow-hidden border-[1.5px] border-black flex-shrink-0 relative"
                style={{ width: 105, height: 71, background: "#d6ccf0" }}
              >
                <img
                  src={imgImage88}
                  alt="Johan KABO"
                  className="absolute object-cover"
                  style={{ width: 109, height: 109, left: "50%", top: "50%", transform: "translate(-50%, -43%)" }}
                />
              </div>
              <span
                className="text-[#6750a4] text-[62px] tracking-[-3px] leading-none"
                style={{ fontFamily: "'Bricolage Grotesque:Regular', 'Bricolage Grotesque', sans-serif", fontWeight: 400, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                Johan KABO
              </span>
            </div>

            {/* "UI/UX Designer, Je transformes [pill] les problèmes" */}
            <div className="flex items-center gap-3 justify-center" style={{ height: 81 }}>
              <span
                className="text-[#2c2c2c] text-[62px] tracking-[-3px] leading-none"
                style={{ fontFamily: "'Bricolage Grotesque:Medium', 'Bricolage Grotesque', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                UI/UX Designer ,Je tranformes
              </span>
              {/* Pills with image */}
              <div
                className="rounded-full overflow-hidden border-[1.5px] border-black flex-shrink-0 relative"
                style={{ width: 105, height: 71 }}
              >
                <img src={imgFrame47} alt="" className="absolute object-cover" style={{ width: "253%", height: "208%", left: "-26%", top: "-53%" }} />
              </div>
              <span
                className="text-[#1e1e1e] text-[62px] tracking-[-3px] leading-none"
                style={{ fontFamily: "'Bricolage Grotesque:Medium', 'Bricolage Grotesque', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                les problèmes
              </span>
            </div>

            {/* "en produits numériques [pill] simples." */}
            <div className="flex items-center gap-3 justify-center" style={{ height: 81 }}>
              <span
                className="text-[#2c2c2c] text-[62px] tracking-[-3px] leading-none"
                style={{ fontFamily: "'Bricolage Grotesque:Medium', 'Bricolage Grotesque', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                en produits numériques
              </span>
              <div
                className="rounded-full overflow-hidden border-[1.5px] border-black flex-shrink-0 relative"
                style={{ width: 105, height: 71, background: "rgba(127,127,127,0.4)" }}
              >
                <img src={imgImage2076} alt="" className="absolute object-cover" style={{ width: 110, height: 109, left: "50%", top: "50%", transform: "translate(-50%, -55%)" }} />
              </div>
              <span
                className="text-[#1e1e1e] text-[62px] tracking-[-3px] leading-none"
                style={{ fontFamily: "'Bricolage Grotesque:Medium', 'Bricolage Grotesque', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                simples.
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="text-[#8d8d8d] text-[28px] tracking-[-0.84px] text-center leading-normal"
            style={{ fontFamily: "'DM Sans:Medium', 'DM Sans', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14' }}
          >
            UX/UI · Produit · IA · Technologie
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-7">
          <button
            className="flex items-center gap-3 overflow-hidden pl-[10px] pr-7 py-[26px] rounded-full cursor-pointer relative hover:opacity-90 transition-opacity"
            style={{ height: 74, background: "#1e1e1e", boxShadow: "inset 0px 4.4px 4.4px 0px rgba(255,255,255,0.25)" }}
          >
            <div className="bg-white overflow-hidden rounded-full flex items-center justify-center p-[15px]" style={{ width: 54, height: 54 }}>
              <img src={imgFamiconsMailOpen} alt="" className="w-6 h-6" />
            </div>
            <span
              className="text-white text-[20px] tracking-[-1.1px] leading-none"
              style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600 }}
            >
              Me contacter
            </span>
          </button>

          <button
            className="bg-white border border-[#e1e1e1] flex items-center justify-center px-6 rounded-full cursor-pointer hover:bg-gray-50 transition-colors shadow-[0px_4.4px_4.4px_0px_rgba(213,213,213,0.25)]"
            style={{ height: 74 }}
          >
            <span
              className="text-[#1e1e1e] text-[20px] tracking-[-1.1px] leading-none"
              style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600 }}
            >
              Découvrir mon approche
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ClientLogos() {
  const logos = [
    {
      alt: "MutzigSTAR",
      containerWidth: 304,
      render: () => (
        <div className="bg-white flex items-center justify-center flex-shrink-0 overflow-hidden px-[38px] py-[9px]" style={{ width: 304, height: 73 }}>
          <img src={imgLogoMstVersionNoire11} alt="MutzigSTAR" className="object-contain opacity-50 w-full" style={{ aspectRatio: "368/88" }} />
        </div>
      ),
    },
    {
      alt: "Vitale",
      containerWidth: 113,
      render: () => (
        <div className="bg-white flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ width: 113, height: 73 }}>
          <img src={imgLogoVitale1} alt="Vitale" className="object-contain opacity-40" style={{ width: 88, height: 86 }} />
        </div>
      ),
    },
    {
      alt: "MTN",
      containerWidth: 113,
      render: () => (
        <div className="bg-white flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ width: 113, height: 73 }}>
          <img src={imgLogosMtn1Layerstyle1} alt="MTN" className="object-contain opacity-40" style={{ width: 87, height: 44 }} />
        </div>
      ),
    },
    {
      alt: "ENEO",
      containerWidth: 144,
      render: () => (
        <div className="bg-white flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ width: 144, height: 73 }}>
          <img src={imgImage12} alt="ENEO" className="object-contain opacity-40" style={{ width: 111, height: 52 }} />
        </div>
      ),
    },
    {
      alt: "SABC",
      containerWidth: 144,
      render: () => (
        <div className="bg-white flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ width: 144, height: 73 }}>
          <img src={imgLogoSabc1} alt="SABC" className="object-contain opacity-40" style={{ width: 107, height: 53 }} />
        </div>
      ),
    },
    {
      alt: "Castle",
      containerWidth: 144,
      render: () => (
        <div className="bg-white flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ width: 144, height: 73 }}>
          <img src={imgLogooCastle121} alt="Castle" className="object-contain opacity-40" style={{ width: 108, height: 73 }} />
        </div>
      ),
    },
    {
      alt: "CCAA",
      containerWidth: 122,
      render: () => (
        <div className="bg-white flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ width: 122, height: 73 }}>
          <img src={imgLogoCcaa1} alt="CCAA" className="object-contain opacity-40" style={{ width: 71, height: 68 }} />
        </div>
      ),
    },
    {
      alt: "BVMAC",
      containerWidth: 122,
      render: () => (
        <div className="bg-white flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ width: 122, height: 73 }}>
          <img src={imgLogoBvmac1} alt="BVMAC" className="object-contain opacity-40" style={{ width: 55, height: 73 }} />
        </div>
      ),
    },
    {
      alt: "PAD",
      containerWidth: 113,
      render: () => (
        <div className="bg-white flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ width: 113, height: 73 }}>
          <img src={imgLogoPad1} alt="PAD" className="object-contain opacity-40" style={{ width: 68, height: 68 }} />
        </div>
      ),
    },
  ];

  const doubled = [...logos, ...logos];

  return (
    <section
      className="bg-white relative"
      style={{ borderTop: "0.793px solid #dedede", borderBottom: "0.793px solid #dedede" }}
    >
      <div
        className="flex items-center mx-auto"
        style={{ maxWidth: 1608, padding: "0 52px", gap: 38, height: 73 }}
      >
        {/* Label — sur la même ligne, ne rétrécit pas */}
        <p
          className="flex-shrink-0 text-[#545454] leading-none"
          style={{
            fontFamily: "'Inter:Medium', Inter, sans-serif",
            fontWeight: 500,
            fontSize: 24.754,
            letterSpacing: "-0.786px",
            whiteSpace: "nowrap",
          }}
        >
          Produits créés pour des acteurs de référence.
        </p>

        {/* Ticker avec masque de fondu gauche/droite */}
        <div
          className="flex-1 overflow-hidden relative opacity-70"
          style={{ height: 73 }}
        >
          {/* Masque CSS : transparent sur les bords, opaque au centre */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <div className="ticker-track items-center" style={{ height: "100%" }}>
              {doubled.map((logo, i) => (
                <div key={i} className="flex-shrink-0">
                  {logo.render()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[17px]" style={{ width: "calc(50% - 32px)" }}>
      <div
        className="bg-[#f5f5f5] rounded-[20px] overflow-hidden p-[18px] flex flex-col"
        style={{ height: 613 }}
      >
        {children}
      </div>
      <div className="flex items-center justify-between">
        <div
          className="flex flex-col gap-3"
          style={{ fontFamily: "'DM Sans:SemiBold', 'DM Sans', sans-serif", fontWeight: 600, fontVariationSettings: '"opsz" 14', letterSpacing: "-1px" }}
        >
          <div className="text-[32px] text-black leading-none">{title}</div>
          <div className="text-[24px] text-[#ababab] leading-none">{subtitle}</div>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="text-[#ababab] text-[22px] tracking-[-1px] leading-none"
            style={{ fontFamily: "'DM Sans:Medium', 'DM Sans', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14' }}
          >
            Consulter le projet
          </span>
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projets" className="bg-white px-[152px] py-[96px]">
      {/* Heading */}
      <h2
        className="text-[62px] tracking-[-3px] mb-[62px]"
        style={{ fontFamily: "'DM Sans:SemiBold', 'DM Sans', sans-serif", fontWeight: 600, fontVariationSettings: '"opsz" 14', color: "#2c2c2c" }}
      >
        <span>Nos </span>
        <span style={{ color: "#b7b4b4" }}>derniers</span>
        <span> projets ici</span>
      </h2>

      {/* Grid */}
      <div className="flex flex-col gap-16 max-w-[1608px] mx-auto">
        {/* Row 1 */}
        <div className="flex gap-16">
          {/* DanmaGenesis */}
          <ProjectCard title="DanmaGenesis" subtitle="Plateforme IA de text to audio et text to image">
            <div className="flex gap-[13px] flex-1">
              <div className="flex-1 bg-[#e6e6e6] rounded-[14px] overflow-hidden relative">
                <img src={imgImage2080} alt="DanmaGenesis" className="absolute object-cover pointer-events-none" style={{ width: 655, height: 879, left: -147, top: 0 }} />
              </div>
              <div className="flex-1 bg-[#e6e6e6] rounded-[14px] overflow-hidden relative">
                <img src={imgImage2081} alt="DanmaGenesis 2" className="absolute object-cover pointer-events-none" style={{ width: 459, height: 616, right: 0, top: "50%", transform: "translateY(-50%) translateY(24px)" }} />
              </div>
            </div>
          </ProjectCard>

          {/* Mon Coach Vitale */}
          <ProjectCard title="Mon Coach Vitale" subtitle="Application mobile de santé, de bien-être ...">
            <div className="flex gap-[13px] flex-1">
              {/* Left panel — green */}
              <div
                className="flex-1 rounded-[14px] overflow-hidden relative"
                style={{ background: "linear-gradient(-90deg, rgb(0,75,35) 0%, rgb(2,122,58) 75%)" }}
              >
                <img
                  src={imgIPhone15ProMockup}
                  alt="Coach Vitale mockup"
                  className="absolute object-cover pointer-events-none"
                  style={{ width: 459, height: 614, left: 22, top: 150 }}
                />
                <p
                  className="absolute text-[#fdfdfd] text-[38px] tracking-[-1.9px] leading-none top-[27px] left-[27px] w-[308px]"
                  style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", fontWeight: 400 }}
                >
                  Prêt à révéler votre vitalité ?
                </p>
              </div>
              {/* Right panel — green */}
              <div
                className="flex-1 rounded-[14px] overflow-hidden relative"
                style={{ background: "linear-gradient(-90deg, rgb(0,75,35) 0%, rgb(2,122,58) 75%)" }}
              >
                <div
                  className="absolute flex items-center justify-center"
                  style={{ width: 405, height: 547, left: 55, top: -214, transform: "rotate(7.14deg)" }}
                >
                  <div className="overflow-hidden" style={{ width: 344, height: 508 }}>
                    <img src={imgMockupSmartphoneGauche} alt="" className="absolute object-cover" style={{ width: "100.2%", height: "154.8%", left: "-0.1%", top: "-20.6%" }} />
                  </div>
                </div>
                <img src={imgEllipse1} alt="" className="absolute pointer-events-none" style={{ width: 577, height: 511, left: 0.5, top: 305 }} />
                <p
                  className="absolute text-right text-[36px] tracking-[-1.8px] leading-none"
                  style={{
                    fontFamily: "'Inter:Regular', Inter, sans-serif",
                    fontWeight: 400,
                    color: "#38b000",
                    right: 0,
                    bottom: 80,
                    width: 258,
                  }}
                >
                  Votre Coach dans la poche, disponible 24h/7
                </p>
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Row 2 */}
        <div className="flex gap-16">
          {/* YaMo NXT LVL */}
          <ProjectCard title="YaMo NXT LVL" subtitle="Plateforme de la plus grande communauté jeune...">
            <div className="flex-1 relative overflow-hidden rounded-[14px]" style={{ background: "linear-gradient(180deg, #131313 52%, #ffcb05 136%)" }}>
              <img
                src={imgDisplayingNextLevel}
                alt="YaMo NXT LVL"
                className="absolute object-cover pointer-events-none"
                style={{ width: 738, height: 550, left: "50%", transform: "translateX(-50%)", top: 115 }}
              />
              <img
                src={imgLogYamoNxtLvl}
                alt="YaMo NXT LVL logo"
                className="absolute object-cover pointer-events-none"
                style={{ width: 246, height: 59, left: "50%", transform: "translateX(-50%)", top: 56 }}
              />
            </div>
          </ProjectCard>

          {/* MützigSTAR */}
          <ProjectCard title="MützigSTAR" subtitle="Site web du plus grand concours musical ...">
            <div className="flex gap-[13px] flex-1">
              <div className="flex-1 bg-[#e6e6e6] rounded-[14px] overflow-hidden relative">
                <img src={imgImage2080} alt="MützigSTAR" className="absolute object-cover pointer-events-none" style={{ width: 655, height: 879, left: -147, top: 0 }} />
              </div>
              <div className="flex-1 bg-[#e6e6e6] rounded-[14px] overflow-hidden relative">
                <img src={imgImage2081} alt="MützigSTAR 2" className="absolute object-cover pointer-events-none" style={{ width: 474, height: 636, left: -105.5, top: "50%", transform: "translateY(-50%) translateY(1px)" }} />
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* "Voir tous les projets" */}
        <div className="flex items-center justify-center gap-3">
          <span
            className="text-[22px] text-black tracking-[-1px] leading-none"
            style={{ fontFamily: "'DM Sans:Medium', 'DM Sans', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14' }}
          >
            Voir tous les projets
          </span>
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const workHistory = [
    { company: "Zen Africa", role: "UI/UX Designer", year: "2025" },
    { company: "AFROLOGIX", role: "Designer produit senior", year: "2021-2024" },
    { company: "Astrarellar", role: "UX/UI & Brand Designer", year: "2022" },
  ];

  return (
    <section className="bg-white px-[156px] py-[96px]">
      {/* Heading */}
      <h2
        className="text-[62px] tracking-[-3px] leading-none mb-[64px]"
        style={{ fontFamily: "'DM Sans:SemiBold', 'DM Sans', sans-serif", fontWeight: 600, fontVariationSettings: '"opsz" 14', color: "#2c2c2c", maxWidth: 1349 }}
      >
        Concevoir des expériences qui créent<br />
        de la valeur pour les utilisateurs et les entreprises.
      </h2>

      <div className="flex gap-[66px] items-start">
        {/* Left: photo + name */}
        <div className="flex flex-col gap-6 flex-shrink-0" style={{ width: 508 }}>
          <div
            className="rounded-[32px] overflow-hidden relative"
            style={{
              height: 595,
              background: "radial-gradient(ellipse at 50% 50%, #f8f8f8 0%, #e2e2e2 100%)"
            }}
          >
            <img
              src={imgImage2074}
              alt="Johan kabo"
              className="absolute object-cover pointer-events-none"
              style={{ width: 692, height: 923, left: "50%", transform: "translateX(calc(-50% - 81px))", top: 0 }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="text-[28px] text-black tracking-[-0.8px] leading-[37px]"
              style={{ fontFamily: "'Bricolage Grotesque:SemiBold', 'Bricolage Grotesque', sans-serif", fontWeight: 600, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
            >
              Johan kabo
            </div>
            <div
              className="text-[24px] text-[rgba(0,0,0,0.6)] tracking-[-0.8px] leading-[37px]"
              style={{ fontFamily: "'DM Sans:SemiBold', 'DM Sans', sans-serif", fontWeight: 600, fontVariationSettings: '"opsz" 14' }}
            >
              UI/UX Designer &amp; Emerging Product Designer
            </div>
          </div>
        </div>

        {/* Right: bio + work history */}
        <div className="flex flex-col gap-[66px] flex-1">
          {/* Bio */}
          <div
            className="text-[25px] text-black text-justify tracking-[-0.8px] leading-[36.7px]"
            style={{ fontFamily: "'Bricolage Grotesque:Regular', 'Bricolage Grotesque', sans-serif", fontWeight: 400, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
          >
            <p className="mb-0" style={{ fontFamily: "'Bricolage Grotesque:Bold', 'Bricolage Grotesque', sans-serif", fontWeight: 700 }}>
              Designer par conviction. Technologue par formation.
            </p>
            <p className="mb-0">
              Issu d'un parcours en génie logiciel, j'ai développé une vision globale de la création de produits numériques : de la compréhension des besoins utilisateurs jusqu'à la faisabilité technique en production.
            </p>
            <p className="mb-0">
              Aujourd'hui m'émergeant dans le Product Designer, je ne me contente pas de dessiner des interfaces. Je conçois des systèmes complexes, des plateformes de données et des produits propulsés par l'Intelligence Artificielle -{" "}
              <span style={{ fontFamily: "'Bricolage Grotesque:SemiBold', 'Bricolage Grotesque', sans-serif", fontWeight: 600 }}>à l'image de DanmaGenesis - </span>
              en gardant toujours à l'esprit leur architecture, leur développement et leur évolution.
            </p>
            <p>
              Mon objectif :{" "}
              <span style={{ fontFamily: "'Bricolage Grotesque:SemiBold', 'Bricolage Grotesque', sans-serif", fontWeight: 600 }}>transformer les problèmes métier complexes</span>
              {" "}en
              <span style={{ fontFamily: "'Bricolage Grotesque:SemiBold', 'Bricolage Grotesque', sans-serif", fontWeight: 600 }}> expériences numériques simples</span>
              , intuitives et performantes.
            </p>
          </div>

          {/* Work History */}
          <div>
            <h3
              className="text-[28px] text-black tracking-[-0.4px] leading-[30px] mb-[19px]"
              style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
            >
              Mon parcours professionnel
            </h3>
            <div className="relative" style={{ width: 506 }}>
              {workHistory.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[20px] border border-[#dedede] flex items-end justify-between p-[21px] relative"
                  style={{
                    boxShadow: "0px 0.8px 0.8px -1.2px rgba(0,0,0,0.07), 0px 2.3px 2.3px -2.4px rgba(0,0,0,0.07), 0px 6.1px 6.1px -3.6px rgba(0,0,0,0.06), 0px 19.2px 19.2px -4.8px rgba(0,0,0,0.03)",
                    marginTop: i === 0 ? 0 : -8,
                    zIndex: workHistory.length - i,
                  }}
                >
                  <div className="flex flex-col gap-1">
                    <div
                      className="text-[19px] text-black tracking-[-0.39px] leading-[29px]"
                      style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
                    >
                      {item.company}
                    </div>
                    <div
                      className="text-[14px] text-[#545454] tracking-[-0.14px] leading-[16px]"
                      style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600 }}
                    >
                      {item.role}
                    </div>
                  </div>
                  <div
                    className="text-[14px] text-[#545454] tracking-[-0.14px] leading-[16px]"
                    style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600 }}
                  >
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesignTechSection() {
  const skills = [
    {
      title: "Pensée Produit & UX/UI System",
      desc: "Stratégie UX, parcours utilisateurs, design systems scalables, prototypage Hi-fi.",
      active: true,
    },
    {
      title: "Culture Code & Intégration IA",
      desc: "Maîtrise de la logique frontend, intégration d'API & LLM, faisabilité technique et contraintes de développement.",
      active: false,
    },
    {
      title: "Conçu pour ce qui se passe après Figma.",
      desc: "De Figma au code sans déperdition : des interfaces conçues avec la rigueur du dev dès la première maquette.",
      active: false,
    },
  ];

  return (
    <section id="services" className="bg-white px-[154px] py-[96px]">
      <div className="max-w-[1610px]">
        {/* Heading row */}
        <div className="flex items-start justify-between mb-[27px]">
          <h2
            className="text-[62px] tracking-[-3px] leading-none"
            style={{ fontFamily: "'DM Sans:SemiBold', 'DM Sans', sans-serif", fontWeight: 600, fontVariationSettings: '"opsz" 14', color: "#2c2c2c" }}
          >
            Design x Technologie
          </h2>
          <div
            className="text-[24px] text-[rgba(0,0,0,0.6)] tracking-[-0.8px] leading-[36.7px]"
            style={{ fontFamily: "'DM Sans:SemiBold', 'DM Sans', sans-serif", fontWeight: 600, fontVariationSettings: '"opsz" 14', width: 486 }}
          >
            <p className="mb-0">Je conçois des produits en gardant à l'esprit</p>
            <p>leur faisabilité, leur développement et leur évolution.</p>
          </div>
        </div>

        {/* Content row */}
        <div className="flex gap-[61px] items-end" style={{ width: 1608 }}>
          {/* Left: placeholder images */}
          <div className="relative flex-shrink-0" style={{ width: 806, height: 664 }}>
            <div className="absolute bg-[#efefef] rounded-[20px]" style={{ width: 433, height: 411, left: 14, top: 4 }} />
            <div className="absolute bg-[#efefef] rounded-[20px]" style={{ width: 433, height: 137, left: 299, top: 421 }} />
          </div>

          {/* Right: skill list with progress bar */}
          <div className="flex gap-[86px] items-center flex-1">
            {/* Progress bar */}
            <div className="flex flex-col gap-2" style={{ height: 665, width: 6 }}>
              {skills.map((s, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[20px] relative overflow-hidden"
                  style={{ background: "#efefef" }}
                >
                  {i === 0 && (
                    <div className="absolute top-0 left-0 w-full rounded-[20px]" style={{ height: 166, background: "#232323" }} />
                  )}
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-16" style={{ width: 661 }}>
              {skills.map((s, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="flex-shrink-0 flex items-center justify-center p-[10.8px] rounded-[32px] relative"
                    style={{
                      background: s.active ? "#000" : "#d5d5d5",
                      boxShadow: s.active
                        ? "0px 0px 0px 1.35px #828282, inset 0px 2.7px 5.4px 0px rgba(255,255,255,0.4)"
                        : "0px 0px 0px 1.35px #d6d6d6",
                    }}
                  >
                    <img src={imgComponent1} alt="" className="w-[32px] h-[32px] block" />
                    <div
                      className="absolute inset-0 rounded-[32px] border"
                      style={{ borderColor: s.active ? "black" : "white", borderWidth: "1.35px" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <div
                      className="text-[25px] text-black tracking-[-0.8px] leading-[36.7px]"
                      style={{
                        fontFamily: s.active
                          ? "'Bricolage Grotesque:Bold', 'Bricolage Grotesque', sans-serif"
                          : "'Bricolage Grotesque:SemiBold', 'Bricolage Grotesque', sans-serif",
                        fontWeight: s.active ? 700 : 600,
                        fontVariationSettings: '"opsz" 14, "wdth" 100'
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      className="text-[24px] text-[rgba(0,0,0,0.6)] tracking-[-0.8px] leading-[36.7px]"
                      style={{ fontFamily: "'DM Sans:SemiBold', 'DM Sans', sans-serif", fontWeight: 600, fontVariationSettings: '"opsz" 14' }}
                    >
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTACard() {
  return (
    <section className="bg-white overflow-hidden relative" style={{ height: 568 }}>
      <div className="absolute" style={{ left: 156, top: "50%", transform: "translateY(-50%)", width: 1608, height: 467 }}>
        {/* Background gray panel */}
        <div
          className="absolute bg-[#f8f8f8] rounded-[24px]"
          style={{ width: 1608, height: 390, left: "50%", top: "50%", transform: "translate(-50%, calc(-50% + 38.5px))" }}
        />

        {/* Black card */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: 476,
            height: 128,
            top: 0,
            left: 1066,
            borderRadius: 28,
            background: "#000",
            boxShadow: "0px 0px 0px 1.19px #828282, inset 0px 2.38px 4.76px 0px rgba(255,255,255,0.4)",
            transform: "rotate(3deg)",
          }}
        >
          {/* Lightning bolt decoration */}
          <div
            className="absolute flex items-center justify-center"
            style={{ width: 329, height: 329, right: -60, bottom: -22, transform: "rotate(25deg)" }}
          >
            <div
              className="relative"
              style={{
                width: 248,
                height: 248,
                maskImage: `url("${imgLightningBolt}")`,
                WebkitMaskImage: `url("${imgLightningBolt}")`,
                maskSize: "135% 135%",
                maskPosition: "center",
                maskRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-black mix-blend-saturation" />
              <img src={imgLightningBolt1} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          <div className="relative z-10 p-[28px] flex flex-col gap-2">
            {/* "Recrutez l'expertise" badge */}
            <div className="inline-flex items-center justify-center px-[14px] py-[8px] rounded-full bg-white self-start" style={{ boxShadow: "0px 0.7px 0.7px -1.5px rgba(0,0,0,0.18)" }}>
              <span
                className="text-[14px] text-black tracking-[-0.14px] leading-none"
                style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600 }}
              >
                Recrutez l'expertise
              </span>
              <div className="absolute inset-0 rounded-full border border-[#f0f0f0]" />
            </div>

            {/* "Design à la demande." */}
            <span
              className="text-[#b8b8b8] text-[25px] tracking-[-0.8px] leading-[36.7px]"
              style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
            >
              Design à la demande.
            </span>
          </div>

          <div className="absolute inset-0 rounded-[28px] border border-black pointer-events-none" style={{ height: 128 }} />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-black px-[156px] pt-[55px] pb-[106px]">
      <div className="flex flex-col gap-[44px]">
        {/* Main heading */}
        <div className="flex flex-col gap-0">
          <div className="flex items-center justify-between">
            <h2
              className="text-white text-[76px] tracking-[-2.28px] leading-[72px]"
              style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
            >
              Hello à tous,
            </h2>
            <span
              className="text-white text-[32px] tracking-[-2px] leading-none"
              style={{ fontFamily: "'DM Sans:Medium', 'DM Sans', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14' }}
            >
              Johankabo
            </span>
          </div>
          <h2
            className="text-[#828282] text-[71px] tracking-[-2.28px] leading-[72px]"
            style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
          >
            des solutions pour chacun.
          </h2>
        </div>

        {/* Contact + Navigation */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2" style={{ width: 368 }}>
            <span
              className="text-[#828282] text-[16px] tracking-[-0.17px] leading-[19px]"
              style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600 }}
            >
              E-mail
            </span>
            <span
              className="text-white text-[21px] tracking-[-0.43px] leading-[30px]"
              style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
            >
              kabojohan@gmail.com
            </span>
          </div>
          <div className="flex flex-col gap-2" style={{ width: 368 }}>
            <span
              className="text-[#828282] text-[16px] tracking-[-0.17px] leading-[19px]"
              style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600 }}
            >
              WhatsApp
            </span>
            <span
              className="text-white text-[21px] tracking-[-0.43px] leading-[30px]"
              style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
            >
              +237 674671243
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span
              className="text-[#828282] text-[16px] tracking-[-0.17px] leading-[19px]"
              style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600 }}
            >
              Navigation
            </span>
            <div
              className="flex flex-col gap-3 text-white text-[21px] tracking-[-0.43px] leading-[30px]"
              style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
            >
              <a href="#projets" className="hover:text-gray-300 transition-colors">Projets</a>
              <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 flex items-center justify-between">
        <span
          className="text-white text-[21px] tracking-[-0.43px] leading-[30px]"
          style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
        >
          © 2026 Johankabo. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-w-[1280px] w-full">
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <ProjectsSection />
      <AboutSection />
      <DesignTechSection />
      <CTACard />
      <Footer />
    </div>
  );
}
