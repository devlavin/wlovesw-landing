import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-cream-300/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src="/wow-logo.png"
            alt="W♡W"
            width={80}
            height={40}
            className="h-auto w-20"
          />

          <p className="mt-2 text-sm text-cream-300">
            Conexões reais. Encontros leves.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          <a
            href="#about"
            className="text-sm text-cream-300 transition hover:text-cream-50"
          >
            Sobre
          </a>

          <a
            href="#features"
            className="text-sm text-cream-300 transition hover:text-cream-50"
          >
            Recursos
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-cream-300 transition hover:text-cream-50"
          >
            Como funciona
          </a>

          <a
            href="#stories"
            className="text-sm text-cream-300 transition hover:text-cream-50"
          >
            Artigo
          </a>

          <a
            href="#safety"
            className="text-sm text-cream-300 transition hover:text-cream-50"
          >
            Segurança
          </a>

          <a
            href="#preview"
            className="text-sm text-cream-300 transition hover:text-cream-50"
          >
            Preview
          </a>

          <a
            href="#faq"
            className="text-sm text-cream-300 transition hover:text-cream-50"
          >
            FAQ
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-cream-300/10 pt-8">
        <p className="text-sm text-cream-300/60">
          © 2026 W♡W. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
