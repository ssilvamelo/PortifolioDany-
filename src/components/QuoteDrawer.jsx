import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  ShoppingBag, 
  ArrowRight,
  Send,
  Truck
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function QuoteDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearQuote 
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalFormatted = `R$ ${subtotal.toFixed(2)}`.replace('.', ',');

  const handleSendToWhatsApp = () => {
    if (items.length === 0) return;

    let message = `*Novo Pedido / Orçamento - SpotClick*\n`;
    message += `──────────────────────\n`;
    if (customerName.trim()) {
      message += `👤 *Cliente:* ${customerName.trim()}\n`;
    }
    if (customerCity.trim()) {
      message += `📍 *Cidade/UF:* ${customerCity.trim()}\n`;
    }
    message += `\n*Itens Selecionados:*\n`;

    items.forEach((item, index) => {
      const itemSubtotal = (item.price * item.quantity).toFixed(2).replace('.', ',');
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Qtd: ${item.quantity}x | Preço un: ${item.priceFormatted} | Subtotal: R$ ${itemSubtotal}\n`;
    });

    message += `──────────────────────\n`;
    message += `💰 *Total Estimado: ${totalFormatted}*\n`;

    if (notes.trim()) {
      message += `\n📝 *Observações:* ${notes.trim()}\n`;
    }

    message += `\nOlá SpotClick! Gostaria de confirmar a disponibilidade e o valor do frete para minha região.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5511997641700?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-stone-200 flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-stone-200 bg-pinus-50/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-pinus-200 rounded-xl text-pinus-900">
                <ShoppingBag className="w-5 h-5 text-pinus-800" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-lg">
                  Lista de Orçamento
                </h3>
                <p className="text-xs text-stone-500">
                  {items.length} {items.length === 1 ? 'produto selecionado' : 'produtos selecionados'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-stone-800 text-base">
                  Sua lista está vazia
                </h4>
                <p className="text-xs text-stone-500 max-w-xs">
                  Navegue pelo nosso catálogo e clique em <strong>"+ Orçamento"</strong> para montar seu pedido personalizado.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 px-5 py-2.5 bg-pinus-800 text-white rounded-xl text-xs font-bold hover:bg-pinus-900 transition-colors"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Produtos
                  </span>
                  <button
                    onClick={onClearQuote}
                    className="text-[11px] text-red-500 hover:text-red-700 font-medium"
                  >
                    Limpar tudo
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-stone-50 rounded-2xl border border-stone-200 flex gap-3 items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover bg-white flex-shrink-0 border border-stone-200"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs font-extrabold text-pinus-900 mt-0.5">
                        {item.priceFormatted}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-stone-800 w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Optional Customer Information for WhatsApp */}
                <div className="pt-4 space-y-3 border-t border-stone-200">
                  <h5 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Seus dados para cotação do frete (opcional)
                  </h5>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Seu Nome"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-pinus-600"
                    />
                    <input
                      type="text"
                      placeholder="Cidade / CEP"
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-pinus-600"
                    />
                  </div>

                  <textarea
                    placeholder="Observação (ex: cor mel, entrega expressa...)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-pinus-600 resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500">Subtotal Estimado:</span>
                  <div className="text-2xl font-serif font-black text-pinus-950">
                    {totalFormatted}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-flex items-center gap-1">
                    <Truck className="w-3 h-3" /> Frete calculado no zap
                  </span>
                </div>
              </div>

              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enviar Pedido pelo WhatsApp: (11) 99764-1700</span>
              </button>

              <p className="text-[11px] text-center text-stone-400">
                Sem compromisso. Nosso marceneiro responderá em poucos minutos!
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
