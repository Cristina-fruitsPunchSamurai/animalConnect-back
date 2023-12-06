import emailValidator from 'email-validator';
import bcrypt from 'bcrypt';
import { userDatamapper } from '../models/index.datamapper.js';

export async function validateRegistrationInput(inputRegistrationData) {

    const errors = [];

    // Inputs to check
    const {
        firstname,
        lastname,
        phone_number,
        address,
        postcode,
        city,
        email,
        password,
        passwordConfirm,
        is_shelter,
        company_name,
        siret
    } = inputRegistrationData;

    // Password check
    if (password !== passwordConfirm) {
        errors.push('La confirmation du mot de passe est inexacte');
    }

    // Email validity check
    if (!emailValidator.validate(email)) {
        errors.push("L'email est invalide");
    }

    // Email uniqueness check
    const existingUser = await userDatamapper.findUserByEmail(email);

    // All check ok ?
    if (existingUser.length > 0) {
        errors.push('Email déjà utilisé');
    }

    // Password encryption
    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);

    // Return the encrypted password along with other validated data
    return {
        errors,
        firstname,
        lastname,
        phone_number,
        address,
        postcode,
        city,
        email,
        password: encryptedPass,
        is_shelter,
        company_name,
        siret
    };
}
