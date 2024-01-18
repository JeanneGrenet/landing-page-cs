export default function CtaSection(props: { label: string }) {
  const handleEmailButtonClick = () => {
    window.open("mailto:contact@camelstudiotunisie.com", "_blank");
  };
  return (
    <main className="bg-primary">
      <article className="mx-auto max-w-7xl text-center py-24 lg:flex lg:justify-between">
        <h2 className="text-2xl font-bold tracking-wider font-TrashHand text-white sm:text-5xl">
          {props.label}
        </h2>
        <section className="sm:mt-10 mt-4 gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <button
            className="rounded-md bg-white px-3.5 py-2.5 sm:text-lg text-sm font-semibold text-primary"
            onClick={handleEmailButtonClick}
          >
            Contactez-nous
          </button>
        </section>
      </article>
    </main>
  );
}
