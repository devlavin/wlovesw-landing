export function Preview() {
  return (
    <section
      id="preview"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-cream-50 md:text-5xl">
            Conheça o W♡W por dentro.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-cream-300">
            Uma experiência pensada para tornar cada conexão especial.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-sm rounded-[2.5rem] border border-cream-300/10 bg-plum-900/60 p-4 shadow-2xl">
            <div className="rounded-2x1 bg-plum-950 p-6">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-cream-50">
                  W♡W
                </span>

                <span className="text-cream-300">♡</span>
              </div>

              <div className="mt-8 aspect-3/4 overflow-hidden rounded-3x1 bg-plum-800">
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm text-cream-300/50">
                    Preview do perfil
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="h-5 w-32 rounded-full bg-cream-300/10" />

                <div className="mt-3 h-3 w-48 rounded-full bg-cream-300/10" />
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 rounded-full border border-cream-300/10 py-3 text-cream-300">
                  ✕
                </button>

                <button className="flex-1 rounded-full bg-gradient-brand py-3 font-semibold text-plum-950">
                  ♡
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}