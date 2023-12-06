import jwt from 'jsonwebtoken';

function authenticateToken(req, res, next) {

  try {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: "Le token d'autorisation est manquant dans les en-têtes" });
  }

  const token = authHeader.split(' ')[1];

  if (!token) throw new Error("le token n'est pas dans les headers");

  const payload = jwt.verify(token, process.env.TOKEN_SECRET);
  console.log(payload); //on récupère le token pour les tests thunderclient (côté back)

  req.user = payload;

  next();
  } catch (error) {
    console.error(error)
    res.status(401).json({ error: "Échec de l'authentification. Veuillez vous reconnecter." });
  }

}

export default authenticateToken;