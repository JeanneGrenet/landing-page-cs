import Image from "next/image";
import logo from "../assets/images/logo.svg";
import teamPic from "../assets/images/team.jpg";

export default function Hero() {
  return (
    <main className="bg-primary bg-opacity-90">
      <header className="absolute inset-x-0 top-0 z-50">
        <Image className="h-12 w-auto ml-10 mt-5" src={logo} alt="" />
      </header>
      <div className="relative isolate pt-5">
        <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-secondary bg-opacity-90 sm:-mr-80 lg:-mr-96" />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto font-TrashHand">
              Camel Studio: une boîte de devs agiles et résilients 
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-800">
                Au Camel Studio on sait comment garder la tête froide même dans
                les projets les plus chauds. Pas de bosses, que des solutions.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white">
                  Contactez-nous !
                </button>
              </div>
            </div>
            <Image
              src={teamPic}
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
