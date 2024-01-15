export default function CtaSection(props: { label: string }) {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl sm:py-12 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-wider font-TrashHand text-secondary sm:text-4xl">
          {props.label}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-primary"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
}
