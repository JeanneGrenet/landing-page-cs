import Image from "next/image";
import logo from "../assets/images/logo.svg";
import teamPic1 from "../assets/images/team.jpg";

const navigation = [
  { name: "Prestations", href: "#services" },
  { name: "Travailler avec nous !", href: "#work" },
  { name: "Présentation", href: "#presentation" },
];

export default function HeroSection() {
  return (
    <div className="bg-secondary">
      <header className="absolute inset-x-0 top-0 z-50 bg-secondary py-4">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-8 w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
      </header>
      <div className="relative isolate pt-5 ">
        <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-primary sm:-mr-80 lg:-mr-96" />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold text-white sm:text-6xl lg:col-span-2 xl:col-auto font-TrashHand tracking-wider">
              Camel Studio: une boîte de devs agiles et résilients 
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-white">
                Au Camel Studio on sait comment garder la tête froide même dans
                les projets les plus chauds. Pas de bosses, que des solutions.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-primary">
                  Contactez-nous !
                </button>
              </div>
            </div>
            <Image
              src={teamPic1}
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
