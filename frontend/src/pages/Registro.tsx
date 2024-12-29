import { FormEvent } from "react";

export default function Registro() {

    const handleRegistro = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target)
        const formData = new FormData(e.target as HTMLFormElement)
        const nombres = formData.get('nombres') as string;
        const apellidos = formData.get('apellidos') as string;
        const numeroDocumento = formData.get('numeroDocumento') as string;
        const telefono = formData.get('telefono') as string;
        const email = formData.get('email') as string;
        const contrasena = formData.get('contrasena') as string;


        try {
            const response = await fetch("https://proyecto-react-diciembre.onrender.com/api/registro", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombres,
                    apellidos,
                    nro_documento: numeroDocumento,
                    telefono,
                    email,
                    password1: contrasena
                })
            })
            console.log(response)
            const data = await response.json()
            console.log(data)
            if (response.ok) {
                alert("Registrado correctamente")
                window.location.href = "/iniciar-sesion" //Redireccionar a la página home cuando el login sea exitoso.
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
                <h1 className="text-2xl font-semibold text-center mb-6">Registro</h1>
                <form onSubmit={handleRegistro} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="nombres"
                        placeholder="Nombres"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        name="apellidos"
                        placeholder="Apellidos"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        name="numeroDocumento"
                        placeholder="Número de Documento"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
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
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
}