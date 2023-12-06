import { userDatamapper, shelterDatamapper } from '../models/index.datamapper.js';
import { validateRegistrationInput } from '../validation/validateInput.js';
import createToken from '../helpers/utils.js';
import emailValidator from 'email-validator';
import bcrypt from 'bcrypt';

export const authController = {

/*-----------------------------------Je m'inscris----------------------------------*/

  async register(req, res) {
    try {

        // Inputs collect
        const inputData = req.body;

        // Inputs validation
        const validatedData = await validateRegistrationInput(inputData);

        if (validatedData.errors.length > 0) {
          return res.status(400).json({ errors: validatedData.errors });
      }

        //User = specific values
        const newUserData = {
            firstname: validatedData.firstname,
            lastname: validatedData.lastname,
            phone_number: validatedData.phone_number,
            address: validatedData.address,
            postcode: validatedData.postcode,
            city: validatedData.city,
            email: validatedData.email,
            password: validatedData.password,
            is_shelter: validatedData.is_shelter
        };

        //Shelter = specific values
        let newShelterData;
        if (validatedData.is_shelter === true) {
            newShelterData = {
                company_name: validatedData.company_name,
                siret: validatedData.siret
            };
        }

        if (newUserData.is_shelter === true) {
            //Creation of user (or user + shelter)
            const newUser = await userDatamapper.createProfile(newUserData);
            newShelterData.user_id = newUser.id;
            const newShelter = await shelterDatamapper.create(newShelterData);

            //Response with user (or user + shelter)
            res.json({
                newUser,
                newShelter
            });
        } else {
            const newUser = await userDatamapper.create(newUserData);
            res.json(newUser);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de l'inscription." });
    }
},

/*-----------------------------------Je me connecte----------------------------------*/

    async login(req, res) {

        const { email, password } = req.body;

        if (!emailValidator.validate(email)) {
            return res.status(400).json({ error: 'Email invalide' });
        }

        try {
            const existingUserArray = await userDatamapper.findUserByEmail(email);
            const existingUser = existingUserArray[0];

            if (!existingUser) {
                return res.status(400).json({ error: 'Cet email n’existe pas' });
            }

            const ok = await bcrypt.compare(password, existingUser.password);
            if (!ok) {
                return res.status(400).json({ error: 'Le mot de passe n’est pas correct' });
            }

            delete existingUser.password

            const token = createToken(6 * 60 * 60, {userId: existingUser.id, isAdmin: existingUser.is_admin});

            res.status(200).json({token: token, user: existingUser});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Une erreur est survenue lors de la connexion.' });
        }
    }
}