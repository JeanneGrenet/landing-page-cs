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
  },
  {
    name: "Guide tech",
    description:
      "On n'est pas que des codeurs, on est là pour vous guider dans le monde de la tech et être votre allié dans vos prises de décisions.",
    icon: wrenchIcon,
  },
  {
    name: "Gestion de projet carrée ",
    description:
      "On prend en charge votre projet et on le mène à bien. Peu importe l’étape de son avancement, on saura s’y greffer et le faire décoller",
    icon: projectManagementIcon,
  },
  {
    name: "Exploration mobile ",
    description:
      "Plongez dans le monde mobile avec nos applications spécialement conçues pour vos aventures sur iOS et Android. Ici, on se démène pour vous offrir une expérience utilisateur exceptionnelle, où que vous soyez.",
    icon: mobileIcon,
  },
  {
    name: "Conseils en développement ",
    description:
      "Au Camel Studio, on ne vous embrouille pas avec du jargon tech et une terminologie perchée. On parle votre langue et on vous explique les choses étape par étape, afin de trouver les solutions optimales pour votre projet. On ne fait pas dans le compliqué, on fait le job.",
    icon: adviseIcon,
  },
  {
    name: "Design UX/UI malin",
    description:
      "Notre équipe crée des interfaces qui fonctionnent bien, propres et au goût du jour. Pas de trucs tape-à-l'œil, mais des designs intelligents.",
    icon: designIcon,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-primary py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-secondary">
            Nos prestations
          </h2>
          <p
            className="mt-2 text-3xl font-bold tracking-wider font-TrashHand text-secondary sm:text-5xl"
            id="services"
          >
            Ce qu’on sait faire ?
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            On fait du développement sur mesure, des applications web fluides et
            des solutions digitales qui marchent. On n&apos;a pas de formules
            magiques, juste du bon boulot. On est sympa, mais surtout on est
            pros !
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-secondary tracking-wider font-TrashHand">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Icon
                      src={feature.icon}
                      className="h-6 w-6"
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="fmt-1 flex flex-auto flex-col text-base leading-7 text-gray-200">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
