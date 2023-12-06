import Joi from 'joi';

const namePattern = /^[a-z\s\-éèêëàâäôöùûüçÉÈÊËÀÂÄÔÖÙÛÜÇ]+$/i;
const phonePattern = /^[0-9]{10}$/;
const postcodePattern = /^[0-9]{3,5}$/;
const passwordPattern = /^[A-Za-z0-9]{8,}$/;

export const userUpdateSchema = Joi.object({
  firstname: Joi.string().pattern(namePattern).messages({
    'string.pattern.base': 'Le prénom ne doit contenir que des lettres, espaces et tirets.'
  }), 
  lastname: Joi.string().pattern(namePattern).messages({
    'string.pattern.base': 'Le nom ne doit contenir que des lettres, espaces et tirets.'
  }),
  phone_number: Joi.string().pattern(phonePattern).messages({
    'string.pattern.base': 'Le numéro de téléphone doit contenir 10 chiffres.',
    }),
  address: Joi.string(),
  postcode: Joi.string().pattern(postcodePattern).messages({
    'string.pattern.base': 'Le code postal doit contenir entre 3 et 5 chiffres.',
    }),
  city: Joi.string().pattern(namePattern).messages({
    'string.pattern.base': 'La ville ne doit contenir que des lettres, espaces et tirets.',
  }),
  email: Joi.string().email().messages({
    'string.email': 'L\'email doit être une adresse email valide.',
    }),
  password: Joi.string().pattern(passwordPattern).messages({
    'string.pattern.base': 'Le mot de passe doit contenir au moins 8 caractères.',
    }),
  passwordConfirm: Joi.string()
});