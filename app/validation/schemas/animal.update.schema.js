import Joi from 'joi';

const namePattern = /^[a-z\s\-éèêëàâäôöùûüçÉÈÊËÀÂÄÔÖÙÛÜÇ]+$/i;
const letterOnlyPattern = /^[a-z]+$/i;
const numberOnlyPattern = /^\d+$/;

export const animalUpdateSchema = Joi.object({
  name: Joi.string().pattern(namePattern).messages({
      'string.pattern.base': 'Le nom ne doit contenir que des lettres, espaces et tirets.'
    }),
  registration_nb: Joi.string().length(15).pattern(numberOnlyPattern).messages({
      'string.pattern.base': 'Le numéro d\'enregistrement ne doit contenir que des chiffres.',
      'string.length': 'Le numéro d\'enregistrement doit avoir une longueur de 15 chiffres.'
    }),
  age: Joi.number().integer().min(1).max(99).messages({
      'number.base': 'L\'âge doit être un nombre compris entre 1 et 99 ans',
  }),
  weight: Joi.number().integer().min(1).max(999).messages({
      'number.base': 'Le poids doit être un nombre compris entre 1 et 999 kgs'
  }),
  gender: Joi.string(),
  color: Joi.string().pattern(letterOnlyPattern).messages({
      'string.pattern.base': 'La couleur ne doit contenir que des lettres.',
  }),
  price: Joi.number().precision(2).min(0.00).max(300.00).messages({
      'number.base': 'Le prix doit être un nombre compris entre 0.00 et 300.00 €'
  }),
  description: Joi.string()
});