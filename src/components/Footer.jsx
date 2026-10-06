export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 text-center border-t border-slate-800 mt-auto">
      <p className="text-sm">© {new Date().getFullYear()} Popsy Store. Todos los derechos reservados.</p>
    </footer>
  );
}