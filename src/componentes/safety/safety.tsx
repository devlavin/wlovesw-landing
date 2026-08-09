export function Safety() {
  return (
    <section
      id="safety"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-brand border border-cream-300/10 bg-plum-900/40 p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-cream-50 md:text-5xl">
              Segurança em primeiro lugar.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-cream-300">
              Um espaço onde você pode ser você, com mais tranquilidade e
              controle.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-cream-50">
                Privacidade
              </h3>

              <p className="mt-4 leading-relaxed text-cream-300">
                Seus dados e informações pessoais tratados com cuidado.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cream-50">
                Controle
              </h3>

              <p className="mt-4 leading-relaxed text-cream-300">
                Você decide com quem interagir e o que compartilhar.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cream-50">
                Respeito
              </h3>

              <p className="mt-4 leading-relaxed text-cream-300">
                Um ambiente pensado para conexões baseadas em respeito e
                consentimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}