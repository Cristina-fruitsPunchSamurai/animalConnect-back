export default class CoreDatamapper {
  client;

  tableName;

  constructor(client) {
    this.client = client;
  }

  async findAll() {
    const result = await this.client.query(`SELECT * FROM "${this.tableName}"`);
    return result.rows;
  }

  async findByPk(id) {
    const result = await this.client.query(`SELECT * FROM "${this.tableName}" WHERE id = $1`, [id]);
    return result.rows[0];
  }

async create(inputData) {
    const fields = Object.keys(inputData); //   ['nom', 'age', 'ville', ..]
    const values = Object.values(inputData);//  ['Michel', 13, 'nancy', ..]
    const placeholders = values.map((_, index) => `$${index + 1}`);// '$1, $2, $3'
    const result = await this.client.query(
      `
        INSERT INTO "${this.tableName}" (${fields})
        VALUES (${placeholders})
      `,
      values // argument $1
    );
    return !!result.rowCount;// true ou false
  }

  async update(id, updates) {
      const updateFields = Object.keys(updates);
      const updateValues = Object.values(updates);

      const setExpressions = updateFields.map((field, index) => `${field} = $${index + 1}`);

      const result = await this.client.query(
      `
        UPDATE "${this.tableName}"
        SET ${setExpressions.join(', ')}
        WHERE id = $${updateFields.length + 1}
      `,
      [...updateValues, id]
  );

  return !!result.rowCount;
  }

  async delete(id) {
      const result = await this.client.query(
    `
      DELETE FROM "${this.tableName}"
      WHERE id = $1
    `,
    [id]
  );

  return !!result.rowCount;
  }

}