import CoreDatamapper from "./core.datamapper.js";

export default class AnimalDatamapper extends CoreDatamapper {
  tableName = 'animal'

/*-----------------------------------Je ne suis pas forcément connecté----------------------------------*/

//je veux afficher 5 animaux de façon aléatoire
  async findRandomAnimals() {
    const result = await this.client.query(`
      SELECT *
      FROM "${this.tableName}"
      ORDER BY RANDOM()
      LIMIT 5
    `);

    return result.rows;
  }

//je veux accéder à tous les animaux disponibles (en filtrant ma recherche)
  async findAnimalsByFilters(speciesNames, gender, age) {
    let query = `
      SELECT "animal".*, "specie".name as specie
      FROM "${this.tableName}"
      JOIN "specie" ON "animal".specie_id = "specie".id
      WHERE 1 = 1`;

    const params = [];

    if (speciesNames !== null) {
      if (Array.isArray(speciesNames)) {
        query += ` AND "specie".name = ANY($${params.length + 1})`;
        params.push(speciesNames);
      } else {
        query += ` AND "specie".name = $${params.length + 1}`;
        params.push(speciesNames);
      }
    }

    if (gender !== null) {
      query += ` AND "animal".gender = $${params.length + 1}`;
      params.push(gender);
    }

    if (age.length > 0) {
      const agePlaceholders = age.map((_, index) => `$${params.length + index + 1}`).join(', ');
      query += ` AND "animal".age IN (${agePlaceholders})`;
      params.push(...age);
    }

    const result = await this.client.query(query, params);
    return result.rows;
  }

/*-----------------------------------Je suis connecté----------------------------------*/

//je veux accéder mes annonces crées
  async findAnimalsPosted(ownerId) {
    const query = `
        SELECT *
        FROM "${this.tableName}"
        WHERE "animal".user_id = $1;
    `;
    const values = [ownerId];

    const result = await this.client.query(query, values);
    return result.rows;
  }

//je veux accéder à l'annonce d'un animal avec certaines infos du propriétaire lié
  async findOneAnimalAndItsOwner(animalId) {
    const query = `
      SELECT "animal".*, "user"."firstname" AS "owner_firstname", "user"."city" AS "owner_city"
      FROM "${this.tableName}"
      JOIN "user" ON "animal".user_id = "user".id
      WHERE "animal".id = $1;
    `;
    const values = [animalId];

    const result = await this.client.query(query, values);
    return result.rows[0];
  }

//je veux supprimer l'annonce d'un animal (vérification supplémentaire sur le token)
  async deleteForOwner(animalId, ownerId) {
    const result = await this.client.query(
    `
      DELETE FROM "${this.tableName}"
      WHERE id = $1 AND user_id = $2
    `,
    [animalId, ownerId]
    );

    return !!result.rowCount;
  }

}

