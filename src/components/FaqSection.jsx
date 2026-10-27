import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Os móveis já vêm montados ou preciso de montador?",
      a: "Nossos móveis foram projetados para que qualquer pessoa consiga montar em menos de 10 minutos! Todos os furos já vêm feitos com precisão e os parafusos necessários acompanham o pacote. Basta uma simples chave Philips ou de fenda."
    },
    {
      q: "A madeira de pinus é tratada e resistente?",
      a: "Sim! Utilizamos madeira maciça de pinus reflorestado e selecionado, seca em estufa térmica controlada para prevenir empenamentos, rachaduras ou cupins. As peças passam por lixamento fino especial que garante toque suave sem farpas."
    },
    {
      q: "Como funciona a entrega para minha cidade/estado?",
      a: "Entregamos para todo o Brasil! Trabalhamos com transportadoras expressas e Correios. Todas as peças são embaladas em plástico bolha e papelão reforçado antichoque para garantir que cheguem intactas à sua porta."
    },
    {
      q: "Posso pintar ou envernizar os móveis naturais?",
      a: "Com certeza! Os móveis em pinus natural lixado vêm prontos para receber qualquer acabamento que você desejar: verniz fosco ou brilhante, cera de abelha, seladora, stain impermeabilizante ou tintas coloridas. Também temos opções já envernizadas de fábrica na cor Carvalho Mel."
    },
    {
      q: "Quais são as formas de pagamento disponíveis?",
      a: "Pelo WhatsApp (11) 99764-1700 aceitamos PIX com desconto especial à vista ou cartão de crédito parcelado em até 3x sem juros com envio seguro e nota fiscal direto da fábrica SpotClick."
    },
    {
      q: "Vocês atendem revendedores, lojistas ou pedidos em atacado?",
      a: "Sim! Por sermos fabricantes diretos, oferecemos condições diferenciadas para compras em quantidade, lojistas de decoração, pousadas e projetos corporativos. Fale diretamente com nossa equipe comercial pelo WhatsApp."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pinus-100 border border-pinus-200 text-pinus-800 text-xs font-bold mb-3 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-pinus-700" />
            Tire Suas Dúvidas
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-stone-600 text-sm">
            Tudo o que você precisa saber sobre nossos produtos, montagem e envio.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-2xl overflow-hidden transition-all bg-stone-50/50 hover:bg-stone-50"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-stone-900 text-sm sm:text-base focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-pinus-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Card */}
        <div className="mt-10 p-6 rounded-2xl bg-pinus-50 border border-pinus-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Ainda ficou com alguma dúvida?</h4>
            <p className="text-xs text-stone-600 mt-0.5">
              Fale agora com nosso marceneiro pelo WhatsApp e tire dúvidas em tempo real.
            </p>
          </div>

          <a
            href={`https://wa.me/5511997641700?text=${encodeURIComponent('Olá SpotClick! Tenho uma dúvida sobre os móveis que não encontrei no FAQ.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow transition-all flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar no WhatsApp: (11) 99764-1700</span>
          </a>
        </div>

      </div>
    </section>
  );
}
