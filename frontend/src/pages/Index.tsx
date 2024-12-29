import { useEffect, useState } from "react";
import { Producto } from "../utils/definition";
import CardProducto from "../components/CardProducto";

export default function HomePage() {
    const [listaProductos, setListaProductos] = useState<Producto[]>();

    // Función para obtener los productos desde la API
    const fetchingProductos = async () => {
        try {
            const response = await fetch('https://py-korystore.onrender.com/api/traer-productos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data: Producto[] = await response.json();
                setListaProductos(data);
                console.log(data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Efecto para cargar los productos al montar el componente
    useEffect(() => {
        fetchingProductos();
    }, []);

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section className="hero-section bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 text-white py-10 text-center">
                <div className="hero-text">
                    <h1 className="text-5xl font-bold mb-4">Bienvenidos a Kory Store</h1>
                    <p className="text-xl mb-6">La mejor tienda de ropa para ti, siempre con las últimas tendencias.</p>
                    <a href="#productos" className="btn btn-primary px-6 py-3 text-lg rounded-full transition-transform transform hover:scale-105">
                        Explorar Productos
                    </a>
                </div>
            </section>

            {/* Sección de Categorías */}
            <section className="categories-section text-center py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="section-title text-4xl font-semibold mb-6">Explora Nuestras Categorías</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {/* Categoría 1 */}
                        <div className="category-card p-4 bg-white shadow-lg rounded-lg transition-all transform hover:scale-105">
                            <img src="https://www.lolitamoda.com/uploads/post/image/107/13.4_prendas_b_sicas_en_el_guardarropa_de_una_mujer_y_c_mo_combinarlas.jpg" alt="Categoría 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-semibold">Ropa Mujer</h3>
                        </div>
                        {/* Categoría 2 */}
                        <div className="category-card p-4 bg-white shadow-lg rounded-lg transition-all transform hover:scale-105">
                            <img src="https://almomento.mx/wp-content/uploads/2022/07/IMG_20220707_164913.jpg" alt="Categoría 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-semibold">Accesorios</h3>
                        </div>
                        {/* Categoría 3 */}
                        <div className="category-card p-4 bg-white shadow-lg rounded-lg transition-all transform hover:scale-105">
                            <img src="https://i.ebayimg.com/thumbs/images/g/c9UAAOSwqT9ml4nH/s-l1200.jpg" alt="Categoría 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-semibold">Ropa Íntima</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Suscripción al Boletín */}
            <section className="newsletter-section text-center py-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                <h2 className="text-3xl font-bold mb-4">¡Suscríbete a nuestro boletín!</h2>
                <p className="text-lg mb-6">Recibe las últimas ofertas, productos y novedades directamente en tu correo.</p>
                <div className="d-flex justify-center mb-4">
                    <input
                        type="email"
                        className="form-control w-50 p-3 rounded-l-lg"
                        placeholder="Introduce tu correo electrónico"
                        required
                    />
                    <button type="submit" className="btn btn-primary px-6 py-3 rounded-r-lg bg-yellow-500 text-black font-semibold">
                        Suscribirse
                    </button>
                </div>
            </section>

            {/* Sección de Productos Destacados */}
            <section id="productos" className="featured-products-section text-center py-12 bg-gray-200">
                <div className="container mx-auto">
                    <h2 className="section-title text-4xl font-semibold mb-6">Productos Destacados</h2>
                    <div className="min-h-[80vh]">
                        {listaProductos && listaProductos.length > 0 ? (
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                                {listaProductos.map((item) => (
                                    <CardProducto key={item.id} producto={item} fetchingProductos={fetchingProductos}/>
                                ))}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center min-h-[80vh]">
                                <p className="text-2xl text-gray-700">Cargando productos...</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
