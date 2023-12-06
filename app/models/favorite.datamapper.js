import CoreDatamapper from "./core.datamapper.js";

export default class FavoriteDatamapper extends CoreDatamapper {
  tableName = 'user_has_animal_favorite';

/*---------------------------Je suis connecté------------------------------*/

//je veux accéder à mes favoris
  async findFavorite(loggedInUserId) {

    const query = `
      SELECT *
      FROM "${this.tableName}" AS favorite
      JOIN "animal" ON "favorite".animal_id = "animal".id
      WHERE "favorite".user_id = $1
    `;

    const result = await this.client.query(query, [loggedInUserId]);
    return result.rows;
  }

//je veux ajouter un animal à mes favoris
  async addFavorite(loggedInUserId, animalId) {
    //ajout du favori uniquement s'il n'est déjà pas présent
    const query = `
      INSERT INTO "${this.tableName}" (user_id, animal_id)
      SELECT $1, $2
      WHERE NOT EXISTS (
        SELECT 1 FROM "${this.tableName}" WHERE user_id = $1 AND animal_id = $2
      )
    `;

    const result = await this.client.query(query, [loggedInUserId, animalId]);
    //ROWCOUNT compte le nbre de lignes affectées par la requête, si > 0 = true sinon false
    return result.rowCount > 0;
  }

//je veux retirer un animal de mes favoris
  async deleteFavorite(loggedInUserId, animalId) {

    const query = `
      DELETE FROM "${this.tableName}"
      WHERE user_id = $1 AND animal_id = $2
    `;

    const result = await this.client.query(query, [loggedInUserId, animalId]);
    return result.rowCount > 0;
  }

}
