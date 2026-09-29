import { useEffect, useLayoutEffect, useRef, useState } from "react";

const assetPathPrefix = "/assets";

const imgArrowUpRight = `${assetPathPrefix}/986d1.svg`;
const imgCvDocument = `${assetPathPrefix}/cv-document.svg`;
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

function useMotionSystem() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - previousScrollY;

      if (currentScrollY <= 32) {
        setIsCompact(false);
      } else if (scrollDelta > 3) {
        setIsCompact(true);
      } else if (scrollDelta < -3) {
        setIsCompact(false);
      }

      previousScrollY = currentScrollY;
    };
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    document.querySelectorAll(".reveal-on-scroll, .footer-reveal").forEach((element) => revealObserver.observe(element));

    const magneticButtons = document.querySelectorAll<HTMLElement>(".magnetic-button");
    const pointerHandlers = new Map<HTMLElement, (event: PointerEvent) => void>();
    magneticButtons.forEach((button) => {
      const handlePointerMove = (event: PointerEvent) => {
        const bounds = button.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.12;
        button.style.setProperty("--magnetic-x", `${x}px`);
        button.style.setProperty("--magnetic-y", `${y}px`);
      };
      button.addEventListener("pointermove", handlePointerMove);
      pointerHandlers.set(button, handlePointerMove);
    });

    const cursorLabel = document.querySelector<HTMLElement>(".project-cursor");
    const projectCards = document.querySelectorAll<HTMLElement>(".project-card");
    const updateCursorPosition = (event: PointerEvent) => {
      cursorLabel?.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursorLabel?.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    const showProjectCursor = () => cursorLabel?.classList.add("is-visible");
    const hideProjectCursor = () => cursorLabel?.classList.remove("is-visible");

    window.addEventListener("pointermove", updateCursorPosition, { passive: true });
    projectCards.forEach((card) => {
      card.addEventListener("pointerenter", showProjectCursor);
      card.addEventListener("pointerleave", hideProjectCursor);
    });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("pointermove", updateCursorPosition);
      revealObserver.disconnect();
      magneticButtons.forEach((button) => {
        const handler = pointerHandlers.get(button);
        if (handler) button.removeEventListener("pointermove", handler);
      });
      projectCards.forEach((card) => {
        card.removeEventListener("pointerenter", showProjectCursor);
        card.removeEventListener("pointerleave", hideProjectCursor);
      });
    };
  }, []);

  return isCompact;
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <img alt="" className={className || "w-6 h-6"} src={imgArrowUpRight} />
  );
}

