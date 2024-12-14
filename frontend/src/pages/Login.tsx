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
            const response = await fetch("https://py-korystore.onrender.com/api/login", {
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
        <div className="font-bold text-red-700 flex justify-center items-center min-h-[80vh]">
            <div className="border border-2 border-black p-2">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleLogin}>
                    <input type="text" name="numeroDocumento" placeholder="Número de Documento" />
                    <input type="password" name="contrasena" placeholder="Contraseña" />
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}