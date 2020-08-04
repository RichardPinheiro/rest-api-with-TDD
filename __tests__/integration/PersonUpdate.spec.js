import MongoMock from '../utils/MongoMock'

import PersonService from '../../src/app/services/PersonService'

import Person from '../../src/app/models/Person'

const init = function() {
    beforeAll(async () => {
        await MongoMock.connect()
    })

    afterAll(async () => {
        await MongoMock.disconnect()
    })

    beforeEach(async () => {
        await Person.deleteMany({})
    })
}

describe('update person', () => {
    init()

    it('should be able to update a individual', async () => {

        const personCreate = {
            type: 'individual',
            name: 'Test Person Name',
            cpf: '212.990.420-31',
            gender: 'male',
            birth: '1992-03-21',
            email: 'individual@gmail.com',
            phone: '551432085667',
            cell_phone: '5514997766554',
            photo_url: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
        }

        let result = await PersonService.create(personCreate)

        expect(result).toHaveProperty('_id')

        expect(result).toEqual(
            expect.objectContaining({ name: 'Test Person Name' }),
            expect.objectContaining({ email: 'individual@gmail.com' })
        )

        const person = await PersonService.findById(result._id)
        
        person.name = 'Test Updated Person Name'
        person.email = 'updated@gmail.com'

        result = await PersonService.update(person)

        expect(result).toEqual(
            expect.objectContaining({ name: 'Test Updated Person Name' }),
            expect.objectContaining({ email: 'updated@gmail.com' })
        )
    })

    it('should be able to update a legal', async () => {

        const personCreate = {
            type: 'legal',
            name: 'Test Person Name',
            company_name: 'Test Company Name',
            cnpj: '35.680.984/0001-83',
            email: 'legal@gmail.com',
            phone: '551432085667',
            cell_phone: '5514997766554',
            photo_url: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
        }

        let result = await PersonService.create(personCreate)

        expect(result).toHaveProperty('_id')

        expect(result).toEqual(
            expect.objectContaining({ 
                name: 'Test Person Name',
                company_name: 'Test Company Name'
            })
        )

        const person = await PersonService.findById(result._id)

        person.name = 'Test Updated Person Name'
        person.company_name = 'Test Updated Company Name'

        result = await PersonService.update(person)

        expect(result).toEqual(
            expect.objectContaining({ 
                name: 'Test Updated Person Name',
                company_name: 'Test Updated Company Name'
            })
        )
    })
})