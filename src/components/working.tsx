import Link from "next/link";

export default function WorkingSection() {
  return (
    <main className="bg-gray-50 mx-auto text-center py-24">
      <h2 className="text-3xl font-bold tracking-wider font-TrashHand text-primary sm:text-5xl">
        On bosse comment ?
      </h2>
      <p className="mx-auto mt-6 px-4 sm:max-w-xl text-lg sm:text-xl">
        Si vous en avez marre des discours pompeux et que vous voulez des
        résultats tangibles, parlons de votre projet. Contactez-nous et
        discutons sérieusement de ce que l&apos;on peut faire ensemble.
      </p>
      <section className="mt-10">
        <Link
          className="rounded-md bg-primary px-3.5 py-2.5 text-xl font-semibold text-white mt-10 hover:bg-secondary"
          href="mailto:contact@camelstudiotunisie.com"
        >
          Contactez-nous !
        </Link>
        <Link
          href="#work"
          className="pl-8 text-primary hover:text-secondary font-semibold text-xl"
        >
          En savoir plus !
        </Link>
      </section>
    </main>
  );
}
