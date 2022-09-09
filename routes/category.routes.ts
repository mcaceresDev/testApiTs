import { Router } from "express";
import CategoryController from "../controllers/category.controller";

const router = Router()
const categoryController = new CategoryController

router.get('/all', categoryController.getAll)
// router.get('/byId/:id', categoriaController.getById)
// router.post('/', categoriaController.add)
// router.put('/put/:id', categoriaController.update)
// router.put('/delete/:id', categoriaController.delete)
// router.delete('/drop/:id', categoriaController.drop)



export default router