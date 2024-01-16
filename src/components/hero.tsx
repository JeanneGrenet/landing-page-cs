import Image from "next/image";
import logo from "../assets/images/logo.svg";
import teamPic1 from "../assets/images/team.jpg";
import Link from "next/link";

const navigation = [
  { name: "Prestations", href: "#services" },
  { name: "Travailler avec nous !", href: "#work" },
  { name: "Présentation", href: "#presentation" },
];

export default function HeroSection() {
  return (
    <main className="bg-secondary relative isolate">
      <header className=" bg-secondary mx-auto flex max-w-auto items-center p-6 lg:px-8">
        <figure className="flex lg:flex-1">
          <Image className="h-10 w-auto" src={logo} alt="logo of the company" />
        </figure>
        <nav className="hidden lg:flex gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
      <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white sm:-mr-80 lg:-mr-96" />
      <article className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <section className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold text-primary sm:text-6xl lg:col-span-2 xl:col-auto font-TrashHand tracking-wider">
            Camel Studio: une boîte de devs agiles et résilients 
          </h1>
          <section className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8">
              Au Camel Studio on sait comment garder la tête froide même dans
              les projets les plus chauds. Pas de bosses, que des solutions.
            </p>
            <button className="rounded-md bg-primary px-3.5 py-2.5 text-xl font-semibold text-white mt-10 ">
              Contactez-nous !
            </button>
          </section>
          <Image
            src={teamPic1}
            alt="L'équipe de Camel Studio"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </section>
      </article>
    </main>
  );
}
