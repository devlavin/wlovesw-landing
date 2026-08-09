export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
      <div className="mx-auto w-full max-w-3xl text-center">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-cream-50 md:text-7xl">
          Feito para encontrar alguém como você.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-300 md:text-xl">
          Conexões reais. Encontros leves. Um espaço feito para mulheres que
          amam mulheres.
        </p>

        <form className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-1 rounded-brand border border-cream-300/20 bg-plum-900/40 px-5 py-3.5 text-cream-50 outline-none placeholder:text-cream-300/60 focus:border-cream-300"
          />

          <button
            type="submit"
            className="bg-gradient-brand rounded-brand px-6 py-3.5 font-semibold text-plum-950 transition-transform hover:scale-105"
          >
            Quero ser avisada
          </button>
        </form>
      </div>
    </section>
  );
}
