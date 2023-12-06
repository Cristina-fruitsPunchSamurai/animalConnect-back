import { specieDatamapper } from '../models/index.datamapper.js';

export const specieController = {

/*-------------------Afficher les espèces dans les filtres------------------*/

  async getAllSpecie(req, res) {
    try {
      const specie = await specieDatamapper.findAll();
      return res.json(specie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération des espèces." });
    };
  },

/*-----------------------------------Other----------------------------------*/

  async getOneSpecie(req, res) {
    const specieId = req.params.id;
    try {
      const specie = await specieDatamapper.findByPk(specieId);

      if (!specie) {
        return res.status(404).json({ message: "L'espèce demandée est introuvable." });
      } else {
        return res.json(specie);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération de l'espèce." });
    };
  },

  async newSpecie(req, res) {
      const { name } = req.body;
      const specieData = { name };
      try {
        const newSpecie = await specieDatamapper.create(specieData);
        res.json(newSpecie);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la création de l'espèce." });
      };
  },

  async updateSpecie(req, res) {
    const specieId = req.params.id;
    const { name } = req.body;

    try {
      const specie = await specieDatamapper.findByPk(specieId)

      if (!specie) {
        return res.status(404).json({ message: "L'espèce à mettre à jour est introuvable."})
      }

      if (name) {
        specie.name = name;
      };

      const updateSpecie = await specieDatamapper.update(specieId, specie)

      res.json(updateSpecie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour de l'espèce." });
    };
  },

  async deleteSpecie(req, res) {
    const specieId = req.params.id;
    try {
      const specie = await specieDatamapper.delete(specieId);

      if (!specie) {
        return res.status(404).json({ message: "L'espèce à supprimer est introuvable." });
      }

      res.json(specie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la suppression de l'espèce." });
    };
  }

}