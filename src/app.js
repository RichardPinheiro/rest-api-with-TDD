import express from 'express';

import routes from './routes/api'

import './database/connections/Mongo'

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/v1', routes)
    }
}

export default new App()