export default function ProductCard({ nombre, descripcion, precio, imagen }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-slate-100 flex flex-col">
      <img src={imagen} alt={nombre} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{nombre}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{descripcion}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-extrabold text-indigo-600">{precio}</span>
          <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}