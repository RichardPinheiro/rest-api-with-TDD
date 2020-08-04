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

describe('List person', () => {
    init()

    it('should be able to List person with pagination', async () => {

        const people = [
            {
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
                    }
                ]
            },
            {
                type: 'legal',
                name: 'Test Person Name',
                company_name: 'Test Company Name',
                cnpj: '35.680.984/0001-83',
                email: 'legal@gmail.com',
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
                    }
                ]
            }
        ]

        let result = await PersonService.create(people)

        const page = 1
        const size = 1

        result = await PersonService.findAll(page, size)

        expect(result.length).toBe(1)

        expect(result).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ 
                    name: 'Test Person Name',
                    email: 'test@gmail.com'
                })
            ])
        )
    })
})