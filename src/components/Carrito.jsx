import React from 'react'
import { useState, useEffect, useRef } from 'react';


 

// Hook personalizado para manejar clicks fuera del componente
export const useClickOutside = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback]);

  return ref;
};

// 2. Componente CarritoPanel
export const CarritoPanel = ({ isOpen, onClose, botonCarritoRef }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  // Referencia para detectar clicks fuera, excluyendo el botón del carrito
  const carritoRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutside = 
        carritoRef.current && 
        !carritoRef.current.contains(event.target) &&
        botonCarritoRef.current &&
        !botonCarritoRef.current.contains(event.target);

      if (isOpen && clickedOutside) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose, botonCarritoRef]);

  if (!isOpen) return null;

  return (
    <section 
      ref={carritoRef}
      className="fixed top-0 right-0 w-full max-w-md h-full bg-white z-50 shadow-lg flex flex-col"
    >
      {/* Encabezado */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2 font-medium text-black">
          <span className="text-xl">
            <img 
              src="https://chevignon.vtexassets.com/assets/vtex.file-manager-graphql/images/4ed64a5a-7b89-40af-b31c-d85a1fa51334___7d5edaf384c76655da436c7883e31b32.svg" 
              className="w-12 h-12" 
              alt="Logo"
            />
          </span>
          Mi bolsa
        </div>
        <button 
          className="text-xl hover:bg-gray-100 p-2 rounded" 
          onClick={onClose}
          aria-label="Cerrar carrito"
        >
          ✖️
        </button>
      </div>

      {/* Contenido del carrito */}
      <div className="p-4 flex flex-col gap-4 flex-grow overflow-y-auto">
        <CartItems />
      </div>

      {/* Footer con totales */}
      <div className="border-t p-4 text-sm">
        <div className="flex justify-between text-black mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-black mb-1">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <p className="text-[11px] text-gray-500 mb-4">
          Tasas y fletes calculados en el carrito
        </p>
        <a href="/checkout.html">
          <button className="w-full bg-black text-white py-3 font-semibold text-sm hover:bg-gray-800 transition-colors">
            Ir al checkout
          </button>
        </a>
      </div>
    </section>
  );
};

// 3. Componente para los items del carrito (placeholder por ahora)
const CartItems = () => {
  return (
    <div className="text-center text-gray-500 py-8">
      <p>Tu carrito está vacío</p>
    </div>
  );
};

// 4. Hook personalizado para manejar el estado del carrito
export const useCarrito = () => {
  const [isCarritoOpen, setIsCarritoOpen] = useState(false);

  const toggleCarrito = () => {
    setIsCarritoOpen(!isCarritoOpen);
  };

  const closeCarrito = () => {
    setIsCarritoOpen(false);
  };

  const openCarrito = () => {
    setIsCarritoOpen(true);
  };

  return {
    isCarritoOpen,
    toggleCarrito,
    closeCarrito,
    openCarrito
  };
};

// 5. Componente principal que integra todo
export const EcommerceLayout = () => {
  const { isCarritoOpen, toggleCarrito, closeCarrito } = useCarrito();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Referencias para los botones
  const botonCarritoRef = useRef();
  const menuBtnRef = useRef();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {/* Tu header/navbar aquí */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center p-4">
          {/* Botón menú móvil */}
          <button 
            ref={menuBtnRef}
            onClick={toggleMobileMenu}
            className="lg:hidden"
            aria-label="Abrir menú"
          >
            ☰
          </button>
          
          {/* Logo */}
          <div className="logo">Tu Logo</div>
          
          {/* Botón carrito */}
          <button 
            ref={botonCarritoRef}
            onClick={toggleCarrito}
            className="p-2 hover:bg-gray-100 rounded"
            aria-label="Abrir carrito"
          >
            🛒
          </button>
        </div>
        
        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="p-4">
              {/* Tu navegación móvil aquí */}
              <p>Menú móvil</p>
            </nav>
          </div>
        )}
      </header>

      {/* Panel del carrito */}
      <CarritoPanel 
        isOpen={isCarritoOpen}
        onClose={closeCarrito}
        botonCarritoRef={botonCarritoRef}
      />

      {/* Overlay para cerrar el carrito en móvil */}
      {isCarritoOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeCarrito}
        />
      )}
    </>
  );
};

export default EcommerceLayout;