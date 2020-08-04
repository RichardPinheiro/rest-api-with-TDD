import Mongoose from 'mongoose'

import mongoConfig from '../../config/database/mongo'

class Mongo {

    constructor() {
        this.mongo()
    }

    mongo() {
        return Mongoose.connect(mongoConfig.mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
    }
}

export default new Mongo()
