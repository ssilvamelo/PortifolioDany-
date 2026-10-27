import React, { useState, useMemo } from 'react';
import { 
  Star, 
  MessageCircle, 
  ExternalLink, 
  Plus, 
  Check, 
  SlidersHorizontal,
  Flame,
  Eye,
  ShoppingBag,
  TrendingUp,
  PackageCheck,
  Ruler,
  Scale
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, STORE_INFO } from '../data/products';

export default function Catalog({ 
  onOpenProductModal, 
  onAddToQuote, 
  quoteItems,
  searchTerm,
  setSearchTerm
}) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [sortBy, setSortBy] = useState('vendas'); // vendas, menor-preco, maior-preco, rating, nome
  const [onlyBestSellers, setOnlyBestSellers] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (activeCategory !== 'todos' && p.categoryId !== activeCategory) {
        return false;
      }
      // Best sellers filter
      if (onlyBestSellers && p.rank > 10) {
        return false;
      }
      // Search term filter
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCategory = p.categoryName.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        return matchesName || matchesCategory || matchesDesc;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'vendas') {
        return a.rank - b.rank; // Top sales rank 1..39
      }
      if (sortBy === 'menor-preco') {
        return a.price - b.price;
      }
      if (sortBy === 'maior-preco') {
        return b.price - a.price;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'nome') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [activeCategory, sortBy, onlyBestSellers, searchTerm]);

  // Check if item is in quote list
  const isItemInQuote = (productId) => {
    return quoteItems.some((item) => item.id === productId);
  };

  return (
    <section id="catalogo" className="py-16 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pinus-100 border border-pinus-200 text-pinus-800 text-xs font-bold mb-3 uppercase tracking-wider">
            <PackageCheck className="w-4 h-4 text-pinus-700" />
            Catálogo Completo de Fábrica
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Encontre o móvel ideal para transformar seu espaço
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Feitos à mão em madeira maciça de pinus com durabilidade comprovada. Compre diretamente pelo WhatsApp com atendimento exclusivo e envio para todo o Brasil.
          </p>
        </div>

        {/* Category Pills & Filters */}
        <div className="space-y-4 mb-8">
          {/* Categories Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-pinus-900 text-white border-pinus-900 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-pinus-300 hover:bg-pinus-50'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-pinus-800 text-pinus-200' : 'bg-stone-100 text-stone-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub Filters & Sort Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-stone-200 shadow-sm">
            
            {/* Left: Quick Best Seller Toggle & Result Count */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOnlyBestSellers(!onlyBestSellers)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                  onlyBestSellers
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <Flame className={`w-3.5 h-3.5 ${onlyBestSellers ? 'fill-white text-white' : 'text-amber-500'}`} />
                <span>Top 10 Campeões de Venda</span>
              </button>

              <span className="text-xs text-stone-500 font-medium hidden md:inline">
                Mostrando <strong className="text-stone-900">{filteredProducts.length}</strong> produtos
              </span>
            </div>

            {/* Right: Sort Dropdown */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <label htmlFor="sort-select" className="text-xs text-stone-500 font-medium flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Ordenar por:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-stone-50 border border-stone-200 text-stone-800 text-xs font-semibold rounded-xl px-3 py-1.5 focus:outline-none focus:border-pinus-600 cursor-pointer"
              >
                <option value="vendas">Mais Vendidos (Padrão)</option>
                <option value="menor-preco">Menor Preço</option>
                <option value="maior-preco">Maior Preço</option>
                <option value="rating">Melhores Avaliações</option>
                <option value="nome">Nome (A - Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <p className="text-stone-500 text-base">
              Nenhum produto encontrado para "<strong>{searchTerm}</strong>".
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('todos');
                setOnlyBestSellers(false);
              }}
              className="mt-4 px-5 py-2.5 bg-pinus-800 text-white text-xs font-bold rounded-xl hover:bg-pinus-900 transition-colors"
            >
              Limpar Filtros e Ver Todos
            </button>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const inQuote = isItemInQuote(product.id);
              const whatsappText = `Olá SpotClick! Tenho interesse no produto: *${product.name}* (código: ${product.id}) no valor de ${product.priceFormatted}. Como faço para comprar?`;
              const whatsappLink = `https://wa.me/5511997641700?text=${encodeURIComponent(whatsappText)}`;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-pinus-300 transition-all duration-300 flex flex-col group"
                >
                  {/* Image Container with Badge */}
                  <div className="relative aspect-square overflow-hidden bg-pinus-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />

                    {/* Top Left Badge */}
                    {product.badge && (
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span className="inline-flex items-center text-[10px] font-black px-2.5 py-1 rounded-full bg-stone-900/85 backdrop-blur-md text-pinus-200 shadow-md">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Top Right Sales Pill */}
                    {product.salesMonthly > 0 && (
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-600 text-white shadow">
                          ≈ {product.salesMonthly}/mês
                        </span>
                      </div>
                    )}

                    {/* Quick View Button on Image Hover */}
                    <button
                      onClick={() => onOpenProductModal(product)}
                      className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs"
                      title="Espiar produto"
                    >
                      <span className="px-4 py-2 rounded-xl bg-white text-stone-900 font-bold shadow-lg flex items-center gap-1.5 hover:bg-pinus-100 transition-colors">
                        <Eye className="w-4 h-4 text-pinus-800" />
                        Ver Detalhes
                      </span>
                    </button>
                  </div>

                  {/* Product Info Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    
                    <div className="space-y-1.5">
                      {/* Category & Rating */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                          {product.categoryName}
                        </span>
                        
                        <div className="flex items-center gap-1 text-amber-600 font-bold text-xs">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{product.rating.toFixed(2)}</span>
                          <span className="text-[10px] text-stone-400">({product.reviewsCount})</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 
                        onClick={() => onOpenProductModal(product)}
                        className="font-semibold text-stone-900 text-sm line-clamp-2 leading-snug cursor-pointer hover:text-pinus-700 transition-colors"
                        title={product.name}
                      >
                        {product.name}
                      </h3>
                    </div>

                    {/* Dimensions & Weight Spec Badges */}
                    <div className="grid grid-cols-2 gap-1.5 py-1.5 px-2.5 bg-pinus-50/70 rounded-xl border border-pinus-100 text-[11px] text-stone-700">
                      <div className="flex items-center gap-1 min-w-0" title={`Dimensões: ${product.dimensions}`}>
                        <Ruler className="w-3.5 h-3.5 text-pinus-800 flex-shrink-0" />
                        <span className="truncate font-semibold">{product.dimensionsCompact}</span>
                      </div>
                      <div className="flex items-center gap-1 min-w-0 justify-end" title={`Peso: ${product.weight} • ${product.weightCapacity}`}>
                        <Scale className="w-3.5 h-3.5 text-pinus-800 flex-shrink-0" />
                        <span className="truncate font-semibold">{product.weight}</span>
                      </div>
                    </div>

                    {/* Price & Installments */}
                    <div className="pt-2 border-t border-stone-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-stone-400 line-through">
                          {product.originalPriceFormatted}
                        </span>
                        <span className="text-xl font-extrabold text-pinus-900 font-serif">
                          {product.priceFormatted}
                        </span>
                      </div>
                      <span className="block text-[11px] text-stone-500 font-medium">
                        em até 3x sem juros no cartão
                      </span>
                    </div>

                    {/* Action Buttons Grid */}
                    <div className="pt-2 space-y-2">
                      {/* WhatsApp Direct Buy */}
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Comprar no WhatsApp</span>
                      </a>

                      {/* Secondary Buttons: Add to Quote + View Details */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onAddToQuote(product)}
                          className={`flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl text-[11px] font-bold border transition-all ${
                            inQuote
                              ? 'bg-pinus-100 text-pinus-900 border-pinus-400'
                              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          {inQuote ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Na Lista</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-stone-500" />
                              <span>+ Orçamento</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => onOpenProductModal(product)}
                          className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl text-[11px] font-bold bg-pinus-100/70 hover:bg-pinus-200/70 text-pinus-900 border border-pinus-300 transition-all"
                          title="Ver todas as medidas e fotos"
                        >
                          <Eye className="w-3.5 h-3.5 text-pinus-800" />
                          <span>Detalhes</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner inside Catalog */}
        <div className="mt-14 bg-gradient-to-r from-pinus-900 to-pinus-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-pinus-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-pinus-300">
              Precisa de medidas personalizadas ou grandes quantidades?
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
              Faça uma cotação sob medida com a SpotClick
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Produzimos lotes para revendedores, arquitetos, decoradores e projetos residenciais especiais com desconto para atacado.
            </p>
          </div>

          <a
            href={`https://wa.me/5511997641700?text=${encodeURIComponent('Olá! Gostaria de um orçamento personalizado ou cotação para grandes quantidades.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar com o Marceneiro no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
