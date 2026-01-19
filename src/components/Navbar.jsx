import { Link } from "react-router-dom";

export default function Navbar() {
  return (
   <nav className="bg-white/60 backdrop-blur-md text-k sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center p-4 justify-between">
        <Link to="/" className="text-2xl font-bold text-k">
          Sempre Juntos JP
        </Link>

        <div className="space-x-4 text-k">
          <Link to="/" className="hover:text-c">
            Produtos
          </Link>
          {/* <Link to="/admin" className="hover:text-m">Admin</Link> */}
        </div>
      </div>
    </nav>
  );
}
