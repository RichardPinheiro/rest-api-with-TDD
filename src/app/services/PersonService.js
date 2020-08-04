import PersonRepository from '../repository/PersonRepository';

import EmailValidator from '../validators/EmailValidator';

class PersonService {
    constructor() {
        this.personRepository = PersonRepository
        this.emailValidator = EmailValidator
    }

    findById(id) {
        return this.personRepository.findById(id)
    }

    findAll(page, size) {
        const pageNumber = Number(page)
        const pageSize = Number(size)

        const paginate = {
            skip: pageSize * (pageNumber - 1),
            limit: pageSize
        }

        return this.personRepository.findAll(paginate)
    }

    async create(person) {
        const email = await this.emailValidator.checkExists(person.email)

        if (email.exits) {
            throw email.message
        }
    
        return this.personRepository.create(person)
    }

    async update(person) {
        const updated = await this.personRepository.update(person)

        if (updated.nModified) {
            return person
        }
        return null
    }

    delete(id) {
        return this.personRepository.delete(id)
    }
}

export default new PersonService()