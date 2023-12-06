import { userDatamapper } from '../models/index.datamapper.js';

export const userController = {


/*-----------------------------Other (ou admin ?)--------------------------------*/

  async getAllUser(req, res) {
    try {
      const user = await userDatamapper.findAll();
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération des utilisateurs." });
    };
  },

  async getOneUser(req, res) {
    const userId = req.params.id;
    try {
      const user = await userDatamapper.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: "L'utilisateur demandé est introuvable." });
      } else {
        return res.json(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération de l'utilisateur." });
    };
  },

  async updateUser(req, res) {
    const userId = req.params.id;
    const { firstname, lastname, phone_number, address, postcode, city, email, password, picture } = req.body;

    try {
      const user = await userDatamapper.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: "L'utilisateur à mettre à jour est introuvable." });
      }

      if (firstname) {
        user.firstname = firstname;
      };
      if (lastname) {
        user.lastname = lastname;
      };
      if (phone_number) {
        user.phone_number = phone_number;
      };
      if (address) {
        user.address = address;
      };
      if (postcode) {
        user.postcode = postcode;
      };
      if (city) {
        user.city = city;
      };
      if (email) {
        user.email = email;
      };
      if (password) {
        user.password = password;
      };
      if (picture) {
        user.picture = picture;
      };

      const updateUser = await userDatamapper.update(userId, user);
      res.json(updateUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour de l'utilisateur." });
    };
  },

  async deleteUser(req, res) {
    const userId = req.params.id;
    try {
      const user = await userDatamapper.delete(userId);

      if (!user) {
        return res.status(404).json({ message: "L'utilisateur à supprimer est introuvable." });
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la suppression de l'utilisateur." });
    };
  }

};