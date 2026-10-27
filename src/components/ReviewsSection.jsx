import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquareQuote } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Mariana Souza",
      city: "São Paulo - SP",
      product: "Sapateira Casal 3 Prateleiras (9 Pares)",
      rating: 5,
      date: "Há 4 dias",
      comment: "Amei a sapateira! A madeira é de excelente qualidade, bem lixadinha e cheirosa, sem nenhuma farpa. Montei em menos de 10 minutos com a chave de fenda. Coube todos os meus tênis perfeitamente no closet. Super recomendo a SpotClick!"
    },
    {
      name: "Carlos Eduardo Costa",
      city: "Campinas - SP",
      product: "Mesa de Cabeceira Multiuso Palma",
      rating: 5,
      date: "Há 1 semana",
      comment: "Comprei duas mesas de cabeceira para o quarto de casal. Ficaram lindíssimas, um charme escandinavo minimalista. O atendimento no WhatsApp foi nota 10, responderam super rápido e o frete chegou antes do prazo."
    },
    {
      name: "Patrícia Lima",
      city: "Belo Horizonte - MG",
      product: "Estante Multiuso 4 Prateleiras 30x30",
      rating: 5,
      date: "Há 2 semanas",
      comment: "Estante muito resistente e firme. Coloquei livros pesados, plantas e porta-retratos na sala. A madeira de pinus natural dá um aconchego incrível no ambiente. Com certeza comprarei mais peças!"
    },
    {
      name: "Marcelo Silva",
      city: "Curitiba - PR",
      product: "Kit 10 Mão Francesa Pinus 22x22",
      rating: 5,
      date: "Há 3 semanas",
      comment: "Mão francesa de extrema qualidade. Já vem com os parafusos corretos e a furação certinha. Madeira maciça de pinus bem robusta, aguentou as prateleiras da cozinha com facilidade. Vale cada centavo."
    },
    {
      name: "Beatriz Moreira",
      city: "Rio de Janeiro - RJ",
      product: "Suporte para Plantas 2 Andares Rack Vasos",
      rating: 5,
      date: "Há 1 mês",
      comment: "Ficou perfeito na minha varanda! Coloquei minhas suculentas e samambaias. Acabamento primoroso e entrega muito rápida. Dá para ver o carinho da fábrica no empacotamento."
    },
    {
      name: "Fernanda Alves",
      city: "Porto Alegre - RS",
      product: "Sapateira Banco Hall de Entrada Reforçada",
      rating: 5,
      date: "Há 1 mês",
      comment: "Maravilhoso para colocar na entrada de casa e trocar de sapato ao chegar da rua. Suporta peso perfeitamente para sentar e calçar os sapatos. Produto nota 1000!"
    }
  ];

  return (
    <section id="avaliacoes" className="py-20 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold mb-3 uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Experiência Real de Quem Já Comprou
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Mais de 10.000 clientes satisfeitos em todo o Brasil
          </h2>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-black text-stone-900 text-lg">4.7 / 5.0</span>
            <span className="text-stone-500">Média oficial baseada em milhares de compras verificadas</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Stars and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400 font-medium">{rev.date}</span>
                </div>

                {/* Comment */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" title="Compra Verificada" />
                  </h4>
                  <span className="text-[11px] text-stone-400">{rev.city}</span>
                </div>

                <span className="text-[10px] font-semibold text-pinus-800 bg-pinus-100 px-2 py-0.5 rounded-md max-w-[140px] truncate text-right">
                  {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Direct CTA */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/5511997641700?text=${encodeURIComponent('Olá SpotClick! Vi as avaliações no site e gostaria de fazer um pedido.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <span>Falar com Nossa Equipe no WhatsApp: (11) 99764-1700</span>
          </a>
        </div>

      </div>
    </section>
  );
}
