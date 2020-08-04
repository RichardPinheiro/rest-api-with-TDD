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

describe('regirter a new person', () => {
    init()

    it('should be able to register a new individual', async () => {

        const person = {
            type: 'individual',
            name: 'Test Person Name',
            cpf: '212.990.420-31',
            gender: 'male',
            birth: '1992-03-21',
            email: 'test@gmail.com',
            phone: '551432085667',
            cell_phone: '5514997766554',
            photo_url: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
        }

        const result = await PersonService.create(person)

        expect(result).toHaveProperty('_id')

        expect(result).toEqual(
            expect.objectContaining({ type: 'individual' })
        )
    })

    it('should be able to register a new legal', async () => {

        const person = {
            type: 'legal',
            name: 'Test Person Name',
            company_name: 'Test Company Name',
            cnpj: '35.680.984/0001-83',
            email: 'test@gmail.com',
            phone: '551432085667',
            cell_phone: '5514997766554',
            photo_url: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
        }

        const result = await PersonService.create(person)

        expect(result).toHaveProperty('_id')

        expect(result).toEqual(
            expect.objectContaining({ type: 'legal' })
        )
    })

    it('should be able to register a new legal', async () => {

        const person = {
            type: 'legal',
            name: 'Test Person Name',
            company_name: 'Test Company Name',
            cnpj: '35.680.984/0001-83',
            email: 'test@gmail.com',
            phone: '551432085667',
            cell_phone: '5514997766554',
            photo_url: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
        }

        const result = await PersonService.create(person)

        expect(result).toHaveProperty('_id')

        expect(result).toEqual(
            expect.objectContaining({ type: 'legal' })
        )
    })
})