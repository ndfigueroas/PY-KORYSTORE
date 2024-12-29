import express from 'express';
/*
import * as productController from './controllers/productController.mjs'
*/
import * as UsuarioController from './controller/UsuarioController.mjs'
import * as ProductoController from './controller/ProductoController.mjs'
const router = express.Router();

/*
router.get('/products', productController.getAllProducts)
router.put('/products/:id',productController.updateProduct)
router.post('/product-create',productController.createProduct)
router.delete('/products/:id', productController.deleteProduct);
*/
router.post('/registro', UsuarioController.createUser);
router.post('/login', UsuarioController.login);

router.post('/crear-producto', ProductoController.createProducto);
router.put('/actualizar-producto', ProductoController.updateProducto)
router.get('/traer-productos', ProductoController.getProductos)
router.delete('/eliminar-producto', ProductoController.deleteProducto)
export default router;