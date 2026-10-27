import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Send,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Dúvida sobre produtos');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = `*Contato via Site SpotClick*\n`;
    text += `──────────────────────\n`;
    if (name.trim()) text += `👤 *Nome:* ${name.trim()}\n`;
    if (phone.trim()) text += `📱 *Telefone/Zap:* ${phone.trim()}\n`;
    text += `📌 *Assunto:* ${subject}\n`;
    if (message.trim()) text += `💬 *Mensagem:* ${message.trim()}\n`;
    text += `──────────────────────`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5511997641700?text=${encoded}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3 uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5" />
                Atendimento Direto
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Entre em contato com a SpotClick
              </h2>
              <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                Estamos prontos para atender você com toda a atenção que o seu projeto merece. Faça pedidos, tire dúvidas ou solicite cotações especiais.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-3.5">
              
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/5511997641700?text=${encodeURIComponent('Olá SpotClick! Vim pelo site e gostaria de falar com vocês.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    WhatsApp Principal
                  </div>
                  <div className="text-base font-extrabold text-stone-900 mt-0.5">
                    (11) 99764-1700
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    Clique para iniciar uma conversa imediata
                  </div>
                </div>
              </a>

              {/* Shopee Official Store */}
              <a
                href={STORE_INFO.shopeeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-[#EE4D2D]/60 hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EE4D2D] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#EE4D2D]">
                    Loja Oficial Shopee
                  </div>
                  <div className="text-base font-extrabold text-stone-900 mt-0.5">
                    shopee.com.br/shop/706753667
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    Catálogo com mais de 10.000 avaliações 5 estrelas
                  </div>
                </div>
              </a>

              {/* Location & Hours */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
                <div className="flex items-start gap-3 text-xs text-stone-600">
                  <MapPin className="w-4 h-4 text-pinus-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">Marcenaria & Distribuição:</strong>
                    São Paulo - SP • Despachamos diariamente para todo o Brasil
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <Clock className="w-4 h-4 text-pinus-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">Horário de Atendimento WhatsApp:</strong>
                    Segunda a Sexta: 08:00 às 18:00 • Sábado: 08:00 às 13:00
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct WhatsApp Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
                Envie uma mensagem rápida
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1 mb-6">
                Preencha o formulário abaixo e nossa equipe responderá diretamente no seu WhatsApp:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ana Maria"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-sm p-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-pinus-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                      Seu WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-sm p-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-pinus-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                    Assunto do Contato
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-sm p-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-pinus-600 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Dúvida sobre produtos">Dúvida sobre produtos</option>
                    <option value="Cotação de frete para meu CEP">Cotação de frete para meu CEP</option>
                    <option value="Pedido em atacado ou revenda">Pedido em atacado ou revenda</option>
                    <option value="Medidas sob medida / projeto especial">Medidas sob medida / projeto especial</option>
                    <option value="Outro assunto">Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                    Mensagem ou Detalhes do Pedido
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Olá! Gostaria de saber mais sobre os prazos de entrega e se têm o produto em estoque..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-sm p-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-pinus-600 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Iniciar Atendimento no WhatsApp: (11) 99764-1700</span>
                </button>

                <p className="text-[11px] text-center text-stone-400 pt-1">
                  🔒 Seus dados não são compartilhados com terceiros.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
