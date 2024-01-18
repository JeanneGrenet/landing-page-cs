import Image from "next/image";
import teamPic1 from "../assets/images/team.jpg";

export default function HeroSection() {
  const handleEmailButtonClick = () => {
    window.open("mailto:contact@camelstudiotunisie.com", "_blank");
  };
  return (
    <main className="bg-gray-50" id="hero">
      <article className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:px-8">
        <section className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold text-primary sm:text-6xl lg:col-span-2 xl:col-auto font-TrashHand tracking-wider">
            Camel Studio: une boîte de devs agiles et résilients 
          </h1>
          <section className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8">
              Au Camel Studio on sait comment garder la tête froide même dans
              les projets les plus chauds. Pas de bosses, que des solutions.
            </p>
            <button
              className="rounded-md bg-primary px-3.5 py-2.5 text-xl font-semibold text-white mt-10"
              onClick={handleEmailButtonClick}
            >
              Contactez-nous !
            </button>
          </section>
          <Image
            src={teamPic1}
            alt="L'équipe de Camel Studio"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
          />
        </section>
      </article>
    </main>
  );
}
