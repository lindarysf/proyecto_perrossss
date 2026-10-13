import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="bg-crema py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-6">
        
        {/* 1. BANNER PRINCIPAL SUPERIOR (Inspirado en tu referencia) */}
        <div className="bg-crema-dark rounded-3xl overflow-hidden shadow-md border border-amber-200/60 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Texto y Título Vinotinto */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <span className="inline-block bg-vinotinto/10 text-vinotinto font-bold text-xs uppercase px-3 py-1 rounded-full tracking-wider">
              Atención Especializada
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vinotinto leading-tight">
              La salud y bienestar de tu perro en las mejores manos
            </h1>
            <p className="text-gray-700 text-sm sm:text-base font-medium">
              Encuentra los mejores productos, alimentos premium y atención especializada para consentir a tu fiel amigo.
            </p>
            <button className="bg-vinotinto hover:bg-vinotinto/90 text-white font-semibold px-6 py-3 rounded-full shadow-md transition transform hover:-translate-y-0.5">
              Ver Servicios
            </button>
          </div>

          {/* Imagen Superior Derecha (Tamaño Controlado) */}
          <div className="w-full md:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="https://i.pinimg.com/736x/ba/f0/e2/baf0e2625911e89597edde26d4292619.jpg" 
              alt="Mascotas felices" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 2. BANNERS INFERIORES EN GRID (Igual a la distribución de tu maqueta) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Imagen Larga Izquierda (Ocupa 2 columnas) */}
          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm border border-amber-200/50 flex flex-col sm:flex-row items-stretch">
            <div className="sm:w-1/2 h-52 sm:h-auto min-h-[220px]">
              <img 
                src="https://i.pinimg.com/1200x/19/fa/3b/19fa3b689468261399250fecc5518c32.jpg" 
                alt="Descuento Cachorros" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-center items-start space-y-3 bg-white">
              <span className="bg-terracota/10 text-terracota text-xs font-bold px-3 py-1 rounded-full uppercase">
                Promoción Especial
              </span>
              <h3 className="text-3xl font-extrabold text-vinotinto">50% OFF</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                En el primer pedido de alimentos e higiene para tu cachorro.
              </p>
              <button className="bg-mostaza hover:bg-yellow-500 text-gray-900 font-bold px-5 py-2.5 rounded-xl shadow-sm transition">
                Obtener Promoción
              </button>
            </div>
          </div>

          {/* Imagen Derecha (Ocupa 1 columna) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-amber-200/50 h-64 lg:h-auto relative">
            <img 
              src="https://i.pinimg.com/originals/2a/7a/55/2a7a55b61d4acfc8b29f46a4bf9d9a92.png" 
              alt="Accesorios para mascotas" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}