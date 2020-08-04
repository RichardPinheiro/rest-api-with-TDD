import Mongoose from 'mongoose'

import mongoConfig from '../../src/config/database/mongo';

class MongoMock {

    async connect() {
        if (!mongoConfig.mongo_url) {
            throw new Error('MongoDB server not initialized')
        }

        this.mongo = await Mongoose.connect(mongoConfig.mongo_url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
    }

    disconnect() {
        return this.mongo.connection.close()
    }
}

export default new MongoMock()