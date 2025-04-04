const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'İsim alanı zorunludur',
        'string.empty': 'İsim alanı boş olamaz',
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'E-posta alanı zorunludur',
        'string.empty': 'E-posta alanı boş olamaz',
        'string.email': 'Geçerli bir e-posta adresi giriniz',
    }),
    password: Joi.string().min(8).required().messages({
        'any.required': 'Şifre alanı zorunludur',
        'string.empty': 'Şifre alanı boş olamaz',
        'string.min': 'Şifre en az 8 karakter olmalıdır',
    }),
});

module.exports = { userSchema };