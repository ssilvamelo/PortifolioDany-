import React from 'react';
import { 
  TreePine, 
  Award, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white border-y border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-pinus-100 shadow-xl border-4 border-white">
                <img
                  src="https://down-br.img.susercontent.com/file/br-11134207-820l6-mu7zujgbcv7k8e"
                  alt="Móveis em Madeira Maciça de Pinus SpotClick"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inset Second Image */}
              <div className="absolute -bottom-8 -right-6 w-3/5 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="https://down-br.img.susercontent.com/file/br-11134207-820lo-msfz63zujpxg60"
                  alt="Detalhe de marcenaria SpotClick"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Pill Badge */}
              <div className="absolute top-4 -left-4 bg-pinus-900 text-pinus-200 text-xs font-bold py-2 px-4 rounded-xl shadow-lg border border-pinus-700 flex items-center gap-2">
                <TreePine className="w-4 h-4 text-emerald-400" />
                <span>100% Madeira de Reflorestamento</span>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pinus-100 border border-pinus-200 text-pinus-800 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-pinus-700" />
              Nossa História & Propósito
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              A autenticidade da marcenaria brasileira na sua casa
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Na <strong className="text-stone-900 font-bold">SpotClick</strong>, acreditamos que um lar aconchegante nasce dos detalhes. Trabalhamos exclusivamente com madeira maciça de pinus selecionada, garantindo móveis que combinam o charme rústico minimalista com a praticidade do dia a dia.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Todas as nossas peças são produzidas com rigoroso controle de qualidade: madeira seca em estufa para evitar empenamentos, lixamento fino sem rebarbas ou farpas e furação milimétrica que torna a montagem incrivelmente fácil e rápida, sem necessidade de ferramentas especiais.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-emerald-600" />
                  Preço Justo de Fábrica
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Produzimos em escala com eficiência em São Paulo, eliminando lojas intermediárias para você economizar.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Garantia & Procedência
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Madeira de manejo sustentável com garantia contra defeitos de fabricação e suporte dedicado.
                </p>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`https://wa.me/5511997641700?text=${encodeURIComponent('Olá SpotClick! Gostaria de conversar sobre os móveis e conhecer mais a loja.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-pinus-400" />
                <span>Atendimento WhatsApp: (11) 99764-1700</span>
              </a>

              <span className="text-xs text-stone-500">
                Segunda a Sexta das 08h às 18h • Sábado das 08h às 13h
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
