const assetPath = "/assets";

export type ProjectId = "danmagenesis" | "yamo-nxt-lvl" | "mutzig-star";

type ProjectDetails = {
  name: string;
  category: string;
  role: string;
  title: string;
  lead: string;
  background: string;
  heroImage: string;
  heroAlt: string;
  heroFit?: "cover" | "contain";
  logo?: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  liveUrl: string | null;
  context: string;
  answer: string;
  highlights: string[];
  result: string;
};

const projects: Record<ProjectId, ProjectDetails> = {
  danmagenesis: {
    name: "DanmaGenesis",
    category: "Intelligence artificielle · Création multimédia",
    role: "Product design · UX/UI",
    title: "DanmaGenesis, du texte aux expériences multimédia.",
    lead: "Une plateforme créative qui rassemble la génération d’images et de contenus audio dans une expérience claire, pensée pour passer de l’idée à la création.",
    background: "#e9f3f7",
    heroImage: `${assetPath}/f790f.png`,
    heroAlt: "Interface de création DanmaGenesis",
    secondaryImage: `${assetPath}/8ff17.png`,
    secondaryAlt: "Autre écran de la plateforme DanmaGenesis",
    liveUrl: "https://danmagenesis.netlify.app/",
    context: "Les outils de génération IA sont souvent dispersés. Explorer plusieurs formats sans perdre le fil de son intention peut vite devenir complexe.",
    answer: "DanmaGenesis réunit les principaux points du parcours créatif au sein d’un même espace, avec des écrans conçus pour rendre chaque action et chaque résultat faciles à comprendre.",
    highlights: ["Générer des images à partir d’une intention.", "Transformer du texte en contenu audio.", "Comparer et retrouver ses créations dans un espace cohérent."],
    result: "Une expérience multimédia où l’on peut explorer, produire et retrouver ses créations sans multiplier les outils.",
  },
  "yamo-nxt-lvl": {
    name: "YaMo NXT LVL",
    category: "Communauté · Jeunesse · MTN Cameroon",
    role: "UX/UI design · Expérience digitale",
    title: "YaMo NXT LVL, une communauté pour aller plus loin.",
    lead: "Une plateforme tournée vers la jeunesse camerounaise, ses idées et les opportunités qui lui permettent de passer au niveau supérieur.",
    background: "linear-gradient(160deg, #111 35%, #f7c900 100%)",
    heroImage: `${assetPath}/60165.png`,
    heroAlt: "Univers visuel YaMo NXT LVL",
    heroFit: "cover",
    logo: `${assetPath}/b3a8f.png`,
    liveUrl: "https://yamo.mtn.cm/nxt-lvl/",
    context: "Les jeunes ont besoin d’un espace qui parle leur langage, valorise leurs ambitions et rende les initiatives de la communauté faciles à découvrir.",
    answer: "YaMo NXT LVL rassemble contenus et expériences sous une identité directe et énergique, avec une présence digitale conçue pour mettre la communauté au premier plan.",
    highlights: ["Mettre en avant les initiatives et les talents de la jeunesse.", "Créer une identité reconnaissable sur les supports digitaux.", "Donner envie de rejoindre et de faire vivre la communauté."],
    result: "Une expérience de marque qui fait de la communauté le moteur du mouvement NXT LVL.",
  },
  "mutzig-star": {
    name: "Mützig STAR",
    category: "Musique · Concours · Cameroun",
    role: "UX/UI design · Site web",
    title: "Mützig STAR, la scène des talents musicaux.",
    lead: "Le site du grand concours musical camerounais, conçu pour faire découvrir les talents et accompagner le public au rythme de la compétition.",
    background: "#a6192e",
    heroImage: `${assetPath}/mutzig-star-screen.png`,
    heroAlt: "Aperçu du site et de l’univers visuel Mützig STAR",
    heroFit: "contain",
    liveUrl: "https://www.mutzigstar.com/",
    context: "Un concours musical doit donner envie de découvrir les candidats, de suivre les temps forts et de participer à une aventure qui se déroule sur plusieurs étapes.",
    answer: "Le site plonge le public dans un univers rouge distinctif et met en scène les contenus du concours dans un parcours simple à explorer.",
    highlights: ["Présenter le concours et ses temps forts.", "Mettre en lumière les talents et leur univers musical.", "Prolonger l’expérience de la scène sur le web."],
    result: "Une vitrine digitale qui donne au concours une présence à la hauteur de son énergie et de ses talents.",
  },
};

function DetailImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={`project-detail-image ${className}`} />;
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="project-detail-copy-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function ProjectDetailContent({ projectId, onBack }: { projectId: ProjectId; onBack: () => void }) {
  const project = projects[projectId];

  return (
    <main className="project-detail-page">
      <div className="project-detail-inner">
        <div className="project-detail-toolbar">
          <button type="button" className="project-detail-back" onClick={onBack}>
            <span aria-hidden="true">←</span> Retour aux projets
          </button>
          {project.liveUrl ? (
            <a className="project-detail-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Voir le projet <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-detail-live-link is-unavailable" aria-disabled="true" title="Lien du projet à renseigner">
              Voir le projet <span aria-hidden="true">↗</span>
            </span>
          )}
        </div>

        <header className="project-detail-hero">
          <div className="project-detail-meta"><span>Client / {project.name}</span><span>{project.category}</span><span>Rôle / {project.role}</span></div>
          <h1>{project.title}</h1>
          <p className="project-detail-lead">{project.lead}</p>
        </header>

        <div className="project-detail-hero-visual" style={{ background: project.background }}>
          {project.logo && <img className="project-detail-logo" src={project.logo} alt="Logo YaMo NXT LVL" />}
          <DetailImage src={project.heroImage} alt={project.heroAlt} className={project.heroFit === "contain" ? "is-contained" : ""} />
        </div>

        <div className="project-detail-intro-grid">
          <DetailSection title="Le contexte"><p>{project.context}</p></DetailSection>
          <DetailSection title="La réponse"><p>{project.answer}</p></DetailSection>
        </div>

        {project.secondaryImage && (
          <div className="project-detail-wide-visual" style={{ background: project.background }}>
            <DetailImage src={project.secondaryImage} alt={project.secondaryAlt ?? `Autre vue du projet ${project.name}`} />
          </div>
        )}

        <DetailSection title="Les points clés">
          <ul className="project-detail-highlights">
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </DetailSection>

        <DetailSection title="L’expérience"><p>{project.result}</p></DetailSection>

        <div className="project-detail-next"><span>Explorer la suite</span><button type="button" onClick={onBack}>Retour aux projets <span aria-hidden="true">↗</span></button></div>
      </div>
    </main>
  );
}
