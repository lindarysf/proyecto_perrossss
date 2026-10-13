import React from 'react';

export default function Services() {
  const servicios = [
    {
      id: 1,
      titulo: "Alimentación Balanceada",
      desc: "Marcas premium y dietas personalizadas para cada etapa.",
      imagen: "https://i.pinimg.com/1200x/e0/7a/e8/e07ae8e74e81a5955815687289073798.jpg"
    },
    {
      id: 2,
      titulo: "Grooming & Spa",
      desc: "Corte, baño relajante y cuidado estético profesional.",
      imagen: "https://i.pinimg.com/originals/c4/bf/bb/c4bfbb650391f9f8b70b2b0a9e4aef3e.png"
    },
    {
      id: 3,
      titulo: "Juguetes & Entretenimiento",
      desc: "Juguetes interactivos para mantenerlo activo y feliz.",
      imagen: "https://carulla.vtexassets.com/arquivos/ids/16630724/2-juguetes-mordedor-pesa-maciza-resistente-para-perros-grandes-azul-rojo.jpg?v=638573686322600000"
    },
    {
      id: 4,
      titulo: "Accesorios & Ropa",
      desc: "Arneses, correas, camas y la mejor moda canina.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBeJHC09OLaPIazN0H5fNx6eeb2_x7kxiCc-75igAfPeIKLyIYliVyYM&s=10"
    },
  ];

  return (
    <section id="servicios" className="py-16 bg-[#F7F4EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título principal en vinotinto */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-vinotinto mb-2">
          Nuestros Servicios
        </h2>
        <p className="text-center text-gray-600 mb-12 font-medium">
          Todo lo que tu perro necesita para una vida sana y feliz
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s) => (
            <div 
              key={s.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-amber-200/50 hover:shadow-md transition flex flex-col"
            >
              {/* Imagen superior de la tarjeta */}
              <div className="h-48 w-full overflow-hidden bg-gray-50">
                <img 
                  src={s.imagen} 
                  alt={s.titulo} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition duration-300"
                />
              </div>

              {/* Contenido de texto debajo de la imagen */}
              <div className="p-6 flex flex-col flex-grow justify-between text-center">
                <div>
                  <h3 className="text-xl font-bold text-vinotinto mb-2">
                    {s.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}