function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const isCompact = useMotionSystem();

  return (
    <nav className={`site-nav fixed top-6 z-50 ${isCompact ? "is-compact" : "left-1/2 -translate-x-1/2"}`}>
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
        <div className="nav-links flex items-center gap-[53px]">
          <div
            className="flex items-center gap-[39px] text-[rgba(255,255,255,0.5)] text-[20px] tracking-[-0.5px] text-center"
            style={{ fontFamily: "'DM Sans:Medium', 'DM Sans', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14' }}
          >
            <a href="#projets" className="hover:text-white transition-colors cursor-pointer leading-none">Projets</a>
            <a href="#moi" className="hover:text-white transition-colors cursor-pointer leading-none">Moi</a>
            <a href="#services" className="hover:text-white transition-colors cursor-pointer leading-none">Services</a>
          </div>
          <button
            type="button"
            onClick={onOpenContact}
            className="bg-white border border-[#e1e1e1] flex items-center justify-center px-[25px] py-[11px] rounded-full shadow-[0px_2px_2px_0px_rgba(233,233,233,0.25)] text-black text-[20px] tracking-[-1px] text-center hover:bg-gray-100 transition-colors"
            style={{ fontFamily: "'DM Sans:Medium', 'DM Sans', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14' }}
          >
            Contact
          </button>
        </div>

        <div className="compact-menu-indicator" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}

function HeroSection({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="hero-section relative w-full overflow-hidden" style={{ background: "#f5f5f3", minHeight: 826 }}>
      {/* Grid background */}
      <div className="absolute inset-0 opacity-60 overflow-hidden pointer-events-none" style={{ left: "calc(50% + 13.74px)", transform: "translateX(-50%)", top: -774.21, width: 2439.48 }}>
        {Array.from({ length: 12 }).map((_, row) => (
          <div key={row} className="flex">
            {Array.from({ length: 8 }).map((_, col) => (
              <div
                key={col}
                style={{
                  width: 304.935,
                  height: 235.869,
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
          width: 2544,
          height: 1142,
          top: "calc(50% + 10px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(217,217,217,0) 0%, rgba(255,255,255,1) 100%)"
        }}
      />

      {/* Hero content */}
      <div className="hero-content relative flex flex-col items-center gap-12 px-6 pt-[262px] pb-[96px]">
        {/* Headline row 1 */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[1920px]">
          <div className="flex flex-col items-center gap-[18px] w-full">
            {/* "Hello, je suis [photo] Johan KABO" */}
            <div className="hero-line reveal-stagger flex items-center gap-3 justify-center whitespace-nowrap" style={{ height: 81 }}>
              <span
                className="text-[#171717] text-[62px] tracking-[-3px] leading-none opacity-50 flex-shrink-0"
                style={{ fontFamily: "'Bricolage Grotesque:Regular', 'Bricolage Grotesque', sans-serif", fontWeight: 400, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                Hello, je suis
              </span>
              {/* Photo pill */}
              <div
                className="hero-pill hero-float rounded-full overflow-hidden border-[1.5px] border-black flex-shrink-0 relative"
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
                className="text-[#6750a4] text-[62px] tracking-[-3px] leading-none flex-shrink-0"
                style={{ fontFamily: "'Bricolage Grotesque:Regular', 'Bricolage Grotesque', sans-serif", fontWeight: 400, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                Johan KABO
              </span>
            </div>

            {/* "UI/UX Designer, Je transformes [pill] les problèmes" */}
            <div className="hero-line reveal-stagger flex items-center gap-3 justify-center whitespace-nowrap" style={{ height: 81 }}>
              <span
                className="text-[#2c2c2c] text-[62px] tracking-[-3px] leading-none flex-shrink-0"
                style={{ fontFamily: "'Bricolage Grotesque:Medium', 'Bricolage Grotesque', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                UI/UX Designer , Je tranformes
              </span>
              {/* Pills with image */}
              <div
                className="rounded-full overflow-hidden border-[1.5px] border-black flex-shrink-0 relative"
                style={{ width: 105, height: 71 }}
              >
                <img src={imgFrame47} alt="" className="absolute object-cover" style={{ width: "253%", height: "208%", left: "-26%", top: "-53%" }} />
              </div>
              <span
                className="text-[#1e1e1e] text-[62px] tracking-[-3px] leading-none flex-shrink-0"
                style={{ fontFamily: "'Bricolage Grotesque:Medium', 'Bricolage Grotesque', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                les problèmes
              </span>
            </div>

            {/* "en produits numériques [pill] simples." */}
            <div className="hero-line reveal-stagger flex items-center gap-3 justify-center whitespace-nowrap" style={{ height: 81 }}>
              <span
                className="text-[#2c2c2c] text-[62px] tracking-[-3px] leading-none flex-shrink-0"
                style={{ fontFamily: "'Bricolage Grotesque:Medium', 'Bricolage Grotesque', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                en produits numériques
              </span>
              <div
                className="rounded-full overflow-hidden border-[1.5px] border-black flex-shrink-0 relative"
                style={{ width: 105, height: 71, background: "rgba(127,127,127,0.4)" }}
              >
                <img src={imgFrame47} alt="" className="absolute object-cover" style={{ width: "253%", height: "208%", left: "-26%", top: "-53%" }} />
                <img src={imgImage2076} alt="" className="absolute object-cover" style={{ width: 110, height: 109, left: "50%", top: "50%", transform: "translate(-50%, -55%)" }} />
              </div>
              <span
                className="text-[#1e1e1e] text-[62px] tracking-[-3px] leading-none flex-shrink-0"
                style={{ fontFamily: "'Bricolage Grotesque:Medium', 'Bricolage Grotesque', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14, "wdth" 100' }}
              >
                simples.
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="hero-subtitle reveal-stagger text-[#8d8d8d] text-[28px] tracking-[-0.84px] text-center leading-normal"
            style={{ fontFamily: "'DM Sans:Medium', 'DM Sans', sans-serif", fontWeight: 500, fontVariationSettings: '"opsz" 14' }}
          >
            UX/UI · Produit · IA · Technologie
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta reveal-stagger flex items-center gap-[26.361px]">
          <button
            type="button"
            onClick={onOpenContact}
            className="magnetic-button flex items-center gap-3 overflow-hidden pl-[10px] pr-7 py-[26px] rounded-full cursor-pointer relative hover:opacity-90 transition-opacity"
            style={{ height: 73.592, background: "#1e1e1e", boxShadow: "inset 0px 4.394px 4.394px 0px rgba(255,255,255,0.25)" }}
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
            className="magnetic-button bg-white border border-[#e1e1e1] flex items-center justify-center px-6 rounded-full cursor-pointer hover:bg-gray-50 transition-colors shadow-[0px_4.4px_4.4px_0px_rgba(213,213,213,0.25)]"
            style={{ height: 73.592 }}
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
        style={{ maxWidth: 1608, padding: "0 52px", gap: 38, height: 124 }}
      >
        {/* Label — sur la même ligne, ne rétrécit pas */}
        <p
          className="flex-shrink-0 text-[#545454] leading-none"
          style={{
            fontFamily: "'Inter:Medium', Inter, sans-serif",
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: "-0.786px",
            whiteSpace: "nowrap",
          }}
        >
          Produits créés pour des acteurs de référence.
        </p>

        {/* Ticker avec masque de fondu gauche/droite */}
        <div
          className="flex-1 overflow-hidden relative opacity-70"
          style={{ height: 124 }}
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
    <div className="project-card reveal-on-scroll flex flex-col gap-[17px]" style={{ width: "calc(50% - 32px)" }}>
      <div
        className="bg-[#f5f5f5] rounded-[20px] overflow-hidden px-[18px] py-[20px] flex flex-col"
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
    <section id="projets" className="projects-section bg-white px-[152px] py-[96px]">
      <div className="project-cursor" aria-hidden="true">View project</div>
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
      <div className="projects-grid flex flex-col gap-16 max-w-[1608px] mx-auto">
        {/* Row 1 */}
        <div className="projects-row flex gap-16">
          {/* DanmaGenesis */}
          <ProjectCard title="DanmaGenesis" subtitle="Plateforme IA de text to audio et text to image">
            <div className="flex gap-[13px] flex-1">
              <div className="flex-1 bg-[#e6e6e6] rounded-[14px] overflow-hidden relative">
                <img src={imgImage2080} alt="DanmaGenesis" className="project-parallax absolute max-w-none pointer-events-none" style={{ width: 655, height: 879, left: -147, top: 0.23 }} />
              </div>
              <div className="flex-1 bg-[#e6e6e6] rounded-[14px] overflow-hidden relative">
                <img src={imgImage2081} alt="DanmaGenesis 2" className="project-parallax absolute max-w-none pointer-events-none" style={{ width: 459, height: 616, right: 0, top: "calc(50% + 23.73px)", transform: "translateY(-50%)" }} />
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
                  className="absolute max-w-none pointer-events-none"
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
                  <div className="relative overflow-hidden" style={{ width: 344, height: 508 }}>
                    <img src={imgMockupSmartphoneGauche} alt="" className="absolute max-w-none" style={{ width: "100.18%", height: "154.77%", left: "-0.12%", top: "-20.62%" }} />
                  </div>
                </div>
                <img src={imgEllipse1} alt="" className="absolute max-w-none pointer-events-none" style={{ width: 577.778, height: 511, left: 0.5, top: 305.23 }} />
                <img
                  src={imgIPhone15ProMockup}
                  alt=""
                  className="absolute max-w-none pointer-events-none"
                  style={{ width: 459, height: 614, left: -351.5, top: 144.23 }}
                />
                <p
                  className="absolute text-right text-[36px] tracking-[-1.8px] leading-none"
                  style={{
                    fontFamily: "'Inter:Regular', Inter, sans-serif",
                    fontWeight: 400,
                    color: "#38b000",
                    right: 0,
                    top: 426.23,
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
        <div className="projects-row flex gap-16">
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
                <img src={imgImage2080} alt="MützigSTAR" className="absolute max-w-none pointer-events-none" style={{ width: 655, height: 879, left: -147, top: 0.23 }} />
              </div>
              <div className="flex-1 bg-[#e6e6e6] rounded-[14px] overflow-hidden relative">
                <img src={imgImage2081} alt="MützigSTAR 2" className="absolute max-w-none pointer-events-none" style={{ width: 474, height: 636, left: -105.5, top: "calc(50% + 0.73px)", transform: "translateY(-50%)" }} />
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
    <section id="moi" className="bg-white px-[156px] py-[96px]">
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
            className="about-photo rounded-[32px] overflow-hidden relative"
            style={{
              height: 595,
              background: "radial-gradient(ellipse at 50% 50%, #f8f8f8 0%, #e2e2e2 100%)"
            }}
          >
            <img
              src={imgImage2074}
              alt="Johan kabo"
              className="absolute max-w-none object-cover pointer-events-none"
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
            <div className="work-history-stack relative" style={{ width: 506 }}>
              {workHistory.map((item, i) => (
                <div
                  key={i}
                  className="work-history-card bg-white rounded-[20px] border border-[#dedede] flex items-end justify-between p-[21px] relative"
                  style={{
                    boxShadow: "0px 0.8px 0.8px -1.2px rgba(0,0,0,0.07), 0px 2.3px 2.3px -2.4px rgba(0,0,0,0.07), 0px 6.1px 6.1px -3.6px rgba(0,0,0,0.06), 0px 19.2px 19.2px -4.8px rgba(0,0,0,0.03)",
                    height: 98.37,
                    width: i === 0 ? "100%" : i === 1 ? "95%" : "90%",
                    position: i === 0 ? "relative" : "absolute",
                    left: i === 0 ? undefined : i === 1 ? "2.5%" : "5%",
                    top: i === 0 ? undefined : i === 1 ? 13.26 : 26.5,
                    marginTop: 0,
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
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSkill, setActiveSkill] = useState(0);
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

  useEffect(() => {
    const updateActiveSkill = () => {
      const section = sectionRef.current;
      if (!section) return;

      const scrollableDistance = section.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / scrollableDistance));
      setActiveSkill(Math.min(skills.length - 1, Math.floor(progress * skills.length)));
    };

    updateActiveSkill();
    window.addEventListener("scroll", updateActiveSkill, { passive: true });
    window.addEventListener("resize", updateActiveSkill);
    return () => {
      window.removeEventListener("scroll", updateActiveSkill);
      window.removeEventListener("resize", updateActiveSkill);
    };
  }, [skills.length]);

  return (
    <section ref={sectionRef} id="services" className="design-tech-section bg-white px-[154px] py-[96px]">
      <div className="design-tech-layout max-w-[1610px]">
        {/* Heading row */}
        <div className="flex items-start justify-between mb-[27px]">
          <h2
            className="reveal-on-scroll text-[62px] tracking-[-3px] leading-none"
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
        <div className="design-tech-stage flex gap-[61px] items-center" style={{ width: 1608 }}>
          {/* Animated visual workspace */}
          <div className="design-tech-visual relative flex-shrink-0" style={{ width: 806, height: 664 }}>
            <div className="visual-window absolute rounded-[20px]" data-state={activeSkill}>
              <div className="visual-window-bar"><span /><span /><span /></div>
              <div className="visual-canvas">
                <div className="visual-grid" />
                <div className="visual-panel visual-panel-main">
                  <div className="visual-panel-line visual-panel-line-wide" />
                  <div className="visual-panel-line" />
                  <div className="visual-panel-line visual-panel-line-short" />
                  <div className="visual-panel-button" />
                </div>
                <div className="visual-panel visual-panel-side">
                  <div className="visual-panel-dot" />
                  <div className="visual-panel-line" />
                  <div className="visual-panel-line visual-panel-line-short" />
                </div>
                <div className="visual-cursor" />
                <div className="visual-code-lines"><span /><span /><span /><span /></div>
              </div>
              <div className="visual-state-label">{activeSkill === 0 ? "UX / UI SYSTEM" : activeSkill === 1 ? "CODE + IA" : "READY FOR BUILD"}</div>
            </div>
          </div>

          {/* Right: skill list with progress bar */}
          <div className="design-tech-skills flex gap-[86px] items-center flex-1">
            {/* Progress bar */}
            <div className="design-tech-progress flex flex-col gap-2" style={{ height: 665, width: 6 }}>
              {skills.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-[20px] relative overflow-hidden ${i === activeSkill ? "is-active" : ""}`}
                  style={{ background: "#efefef" }}
                >
                  <div className="absolute inset-0 rounded-[20px]" />
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-16" style={{ width: 661 }}>
              {skills.map((s, i) => (
                <div key={i} className={`skill-row flex gap-4 items-start ${i === activeSkill ? "is-active" : ""}`}>
                  <div
                    className="flex-shrink-0 flex items-center justify-center p-[10.8px] rounded-[32px] relative"
                    style={{
                      background: i === activeSkill ? "#000" : "#d5d5d5",
                      boxShadow: i === activeSkill
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
                        fontFamily: i === activeSkill
                          ? "'Bricolage Grotesque:Bold', 'Bricolage Grotesque', sans-serif"
                          : "'Bricolage Grotesque:SemiBold', 'Bricolage Grotesque', sans-serif",
                        fontWeight: i === activeSkill ? 700 : 600,
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

function CTACard({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="bg-white overflow-hidden relative" style={{ height: 568 }}>
      <div className="cta-inner absolute" style={{ left: 156, top: "50%", transform: "translateY(-50%)", width: 1608, height: 467 }}>
        {/* Background gray panel */}
        <div
          className="cta-panel absolute bg-[#f8f8f8] rounded-[24px]"
          style={{ width: 1608, height: 390, left: "50%", top: "50%", transform: "translate(-50%, calc(-50% + 38.5px))" }}
        >
          <div className="cta-content absolute flex flex-col items-center" style={{ left: "50%", top: 74, transform: "translateX(-50%)" }}>
            <h2
              className="text-center text-[54px] tracking-[-3.116px] leading-none whitespace-nowrap"
              style={{ fontFamily: "'DM Sans:SemiBold', 'DM Sans', sans-serif", fontWeight: 600, fontVariationSettings: '"opsz" 14', color: "#2c2c2c" }}
            >
              À la recherche d'un Designer
              <br />
              <span className="text-[#949494]">qui comprend la réalité du Code ?</span>
            </h2>
            <div className="cta-actions mt-[34px] flex items-center gap-[26px]">
              <a
                href="/assets/CV_Johan_KABO_Product_Designer - New.pdf"
                download="CV_Johan_KABO_Product_Designer - New.pdf"
                className="flex h-[74px] items-center gap-[11px] rounded-full bg-[#1e1e1e] pl-[10px] pr-[26px] text-white shadow-[inset_0px_4px_4px_rgba(255,255,255,0.25)] transition-transform hover:scale-[1.03]"
                aria-label="Télécharger le CV de Johan Kabo"
              >
                <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white">
                  <img src={imgCvDocument} alt="" className="h-[21.6px] w-[16.8px] shrink-0 object-contain" />
                </span>
                <span className="whitespace-nowrap text-[20px] tracking-[-1.098px]" style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600 }}>
                  Télécharger Mon CV
                </span>
              </a>
              <button
                type="button"
                onClick={onOpenContact}
                className="flex h-[74px] items-center justify-center rounded-full border border-[#e1e1e1] bg-white px-6 text-[#1e1e1e] shadow-[0px_4px_4px_rgba(213,213,213,0.25)] transition-transform hover:scale-[1.03]"
                style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600, fontSize: 20, letterSpacing: "-1.098px" }}
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>

        {/* Black card */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: 476.043,
            height: 128.753,
            top: 0,
            left: 1066,
            borderRadius: 28.562,
            background: "#000",
            boxShadow: "0px 0.882px 0.882px -0.893px rgba(0,0,0,0.33), 0px 2.401px 2.401px -1.785px rgba(0,0,0,0.32), 0px 5.273px 5.273px -2.678px rgba(0,0,0,0.3), 0px 11.704px 11.704px -3.57px rgba(0,0,0,0.25), 0px 29.752px 29.752px -4.463px rgba(0,0,0,0.11), 0px 0px 0px 1.19px #828282, inset 0px 2.38px 4.76px 0px rgba(255,255,255,0.4)",
            transform: "rotate(3deg)",
          }}
        >
          {/* Lightning bolt decoration */}
          <div
            className="absolute flex items-center justify-center"
            style={{ width: 328.968, height: 328.968, right: -59.76, bottom: -21.92, transform: "rotate(25deg)" }}
          >
            <div
              className="relative"
              style={{
                width: 247.544,
                height: 247.544,
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

          <div className="relative z-10 p-[28.562px] flex flex-col gap-2">
            {/* "Recrutez l'expertise" badge */}
            <div className="relative inline-flex h-[35.692px] items-center justify-center px-[14.281px] py-[14.281px] rounded-full bg-white self-start" style={{ boxShadow: "0px 0.717px 0.717px -1.488px rgba(0,0,0,0.18), 0px 2.724px 2.724px -2.975px rgba(0,0,0,0.16), 0px 11.901px 11.901px -4.463px rgba(0,0,0,0.06)" }}>
              <span
                className="text-[13.805px] text-black tracking-[-0.1428px] leading-[15.995px]"
                style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", fontWeight: 600 }}
              >
                Recrutez l'expertise
              </span>
              <div className="absolute inset-0 rounded-full border-[1.19px] border-[#f0f0f0]" />
            </div>

            {/* "Design à la demande." */}
            <span
              className="text-[#b8b8b8] text-[25.111px] tracking-[-0.7855px] leading-[36.655px]"
              style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
            >
              Design à la demande.
            </span>
          </div>

          <div className="absolute inset-0 rounded-[28.562px] border-[1.19px] border-black pointer-events-none" style={{ height: 128.753 }} />
        </div>
      </div>
    </section>
  );
}

const footerTaglines = [
  "des interfaces pensées pour durer.",
  "du concept au code sans déperdition.",
  "donnez vie à vos idées ?",
];

function Footer({ onOpenContact }: { onOpenContact: () => void }) {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTaglineIndex((currentIndex) => (currentIndex + 1) % footerTaglines.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <footer id="contact" className="mt-[100px] bg-black px-[156px] pt-[55px] pb-[106px]">
      <div className="flex flex-col gap-[44px]">
        {/* Main heading */}
        <div className="flex flex-col gap-0">
          <div className="flex items-center justify-between">
            <h2
              className="footer-title text-white text-[76px] tracking-[-2.28px] leading-[72px]"
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
            aria-live="polite"
            aria-atomic="true"
            className="footer-title footer-tagline text-[#828282] text-[71px] tracking-[-2.28px] leading-[72px]"
            style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", fontWeight: 500 }}
          >
            <span key={taglineIndex} className="footer-tagline-enter">
              {footerTaglines[taglineIndex]}
            </span>
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
              <button type="button" onClick={onOpenContact} className="text-left hover:text-gray-300 transition-colors">Contact</button>
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

function ContactOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "ready" | "error">("idle");
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const formContentRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const isClosingRef = useRef(false);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const beginCloseRef = useRef<() => void>(() => {});
  beginCloseRef.current = () => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => onCloseRef.current(), 640);
  };

  useLayoutEffect(() => {
    if (!isOpen) {
      isClosingRef.current = false;
      setIsClosing(false);
      return;
    }

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setSubmitState("idle");
    dialog.focus();

    const fitContent = () => {
      const dialog = dialogRef.current;
      const content = formContentRef.current;
      if (!dialog || !content) return;

      content.style.transform = "none";
      content.style.transformOrigin = "top left";
      content.style.width = "100%";
      content.style.height = "auto";
      const headerHeight = dialog.querySelector<HTMLElement>(".contact-header")?.offsetHeight ?? 0;
      const wrapper = dialog.querySelector<HTMLElement>(".contact-dialog-content");
      const wrapperStyle = wrapper ? window.getComputedStyle(wrapper) : null;
      const verticalPadding = wrapperStyle
        ? parseFloat(wrapperStyle.paddingTop) + parseFloat(wrapperStyle.paddingBottom)
        : 0;
      const availableHeight = Math.max(240, dialog.clientHeight - headerHeight - verticalPadding - 64);
      const naturalHeight = content.scrollHeight;
      const scale = Math.min(1, Math.max(.55, availableHeight / naturalHeight));
      content.style.transform = `scale(${scale})`;
      content.style.width = `${100 / scale}%`;
      content.style.height = `${naturalHeight * scale}px`;
    };

    fitContent();
    window.addEventListener("resize", fitContent);
    window.visualViewport?.addEventListener("resize", fitContent);
    document.fonts.ready.then(fitContent);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") beginCloseRef.current();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", fitContent);
      window.visualViewport?.removeEventListener("resize", fitContent);
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    };
  }, [isOpen]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSubmitState("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/kabojohan@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          _replyto: formData.get("email"),
          message: formData.get("message"),
          _subject: `Nouveau message portfolio - ${formData.get("name")}`,
          _template: "table",
        }),
      });
      const result: { success?: boolean | string } = await response.json();

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("FormSubmit rejected the message");
      }

      setSubmitState("ready");
    } catch {
      setSubmitState("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="contact-overlay"
      data-closing={isClosing}
      onMouseDown={(event) => { if (event.target === event.currentTarget) beginCloseRef.current(); }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="contact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        tabIndex={-1}
      >
        <div className="contact-dialog-content">
          <header className="contact-header">
            <div className="contact-heading">
              <h2 id="contact-title">Travaillons ensemble</h2>
              <p>Remplissez le formulaire ci dessous.</p>
            </div>
            <button type="button" className="contact-close" onClick={() => beginCloseRef.current()} aria-label="Fermer le formulaire de contact">
              <span />
              <span />
            </button>
          </header>

          <div ref={formContentRef} className="contact-form-content">
            <div className="contact-profile">
              <div className="contact-profile-image">
                <img src={imgImage88} alt="Johan Kabo" />
              </div>
              <div>
                <p>Johan kabo</p>
                <a href="mailto:kabojohan@gmail.com">kabojohan@gmail.com</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-name-email">
                <label className="contact-field">
                  <span>Nom</span>
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label className="contact-field">
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" required />
                </label>
              </div>
              <label className="contact-field contact-message-field">
                <span>Envoyez moi un message</span>
                <textarea name="message" rows={5} placeholder="Parlez-moi brièvement de vos besoins, du timing ou de vos objectifs.." required />
              </label>
              <button className="contact-submit" type="submit" disabled={submitState === "sending"}>
                {submitState === "sending" && <span className="contact-submit-spinner" aria-hidden="true" />}
                {submitState === "ready" ? "Message envoyé !" : submitState === "sending" ? "Envoi..." : submitState === "error" ? "Réessayer" : "Envoyer le message"}
              </button>
              {submitState === "ready" && <p className="contact-status" role="status">Merci, ton message a été transmis. Si c’est le premier envoi, confirme l’activation FormSubmit reçue par e-mail.</p>}
              {submitState === "error" && <p className="contact-status contact-status-error" role="alert">L’envoi a échoué. Vérifie ta connexion et réessaie.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="portfolio-shell w-full">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <HeroSection onOpenContact={() => setIsContactOpen(true)} />
      <ClientLogos />
      <ProjectsSection />
      <AboutSection />
      <DesignTechSection />
      <CTACard onOpenContact={() => setIsContactOpen(true)} />
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <div className="bottom-scroll-blur" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
