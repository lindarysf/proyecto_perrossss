export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Los mejores helados a un clic</h2>
        <p className="text-lg text-sky-100 mb-6">Explora nuestro catálogo exclusivo y disfruta de tus sabores favoritos.</p>
        <button className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-full shadow-md hover:bg-sky-100 transition-colors">
          Ver Ofertas
        </button>
      </div>
    </section>
  );
}