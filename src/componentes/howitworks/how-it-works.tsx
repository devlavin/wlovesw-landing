export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-cream-50 md:text-5xl">
            Como funciona?
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          <div className="text-center">
            <span className="text-5xl font-bold text-cream-300/30">
              01
            </span>

            <h3 className="mt-4 text-xl font-semibold text-cream-50">
              Crie seu perfil
            </h3>

            <p className="mt-4 leading-relaxed text-cream-300">
              Conte um pouco sobre você e o que procura.
            </p>
          </div>

          <div className="text-center">
            <span className="text-5xl font-bold text-cream-300/30">
              02
            </span>

            <h3 className="mt-4 text-xl font-semibold text-cream-50">
              Descubra novas conexões
            </h3>

            <p className="mt-4 leading-relaxed text-cream-300">
              Conheça mulheres que combinam com você.
            </p>
          </div>

          <div className="text-center">
            <span className="text-5xl font-bold text-cream-300/30">
              03
            </span>

            <h3 className="mt-4 text-xl font-semibold text-cream-50">
              Deixe acontecer
            </h3>

            <p className="mt-4 leading-relaxed text-cream-300">
              Converse, conheça e veja onde a conexão pode chegar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}