import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MessageCircle, 
  Search, 
  Menu, 
  X, 
  Phone, 
  ExternalLink,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function Header({ 
  quoteItemsCount, 
  onOpenQuote, 
  searchTerm, 
  setSearchTerm,
  onSelectCategory 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all shadow-sm">
      {/* Top Banner */}
      <div className="bg-pinus-950 text-pinus-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-forest-600 text-white px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide">
              DIRETO DA FÁBRICA
            </span>
            <span className="hidden md:inline text-stone-300">•</span>
            <span className="flex items-center gap-1 text-stone-200">
              <Truck className="w-3.5 h-3.5 text-pinus-400" />
              {STORE_INFO.shipping}
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <span className="text-stone-300 text-[11px] font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-pinus-400" />
              100% Madeira Maciça de Pinus Selecionada
            </span>
            <span>•</span>
            <a 
              href={`https://wa.me/5511997641700?text=${encodeURIComponent('Olá! Vim pelo site da SpotClick e gostaria de tirar uma dúvida.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 font-medium hover:text-emerald-300 flex items-center gap-1 text-[11px]"
            >
              <Phone className="w-3 h-3" />
              WhatsApp: {STORE_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pinus-950 via-pinus-900 to-pinus-800 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-pinus-700/50">
              <span className="text-pinus-300 font-serif font-black text-2xl tracking-tighter">S</span>
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full ml-0.5 mt-2 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-2xl tracking-tight text-stone-900 group-hover:text-pinus-700 transition-colors">
                Spot<span className="text-pinus-600">Click</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-stone-500">
                Móveis em Madeira Maciça de Pinus
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-stone-700">
            <a href="#catalogo" className="hover:text-pinus-700 transition-colors py-1">
              Catálogo
            </a>
            <a href="#campeoes" className="hover:text-pinus-700 transition-colors py-1 flex items-center gap-1">
              <span className="text-amber-500">★</span> Mais Vendidos
            </a>
            <a href="#sobre" className="hover:text-pinus-700 transition-colors py-1">
              Sobre a SpotClick
            </a>
            <a href="#avaliacoes" className="hover:text-pinus-700 transition-colors py-1">
              Avaliações (4.7★)
            </a>
            <a href="#faq" className="hover:text-pinus-700 transition-colors py-1">
              Dúvidas
            </a>
            <a href="#contato" className="hover:text-pinus-700 transition-colors py-1">
              Contato
            </a>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Bar (Desktop) */}
            <div className="relative hidden md:block w-48 lg:w-60">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-stone-100 hover:bg-stone-50 focus:bg-white border border-stone-200 focus:border-pinus-500 rounded-full focus:outline-none transition-all placeholder:text-stone-400"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile Search Button Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-stone-900 rounded-full hover:bg-stone-100"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* WhatsApp Fast Contact Button */}
            <a
              href={`https://wa.me/5511997641700?text=${encodeURIComponent('Olá SpotClick! Gostaria de consultar informações sobre os móveis.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-xs font-semibold shadow-sm hover:shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>(11) 99764-1700</span>
            </a>

            {/* Quote / Cart Bag Button */}
            <button
              onClick={onOpenQuote}
              className="relative p-2.5 rounded-full bg-pinus-100 hover:bg-pinus-200 text-pinus-900 border border-pinus-300/60 transition-all flex items-center justify-center group"
              title="Ver Lista de Orçamento"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform text-pinus-800" />
              {quoteItemsCount > 0 ? (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow animate-bounce">
                  {quoteItemsCount}
                </span>
              ) : null}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Field (collapsible) */}
        {searchOpen && (
          <div className="md:hidden pb-3 pt-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar sapateiras, estantes, mesas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                className="w-full pl-9 pr-8 py-2.5 text-sm bg-stone-100 border border-stone-200 rounded-xl focus:outline-none focus:border-pinus-600"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3 text-stone-400 text-sm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2 text-stone-800 font-medium text-base">
            <a 
              href="#catalogo" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              📦 Catálogo Completo
            </a>
            <a 
              href="#campeoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100 text-amber-600 font-semibold flex items-center gap-1.5"
            >
              ★ Mais Vendidos
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              🪵 Sobre a SpotClick
            </a>
            <a 
              href="#avaliacoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              ⭐ Avaliações dos Clientes (4.7★)
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              ❓ Dúvidas Frequentes
            </a>
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              📞 Contato & Fábrica
            </a>
          </nav>

          <div className="pt-3 border-t border-stone-200">
            <a
              href={`https://wa.me/5511997641700?text=${encodeURIComponent('Olá! Gostaria de fazer um pedido ou tirar dúvidas com a SpotClick.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold shadow text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              WhatsApp: (11) 99764-1700
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
