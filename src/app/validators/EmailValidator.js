import PersonRepository from '../repository/PersonRepository';

class EmailValidator {
    constructor() {
        this.personRepository = PersonRepository
    }

    async checkExists(email) {
        let exits = false

        if (email) {
            exits = await this.personRepository.findOne(email)
        }

        return {
            exits,
            message: `Email: (${email}) already exists.`
        }
    }
}

export default new EmailValidator()