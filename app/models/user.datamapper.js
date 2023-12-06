import CoreDatamapper from "./core.datamapper.js";

export default class UserDatamapper extends CoreDatamapper {
  tableName = 'user';

/*---------------------Je vérifis si l'email est existant en BDD-------------------*/

  async findUserByEmail(email) {
    const query = `SELECT * FROM "${this.tableName}" WHERE email = $1`;
    const result = await this.client.query(query, [email]);
    return result.rows;
  }

/*-----------------------------------Je m'inscris----------------------------------*/

  async createProfile(newUserData) {
    const query = `
      INSERT INTO "${this.tableName}" (
        firstname,
        lastname,
        phone_number,
        address,
        postcode,
        city,
        email,
        password,
        picture,
        is_shelter)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id;
    `;

    const values = [
      newUserData.firstname,
      newUserData.lastname,
      newUserData.phone_number,
      newUserData.address,
      newUserData.postcode,
      newUserData.city,
      newUserData.email,
      newUserData.password,
      newUserData.picture,
      newUserData.is_shelter,
    ];

    try {
      const result = await this.client.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error(error);
    }
  }

/*--------------Je suis connecté et je veux accéder à mon profil---------------*/

  async findProfile(loggedInUserId) {
    const query =`
      SELECT "user".*,
          CASE
              WHEN "user".is_shelter = true THEN "shelter".siret
              ELSE NULL
          END AS shelter_siret,
          CASE
              WHEN "user".is_shelter = true THEN "shelter".company_name
              ELSE NULL
          END AS shelter_company_name
      FROM "${this.tableName}" "user"
      LEFT JOIN "shelter" ON "user".id = "shelter".user_id
      WHERE "user".id = $1;
    `

    const result = await this.client.query(query, [loggedInUserId]);
    return result.rows[0];
  }

}