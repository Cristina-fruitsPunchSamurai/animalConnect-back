import express from 'express';
import { authController } from '../controllers/auth.controller.js';
import { specieController, animalController } from "../controllers/index.controller.js";
import validate from '../validation/validateSchema.middleware.js';
import { userCreationSchema } from '../validation/schemas/user.create.schema.js';

const router = express.Router();

router.post('/register', validate(userCreationSchema), authController.register);

router.post('/login',  authController.login);

router.get('/animals/random', animalController.getRandomAnimals);

router.get('/animals', animalController.getAllAnimal);

router.get('/animal/:id', animalController.getOneAnimal);

router.get('/animals/filter', animalController.getAnimalsByFilters);

//specie

router.get('/specie', specieController.getAllSpecie);

//other

router.get('/specie/:id', specieController.getOneSpecie);

export default router;