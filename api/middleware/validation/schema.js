const Joi = require("joi");

exports.schemas = {
    signup: Joi.object({
        username: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(6)
            .max(8)
            .required()
    }),
    signin: Joi.object({})
}