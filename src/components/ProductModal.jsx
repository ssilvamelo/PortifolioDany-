import React from 'react';
import { 
  X, 
  Star, 
  MessageCircle, 
  ExternalLink, 
  Check, 
  Plus, 
  ShieldCheck, 
  Truck, 
  Wrench,
  TreePine,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function ProductModal({ 
  product, 
  onClose, 
  onAddToQuote, 
  isInQuote 
}) {
  if (!product) return null;

  const whatsappMsg = `Olá SpotClick! Vi no site o produto *${product.name}* (código: ${product.id}) no valor de ${product.priceFormatted} e gostaria de mais informações para comprar.`;
  const whatsappUrl = `https://wa.me/5511997641700?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-stone-100 text-stone-600 hover:text-stone-950 shadow-md border border-stone-200 transition-all"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image Preview */}
          <div className="relative bg-pinus-50 aspect-square md:aspect-auto flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-stone-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain max-h-[380px] drop-shadow-md rounded-xl"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 text-xs font-black px-3 py-1 rounded-full bg-stone-900/90 text-pinus-200 shadow-md backdrop-blur-md">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right Column: Specs & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
            
            <div className="space-y-3">
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-pinus-800 uppercase tracking-wider bg-pinus-100 px-2.5 py-0.5 rounded-full">
                  {product.categoryName}
                </span>

                <div className="flex items-center gap-1 text-amber-600 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{product.rating.toFixed(2)}</span>
                  <span className="text-stone-400 font-normal">({product.reviewsCount} avaliações)</span>
                </div>
              </div>

              {/* Product Title */}
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 leading-snug">
                {product.name}
              </h2>

              {/* Price */}
              <div className="pt-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-stone-400 line-through">
                    {product.originalPriceFormatted}
                  </span>
                  <span className="text-3xl font-serif font-black text-pinus-900">
                    {product.priceFormatted}
                  </span>
                </div>
                <span className="text-xs text-stone-500 font-medium">
                  Até 3x sem juros no cartão ou desconto via PIX no WhatsApp
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                {product.description}
              </p>

              {/* Technical Specifications Checklist */}
              <div className="space-y-1.5 pt-2 border-t border-stone-100 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <TreePine className="w-4 h-4 text-forest-600 flex-shrink-0" />
                  <span><strong>Material:</strong> Madeira Maciça de Pinus 100% Reflorestado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-forest-600 flex-shrink-0" />
                  <span><strong>Montagem:</strong> Rápida e simples (parafusos inclusos)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-forest-600 flex-shrink-0" />
                  <span><strong>Envio:</strong> Embalagem reforçada com entrega para todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-forest-600 flex-shrink-0" />
                  <span><strong>Garantia:</strong> Garantia direta do fabricante SpotClick</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-stone-100">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Comprar pelo WhatsApp: (11) 99764-1700</span>
              </a>

              {/* Secondary Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onAddToQuote(product)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                    isInQuote
                      ? 'bg-pinus-100 text-pinus-900 border-pinus-400'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {isInQuote ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Adicionado à Lista</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-stone-500" />
                      <span>Adicionar ao Orçamento</span>
                    </>
                  )}
                </button>

                <a
                  href={product.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl text-xs font-bold bg-[#EE4D2D] hover:bg-[#d43f21] text-white shadow-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Ver na Shopee</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
