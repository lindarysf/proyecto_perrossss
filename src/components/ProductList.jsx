import ProductCard from './ProductCard';

export default function ProductList() {
  const productos = [
    {
      id: 1,
      nombre: 'Copa Helada Vainilla',
      descripcion: 'Delicioso helado artesanal sabor vainilla con salsa de chocolate.',
      precio: '$ 12.000',
      imagen: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      nombre: 'Malteada de Fresa',
      descripcion: 'Cremosa malteada elaborada con fresas naturales y crema batida.',
      precio: '$ 15.000',
      imagen: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      nombre: 'Cono Menta Choco',
      descripcion: 'Combinación refrescante de menta con chispas de chocolate amargo.',
      precio: '$ 9.500',
      imagen: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Nuestros Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productos.map((prod) => (
          <ProductCard
            key={prod.id}
            nombre={prod.nombre}
            descripcion={prod.descripcion}
            precio={prod.precio}
            imagen={prod.imagen}
          />
        ))}
      </div>
    </section>
  );
}