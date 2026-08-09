export function Features() {
  return (
    <section
      id="features"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-cream-50 md:text-5xl">
            Feito para conexões que fazem sentido.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-cream-300">
            Tudo o que você precisa para conhecer novas mulheres e criar
            conexões de verdade.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-brand border border-cream-300/10 bg-plum-900/40 p-8 md:row-span-2 md:p-10">
            <h3 className="text-2xl font-semibold text-cream-50">
              Perfis que mostram quem você é
            </h3>

            <p className="mt-4 leading-relaxed text-cream-300">
              Compartilhe seus interesses, sua personalidade e o que você
              procura.
            </p>
          </article>

          <article className="rounded-brand border border-cream-300/10 bg-plum-900/40 p-8">
            <h3 className="text-xl font-semibold text-cream-50">
              Descubra novas mulheres
            </h3>

            <p className="mt-4 leading-relaxed text-cream-300">
              Encontre pessoas que combinam com você e descubra novas
              possibilidades.
            </p>
          </article>

          <article className="rounded-brand border border-cream-300/10 bg-plum-900/40 p-8">
            <h3 className="text-xl font-semibold text-cream-50">
              Converse do seu jeito
            </h3>

            <p className="mt-4 leading-relaxed text-cream-300">
              Crie conexões e converse com quem despertou seu interesse.
            </p>
          </article>
        </div>

        <div className="mt-6">
          <article className="rounded-brand border border-cream-300/10 bg-plum-900/40 p-8">
            <h3 className="text-xl font-semibold text-cream-50">
              Controle suas conexões
            </h3>

            <p className="mt-4 leading-relaxed text-cream-300">
              Você decide quem pode entrar no seu espaço e com quem quer
              continuar conversando.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}