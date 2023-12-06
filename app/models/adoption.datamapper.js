import CoreDatamapper from "./core.datamapper.js";

export default class AdoptionDatamapper extends CoreDatamapper {
  tableName = 'user_receive_adoption_request';

/*---------------------------Je suis connecté (client)------------------------------*/

//je veux accéder à mes candidatures envoyées
    async findSentRequests(requesterId) {
        const query = `
            SELECT "adoptions".*, "animal".name as animal_name, "animal".price, "animal".picture, "animal".user_id as owner, "specie".name as specie_name, "user".firstname as owner_firstname, "user".lastname as owner_lastname, "user".email as owner_email, "user".phone_number as owner_phone_number
            FROM "${this.tableName}" as adoptions
            JOIN "animal" ON "animal".id = "adoptions".animal_id
            JOIN "specie" ON "specie".id = "animal".specie_id
            JOIN "user" ON "user".id = "animal".user_id
            WHERE "adoptions".user_id = $1
        `;
        const values = [requesterId];

        const result = await this.client.query(query, values);
        return result.rows;
    }

/*---------------------------Je suis connecté (vendeur)------------------------------*/

//je veux accéder à mes candidatures reçues
    async findReceivedRequests(ownerId) {
        const query = `
            SELECT "adoptions".user_id AS requesterId, "adoptions".request_message, "adoptions".status, "animal".id AS animalId, "animal".name AS animalName, "user".firstname, "user".lastname, "user".picture
            FROM "${this.tableName}" AS adoptions
            JOIN "animal" ON "animal".id = "adoptions".animal_id
            JOIN "user" ON "user".id = "adoptions".user_id
            WHERE "animal".user_id = $1;
        `;
        const values = [ownerId];

        const result = await this.client.query(query, values);
        return result.rows;
    }

//je veux accéder à une candidature reçue particulière
    async findOneReceivedRequest(animalId, requesterId) {
        const query = `
            SELECT * FROM "${this.tableName}"
            WHERE animal_id = $1 AND user_id = $2;
        `;
        const values = [animalId, requesterId];

        const result = await this.client.query(query, values);
        return result.rows[0];
    }

//je veux accepter la candidature reçue
    async acceptReceivedRequest(requesterId, animalId) {
        const query = `
            UPDATE "${this.tableName}"
            SET status = 'approved'
            WHERE user_id = $1 AND animal_id = $2
        `;

        const values = [requesterId, animalId];

        const result = await this.client.query(query, values);
        return !!result.rowCount;
    }

//je veux refuser la candidature reçue
    async rejectReceivedRequest(requesterId, animalId) {
        const query = `
            UPDATE "${this.tableName}"
            SET status = 'rejected'
            WHERE user_id = $1 AND animal_id = $2
        `;

        const values = [requesterId, animalId];

        const result = await this.client.query(query, values);
        return !!result.rowCount;
    }

/*--------------------------------------Other--------------------------------------*/

    async deleteByUserAndAnimal(requesterId, animalId) {
        const query = `
            DELETE FROM "${this.tableName}"
            WHERE user_id = $1 AND animal_id = $2
        `;

        const values = [requesterId, animalId];
            const result = await this.client.query(query, values);
            return result.rowCount > 0;
    }

//Check du doublon de candidature
    async checkExistingRequest(requesterId, animalId) {
        const query = `
            SELECT 1 FROM "${this.tableName}"
            WHERE user_id = $1 AND animal_id = $2
        `;

        const result = await this.client.query(query, [requesterId, animalId]);
        return result.rows.length > 0;
    }

}
