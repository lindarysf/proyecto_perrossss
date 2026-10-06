export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-sky-400">Popsy Store </h1>
        <ul className="flex gap-6 font-medium">
          <li className="hover:text-sky-400 cursor-pointer transition-colors">Inicio</li>
          <li className="hover:text-sky-400 cursor-pointer transition-colors">Productos</li>
          <li className="hover:text-sky-400 cursor-pointer transition-colors">Contacto</li>
        </ul>
      </div>
    </nav>
  );
}