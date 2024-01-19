import Link from "next/link";

export default function CtaSection(props: { label: string }) {
  return (
    <main className="bg-primary">
      <article className="mx-auto max-w-7xl text-center px-6 py-24 grid lg:grid-cols-2 grid-cols-1 lg:justify-between lg:text-start">
        <section>
          <h2 className="text-4xl py-3 font-bold tracking-wider font-TrashHand text-white sm:text-5xl">
            {props.label}
          </h2>
          <h3 className="text-lg py-2 font-bold tracking-wider text-white sm:text-xl">
            Vous voulez en savoir plus sur comment on bosse ?
          </h3>
          <p className="text-md font-bold text-white sm:text-lg">
            Envoyez-nous un mail : contact@camelstudiotunisie.com
          </p>
        </section>
        <section className="mt-10 lg:mt-0 lg:ml-auto grid lg:grid-cols-2 grid-cols-1 place-self-center">
          <Link
            className="rounded-md bg-white px-3.5 py-2.5 sm:text-lg text-sm font-semibold text-primary hover:bg-secondary max-w-44 lg:max-w-none"
            href="mailto:contact@camelstudiotunisie.com"
          >
            Contactez-nous
          </Link>
          <Link
            href="#work"
            className="lg:pl-8 pt-3 text-white hover:text-secondary font-semibold text-xl max-w-44 lg:max-w-none"
          >
            En savoir plus !
          </Link>
        </section>
      </article>
    </main>
  );
}
