import Image from "next/image";

export function Stories() {
  return (
    <section
      id="stories"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-4xl font-bold text-cream-50 md:text-5xl">
            W♡W
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-cream-50 md:text-4xl">
            Woman loving woman. Duas mulheres. Uma conexão.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-cream-300">
            O coração no centro representa o encontro entre duas mulheres.
            Um espaço criado para conexões que podem se transformar em algo
            especial.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-brand">
            <Image
              src="/couples/foto-caminhada.png"
              alt="Caminhada romantica"
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-brand">
            <Image
              src="/couples/foto-cafe.png"
              alt="Doce café"
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-brand">
            <Image
              src="/couples/foto-terraco.png"
              alt="Amor nas alturas"
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}