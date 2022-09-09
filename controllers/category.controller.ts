import { Request, Response } from 'express'
// modelos
import Category, { CategoryOuput } from '../models/category.model'

class CategoryController {

    // Obtener todos los registros de la tabla categorias
    getAll = async (req: Request, res: Response) => {

        try {
            let response = {}
            const data = await Category.findAll()

            if (data.length > 0) {
                response = {status: 200, data}
            } 
            else{
                response = {status: 404, message: "No hay registros"}
            }
            
            res.send(response)

        } catch (Err: any) {
            console.log(Err);            
            res.send({status:500, message: "Server Error"});
        }
    }

}

export default CategoryController