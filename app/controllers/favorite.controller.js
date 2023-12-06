import { favoriteDatamapper } from '../models/index.datamapper.js';

export const favoriteController = {

/*---------------------------Je suis connecté------------------------------*/

//je veux accéder à mes favoris
  async getFavorite(req, res) {
    const loggedInUserId = req.user.userId;

    try {
      const favoriteAnimals = await favoriteDatamapper.findFavorite(loggedInUserId);

      if(favoriteAnimals.length === 0){
        return res.json({message: "Aucun favoris"})
      }

      res.json(favoriteAnimals)

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur est survenue lors de la récupération des favoris" });
    };
  },

//je veux ajouter un animal à mes favoris
  async addToFavorite(req, res) {
    const loggedInUserId = req.user.userId;
    const animalId = req.params.id;

    try {
      const addedToFavorite = await favoriteDatamapper.addFavorite(loggedInUserId, animalId);

      if (addedToFavorite) {
        return res.json({ message: 'Animal ajouté aux favoris' });
      } else {
        return res.status(400).json({ message: 'Animal déjà dans les favoris' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur est survenue lors de l'ajout de l'animal aux favoris" });
    };
  },

//je veux retirer un animal de mes favoris
  async removeFromFavorite(req, res) {
    const loggedInUserId = req.user.userId;
    const animalId = req.params.id;

    try {
      const deletedFromFavorite = await favoriteDatamapper.deleteFavorite(loggedInUserId, animalId);

      if (deletedFromFavorite) {
        return res.json({ message: 'Animal supprimé des favoris' });
      } else {
        return res.status(404).json({ message: 'L\'animal n\'était pas dans les favoris' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur est survenue lors de la suppression de l'animal des favoris" });
    }
  },
}