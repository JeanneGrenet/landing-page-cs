import Icon from "next/image";
import checkIcon from "../assets/images/checkIcon.svg";

export default function PresentationSection() {
  return (
    <div className="bg-secondary px-6 py-16 lg:px-8" id="presentation">
      <div className="mx-auto max-w-5xl text-base leading-7">
        <p className="text-base font-semibold mb-6 text-primary">
          Présentation
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-wider font-TrashHand text-primary sm:text-5xl">
          Qui sommes-nous ?
        </h2>
        <p className="mt-6 text-xl leading-8">
          Une équipe jeune mais pas novice, soudée et qui connaît le marché
          européen. Pas de blabla ici. On code, on design, on résout des
          problèmes. Notre équipe ? Des gens sympas qui aiment ce qu&apos;ils
          font et qui le font bien. On sait ce qui se passe sur le marché
          européen, et on sait comment s&apos;y prendre pour des projets qui
          dépotent.
        </p>
        <div className="mt-10 max-w-2xl">
          <h3 className="mt-8 text-4xl font-bold tracking-wider font-TrashHand text-primary">
            Pourquoi nous ?{" "}
          </h3>
          <ul role="list" className="mt-8 max-w-xl space-y-8">
            <li className="flex gap-x-3">
              <Icon
                className="mt-1 h-5 w-5 flex-none"
                aria-hidden="true"
                src={checkIcon}
                alt=""
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Pas de blabla, que du boulot :
                </strong>{" "}
                On va droit au but. Pas de promesses vides, juste des résultats
                concrets.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Icon
                className="mt-1 h-5 w-5 flex-none "
                aria-hidden="true"
                src={checkIcon}
                alt=""
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Jeunes, mais pas novices :
                </strong>{" "}
                On est jeunes, mais on sait ce qu&apos;on fait. Une bonne
                énergie et un bon mindset.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Icon
                className="mt-1 h-5 w-5 flex-none"
                aria-hidden="true"
                src={checkIcon}
                alt=""
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Des prix raisonnables :
                </strong>{" "}
                On est basés en Tunisie, alors nos tarifs sont cool. Qualité
                pro, sans se ruiner.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
