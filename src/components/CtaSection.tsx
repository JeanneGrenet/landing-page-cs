export default function CtaSection(props: { label: string }) {
  return (
    <main className="bg-primary">
      <article className="mx-auto max-w-7xl sm:py-12 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-wider font-TrashHand text-white sm:text-4xl">
          {props.label}
        </h2>
        <section className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <button className="rounded-md bg-secondary px-3.5 py-2.5 text-lg font-semibold text-primary">
            Contactez-nous
          </button>
        </section>
      </article>
    </main>
  );
}
