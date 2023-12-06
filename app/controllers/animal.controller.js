import { animalDatamapper } from '../models/index.datamapper.js';

export const animalController = {

/*-----------------------------------Je ne suis pas forcément connecté----------------------------------*/

//je veux afficher 5 animaux de façon aléatoire
  async getRandomAnimals(req, res) {
    try {
      const randomAnimals = await animalDatamapper.findRandomAnimals();
      res.json(randomAnimals);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération des animaux aléatoires." });
    }
  },

//je veux accéder à tous les animaux disponibles
  async getAllAnimal(req, res) {
    try {
      const animal = await animalDatamapper.findAll();
      res.json(animal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération de tous les animaux disponibles." });
    };
  },

//je veux accéder à tous les animaux disponibles (en filtrant ma recherche)
  async getAnimalsByFilters(req, res) {
    const speciesNames = req.query.speciesNames || null;
    const gender = req.query.gender || null;
    const age = Array.isArray(req.query.age) ? req.query.age : (req.query.age ? [req.query.age] : []);

    try {
      const animals = await animalDatamapper.findAnimalsByFilters(speciesNames, gender, age);
      res.json(animals);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération des animaux filtrés." });
    }
  },

//je veux accéder à la fiche d'un animal
  async getOneAnimal(req, res) {
    const animalId = req.params.id;
    try {
      const animal = await animalDatamapper.findOneAnimalAndItsOwner(animalId);

        if (!animal) {
        res.status(404).json({ message: "L'animal demandé est introuvable." });
      } else {
        res.json(animal);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération de la fiche de l'animal." });
    };
  },

/*-----------------------------------Je suis connecté----------------------------------*/

//je veux accéder mes annonces crées
async getAnimalsPosted(req, res) {
  const ownerId = req.user.userId;
    try {
      const animals = await animalDatamapper.findAnimalsPosted(ownerId);
      res.json(animals);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération de vos annonces créées." });
    };
  },

//je veux créer une nouvelle annonce d'adoption
  async newAnimal(req, res) {
      const { name, registration_nb, age, weight, gender, color, price, description, specie_id } = req.body;
      const ownerId = req.user.userId;

      if (!req.file) {
        return res.status(400).json({ error: "L'image de l'animal est requise." });
      }

      const picturePath = req.file.filename;

      const animalData = {
      name,
      registration_nb,
      age,
      weight,
      gender,
      color,
      price,
      description,
      picture: picturePath,
      user_id: ownerId,
      specie_id
  };
  try {
    const newAnimal = await animalDatamapper.create(animalData);
    res.json(newAnimal);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Une erreur est survenue lors de la création de l'annonce." });
  };
  },

//je veux modifier une annonce d'adoption
  async updateAnimal(req, res) {
    try {
      const animalId = req.params.id;
      const animal = await animalDatamapper.findByPk(animalId);
      const { name, registration_nb, age, weight, gender, color, price, description } = req.body;

      if (!animal) {
        return res.status(404).json({ message: "L'animal à mettre à jour est introuvable." });
      }

      if (name) {
        animal.name = name;
      };
      if (registration_nb) {
        animal.registration_nb = registration_nb;
      };
      if (age) {
        animal.age = age;
      };
      if (weight) {
        animal.weight = weight;
      };
      if (gender) {
        animal.gender = gender;
      };
      if (color) {
        animal.color = color;
      };
      if (price) {
        animal.price = price;
      };
      if (description) {
        animal.description = description;
      };

      const updateAnimal = await animalDatamapper.update(animalId, animal);
      res.json(updateAnimal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour de l'annonce d'adoption." });
    };
  },

  async updateAnimalPicture(req, res) {
    const animalId = req.params.id;
    const picturePath = req.file.filename;
    try {
      const animal = await animalDatamapper.update(animalId, { picture: picturePath });

      if (!animal) {
        return res.status(404).json({ message: "L'animal à mettre à jour est introuvable." });
      }
      res.status(200).json({ message: 'La photo d\'animal a bien été mise à jour' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'ajout de la photo.' });
    };
  },

//je veux supprimer une annonce d'adoption avec double verif pour la sécurité
  async deleteAnimal(req, res) {
    const animalId = req.params.id; // recup dans l'url
    const ownerId = req.user.userId; // id extrait du token (le "hackeur" n'a pas le token)
    try {
      const animal = await animalDatamapper.deleteForOwner(animalId, ownerId);

      if (!animal) {
        return res.status(404).json({ message: "L'animal à supprimer est introuvable." });
      }
      res.json(animal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la suppression de l'annonce d'adoption." });
    };
  }

}