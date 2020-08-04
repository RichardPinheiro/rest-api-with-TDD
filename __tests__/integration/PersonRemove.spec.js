import MongoMock from '../utils/MongoMock'

import PersonService from '../../src/app/services/PersonService'

import Person from '../../src/app/models/Person'

describe('regirter a new person', () => {
    beforeAll(async () => {
        await MongoMock.connect()
    })

    afterAll(async () => {
        await MongoMock.disconnect()
    })

    beforeEach(async () => {
        await Person.deleteMany({})
    })

    it('should be able to remove a individual', async () => {

        const person = {
            type: 'individual',
            name: 'Test Person Name',
            cpf: '212.990.420-31',
            gender: 'male',
            birth: new Date('1992-03-21').toISOString(),
            email: 'test@gmail.com',
            phone: '551432085667',
            cell_phone: '5514997766554',
            photo_url: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
            address: [
                {
                    name: 'Delancey St',
                    number: 80,
                    complement: 'apartment',
                    neighborhood: 'Port Morris',
                    city: 'New York',
                    state: 'NW',
                    zip_code: 10002
                }
            ]
        }

        let result = await PersonService.create(person)

        expect(result).toHaveProperty('_id')

        result = await PersonService.delete(result._id)

        expect(result).toEqual(
            expect.objectContaining({ 
                n: 1,
                ok: 1,
                deletedCount: 1
            })
        )
    })
})