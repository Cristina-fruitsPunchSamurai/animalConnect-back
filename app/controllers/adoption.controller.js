import { adoptionDatamapper } from '../models/index.datamapper.js';

export const adoptionController = {

/*---------------------------Je suis connecté (client)------------------------------*/

//je candidate pour un animal
  async newRequest(req, res) {
    const { request_message } = req.body;
    const requesterId = req.user.userId;
    const animal_id = req.params.id;

    const inputData = {
        request_message,
        user_id:requesterId,
        animal_id
    };

    try {

        // Vérification pour éviter un doublon
        const existingRequest = await adoptionDatamapper.checkExistingRequest(requesterId, animal_id);

        if (existingRequest) {
          return res.status(400).json({ message: "Une demande d'adoption similaire existe déjà." });
        }
        const newRequest = await adoptionDatamapper.create(inputData);

        if (!newRequest) {
            return res.status(500).json({ message: "Échec lors de la création de la demande d'adoption" });
        }
        res.json(newRequest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création d'une nouvelle demande d'adoption" });
    }
  },

//je veux accéder à mes candidature envoyées
  async getAllSentRequests(req, res) {
    const requesterId = req.user.userId;
    try {
      const sentRequests = await adoptionDatamapper.findSentRequests(requesterId);

      if (sentRequests.length === 0) {
        return res.json({ message: "Vous n'avez envoyé aucune demande d'adoption" });
      }

      res.json(sentRequests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la récupération des demandes d'adoption envoyées" });
    };
  },

/*---------------------------Je suis connecté (vendeur)------------------------------*/

// je veux accéder à mes candidature reçues
  async getAllReceivedRequests(req, res) {
    const ownerId = req.user.userId;
    try {
        const receivedRequests = await adoptionDatamapper.findReceivedRequests(ownerId);
        console.log(receivedRequests)

        if (receivedRequests.length === 0) {
          return res.json({ message: "Vous n'avez reçu aucune demande d'adoption" });
        }

        res.json(receivedRequests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des demandes d'adoption reçues" });
    };
  },

// je clique sur une candidature reçue
  async getOneReceivedRequest(req, res) {
    const animalId = req.params.animalId; // ID de l'animal demandé
    const requesterId = req.params.userId; // ID de l'utilisateur demandeur

    try {
      const selectedRequest = await adoptionDatamapper.findOneReceivedRequest(animalId, requesterId);

      if (!selectedRequest) {
          return res.status(404).json({ message: "Candidature reçue introuvable" });
      }

      res.json(selectedRequest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la récupération d'une demande d'adoption reçue spécifique" });
    }
  },

// j'accepte une candidature reçue
  async approveReceivedRequest(req, res) {
    const requesterId = req.params.userId;
    const animalId = req.params.animalId;

    try {
        const approvedRequest = await adoptionDatamapper.acceptReceivedRequest(requesterId, animalId);

        if (approvedRequest) {
            return res.json({ message: "Candidature acceptée avec succès" });
        } else {
            return res.status(500).json({ message: "Échec de l'acceptation de la candidature" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de l'approbation d'une demande d'adoption reçue" });
    }
  },

// je refuse une candidature reçue
  async rejectReceivedRequest(req, res) {
    const requesterId = req.params.userId;
    const animalId = req.params.animalId;

    try {
        const rejectedRequest = await adoptionDatamapper.rejectReceivedRequest(requesterId, animalId);

        if (rejectedRequest) {
            return res.json({ message: "Candidature refusée avec succès" });
        } else {
            return res.status(500).json({ message: "Échec du refus de la candidature" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors du rejet d'une demande d'adoption reçue" });
    }
  },



/*--------------------------------OTHER-----------------------------*/

async deleteRequest(req, res) {
    const requesterId = req.params.userId;
    const animalId = req.params.animalId;

    try {
        const deleted = await adoptionDatamapper.deleteByUserAndAnimal(requesterId, animalId);
        if (!deleted) {
            return res.status(404).json({ message: "La requête n'existe pas" });
        }
        res.json({ message: "La requête a été supprimée avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression d'une demande d'adoption" });
    }
}

}
