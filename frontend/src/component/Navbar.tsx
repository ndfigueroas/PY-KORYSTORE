import { Link } from "react-router-dom";

export default function Navbar() {
    const dataUser = localStorage.getItem("datauser")
    if (!dataUser) {

        return (
            <nav className="bg-red-700 p-4 h-[10vh]">
                <ul className="flex flex-row items-center justify-around text-white font-extrabold text-md">
                    <li>
                        <Link to={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link to={"/registro"}>Registró</Link>
                    </li>
                    <li>
                        <Link to={"/iniciar-sesion"}>Iniciar Sesión</Link>
                    </li>
                </ul>
            </nav>
        )
    } else {
        const user = JSON.parse(dataUser)
        console.log("DATA USER EN NAVBAR", user.nombres)
        const handleLogout = (e: any) => {
            e.preventDefault()
            localStorage.removeItem("datauser")
            window.location.href = "/"
        }
        return (
            <nav className="bg-red-700 p-4 h-[10vh]">
                <ul className="flex flex-row items-center justify-around text-white font-extrabold text-md">
                    <li>
                        <Link to={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Cerrar Sesión</button>
                    </li>

                </ul>
            </nav>
        )
    }



}