export function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-cream-50 md:text-5xl">
            Um espaço feito para nós.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-cream-300">
            O W♡W nasceu para aproximar mulheres que procuram conexões de
            verdade, em um espaço pensado para nós.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <article className="rounded-brand border border-cream-300/10 bg-plum-900/40 p-8">
            <h3 className="text-xl font-semibold text-cream-50">
              Conexões reais
            </h3>

            <p className="mt-4 leading-relaxed text-cream-300">
              Conheça mulheres que compartilham interesses, histórias e
              vontades parecidas com as suas.
            </p>
          </article>

          <article className="rounded-brand border border-cream-300/10 bg-plum-900/40 p-8">
            <h3 className="text-xl font-semibold text-cream-50">
              Segurança em primeiro lugar
            </h3>

            <p className="mt-4 leading-relaxed text-cream-300">
              Um ambiente pensado para que você possa conhecer novas pessoas
              com mais tranquilidade.
            </p>
          </article>

          <article className="rounded-brand border border-cream-300/10 bg-plum-900/40 p-8">
            <h3 className="text-xl font-semibold text-cream-50">
              Leveza para conhecer
            </h3>

            <p className="mt-4 leading-relaxed text-cream-300">
              Sem pressão. Sem expectativas. Apenas espaço para novas
              conexões acontecerem naturalmente.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}