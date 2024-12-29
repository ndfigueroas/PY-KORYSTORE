import { Link } from "react-router-dom";

export default function Navbar() {
    const dataUser = localStorage.getItem("datauser");

    if (!dataUser) {
        return (
            <nav className="bg-violet-900 p-4 h-[10vh]">
                <ul className="flex flex-row items-center justify-around text-white font-extrabold text-md">
                    <li>
                        <Link to={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={"/Catalogo"}>Catálogo</Link>
                    </li>
                    <li>
                        <Link to={"/About"}>Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link to={"/Contact"}>Contáctanos</Link>
                    </li>
                    <li>
                        <Link to={"/iniciar-sesion"} className="flex items-center space-x-2">
                            <span role="img" aria-label="usuario" className="text-2xl">👤</span>                            
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    } else {
        const user = JSON.parse(dataUser);
        console.log("DATA USER EN NAVBAR", user.nombres);

        const handleLogout = (e: any) => {
            e.preventDefault();
            localStorage.removeItem("datauser");
            window.location.href = "/";
        };

        return (
            <nav className="bg-violet-900 p-4 h-[10vh]">
                <ul className="flex flex-row items-center justify-around text-white font-extrabold text-md">
                    <li>
                        <Link to={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={"/Catalogo"}>Catálogo</Link>
                    </li>
                    <li>
                        <Link to={"/About"}>Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link to={"/Contact"}>Contáctanos</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="flex items-center space-x-2">                            
                            <span>Cerrar Sesión</span>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}
