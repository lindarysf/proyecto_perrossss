import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F7F4EB]/90 backdrop-blur-md border-b border-amber-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <span className="font-extrabold text-2xl text-vinotinto tracking-tight">DogShop</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-semibold text-sm">
          <a href="#inicio" className="hover:text-vinotinto transition">Inicio</a>
          <a href="#servicios" className="hover:text-vinotinto transition">Servicios</a>
          <a href="#productos" className="hover:text-vinotinto transition">Productos</a>
          <a href="#contacto" className="hover:text-vinotinto transition">Contacto</a>
        </nav>
        <button className="bg-vinotinto hover:bg-vinotinto/90 text-white font-medium text-sm px-5 py-2 rounded-full transition shadow-sm">
          Ver Carrito
        </button>
      </div>
    </header>
  );
}