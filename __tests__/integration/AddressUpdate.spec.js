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

describe('update addres', () => {
    init()

    it('should be able to put a new address to a person', async () => {

        const personCreate = {
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

        let result = await PersonService.create(personCreate)

        expect(result).toHaveProperty('_id')

        const person = await PersonService.findById(result._id)

        const address = {
            name: 'Delancey St',
            number: 80,
            complement: 'apartment',
            neighborhood: 'Port Morris',
            city: 'New York',
            state: 'NW',
            zip_code: 10002
        }

        person.address.push(address)

        result = await PersonService.update(person)

        expect(result).toEqual(
            expect.objectContaining({
                address: expect.arrayContaining([
                    expect.objectContaining({ name: 'Delancey St' })
                ])
            })
        )
    })

    it('should be able to update address', async () => {

        const personCreate = {
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

        let result = await PersonService.create(personCreate)

        expect(result).toHaveProperty('_id')

        const person = await PersonService.findById(result._id)

        expect(person).toEqual(
            expect.objectContaining({ 
                address: expect.arrayContaining([
                    expect.objectContaining({ name: 'Delancey St' })
                ])
            })
        )

        person.address[0].name = 'Updated Delancey St'
        person.address[0].neighborhood = 'Updated Port Morris'

        result = await PersonService.update(person)

        expect(person).toEqual(
            expect.objectContaining({ 
                address: expect.arrayContaining([
                    expect.objectContaining({
                        name: 'Updated Delancey St',
                        neighborhood: 'Updated Port Morris'
                    })
                ])
            })
        )
    })

    it('should be able to update multiples addresses', async () => {

        const personCreate = {
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

        let result = await PersonService.create(personCreate)

        expect(result).toHaveProperty('_id')

        expect(result.address.length).toBe(3)

        const person = await PersonService.findById(result._id)

        expect(person).toEqual(
            expect.objectContaining({ 
                address: expect.arrayContaining([
                    expect.objectContaining({ name: 'Delancey example one' }),
                    expect.objectContaining({ name: 'Delancey example two' }),
                    expect.objectContaining({ name: 'Delancey example three' })
                ])
            })
        )

        person.address[0].name = 'Updated Delancey example one'
        person.address[0].neighborhood = 'Updated Port Morris one'

        person.address[1].name = 'Updated Delancey example two'
        person.address[1].neighborhood = 'Updated Port Morris two'

        person.address[2].name = 'Updated Delancey example three'
        person.address[2].neighborhood = 'Updated Port Morris three'

        result = await PersonService.update(person)

        expect(person).toEqual(
            expect.objectContaining({ 
                address: expect.arrayContaining([
                    expect.objectContaining({
                        name: 'Updated Delancey example one',
                        neighborhood: 'Updated Port Morris one'
                    }),
                    expect.objectContaining({
                        name: 'Updated Delancey example two',
                        neighborhood: 'Updated Port Morris two'
                    }),
                    expect.objectContaining({
                        name: 'Updated Delancey example three',
                        neighborhood: 'Updated Port Morris three'
                    })
                ])
            })
        )
    })
})