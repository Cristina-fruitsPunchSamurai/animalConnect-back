import Joi from 'joi';

const namePattern = /^[a-z\s\-éèêëàâäôöùûüçÉÈÊËÀÂÄÔÖÙÛÜÇ]+$/i;
const phonePattern = /^[0-9]{10}$/;
const postcodePattern = /^[0-9]{3,5}$/;
const siretPattern = /^[0-9]{14}$/;
const passwordPattern = /^[A-Za-z0-9]{8,}$/;

export const userCreationSchema = Joi.object({
  firstname: Joi.string().required().pattern(namePattern).messages({
    'string.pattern.base': 'Le prénom ne doit contenir que des lettres, espaces et tirets.',
    'string.empty': 'Le prénom est obligatoire.'
  }),
  lastname: Joi.string().required().pattern(namePattern).messages({
    'string.pattern.base': 'Le nom ne doit contenir que des lettres, espaces et tirets.',
    'string.empty': 'Le nom est obligatoire.'
  }),
  phone_number: Joi.string().required().pattern(phonePattern).messages({
    'string.pattern.base': 'Le numéro de téléphone doit contenir 10 chiffres.',
    'string.empty': 'Le numéro de téléphone est obligatoire.'
    }),
  address: Joi.string().required().messages({
    'string.empty': 'L\'adresse est obligatoire.'
    }),
  postcode: Joi.string().required().pattern(postcodePattern).messages({
    'string.pattern.base': 'Le code postal doit contenir entre 3 et 5 chiffres.',
    'string.empty': 'Le code postal est obligatoire.'
    }),
  city: Joi.string().required().pattern(namePattern).messages({
    'string.pattern.base': 'La ville ne doit contenir que des lettres, espaces et tirets.',
    'string.empty': 'La ville est obligatoire.'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'L\'email doit être une adresse email valide.',
    'string.empty': 'L\'email est obligatoire.'
    }),
  password: Joi.string().pattern(passwordPattern).required().messages({
    'string.pattern.base': 'Le mot de passe doit contenir au moins 8 caractères.',
    'string.empty': 'Le mot de passe est obligatoire.'
    }),
  passwordConfirm: Joi.string().required().messages({
    'string.empty': 'La confirmation du mot de passe est obligatoire.'
    }),
  is_shelter: Joi.boolean().required(),
  company_name: Joi.when('is_shelter', {
    is: true,
    then: Joi.string().required().messages({
    'string.empty': 'Le nom de la société est obligatoire.'
    }),
    otherwise: Joi.string().allow('')
  }),
  siret: Joi.when('is_shelter', {
    is: true,
    then: Joi.string().required().pattern(siretPattern).messages({
    'string.pattern.base': 'Le numéro SIRET doit contenir 14 chiffres',
    'string.empty': 'Le numéro SIRET est obligatoire.'
    }),
    otherwise: Joi.string().allow('')
  })
});