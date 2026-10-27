import React from 'react';
import { TreePine, Factory, Truck, MessageSquareCheck } from 'lucide-react';

export default function TrustBar() {
  const pillars = [
    {
      icon: TreePine,
      title: "Madeira Maciça de Pinus Selecionada",
      desc: "Pinus reflorestado, lixado e seco em estufa com toque aveludado."
    },
    {
      icon: Factory,
      title: "Direto da Fábrica em SP",
      desc: "Sem atravessadores ou comissões abusivas. O melhor preço do mercado."
    },
    {
      icon: Truck,
      title: "Entrega em Todo o Brasil",
      desc: "Embalagem reforçada para seu móvel chegar perfeito em sua casa."
    },
    {
      icon: MessageSquareCheck,
      title: "WhatsApp: (11) 99764-1700",
      desc: "Atendimento humanizado para tirar dúvidas e fechar pedidos com rapidez."
    }
  ];

  return (
    <section className="bg-white border-y border-stone-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-stone-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-pinus-100 flex items-center justify-center text-pinus-800 flex-shrink-0 border border-pinus-200">
                  <Icon className="w-5 h-5 text-pinus-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
