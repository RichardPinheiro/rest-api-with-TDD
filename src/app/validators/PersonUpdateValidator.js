import Joi from '@hapi/joi'

export default async (request, response, next) => {
    const schema = Joi.object({
        _id: Joi.string().required(),
        type: Joi.string().required().valid('individual', 'legal'),
        name: Joi.string().required(),
        company_name: Joi.string()
            .when('type', {
                is: 'legal', 
                then: Joi.string().required()
            }),
        cpf: Joi.string()
            .when('type', {
                is: 'individual', 
                then: Joi.string().required()
            }),
        cnpj: Joi.string()
            .when('type', {
                is: 'legal', 
                then: Joi.string().required()
            }),
        gender: Joi.string()
            .when('type', {
                is: 'individual', 
                then: Joi.string().required()
            }),
        birth: Joi.string()
            .when('type', {
                is: 'individual', 
                then: Joi.string().required()
            }),
        email: Joi.string().optional(),
        phone: Joi.string().optional(),
        cell_phone: Joi.string().optional(),
        photo_url: Joi.string().optional(),
        address: Joi.array().items(Joi.object({
            _id: Joi.string().optional(),
            name: Joi.string().required(),
            number: Joi.number().required(),
            complement: Joi.string().optional(),
            neighborhood: Joi.string().optional(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            zip_code: Joi.string().optional()
        }))
    })

    try {
        await schema.validateAsync(request.body, { abortEarly: false })

        return next()
    } catch (error) {
        const errors = error.details.map(error => error.message)

        return response.status(400).json({ error: 'Validation fails.', messages: errors })
    }
}