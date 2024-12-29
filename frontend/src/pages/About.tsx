import { useEffect, useState } from "react";

export default function About() {
    const [equipo, setEquipo] = useState<any[]>([]); // Simula una respuesta de equipo (puedes obtenerlo de una API si es necesario)

    useEffect(() => {
        // Aquí se puede hacer un fetching de los datos si es necesario
        // Por ahora, usamos datos simulados
        setEquipo([
            {
                nombre: "Maria Gómez",
                puesto: "CEO & Fundadora",
                imagen: "https://via.placeholder.com/120",
            },
            {
                nombre: "Carlos Fernández",
                puesto: "Gerente de Marketing",
                imagen: "https://via.placeholder.com/120",
            },
            {
                nombre: "Ana Pérez",
                puesto: "Diseñadora de Moda",
                imagen: "https://via.placeholder.com/120",
            },
        ]);
    }, []);

    return (
        <div className="font-sans">

            {/* Hero Section */}
            <section className="hero-section bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 text-white py-10 text-center">
                <div className="hero-text">
                    <h1 className="text-5xl font-bold mb-4">Bienvenidos a Kory Store</h1>
                    <p className="text-xl mb-6">Tu tienda en línea de moda con estilo único.</p>
                </div>
            </section>

            {/* Sección Sobre Nosotros */}
            <section className="about-section py-12">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-semibold mb-4">¿Quiénes somos?</h2>
                        <p className="text-lg mb-6">
                            En <strong>Kory Store</strong>, nos apasiona ofrecerte lo mejor en moda femenina y masculina. Desde nuestras primeras colecciones, hemos trabajado arduamente para ofrecerte productos de alta calidad, siempre con las últimas tendencias en ropa, zapatos y accesorios.
                        </p>
                        <p className="text-lg">
                            Nuestro compromiso es con la satisfacción del cliente. Trabajamos con proveedores de confianza para asegurarnos de que cada prenda que adquieras sea de la mejor calidad, al mejor precio y siempre con un toque de estilo único.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección de Nuestro Equipo */}
            <section className="team-section bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-6">Conoce a Nuestro Equipo</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {equipo.map((miembro, index) => (
                            <div key={index} className="team-card p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                                <img src={miembro.imagen} alt={miembro.nombre} className="w-full h-48 object-cover rounded-full mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold">{miembro.nombre}</h3>
                                <p className="text-lg">{miembro.puesto}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
