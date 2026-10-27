import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  Award,
  TreePine,
  TrendingUp
} from 'lucide-react';
import { STORE_INFO, PRODUCTS } from '../data/products';

export default function Hero({ onOpenProductModal }) {
  const topProduct = PRODUCTS[0]; // Sapateira Casal 3 Prateleiras

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pinus-100/70 via-pinus-50/40 to-[#FAF8F5] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-pinus-200/50">
      {/* Background Subtle Wood Grain & Circles */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-pinus-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-forest-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-pinus-300/80 shadow-sm text-xs font-semibold text-pinus-900">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <TreePine className="w-3.5 h-3.5 text-forest-600" />
              <span>100% Madeira Maciça de Pinus de Reflorestamento</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Móveis e Decoração com o charme natural da <span className="text-pinus-700 underline decoration-pinus-400 decoration-wavy decoration-2">madeira maciça</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Direto da marcenaria em São Paulo para a sua casa. Sapateiras, estantes multiuso, mesas de cabeceira e floreiras artesanais com o melhor acabamento e preço de fábrica.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs font-medium text-stone-700 bg-white/70 p-2.5 rounded-lg border border-pinus-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Madeira Lixada Sem Farpas</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-stone-700 bg-white/70 p-2.5 rounded-lg border border-pinus-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Montagem Descomplicada</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-stone-700 bg-white/70 p-2.5 rounded-lg border border-pinus-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Envio para Todo o Brasil</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#catalogo"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-pinus-800 hover:bg-pinus-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Ver Catálogo Completo (39 Itens)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/5511997641700?text=${encodeURIComponent('Olá SpotClick! Vi os produtos no site e gostaria de fazer um pedido pelo WhatsApp.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Comprar pelo WhatsApp: (11) 99764-1700</span>
              </a>
            </div>

            {/* Social Proof Counters */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-pinus-200/60">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-800">4.7 / 5.0</span>
                <span className="text-xs text-stone-500">(+10.000 avaliações)</span>
              </div>

              <div className="text-xs text-stone-600 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-pinus-600" />
                <span className="font-semibold text-stone-900">Top Vendedor na Shopee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Hero Product Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Highlight Badge */}
              <div className="absolute -top-3.5 -left-3.5 z-20 bg-amber-500 text-stone-950 text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wide">
                <TrendingUp className="w-3.5 h-3.5" />
                Mais Vendido #1 do Brasil
              </div>

              {/* Main Card */}
              <div className="bg-white rounded-3xl p-5 shadow-xl border border-pinus-200 relative group overflow-hidden">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-pinus-50 mb-5">
                  <img
                    src={topProduct.image}
                    alt={topProduct.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    ≈ 4.000+ unidades entregues
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-pinus-100 text-pinus-800">
                      Sapateiras & Hall
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>4.70 (1.730 avaliações)</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-stone-900 text-base line-clamp-2 leading-snug">
                    {topProduct.name}
                  </h3>

                  <div className="flex items-baseline justify-between pt-1">
                    <div>
                      <span className="text-xs text-stone-400 line-through mr-2">
                        {topProduct.originalPriceFormatted}
                      </span>
                      <span className="text-2xl font-black text-pinus-800 font-serif">
                        {topProduct.priceFormatted}
                      </span>
                      <span className="block text-[11px] text-stone-500 font-medium">
                        ou até 3x sem juros
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenProductModal(topProduct)}
                      className="px-4 py-2 bg-pinus-700 hover:bg-pinus-800 text-white rounded-xl text-xs font-bold shadow-sm transition-all hover:scale-105"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Mini Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm border border-stone-200 rounded-2xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 font-bold">
                  🪵
                </div>
                <div>
                  <div className="text-[11px] font-bold text-stone-900">Pinus Seco em Estufa</div>
                  <div className="text-[10px] text-stone-500">Sem empenamentos ou fungos</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
