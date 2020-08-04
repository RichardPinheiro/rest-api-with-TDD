import PersonService from '../services/PersonService';

class PersonController {

    async findById(request, response) {
        const person = await PersonService.findById(request.params.id)

        return response.json(person)
    }

    async findAll(request, response) {
        const { query: { page, size } } = request;

        const people = await PersonService.findAll(page, size)

        return response.json(people)
    }

    async create(request, response) {
        try {
            const personCreated = await PersonService.create(request.body)

            return response.json(personCreated)
        } catch (error) {
            return response.status(400).json({ error })
        }
    }

    async update(request, response) {
        const personUpdated = await PersonService.update(request.body)

        return response.json(personUpdated)
    }

    async delete(request, response) {
        const persolDeleted = await PersonService.delete(request.params.id)

        return response.json(persolDeleted)
    }
}

export default new PersonController()