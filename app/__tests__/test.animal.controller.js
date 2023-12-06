import { animalController } from '../controllers/animal.controller.js';
import { animalDatamapper } from '../models/index.datamapper.js';

// Remplace le vrai datamapper par un datamapper fake (mock)
jest.mock('../models/index.datamapper.js');

// Fonction pour simuler "res"
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res); // Simulation de la méthode "status" de "res"
  res.json = jest.fn().mockReturnValue(res); // Simulation de l'envoi du JSON dans "res"
  return res; // Retour de "res"
};

// Définition des tests pour le contrôleur animal
describe('Animal Controller Tests', () => {

/*---------------------------Test sur getAllAnimals---------------------------*/

  it('should fetch all animals successfully', async () => {

    // Définition d'une liste de quelques animaux fake
    const mockAllAnimals = [
      { id: 1, name: "Lion" },
      { id: 2, name: "Tiger" },
      { id: 5, name: "Zebra" }
    ];

    // On indique au datamapper fake d'exécuter la requête avec la liste fake (mockAllAnimals)
    animalDatamapper.findAll.mockResolvedValue(mockAllAnimals);

    // Définition d'une request fake "req"
    const req = {};
    // Définition d'une response fake "res"
    const res = mockResponse();

    // Appel du contrôleur réel avec nos "req" et "res" fake
    await animalController.getAllAnimal(req, res);

    // Vérification si la liste fake (mockRandomAnimals) est bien retournée dans "res"
    expect(res.json).toHaveBeenCalledWith(mockAllAnimals);
  });

/*---------------------------Test sur getRandomAnimals---------------------------*/

  it('should fetch 5 random animals successfully', async () => {

    // Définition d'une liste de 5 animaux fake
    const mockRandomAnimals = [
      { id: 1, name: "Lion" },
      { id: 2, name: "Tiger" },
      { id: 3, name: "Elephant" },
      { id: 4, name: "Giraffe" },
      { id: 5, name: "Zebra" }
    ];

    // On indique au datamapper fake d'exécuter la requête avec la liste fake (mockRandomAnimals)
    animalDatamapper.findRandomAnimals.mockResolvedValue(mockRandomAnimals);

    // Définition d'une request fake "req"
    const req = {};
    // Définition d'une response fake "res"
    const res = mockResponse();

    // Appel du contrôleur réel avec nos "req" et "res" fake
    await animalController.getRandomAnimals(req, res);

    // Vérification si la liste fake (mockRandomAnimals) est bien retournée dans "res"
    expect(res.json).toHaveBeenCalledWith(mockRandomAnimals);
  });

});
