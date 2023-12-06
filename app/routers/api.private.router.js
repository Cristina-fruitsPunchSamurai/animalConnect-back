import express from 'express';
import {
  profileController,
  animalController,
  favoriteController,
  adoptionController,
  userController,
  specieController
} from '../controllers/index.controller.js'
import { upload } from '../helpers/fileUploadConfig.js';
import validate from '../validation/validateSchema.middleware.js';
import { animalCreationSchema } from '../validation/schemas/animal.create.schema.js';
import { animalUpdateSchema } from '../validation/schemas/animal.update.schema.js';
import { userUpdateSchema } from '../validation/schemas/user.update.schema.js';

const router = express.Router();

router.get('/animals/posted', animalController.getAnimalsPosted);

router.get('/animals/posted/:id', animalController.getOneAnimal);

router.post('/animal', upload.single('picture'), validate(animalCreationSchema), animalController.newAnimal);

router.patch('/animal/:id', validate(animalUpdateSchema), animalController.updateAnimal);

router.patch('/animal/picture/:id', upload.single('picture'), animalController.updateAnimalPicture);

router.delete('/animal/:id', animalController.deleteAnimal);

//profile

router.get('/profile', profileController.viewProfile);

router.patch('/profile', validate(userUpdateSchema), profileController.updateProfile);

router.patch('/profile/picture', upload.single('picture'), profileController.uploadProfilePicture);

//favorites

router.get('/favorites', favoriteController.getFavorite)

router.post('/favorites/:id', favoriteController.addToFavorite)

router.delete('/favorites/:id', favoriteController.removeFromFavorite)

//adoption requests

router.get('/sentRequest', adoptionController.getAllSentRequests);

router.get('/receivedRequest', adoptionController.getAllReceivedRequests);

router.post('/request/:id', adoptionController.newRequest);

router.get('/request/:animalId/:userId', adoptionController.getOneReceivedRequest);

router.patch('/request/:animalId/:userId/accept', adoptionController.approveReceivedRequest);

router.patch('/request/:animalId/:userId/reject', adoptionController.rejectReceivedRequest);

//other

router.get('/user', userController.getAllUser);

router.get('/user/:id', userController.getOneUser);

router.patch('/user/:id', userController.updateUser);

router.post('/specie', specieController.newSpecie);

router.patch('/specie/:id', specieController.updateSpecie);

export default router;