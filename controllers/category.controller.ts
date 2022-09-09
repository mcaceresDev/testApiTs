import { Request, Response } from 'express'
// modelos
import Category from '../models/category.model'

class CategoryController {

    // Obtener todos los registros de la tabla categorias
    getAll = async (req: Request, res: Response) => {

        try {
            const data = await Category.findAll()

            if (data.length > 0) {
                res.send({status: 200, data})
            } 

            return res.send({status: 404, message: "No hay registros"});
            // return res.json(rpta);

        } catch (Err: any) {
            console.log(Err);            
            return res.send({status:500, message: "Server Error"});
        }
    }

}

export default CategoryController