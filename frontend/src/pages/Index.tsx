import { useEffect, useState } from "react"
import { Producto } from "../utils/definition"
import CardProducto from "../components/CardProducto";

export default function Index() {
    const [listaProductos, setListaProductos] = useState<Producto[]>();
    const [modalReg, setModalReg] = useState(false);

    const handleToggleModalReg = () => {
        setModalReg(!modalReg);
    }
    const fetchingProductos = async () => {
        console.log('Componente Index cargado')
        try {
            const response = await fetch('https://py-korystore.onrender.com/api/traer-productos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data: Producto[] = await response.json()
                setListaProductos(data)
                console.log(data)
            }
        } catch (error) {
            console.error(error)
        }


    }
    useEffect(() => {
        fetchingProductos();
    }, [])

    return (
        <div className="font-bold text-red-700 justify-center items-center min-h-[80vh] min-w-full">
            <div className="p-2">
                <div className="flex flex-col">
                    <h1 className="mt-4 text-center text-3xl font-bold">Bienvenidos</h1>
                    <div className="w-[30wh] flex justify-end">
                        <button
                            onClick={handleToggleModalReg}
                            className="bg-blue-500 text-white py-1 px-4 mr-4 rounded"
                        >
                            Registrar
                        </button>
                    </div>

                </div>

                <div className="min-h-[80vh]">
                    {listaProductos && listaProductos.length > 0 ? (

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                            {listaProductos.map((item) => (
                                <CardProducto key={item.id} producto={item} fetchingProductos={fetchingProductos} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center min-h-[80vh]">
                            <p>Cargando productos...</p>

                        </div>
                    )}
                </div>

            </div>
            {modalReg && <ModalRegistrar handleToggleModalReg={handleToggleModalReg} fetchingProductos={fetchingProductos} />}

        </div>
    )
}

export function ModalRegistrar({
    handleToggleModalReg,
    fetchingProductos
}: {
    handleToggleModalReg: () => void;
    fetchingProductos: any
}) {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Crear un objeto FormData para extraer los valores del formulario
        const formData = new FormData(e.currentTarget);

        // Crear el objeto del producto a partir de los valores
        const producto = {
            nombre: formData.get('nombre') as string,
            descripcion: formData.get('descripcion') as string,
            img: formData.get('imagen') as string,
            precio: parseFloat(formData.get('precio') as string),
            stock: parseInt(formData.get('stock') as string),
        };

        console.log(producto);

        try {
            // Enviar los datos al backend
            const response = await fetch('https://py-korystore.onrender.com/api/crear-producto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(producto),
            });

            // Verificar la respuesta
            if (response.ok) {
                const result = await response.json();
                console.log('Producto registrado con éxito:', result);
                handleToggleModalReg(); // Cerrar el modal
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
                <h1 className="text-center">Registrar Producto</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre del producto"
                        className="border border-gray-300 p-2 mb-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        name="descripcion"
                        placeholder="Descripción del producto"
                        className="border border-gray-300 p-2 mb-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        name="imagen"
                        placeholder="Imagen del producto"
                        className="border border-gray-300 p-2 mb-2 w-full"
                        required
                    />
                    <input
                        type="number"
                        name="precio"
                        placeholder="Precio"
                        className="border border-gray-300 p-2 mb-2 w-full"
                        required
                        min="0"
                        step="0.01"
                    />
                    <input
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
                            onClick={handleToggleModalReg}
                            className="bg-red-500 text-white py-1 px-4 rounded"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-1 px-4 rounded"
                        >
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}