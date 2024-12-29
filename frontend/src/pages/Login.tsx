import { FormEvent } from "react";
import { UsuarioSesion } from "../utils/definition";

export default function Login() {

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target)
        const formData = new FormData(e.target as HTMLFormElement)
        const numeroDocumento = formData.get('numeroDocumento') as string;
        const contrasena = formData.get('contrasena') as string;
        console.log('Número de Documento:', numeroDocumento);
        console.log('Contraseña:', contrasena)

        try {
            const response = await fetch("https://proyecto-react-diciembre.onrender.com/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nro_documento: numeroDocumento,
                    password1: contrasena
                })
            })
            console.log(response)
            const data = await response.json()
            console.log(data)
            if (response.ok) {
                const userSesion = data.user as UsuarioSesion
                localStorage.setItem("datauser", JSON.stringify(userSesion))
                alert("Sesión iniciada correctamente")
                window.location.href = "/" //Redireccionar a la página home cuando el login sea exitoso.
            } else {
                console.log("Error en la petición")
                alert("Error en la petición")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="font-sans bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-semibold text-center mb-6">Iniciar Sesión</h1>
                <form onSubmit={handleLogin} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="numeroDocumento"
                        placeholder="Número de Documento"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="password"
                        name="contrasena"
                        placeholder="Contraseña"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Iniciar Sesión
                    </button>
                    <div className="text-center mt-4">
                        <a
                            href="/registro"
                            className="text-blue-500 hover:underline"
                        >
                            ¿No tienes una cuenta? Regístrate
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}