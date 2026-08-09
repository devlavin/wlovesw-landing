export function Download() {
  return (
    <section
      id="download"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-brand bg-gradient-brand p-8 text-center md:p-16">
          <h2 className="text-4xl font-bold tracking-tight text-plum-950 md:text-5xl">
            O W♡W está chegando.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-plum-900">
            Em breve, você poderá encontrar o W♡W em:
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="rounded-brand bg-plum-950 px-6 py-3 text-sm font-semibold text-cream-50">
              App Store
            </div>

            <div className="rounded-brand bg-plum-950 px-6 py-3 text-sm font-semibold text-cream-50">
              Google Play
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}