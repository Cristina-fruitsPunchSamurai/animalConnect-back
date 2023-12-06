import Joi from 'joi';

const namePattern = /^[a-z\s\-éèêëàâäôöùûüçÉÈÊËÀÂÄÔÖÙÛÜÇ]+$/i;
const letterOnlyPattern = /^[a-z]+$/i;
const numberOnlyPattern = /^\d+$/;

export const animalCreationSchema = Joi.object({
  name: Joi.string().required().pattern(namePattern).messages({
      'string.pattern.base': 'Le nom ne doit contenir que des lettres, espaces et tirets.',
      'string.empty': 'Le nom est obligatoire.'
    }),
  registration_nb: Joi.string().pattern(numberOnlyPattern).length(15).required().messages({
      'string.pattern.base': 'Le numéro d\'enregistrement ne doit contenir que des chiffres.',
      'string.length': 'Le numéro d\'enregistrement doit avoir une longueur de 15 chiffres.',
      'string.empty': 'Le numéro d\'enregistrement est obligatoire.'
    }),
  age: Joi.number().integer().min(1).max(99).required().messages({
      'number.base': 'L\'âge doit être un nombre compris entre 1 et 99 ans',
      'number.empty': 'L\'âge est obligatoire.'
    }),
  weight: Joi.number().integer().min(1).max(999).required().messages({
      'number.base': 'Le poids doit être un nombre compris entre 1 et 999 kgs',
      'number.empty': 'Le poids est obligatoire.'
    }),
  gender: Joi.string().required().messages({
      'string.empty': 'Le genre est obligatoire.'
    }),
  color: Joi.string().required().pattern(letterOnlyPattern).messages({
      'string.pattern.base': 'La couleur ne doit contenir que des lettres.',
      'string.empty': 'La couleur est obligatoire.'
    }),
  price: Joi.number().precision(2).min(0.00).max(300.00).required().messages({
      'number.base': 'Le prix doit être un nombre compris entre 0.00 et 300.00 €',
      'number.empty': 'Le prix est obligatoire.'
    }),
  description: Joi.string().required().messages({
      'string.empty': 'La description est obligatoire.'
    }),
  specie_id: Joi.number().integer().required().messages({
      'number.base': 'Le specie_id doit être un nombre entier.',
      'number.empty': 'Le specie_id est obligatoire.'
  }),
});