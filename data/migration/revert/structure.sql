-- Revert animalconnect:structure from pg

BEGIN;

DROP TABLE "user" CASCADE;
DROP TABLE "shelter" CASCADE;
DROP TABLE "animal" CASCADE;
DROP TABLE "specie" CASCADE;
DROP TABLE "user_receive_adoption_request" CASCADE;
DROP TABLE "user_has_animal_favorite" CASCADE;

COMMIT;