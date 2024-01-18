export default function WorkingSection() {
  const handleEmailButtonClick = () => {
    window.open("mailto:contact@camelstudiotunisie.com", "_blank");
  };
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
      <button
        className="rounded-md bg-primary px-3.5 py-2.5 text-xl font-semibold text-white mt-10"
        onClick={handleEmailButtonClick}
      >
        Contactez-nous
      </button>
    </main>
  );
}
