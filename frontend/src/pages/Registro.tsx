import { FormEvent } from "react";

export default function Registro(){

    const handleRegistro = async (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        console.log(e.target)
        const formData= new FormData(e.target as HTMLFormElement)
        const nombres = formData.get('nombres') as string;
        const apellidos = formData.get('apellidos') as string;
        const numeroDocumento = formData.get('numeroDocumento') as string;
        const telefono = formData.get('telefono') as string;
        const email = formData.get('email') as string;
        const contrasena = formData.get('contrasena') as string; 


        try {
            const response = await fetch("https://py-korystore.onrender.com/api/Registro",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombres,
                    apellidos,
                    nro_documento:numeroDocumento, 
                    telefono,
                    email,
                    password1:contrasena
                })
            })
            console.log(response)
            const data = await response.json()
            console.log(data)
            if(response.ok){
                alert("Registrado correctamente")
                window.location.href = "/iniciar-sesion" //Redireccionar a la página home cuando el login sea exitoso.
            }else{
                console.log("Error en la petición")
                alert("Error en la petición")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="font-bold text-red-700 flex justify-center items-center min-h-[80vh]">
            <div className="border border-2 border-black p-2">
                <h1>Registro</h1>
                <form onSubmit={handleRegistro} className="flex flex-col">
                    <input type="text" name="nombres" placeholder="Nombres"/>
                    <input type="text" name="apellidos" placeholder="Apellidos"/>
                    <input type="text" name="numeroDocumento" placeholder="Número de Documento"/>
                    <input type="text" name="telefono" placeholder="Telefono"/>
                    <input type="text" name="email" placeholder="Correo electrónico"/>
                    <input type="password" name="contrasena" placeholder="Contraseña"/>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}