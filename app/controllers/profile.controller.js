import { userDatamapper } from '../models/index.datamapper.js';

export const profileController = {

/*-----------------------------------Je suis connecté----------------------------------*/

//je veux accéder à mon profil
  async viewProfile(req, res) {
    const loggedInUserId = req.user.userId;
    try {
        const profile = await userDatamapper.findProfile(loggedInUserId);

        if (!profile) {
          return res.status(404).json({ message: "Profil introuvable" });
        }

        res.json(profile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération du profil." });
    };
  },

//je veux modifier à mon profil
  async updateProfile(req, res) {
    try {
        const loggedInUserId = req.user.userId;
        const { firstname, lastname, phone_number, address, postcode, city, email, password } = req.body;

          const profile = await userDatamapper.findByPk(loggedInUserId);

          if (!profile) {
            return res.status(404).json({ message: "Profil introuvable" });
          }

          if (firstname) {
            profile.firstname = firstname;
          }
          if (lastname) {
            profile.lastname = lastname;
          }
          if (phone_number) {
            profile.phone_number = phone_number;
          }
          if (address) {
            profile.address = address;
          }
          if (postcode) {
            profile.postcode = postcode;
          }
          if (city) {
            profile.city = city;
          }
          if (email) {
            profile.email = email;
          }
          if (password) {
            profile.password = password;
          }

          const updatedProfile = await userDatamapper.update(loggedInUserId, profile);
          res.json(updatedProfile);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour du profil." });
    };
  },

  async uploadProfilePicture(req, res) {
    const loggedInUserId = req.user.userId;
    const picturePath = req.file.filename;

    try {
      const profile = await userDatamapper.findByPk(loggedInUserId);

      if (!profile) {
        return res.status(404).json({ message: "Profil introuvable" });
      }

      const updateData = { picture: picturePath };
      const updatedProfile = await userDatamapper.update(loggedInUserId, updateData);

      if (!updatedProfile) {
        return res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de la photo.' });
      }

      res.status(200).json({ message: 'La photo a bien été mise à jour' });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'ajout de la photo.' });
    }
  },

};