import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  {
    number: "01",
    title: "Pensée Produit & UX/UI System",
    description: "Stratégie UX, parcours utilisateurs, design systems scalables, prototypage Hi-fi.",
  },
  {
    number: "02",
    title: "Culture Code & Intégration IA",
    description: "Maîtrise de la logique frontend, intégration d'API & LLM, faisabilité technique et contraintes de développement.",
  },
  {
    number: "03",
    title: "Conçu pour ce qui se passe après Figma",
    description: "De Figma au code sans déperdition : des interfaces conçues avec la rigueur du dev dès la première maquette.",
  },
];

function DesignSystemPreview() {
  return (
    <div className="dt-preview dt-design-system-preview">
      <div className="dt-preview-toolbar"><span /> <span /> <span /><b>Design tokens</b></div>
      <div className="dt-token-row"><span className="dt-token-swatch dt-swatch-dark" /><span>ink / 900</span><code>#222222</code></div>
      <div className="dt-token-row"><span className="dt-token-swatch dt-swatch-lilac" /><span>accent / 400</span><code>#C4B5FD</code></div>
      <div className="dt-token-row"><span className="dt-token-swatch dt-swatch-mint" /><span>success / 300</span><code>#B9E7D0</code></div>
      <div className="dt-preview-divider" />
      <div className="dt-type-line dt-type-large">Aa</div>
      <div className="dt-type-line dt-type-small">Type scale / spacing / radius</div>
    </div>
  );
}

function AiPreview() {
  return (
    <div className="dt-preview dt-ai-preview">
      <div className="dt-ai-header"><span className="dt-api-dot" /> API connected <span className="dt-api-badge">200 OK</span></div>
      <div className="dt-prompt"><span>⌘</span><span>Transform this flow into a build-ready component</span></div>
      <div className="dt-response"><span className="dt-response-mark">✦</span><div><strong>Ready for integration</strong><p>Tokens mapped · 3 states · responsive</p></div></div>
      <div className="dt-code-line"><i /><i /><i /><i /></div>
    </div>
  );
}

function BuildPreview() {
  const [mode, setMode] = useState<"figma" | "react">("react");

  return (
    <div className="dt-preview dt-build-preview">
      <div className="dt-build-topline"><span>handoff status</span><strong>build-ready</strong></div>
      <div className="dt-toggle" role="group" aria-label="Choisir le mode de prévisualisation">
        <button type="button" className={mode === "figma" ? "is-selected" : ""} onClick={() => setMode("figma")}>Figma</button>
        <button type="button" className={mode === "react" ? "is-selected" : ""} onClick={() => setMode("react")}>React</button>
      </div>
      <div className="dt-lighthouse">
        <strong>100</strong><span>/100</span><small>Lighthouse performance</small>
      </div>
      <div className="dt-build-footer"><span className="dt-check">✓</span> {mode === "react" ? "Composant React prêt" : "Prototype Figma prêt"}</div>
    </div>
  );
}

function DesignTechCard({ index }: { index: number }) {
  const skill = skills[index];
  return (
    <article className={`dt-card dt-card-${index + 1}`}>
      <div className="dt-card-glow" />
      <div className="dt-card-heading"><span>{skill.number}</span><span>Johan KABO / 2024</span></div>
      <div className="dt-card-content">
        <div>
          <p className="dt-card-kicker">{index === 0 ? "PRODUCT THINKING" : index === 1 ? "DESIGN × ENGINEERING" : "FROM IDEA TO IMPACT"}</p>
          <h3>{skill.title}</h3>
          <p className="dt-card-copy">{skill.description}</p>
        </div>
        {index === 0 ? <DesignSystemPreview /> : index === 1 ? <AiPreview /> : <BuildPreview />}
      </div>
      <div className="dt-card-bottom"><span>{index === 0 ? "TOKENS / SYSTEMS" : index === 1 ? "PROMPT / API" : "FIGMA / REACT"}</span><span>↗</span></div>
    </article>
  );
}

export default function DesignTechSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.25 });
  const cardOneY = useTransform(progress, [0, 0.2], ["10%", "0%"]);
  const cardTwoY = useTransform(progress, [0.16, 0.57], ["112%", "7%"]);
  const cardThreeY = useTransform(progress, [0.48, 0.92], ["116%", "14%"]);
  const cardOneRotate = useTransform(progress, [0, 0.32], [-1.5, 0]);
  const cardTwoRotate = useTransform(progress, [0.16, 0.65], [2, -1]);
  const cardThreeRotate = useTransform(progress, [0.48, 1], [-2, 1]);
  const textOpacity = [
    useTransform(progress, [0, 0.28, 0.43], [1, 1, 0.36]),
    useTransform(progress, [0.25, 0.47, 0.68], [0.36, 1, 0.36]),
    useTransform(progress, [0.55, 0.76, 1], [0.36, 1, 1]),
  ];

  return (
    <section ref={sectionRef} id="services" className="design-tech-scroll-section">
      <div className="design-tech-sticky-shell">
        <div className="design-tech-heading">
          <div>
            <h2>Design x Technologie</h2>
          </div>
          <p className="design-tech-intro">Je conçois des produits en gardant à l’esprit<br className="hidden sm:block" /> leur faisabilité, leur développement et leur évolution.</p>
        </div>
        <div className="design-tech-scroll-layout">
          <div className="design-tech-copy-column">
            {skills.map((skill, index) => (
              <motion.div key={skill.number} className="design-tech-copy-item" style={{ opacity: textOpacity[index] }}>
                <span className="design-tech-copy-number">{skill.number}</span>
                <div><h3>{skill.title}</h3><p>{skill.description}</p></div>
              </motion.div>
            ))}
          </div>
          <div className="design-tech-card-stage" aria-label="Cartes de présentation de l'approche design et technologie">
            <motion.div className="dt-card-motion" style={{ y: cardOneY, rotate: cardOneRotate, zIndex: 1 }}><DesignTechCard index={0} /></motion.div>
            <motion.div className="dt-card-motion" style={{ y: cardTwoY, rotate: cardTwoRotate, zIndex: 2 }}><DesignTechCard index={1} /></motion.div>
            <motion.div className="dt-card-motion" style={{ y: cardThreeY, rotate: cardThreeRotate, zIndex: 3 }}><DesignTechCard index={2} /></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
