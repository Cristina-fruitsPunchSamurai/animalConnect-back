/**
 * @typedef {object} Error
 * @property {string} error
 */

/**
 * Connexion
 * @typedef {object} Connexion
 * @property {string} email.required - Email of the user
 * @property {string} password.required - Password of the user
 */


//-----------------private router

//animal
/**
 * GET /animals/posted
 * @summary Get all announces created by the user (owner)
 * @tags Animal
 * @security BearerAuth
 * @return {object} 200 - Success response with a list of announces created by the user - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 *
 */

/**
 * GET /animals/posted/{id}
 * @summary Get one announce by ID (owner)
 * @tags Animal
 * @security BearerAuth
 * @param {integer} id.path.required - The Animal's ID from the req.params
 * @return {object} 200 - Success response with the announce details - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * POST /animal
 * @summary Add an announce (owner)
 * @tags Animal
 * @security BearerAuth
 * @param {InputPost} request.body.required - post info
 * @return {object} 201 - Success response after adding an announce - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * PATCH /animal/{id}
 * @summary Update an announce (owner)
 * @tags Animal
 * @security BearerAuth
 * @param {integer} id.path.required - The Animal's ID from the req.params
 * @return {object} 200 - Success response after updating an announce - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * PATCH /animal/picture/{id}
 * @summary Update an announce picture (owner)
 * @tags Animal
 * @security BearerAuth
 * @param {integer} id.path.required - The Animal's ID from the req.params
 * @return {object} 200 - Success response after updating an announce picture - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * DELETE /animal/{id}
 * @summary Delete an announce (owner)
 * @tags Animal
 * @security BearerAuth
 * @param {integer} id.path.required - The Animal's ID from the req.params
 * @return {object} 200 - Success response after deleting an announce - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

//profile
/**
 * GET /profile
 * @summary Get the user profile
 * @tags Profile
 * @security BearerAuth
 * @return {object} 200 - Success response with user profile - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 404 - User profile not found - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * PATCH /profile
 * @summary Update the user profile
 * @tags Profile
 * @security BearerAuth
 * @return {object} 200 - Success response after updating a profile - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * PATCH /profile/picture
 * @summary Update the user profile picture
 * @tags Profile
 * @security BearerAuth
 * @param {string} path.path.required - Path to the picture file
 * @return {object} 200 - Success response after updating an profile picture - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

//favorites
/**
 * GET /favorites
 * @summary Get the user favorites
 * @tags Favorites
 * @security BearerAuth
 * @return {object} 200 - Success response with a list of user's favorite animals - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * POST /favorites/{id}
 * @summary Add a favorite
 * @tags Favorites
 * @security BearerAuth
 * @param {integer} id.path.required - The Animal's ID from the req.params
 * @return {object} 201 - Success response after adding an animal to favorites - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * DELETE /favorites/{id}
 * @summary Remove a favorite
 * @tags Favorites
 * @security BearerAuth
 * @param {integer} id.path.required - The Animal's ID from the req.params
 * @return {object} 204 - Success response after removing an animal from favorites - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

//adoption requests
/**
 * GET /sentRequest
 * @summary Get all adoption requests sent by the user (requester)
 * @tags Adoption request
 * @security BearerAuth
 * @return {object} 200 - Success response with a list of adoption requests - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * GET /receivedRequest
 * @summary Get all adoption requests received (owner)
 * @tags Adoption request
 * @security BearerAuth
 * @return {object} 200 - Success response with a list of adoption requests - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 *
 */

