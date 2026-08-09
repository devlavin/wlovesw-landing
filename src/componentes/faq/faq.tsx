"use client";

import { useState } from "react";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "O W♡W já está disponível?",
      answer: "Ainda não. Estamos preparando tudo para o lançamento.",
    },
    {
      question: "Quem pode usar o W♡W?",
      answer:
        "O W♡W é um espaço criado para mulheres que se relacionam com mulheres.",
    },
    {
      question: "Preciso pagar para usar?",
      answer:
        "As informações sobre planos e recursos estarão disponíveis quando o aplicativo for lançado.",
    },
    {
      question: "Como vou saber quando o W♡W for lançado?",
      answer:
        "Deixe seu e-mail no formulário e avisaremos você quando o W♡W estiver disponível.",
    },
  ];

  return (
    <section
      id="faq"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-cream-50 md:text-5xl">
            Perguntas frequentes.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-cream-300">
            Algumas respostas para você conhecer melhor o W♡W.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-brand border border-cream-300/10 bg-plum-900/40"
            >
              <button
                type="button"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-semibold text-cream-50">
                  {faq.question}
                </span>

                <span className="text-xl text-cream-300">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6">
                  <p className="leading-relaxed text-cream-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}