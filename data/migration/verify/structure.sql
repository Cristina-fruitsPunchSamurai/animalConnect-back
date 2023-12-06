-- Verify animalconnect:structure on pg

BEGIN;

SELECT * FROM "user" WHERE false;
SELECT * FROM "shelter" WHERE false;
SELECT * FROM "animal" WHERE false;
SELECT * FROM "specie" WHERE false;
SELECT * FROM "user_receive_adoption_request" WHERE false;
SELECT * FROM "user_has_animal_favorite" WHERE false;

ROLLBACK;
