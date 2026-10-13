import React from 'react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1D3557] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-blue-800">
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-2xl text-white tracking-tight">DogShop</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Tu tienda de confianza para el cuidado, alimentación y felicidad de tus perros.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-white">Horario de Atención</h4>
            <p className="text-blue-100 text-sm">Lunes a Sábado: 8:00 AM - 8:00 PM</p>
            <p className="text-blue-100 text-sm">Domingos: 9:00 AM - 4:00 PM</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-white">Contacto</h4>
            <p className="text-blue-100 text-sm">Dirección: Calle Principal #123</p>
            <p className="text-blue-100 text-sm">Teléfono: +1 (800) 123-4567</p>
            <p className="text-blue-100 text-sm">Correo: contacto@dogshop.com</p>
          </div>

        </div>

        <div className="text-center text-blue-200 text-xs mt-6">
          © {new Date().getFullYear()} DogShop. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}