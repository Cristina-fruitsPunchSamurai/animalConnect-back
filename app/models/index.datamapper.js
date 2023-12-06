import client from '../helpers/db.js';

import AnimalDatamapper from './animal.datamapper.js';
import ShelterDatamapper from './shelter.datamapper.js';
import SpecieDatamapper from './specie.datamapper.js';
import AdoptionDatamapper from './adoption.datamapper.js';
import FavoriteDatamapper from './favorite.datamapper.js';
import UserDatamapper from './user.datamapper.js';

export const animalDatamapper = new AnimalDatamapper(client);
export const shelterDatamapper = new ShelterDatamapper(client);
export const specieDatamapper = new SpecieDatamapper(client);
export const adoptionDatamapper = new AdoptionDatamapper(client);
export const favoriteDatamapper = new FavoriteDatamapper(client);
export const userDatamapper = new UserDatamapper(client);
