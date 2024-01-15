import mobileIcon from "../assets/images/mobileIcon.svg";
import wrenchIcon from "../assets/images/wrenchIcon.svg";
import adviseIcon from "../assets/images/adviseIcon.svg";
import designIcon from "../assets/images/designIcon.svg";
import appCreationIcon from "../assets/images/appCreationIcon.svg";
import projectManagementIcon from "../assets/images/projectManagementIcon.svg";

import Icon from "next/image";

const features = [
  {
    name: "Création d’application web sur mesure ",
    description:
      "Au Camel Studio, on crée des sites web adaptés à vos besoins. Pas de superflu, juste des solutions efficaces et un espace unique pour votre présence en ligne.",
    icon: appCreationIcon,
    alt: "Icone de création d'application",
  },
  {
    name: "Guide tech",
    description:
      "On n'est pas que des codeurs, on est là pour vous guider dans le monde de la tech et être votre allié dans vos prises de décisions.",
    icon: wrenchIcon,
    alt: "Icone de guide tech",
  },
  {
    name: "Gestion de projet carrée ",
    description:
      "On prend en charge votre projet et on le mène à bien. Peu importe l’étape de son avancement, on saura s’y greffer et le faire décoller",
    icon: projectManagementIcon,
    alt: "Icone de gestion de projets",
  },
  {
    name: "Exploration mobile ",
    description:
      "Plongez dans le monde mobile avec nos applications spécialement conçues pour vos aventures sur iOS et Android. Ici, on se démène pour vous offrir une expérience utilisateur exceptionnelle, où que vous soyez.",
    icon: mobileIcon,
    alt: "Icone d'exploration mobile",
  },
  {
    name: "Conseils en développement ",
    description:
      "Au Camel Studio, on ne vous embrouille pas avec du jargon tech et une terminologie perchée. On parle votre langue et on vous explique les choses étape par étape, afin de trouver les solutions optimales pour votre projet. On ne fait pas dans le compliqué, on fait le job.",
    icon: adviseIcon,
    alt: "Icone de conseil en développement",
  },
  {
    name: "Design UX/UI malin",
    description:
      "Notre équipe crée des interfaces qui fonctionnent bien, propres et au goût du jour. Pas de trucs tape-à-l'œil, mais des designs intelligents.",
    icon: designIcon,
    alt: "Icone de design UX/UI",
  },
];

export default function ServicesSection() {
  return (
    <main className="bg-primary py-12">
      <article className="mx-auto max-w-7xl">
        <section className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-semibold text-secondary">Nos prestations</p>
          <h2
            className="mt-2 text-3xl font-bold tracking-wider font-TrashHand text-secondary sm:text-5xl"
            id="services"
          >
            Ce qu’on sait faire ?
          </h2>
          <p className="mt-6 text-lg">
            On fait du développement sur mesure, des applications web fluides et
            des solutions digitales qui marchent. On n&apos;a pas de formules
            magiques, juste du bon boulot. On est sympa, mais surtout on est
            pros !
          </p>
        </section>
        <section className="mx-auto max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <section key={feature.name} className="flex flex-col">
                <dt className="text-2xl font-semibold leading-7 text-secondary tracking-wider font-TrashHand">
                  <dd className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Icon
                      src={feature.icon}
                      className="h-6 w-6"
                      aria-hidden="true"
                      alt={feature.alt}
                    />
                  </dd>
                  {feature.name}
                </dt>
                <dd className="fmt-1 flex flex-auto flex-col text-base leading-7">
                  {feature.description}
                </dd>
              </section>
            ))}
          </dl>
        </section>
      </article>
    </main>
  );
}
