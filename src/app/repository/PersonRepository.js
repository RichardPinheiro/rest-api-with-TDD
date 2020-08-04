import Person from '../models/Person';

class PersonRepository {
    constructor() {
        this.person = Person
    }

    findById(id) {
        return this.person.findById(id)
    }

    findAll(paginate) {
        return this.person.find({}, {}, paginate).sort({ createdAt: 'desc' })
    }

    findOne(email) {
        return this.person.findOne({email})
    }

    async create(person) {
        return this.person.create(person)
    }

    update(person) {
        return this.person.replaceOne({ _id: person._id },  person)
    }

    delete(id) {
        return this.person.deleteOne({_id: id})
    }
}

export default new PersonRepository()