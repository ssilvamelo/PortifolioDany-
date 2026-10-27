import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/5511997641700?text=${encodeURIComponent('Olá SpotClick! Vim pelo site e gostaria de tirar uma dúvida.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-2 relative bg-white text-stone-900 rounded-2xl p-3 shadow-xl border border-stone-200 max-w-[220px] text-xs animate-fadeIn">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 bg-stone-100 hover:bg-stone-200 text-stone-500 rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
          >
            ✕
          </button>
          <div className="font-bold text-stone-900 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
            SpotClick Online
          </div>
          <p className="text-[11px] text-stone-500 mt-1">
            Dúvidas sobre móveis ou frete? Fale conosco no WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 relative group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
