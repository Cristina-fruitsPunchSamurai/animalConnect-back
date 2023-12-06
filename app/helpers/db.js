import pg from 'pg';

const { Client } = pg;

const client = new Client(process.env.LOCAL_PG_URL);

client.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données', err.stack);
  } else {
    console.log('Connecté à la base de données');
  }
});

export default client;