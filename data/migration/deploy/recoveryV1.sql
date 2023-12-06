-- Deploy animalconnect:recoveryV1 to pg

BEGIN;

-- Supprimer temporairement la valeur par défaut des colonnes
ALTER TABLE "user"
ALTER COLUMN "is_shelter" DROP DEFAULT;

ALTER TABLE "user"
ALTER COLUMN "is_admin" DROP DEFAULT;

-- Modifier le type des colonnes en BOOLEAN
ALTER TABLE "user"
ALTER COLUMN "is_shelter" TYPE BOOLEAN USING ("is_shelter"::BOOLEAN);

ALTER TABLE "user"
ALTER COLUMN "is_admin" TYPE BOOLEAN USING ("is_admin"::BOOLEAN);

-- Réappliquer la valeur par défaut aux colonnes
ALTER TABLE "user"
ALTER COLUMN "is_shelter" SET DEFAULT 'false';

ALTER TABLE "user"
ALTER COLUMN "is_admin" SET DEFAULT 'false';

UPDATE "user"
SET "is_shelter" = 'true'
WHERE "is_shelter" = '1';

UPDATE "user"
SET "is_admin" = 'true'
WHERE "is_admin" = '1';

UPDATE "user"
SET "is_shelter" = 'false'
WHERE "is_shelter" = '0';

UPDATE "user"
SET "is_admin" = 'false'
WHERE "is_admin" = '0';

ALTER TABLE "user_receive_adoption_request"
ALTER COLUMN "status" SET DEFAULT 'pending';

COMMIT;
