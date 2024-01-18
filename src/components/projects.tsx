import peopleIcon from "../assets/images/peopleIcon.svg";
import teamIcon from "../assets/images/teamIcon.svg";
import teamPic from "../assets/images/team2.png";
import Image from "next/image";
import Icon from "next/image";

export default function ProjectsSection() {
  return (
    <main className="relative bg-white " id="work">
      <article className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <figure className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full xl:ml-0 lg:flex lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={teamPic}
            alt="Certains membres de la team de Camel Studio"
          />
        </figure>
        <section className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-12 pt-16 sm:pb-12 sm:pt-12 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:pt-12 xl:w-1/2">
            <p className="font-semibold mb-6 text-secondary">
              Travailler avec nous !
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-wider text-primary font-TrashHand sm:text-5xl">
              Développer votre projet avec le Camel Studio
            </h2>
            <p className="mt-6 text-xl text-gray-900">
              Chez Camel Studio, on croit fermement que la force d&apos;une
              équipe réside dans sa cohésion. Notre équipe ne se contente pas
              d&apos;être une bande de collègues, mais une véritable famille de
              devs.
            </p>
            <section className="mt-10 max-w-xl text-base text-gray-800 lg:max-w-none">
              <p>
                Avec nous, vous faites le choix d’avoir toute une équipe soudée
                prête à faire briller votre vision. Même si chaque membre de
                notre équipe bosse sur des projets différents, l&apos;esprit
                d&apos;équipe reste intact.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-800">
                <li className="flex gap-x-3">
                  <Icon
                    src={peopleIcon}
                    className="h-6 w-6"
                    aria-hidden="true"
                    alt="icone qui représente une personne"
                  />
                  <p>
                    <strong className="font-semibold text-primary">
                      Option 1 :{" "}
                    </strong>
                    Vous avez déjà une équipe en place et vous voulez la booster
                    ? Aucun problème ! Prenez l&apos;un de nos développeurs, et
                    non seulement vous aurez un professionnel dédié, mais vous
                    aurez aussi accès à l&apos;expertise collective de toute
                    notre équipe qui le soutient et l’épaule en coulisses.
                  </p>
                </li>
                <li className="flex gap-x-3">
                  <Icon
                    src={teamIcon}
                    className="h-6 w-6"
                    aria-hidden="true"
                    alt="Icone qui représente une team"
                  />
                  <p>
                    <strong className="font-semibold text-primary">
                      Option 2 :{" "}
                    </strong>
                    Vous préférez déléguer l&apos;intégralité de votre projet à
                    notre équipe ? Laisse-nous prendre les rênes. Confiez-nous
                    votre vision, et notre équipe de développement mettra en
                    œuvre chaque ligne de code avec soin, du concept à la
                    réalisation.
                  </p>
                </li>
              </ul>
              <p className="mt-8">
                Chez Camel Studio, on est fiers de notre esprit d&apos;équipe et
                on est prêts à vous accompagner, que vous ayez besoin d&apos;un
                renfort ponctuel ou d’une conception complète. Faites équipe
                avec nous, et ensemble, on fera de votre vision une réalité. 🚀
                🐪
              </p>
            </section>
          </div>
        </section>
      </article>
    </main>
  );
}
