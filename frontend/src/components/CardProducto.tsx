import { useState } from "react";
import { Producto } from "../utils/definition";

export default function CardProducto({ producto, fetchingProductos }: { producto: Producto, fetchingProductos: any }) {
    const [modalEdit, setModalEdit] = useState(false);
    const [modalElim, setModalElim] = useState(false);

    const handleToggleModalEdit = () => {
        setModalEdit(!modalEdit);
    }
    const handleToggleModalElim = () => {
        setModalElim(!modalElim);
    }
    return (
        <div className=" p-2 text-black rounded-t-lg">
            <img className="w-full h-[40vh] border border-black border-2 rounded-t-lg" src={producto.img} alt={producto.nombre} />
            <div className="border borde-2 border-black p-2 rounded-b-lg text-center">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>Precio: S/. {producto.precio}</p>
                <p>Stock: {producto.stock}</p>
                <div className="flex flex-row justify-around">
                    <button onClick={handleToggleModalEdit}>Editar</button>
                    <button onClick={handleToggleModalElim}>Eliminar</button>
                </div>
            </div>
            {modalEdit && <ModalEditar handleToggleModalEdit={handleToggleModalEdit} producto={producto} fetchingProductos={fetchingProductos} />}
            {modalElim && <ModalEliminar handleToggleModalElim={handleToggleModalElim} producto={producto} fetchingProductos={fetchingProductos} />}

        </div>

    )
}


export function ModalEditar({
    handleToggleModalEdit, producto, fetchingProductos
}: {
    handleToggleModalEdit: () => void;
    producto: Producto;
    fetchingProductos: any
}) {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Crear un objeto FormData para extraer los valores del formulario
        const formData = new FormData(e.currentTarget);

        // Crear el objeto del producto a partir de los valores
        const productoObjecto = {
            id: producto.id,
            nombre: formData.get('nombre') as string,
            descripcion: formData.get('descripcion') as string,
            img: formData.get('imagen') as string,
            precio: parseFloat(formData.get('precio') as string),
            stock: parseInt(formData.get('stock') as string),
        };

        console.log("DATOS A ENVIAR POST", producto);

        try {
            // Enviar los datos al backend
            const response = await fetch('https://py-korystore.onrender.com/api/actualizar-producto', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productoObjecto),
            });

            // Verificar la respuesta
            if (response.ok) {
                const result = await response.json();
                console.log('Producto registrado con éxito:', result);
                handleToggleModalEdit(); // Cerrar el modal
                fetchingProductos();
            } else {
                console.error('Error al registrar el producto:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
            <div className="p-4 bg-white w-full max-w-[300px]">
                <h1 className="text-center">Editar Producto</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        defaultValue={producto.nombre}
                        type="text"
                        name="nombre"
                        placeholder="Nombre del producto"
                        className="border border-gray-300 p-2 mb-2 w-full"
                        required
                    />
                    <input
                        defaultValue={producto.descripcion}
                        type="text"
                        name="descripcion"
                        placeholder="Descripción del producto"
                        className="border border-gray-300 p-2 mb-2 w-full"
                        required
                    />
                    <input
                        defaultValue={producto.img}
                        type="text"
                        name="imagen"
                        placeholder="Imagen del producto"
                        className="border border-gray-300 p-2 mb-2 w-full"
                        required
                    />
                    <input
                        defaultValue={producto.precio}
                        type="number"
                        name="precio"
                        placeholder="Precio"
                        className="border border-gray-300 p-2 mb-2 w-full"
                        required
                        min="0"
                        step="0.01"
                    />
                    <input
                        defaultValue={producto.stock}
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        className="border border-gray-300 p-2 mb-4 w-full"
                        required
                        min="0"
                    />
                    <div className="flex flex-row justify-around">
                        <button
                            type="button"
                            onClick={handleToggleModalEdit}
                            className="bg-red-500 text-white py-1 px-4 rounded"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-1 px-4 rounded"
                        >
                            Editar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export function ModalEliminar({
    handleToggleModalElim, producto, fetchingProductos
}: {
    handleToggleModalElim: () => void;
    producto: Producto;
    fetchingProductos: any
}) {
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            // Enviar los datos al backend
            const response = await fetch('https://py-korystore.onrender.com/api/eliminar-producto?idProducto=' + producto.id, {
                method: 'DELETE',
            });

            // Verificar la respuesta
            if (response.ok) {
                const result = await response.json();
                console.log('Producto eliminado con éxito:', result);
                handleToggleModalElim(); // Cerrar el modal
                fetchingProductos();
            } else {
                console.error('Error al eliminar el producto:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
            <div className="p-4 bg-white w-full max-w-[300px]">
                <h1 className="text-center">Eliminar Producto</h1>
                <div className="flex flex-row justify-around">
                    <button
                        type="button"
                        onClick={handleToggleModalElim}
                        className="bg-red-500 text-white py-1 px-4 rounded"
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-blue-500 text-white py-1 px-4 rounded"
                        onClick={handleSubmit}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}