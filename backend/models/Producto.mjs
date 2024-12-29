import { pool } from "../conexion.mjs";

export const crearProducto = async (dataProducto, callback) => {
    const { nombre, descripcion, img, precio, stock } = dataProducto;
    if (!nombre || !descripcion || !img || !stock || !precio) {
        return callback({ message: 'Faltan datos requeridos' }, null);
    }
    const query = `
        INSERT INTO productos (nombre, descripcion, img, precio, stock)
        VALUES ($1, $2, $3, $4, $5);
    `;
    const values = [nombre, descripcion, img, precio, stock];
    try {
        const res = await pool.query(query, values); // Ejecutamos la consulta

        if (res.rowCount > 0) {
            callback(null, { message: 'Producto creado exitosamente' });
        }
    } catch (err) {
        console.error('Error al crear el producto:', err);
        callback(err, null); // En caso de error, lo devolvemos al controlador
    }
}

export const actualizarProducto = async (dataProducto, callback) => {
    const { id, nombre, descripcion, img, precio, stock } = dataProducto;
    if (!id || !nombre || !descripcion || !img || !stock || !precio) {
        return callback({ message: 'Faltan datos requeridos' }, null);
    }
    const query = `
    UPDATE productos
        set nombre=$1, descripcion=$2, img=$3, precio=$4, stock=$5
    WHERE id=$6
    `;
    const values = [nombre, descripcion, img, precio, stock, id];
    try {
        const res = await pool.query(query, values); // Ejecutamos la consulta

        if (res.rowCount > 0) {
            callback(null, { message: 'Producto actualizado exitosamente' });
        }
    } catch (err) {
        console.error('Error al actualizar el producto:', err);
        callback(err, null); // En caso de error, lo devolvemos al controlador
    }
}

export const traerProductos = async (callback) => {
    const query = `
    SELECT * FROM productos;
    `;
    try {
        const res = await pool.query(query); // Ejecutamos la consulta

        if (res.rowCount > 0) {
            callback(null, res.rows);
        }
    } catch (err) {
        console.error('Error al traer los productos:', err);
        callback(err, null); // En caso de error, lo devolvemos al controlador
    }
}

export const eliminarProducto = async (idProducto, callback) => {
    const query = `
    DELETE FROM productos WHERE id=$1;
    `;
    const values = [idProducto];
    try {
        const res = await pool.query(query, values); // Ejecutamos la consulta

        if (res.rowCount > 0) {
            callback(null, { message: 'Producto eliminado exitosamente' });
        }
    } catch (err) {
        console.error('Error al eliminar el producto:', err);
        callback(err, null); // En caso de error, lo devolvemos al controlador
    }
}