// const dotenv  = require("dotenv")
import express, { Application, Request, Response } from "express"
import cors from "cors"
// Rutas
import categoryRoutes from './routes/category.routes'

class Server {
    private app: Application
    private port: number | string

    apiPaths = {
        categories: '/api/categories'
    }

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3050

        // Metodos iniciales
        this.middlewares()
        this.routes()
    }

    routes() {
        const { categories } = this.apiPaths
        this.app.use(categories, categoryRoutes)
    }


    middlewares() {
        this.app.use(cors())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
        // this.app.use(express.static('uploads'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        })
    }

}


const server = new Server()
server.listen()

module.exports = server