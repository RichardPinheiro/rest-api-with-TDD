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

describe('regirter a new address', () => {
    init()

    it('should be able to register an address', async () => {

        const person = {
            type: 'individual',
            name: 'Test Person Name',
            cpf: '212.990.420-31',
            gender: 'male',
            birth: '1992-03-21',
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

        const result = await PersonService.create(person)

        expect(result).toHaveProperty('_id')

        expect(result).toEqual(
            expect.objectContaining({ type: 'individual' })
        )

        expect(result).toEqual(
            expect.objectContaining({
                address: expect.arrayContaining([
                    expect.objectContaining({ name: 'Delancey St' })
                ])
            })
        )
    })

    it('should be able to register a multiples addresses', async () => {

        const person = {
            type: 'individual',
            name: 'Test Person Name',
            cpf: '212.990.420-31',
            gender: 'male',
            birth: '1992-03-21',
            email: 'test@gmail.com',
            phone: '551432085667',
            cell_phone: '5514997766554',
            photo_url: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
            address: [
                {
                    name: 'Delancey example one',
                    number: 80,
                    complement: 'apartment',
                    neighborhood: 'Port Morris',
                    city: 'New York',
                    state: 'NW',
                    zip_code: 10001
                },
                {
                    name: 'Delancey example two',
                    number: 80,
                    complement: 'apartment',
                    neighborhood: 'Port Morris',
                    city: 'New York',
                    state: 'NW',
                    zip_code: 10002
                },
                {
                    name: 'Delancey example three',
                    number: 80,
                    complement: 'apartment',
                    neighborhood: 'Port Morris',
                    city: 'New York',
                    state: 'NW',
                    zip_code: 10003
                }
            ]
        }

        const result = await PersonService.create(person)

        expect(result).toHaveProperty('_id')

        expect(result.address.length).toBe(3)

        expect(result).toEqual(
            expect.objectContaining({ 
                address: expect.arrayContaining([
                    expect.objectContaining({ name: 'Delancey example one' }),
                    expect.objectContaining({ name: 'Delancey example two' }),
                    expect.objectContaining({ name: 'Delancey example three' })
                ])
            })
        )
    })
})