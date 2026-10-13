import React from 'react';

export default function ProductList() {
  const productos = [
    { id: 1, nombre: "Comida Premium Perro Adulto 10kg", precio: "$45.00", imagen: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80" },
    { id: 2, nombre: "Cama Ortopédica Confort", precio: "$35.00", imagen: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=400&q=80" },
    { id: 3, nombre: "Set de Juguetes Interactivos", precio: "$18.00", imagen: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&q=80" },
    { id: 4, nombre: "Arnés Antipull Ajustable", precio: "$22.00", imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80" },
  ];

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Productos Destacados</h2>
        <p className="text-center text-gray-500 mb-12">Lo más vendido para consentir a tu mascota</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col">
              <img src={prod.imagen} alt={prod.nombre} className="h-48 w-full object-cover" />
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">{prod.nombre}</h3>
                  <span className="text-blue-600 font-bold text-xl">{prod.precio}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}