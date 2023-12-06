# API AnimalConnect

L'API AnimalConnect est un service back-end conçu pour faciliter les adoptions d'animaux et permettre aux utilisateurs de signaler des animaux en détresse. Cette API offre plusieurs fonctionnalités essentielles pour connecter les demandeurs d'adoption et les propriétaires d'animaux.

## Authentification

L'authentification est requise pour certaines fonctionnalités de l'API (route privées). Vous devez vous inscrire et vous connecter pour accéder à ces fonctionnalités.

## Utilisation de l'API

![DocAPI](https://github.com/O-Clock-Watt/projet-animal-connect-back/assets/127552834/ba29776f-5adb-4caf-bae0-ae3921ac53f9)

L'API AnimalConnect est bien documentée à l'aide de Swagger, ce qui facilite l'exploration des endpoints et la compréhension de son utilisation. Voici comment accéder à la documentation Swagger :

[Documentation Swagger de l'API AnimalConnect](URL_VERS_SWAGGER)

## Fonctionnalités

- Authentification sécurisée des utilisateurs.
- Publication et consultation d'annonces d'adoption.
- Soumission et gestion des demandes d'adoption.
- Signalement rapide des animaux en détresse pour une intervention immédiate.

## Contenu

Ce back-end contrôle les utilisateurs et les nouvelles. Le projet est réalisé en utilisant les technologies suivantes :

- Node.js
- express.js
- postgreSQL

**CECI EST UN SERVEUR NON VISUEL**

## Programmes nécessaires

Avant de pouvoir utiliser ce projet en local, assurez-vous d'avoir les programmes nécessaires suivants :

- Node.js version 12.18.0 ou supérieure.
- Un environnement de développement de votre choix (par exemple, Visual Studio Code).

### Dépendances du Projet

Ce projet utilise plusieurs bibliothèques et dépendances, dont :

- [express](https://www.npmjs.com/package/express) : Pour la création de l'API.
- [pg](https://www.npmjs.com/package/pg) : Pour la gestion de la base de données PostgreSQL.
- [dotenv](https://www.npmjs.com/package/dotenv) : Pour la gestion des variables d'environnement.
- [cors](https://www.npmjs.com/package/cors) : Pour gérer les requêtes cross-origin (CORS).
- [path](https://nodejs.org/api/path.html) : Pour la gestion des chemins de fichiers.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) : Pour la gestion des tokens JWT.
- [bcrypt](https://www.npmjs.com/package/bcrypt) : Pour le hachage des mots de passe.
- [email-validator](https://www.npmjs.com/package/email-validator) : Pour valider les adresses e-mail.
- [express-jsdoc-swagger](https://www.npmjs.com/package/express-jsdoc-swagger) : Pour la documentation de l'API avec Swagger.
- [joi](https://www.npmjs.com/package/joi) : Pour la validation des données.
- [multer](https://www.npmjs.com/package/multer) : Pour la gestion des fichiers téléchargés.

### Dépendances de Développement

De plus, certaines dépendances de développement sont nécessaires pour les tests et la construction du projet :

- [@babel/core](https://www.npmjs.com/package/@babel/core) : Pour la transpilation du code.
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) : Pour la configuration Babel.
- [@jest/globals](https://www.npmjs.com/package/@jest/globals) : Pour les tests avec Jest.
- [@types/jest](https://www.npmjs.com/package/@types/jest) : Pour les types de Jest.
- [babel-jest](https://www.npmjs.com/package/babel-jest) : Pour l'intégration de Babel avec Jest.
- [eslint](https://www.npmjs.com/package/eslint) : Pour la vérification du code JavaScript.
- [jest](https://www.npmjs.com/package/jest) : Pour les tests unitaires.

**REMARQUE** : Certaines de ces dépendances de développement sont utilisées pour les tests unitaires et d'intégration, ainsi que pour la construction et la transpilation du code.

- ThunderClient/Postman pour les tests d'API (optionnel).
- Sqitch pour gérer les migrations.
- Git pour la gestion de version.

## Comment Cloner

Pour cloner ce projet, ouvrez votre terminal et utilisez la commande suivante :

cd [VOTRE DOSSIER]  
git clone [LIEN DU REPO]  
Installation

Une fois le projet cloné, installez toutes les dépendances en exécutant la commande suivante :

npm install

## Configurer la base de données

Étape 1 : Ouvrez votre terminal

Étape 2 : Accédez à PostgreSQL

Étape 3 : Créez un utilisateur

Étape 4 : Créez une base de données liée à l'utilisateur créé

## Gestion des Migrations avec Sqitch

Sqitch est utilisé pour gérer les migrations de base de données.

### Initialisez Sqitch dans votre projet :

sqitch init AnimalConnect
Configurez votre base de données PostgreSQL dans sqitch.conf.

### Créez une nouvelle migration :

sqitch add [NOM_DE_LA_MIGRATION]  
Éditez le fichier de migration pour spécifier les modifications à apporter à la base de données.

### Déployez la migration vers la base de données :

sqitch deploy db:pg://[UTILISATEUR]:[MOT_DE_PASSE]@[HÔTE]/[BASE_DE_DONNÉES]  
Pour annuler une migration, utilisez sqitch revert.

Assurez-vous de consulter la documentation de Sqitch pour plus de détails sur la gestion des migrations : https://sqitch.org/docs/

## Exécution en LocalHost/Production

Pour exécuter ce projet en mode localhost, suivez ces étapes :

npm run dev

Cela exécutera nodemon index.js, ce qui facilitera les tests et le développement

## Modifier/sauvegarder le projet

Pour envoyer vos modifications vers le dépôt, utilisez les commandes suivantes :

git add .  
git commit -m "votre_message"  
git push origin master  

Assurez-vous de remplacer votre_message par un message de commit descriptif.

## Développeurs

Ce projet a été développé par Alexandre Klein et Thomas Vannier.

