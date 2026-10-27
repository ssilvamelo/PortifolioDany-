import React from 'react';
import { 
  TreePine, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  Truck,
  Heart
} from 'lucide-react';
import { STORE_INFO, CATEGORIES } from '../data/products';

export default function Footer({ onSelectCategory }) {
  return (
    <footer className="bg-pinus-950 text-pinus-100 border-t border-pinus-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-pinus-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pinus-800 flex items-center justify-center text-pinus-200 border border-pinus-700">
                <span className="font-serif font-black text-2xl">S</span>
              </div>
              <div>
                <span className="font-serif font-extrabold text-2xl tracking-tight text-white">
                  Spot<span className="text-pinus-400">Click</span>
                </span>
                <span className="block text-[10px] tracking-wider uppercase font-semibold text-pinus-300">
                  Móveis em Madeira Maciça
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Marcenaria especializada em móveis artesanais funcionais, sapateiras, estantes e decoração em madeira maciça de pinus reflorestado com preço justo de fábrica.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-800/80 text-emerald-300 text-[11px] font-semibold border border-forest-700">
                <TreePine className="w-3.5 h-3.5" />
                100% Madeira Sustentável
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pinus-900 text-pinus-300 text-[11px] font-semibold border border-pinus-800">
                ★ 4.7 na Shopee (+10.000 clientes)
              </span>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Categorias Principais
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              {CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#catalogo"
                    onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                    className="hover:text-pinus-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>{cat.name} ({cat.count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Canais de Atendimento
            </h4>
            
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/5511997641700?text=${encodeURIComponent('Olá SpotClick! Vim pelo rodapé do site.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-semibold text-white transition-colors"
                >
                  WhatsApp: (11) 99764-1700
                </a>
              </div>

              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#EE4D2D] flex-shrink-0" />
                <a
                  href={STORE_INFO.shopeeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EE4D2D] transition-colors"
                >
                  Loja Oficial na Shopee Brasil
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-pinus-400 flex-shrink-0 mt-0.5" />
                <span>Marcenaria em São Paulo - SP com envio seguro para todo o território nacional.</span>
              </div>

              <div className="flex items-center gap-2 pt-1 text-[11px] text-stone-400">
                <Truck className="w-3.5 h-3.5 text-pinus-400" />
                <span>Despacho diário via transportadora e Correios</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} SpotClick Móveis & Decoração. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span>Segurança Garantida</span>
            <span>•</span>
            <span>Madeira de Reflorestamento</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">WhatsApp: (11) 99764-1700</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
