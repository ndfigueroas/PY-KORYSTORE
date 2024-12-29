import { useState } from "react";
import Navbar from "../components/Navbar"; // Ajusta según la ubicación de tu Navbar
import Footer from "../components/Footer"; // Ajusta según la ubicación de tu Footer

export default function ContactPage() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí podrías enviar los datos del formulario a una API o procesarlos de alguna manera
        console.log("Formulario enviado:", formData);
    };

    return (
        <div className="font-sans">
            {/* Navbar */}

            {/* Hero Section */}
            <section className="hero-section bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 text-white py-10 text-center">
                <div className="hero-text">
                    <h1 className="text-5xl font-bold mb-4">Contáctanos</h1>
                    <p className="text-xl mb-6">Si tienes alguna pregunta, no dudes en escribirnos.</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section py-12">
                <div className="container mx-auto px-6">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="contact-form bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-center text-3xl font-semibold mb-4">Formulario de Contacto</h3>
                                <form onSubmit={handleSubmit}>
                                    {/* Campo Nombres */}
                                    <div className="mb-4">
                                        <label htmlFor="nombre" className="form-label block text-lg font-semibold mb-2">Nombres</label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            className="form-control w-full p-3 border border-gray-300 rounded-lg"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {/* Campo Email */}
                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label block text-lg font-semibold mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control w-full p-3 border border-gray-300 rounded-lg"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {/* Campo Teléfono */}
                                    <div className="mb-4">
                                        <label htmlFor="telefono" className="form-label block text-lg font-semibold mb-2">Teléfono</label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            className="form-control w-full p-3 border border-gray-300 rounded-lg"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {/* Campo Asunto */}
                                    <div className="mb-4">
                                        <label htmlFor="asunto" className="form-label block text-lg font-semibold mb-2">Asunto</label>
                                        <input
                                            type="text"
                                            id="asunto"
                                            name="asunto"
                                            className="form-control w-full p-3 border border-gray-300 rounded-lg"
                                            value={formData.asunto}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {/* Campo Mensaje */}
                                    <div className="mb-4">
                                        <label htmlFor="mensaje" className="form-label block text-lg font-semibold mb-2">Mensaje</label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            className="form-control w-full p-3 border border-gray-300 rounded-lg"
                                            rows={4}
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    {/* Botón de Enviar */}
                                    <button type="submit" className="btn btn-primary w-full py-3 rounded-lg bg-yellow-500 text-black font-semibold">
                                        Enviar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
  
        </div>
    );
}