/**
 * POST /request/{id}
 * @summary Apply for an adoption (requester)
 * @tags Adoption request
 * @security BearerAuth
 * @param {integer} id.path.required - The Animal's ID from the req.params
 * @param {AdoptionRequest} request.body.required - Adoption request details
 * @return {object} 201 - Success response with the created adoption request - application/json
 * @return {Error} 400 - Bad request - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 404 - Not found - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * GET /request/{animalId}/{userId}
 * @summary Get an adoption request received (owner)
 * @tags Adoption request
 * @security BearerAuth
 * @param {integer} animalId.path.required - The Animal's ID from the req.params
 * @param {integer} userId.path.required - The User's ID from the req.params
 * @return {object} 200 - Success response with the adoption request details - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 404 - Not found - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * PATCH /request/{animalId}/{userId}/accept
 * @summary Accept an adoption request (owner)
 * @tags Adoption request
 * @security BearerAuth
 * @param {integer} animalId.path.required - The Animal's ID from the req.params
 * @param {integer} userId.path.required - The User's ID from the req.params
 * @return {object} 204 - Success response after accepting the adoption request - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 404 - Not found - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * PATCH /request/{animalId}/{userId}/reject
 * @summary Reject an adoption request (owner)
 * @tags Adoption request
 * @security BearerAuth
 * @param {integer} animalId.path.required - The Animal's ID from the req.params
 * @param {integer} userId.path.required - The User's ID from the req.params
 * @return {object} 204 - Success response after rejecting the adoption request - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 404 - Not found - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * GET /user
 * @summary Get all users
 * @tags Admin
 * @security BearerAuth
 * @return {object} 200 - Success response with list of users - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * GET /user/{id}
 * @summary Get a user by ID
 * @tags Admin
 * @security BearerAuth
 * @param {integer} id.path.required - The User's ID from the req.params
 * @return {object} 200 - Success response with the requested user - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * PATCH /user/{id}
 * @summary Update a user
 * @tags Admin
 * @security BearerAuth
 * @param {integer} id.path.required - The User's ID from the req.params
 * @return {object} 200 - Success response after updating the user - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * POST /specie
 * @summary Add a specie
 * @tags Admin
 * @security BearerAuth
 * @return {object} 201 - Success response after adding a new specie - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * PATCH /specie/{id}
 * @summary Update a specie
 * @tags Admin
 * @security BearerAuth
 * @param {integer} id.path.required - The Specie's ID from the req.params
 * @return {object} 200 - Success response after updating the specie - application/json
 * @return {Error} 401 - Unauthorized error - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

//-----------------public router

/**
 * POST /register
 * @summary Sign up
 * @tags Authentification
 * @return {object} 201 - Success response after user registration - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * POST /login
 * @summary Sign in
 * @tags Authentification
 * @param {Connexion} request.body.required - email and password of the user
 * @return {object} 200 - Success response after user login
 * @return {Error} 400 - Bad Request
 * @return {Error} 500 - Internal server error
 */

/**
 * GET /animals/random
 * @summary Get 5 random animals
 * @tags Animal
 * @return {object} 200 - Success response with random animals - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * GET /animals
 * @summary Get all animals
 * @tags Animal
 * @return {object} 200 - Success response with list of animals - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * GET /animal/{id}
 * @summary Get an animal by ID
 * @tags Animal
 * @param {integer} id.path.required - The Animal's ID from the req.params
 * @return {object} 200 - Success response with updated animal - application/json
 * @return {Error} 404 - Animal not found - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * GET /animal/filter
 * @summary Get animals with optional filters
 * @tags Animal
 * @param {string} speciesNames.query - list of species names to filter (optional)
 * @param {string} gender.query - Gender to filter (optional)
 * @param {string} age.query - Age ranges to filter (optional)
 * @return {object} 200 - Success response with filtered animals - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * GET /specie
 * @summary Get all species
 * @tags Espèce
 * @return {object} 200 - Success response with list of species - application/json
 * @return {Error} 500 - Internal server error - application/json
 */

/**
 * GET /specie/{id}
 * @summary Get a specie by ID
 * @tags Admin
 * @param {integer} id.path.required - The Specie's ID from the req.params
 * @return {object} 200 - Success response with the requested specie - application/json
 * @return {Error} 500 - Internal server error - application/json
 */