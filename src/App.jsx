import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Catalog from './components/Catalog';
import ProductModal from './components/ProductModal';
import QuoteDrawer from './components/QuoteDrawer';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [quoteItems, setQuoteItems] = useState(() => {
    try {
      const saved = localStorage.getItem('spotclick_quote');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Persist quote items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('spotclick_quote', JSON.stringify(quoteItems));
    } catch (e) {
      console.error(e);
    }
  }, [quoteItems]);

  // Show temporary toast message
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  // Add item to quote list
  const handleAddToQuote = (product) => {
    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        triggerToast(`Qtd de "${product.name.slice(0, 25)}..." aumentada na lista!`);
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        triggerToast(`"${product.name.slice(0, 25)}..." adicionado à lista de orçamento!`);
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Update item quantity
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from quote
  const handleRemoveItem = (productId) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Clear all items
  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const totalQuoteCount = quoteItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-stone-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl border border-stone-700 animate-fadeIn flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        quoteItemsCount={totalQuoteCount}
        onOpenQuote={() => setIsQuoteDrawerOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenProductModal={setSelectedProduct} />
        <TrustBar />
        <Catalog
          onOpenProductModal={setSelectedProduct}
          onAddToQuote={handleAddToQuote}
          quoteItems={quoteItems}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <AboutSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToQuote={handleAddToQuote}
          isInQuote={quoteItems.some((i) => i.id === selectedProduct.id)}
        />
      )}

      {/* WhatsApp Quote / Order Drawer */}
      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearQuote={handleClearQuote}
      />

    </div>
  );
}
