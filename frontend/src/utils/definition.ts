export type UsuarioSesion = {
    id: number;
    nombres: string;
    apellidos: string;
    nro_documento: string;
    telefono: string;
    email: string;
    password1: string;
}

export type Producto = {
    id: number;
    nombre: string;
    descripcion: string;
    img: string;
    precio: number;
    stock: number;
}