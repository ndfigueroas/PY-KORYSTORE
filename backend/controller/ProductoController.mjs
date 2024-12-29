import * as ProductoModel from '../models/Producto.mjs';

export const createProducto = (req, res) => {
    const dataProducto = req.body; // Datos del producto desde el cuerpo de la solicitud

    ProductoModel.crearProducto(dataProducto, (err, mensaje) => {
        if (err) {
            console.error('Error al crear producto:', err);
            return res.status(500).json({ message: 'Error al crear producto' });
        }
        res.status(201).json(mensaje);
    });
}
export const updateProducto = (req, res) => {
    const dataProducto = req.body; // Datos del producto desde el cuerpo de la solicitud

    ProductoModel.actualizarProducto(dataProducto, (err, mensaje) => {
        if (err) {
            console.error('Error al actualizar producto:', err);
            return res.status(500).json({ message: 'Error al actualizar producto' });
        }
        res.status(200).json(mensaje);
    });
}

export const getProductos = (req, res) => {
    ProductoModel.traerProductos((err, productos) => {
        if (err) {
            console.error('Error al traer productos:', err);
            return res.status(500).json({ message: 'Error al traer productos' });
        }
        res.status(200).json(productos);
    })
}

export const deleteProducto = (req, res) => {
    const { idProducto } = req.query; // ID del producto desde la ruta

    ProductoModel.eliminarProducto(idProducto, (err, mensaje) => {
        if (err) {
            console.error('Error al eliminar producto:', err);
            return res.status(500).json({ message: 'Error al eliminar producto' });
        }
        res.status(200).json(mensaje);  // Devolvemos el mensaje de éxito al eliminar el producto
    });
}