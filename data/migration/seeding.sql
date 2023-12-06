BEGIN;



INSERT INTO "user"
("firstname",
"lastname",
"phone_number",
"address",
"postcode",
"city",
"email",
"password",
"picture",
"is_shelter",
"is_admin")
VALUES
('Jean', 'Michel', '0633333333', '1 rue des animaux', '67000', 'Strasbourg', 'jeanmichel@animal.com', 'fgvdsfgvfvfbgqsfdgv', 'jean.jpg', false, false),
('Alice', 'Johnson', '0644444444', '2 rue des peupliers', '68000', 'Colmar', 'alice@example.com', 'sdgsgdfgdfgd', 'alice.jpg', true, false),
('Bob', 'Smith', '0655555555', '9 avenue des champs', '69000', 'Lyon', 'bob@animal.com', 'dfgdfgdfgdfg', 'bob.jpg', true, false),
('Charlie', 'Brown', '0666666666', '4 impasse du soleil', '70000', 'Paris', 'charlie@animal.com', 'sdfgdfgdfgdf', 'charlie.jpg', false, false),
('David', 'Jones', '0677777777', '234 rue joseph', '71000', 'Marseille', 'david@animal.com', 'sdfgsdgsdgsd', 'david.jpg', false, true);

INSERT INTO "specie"
("name")
VALUES
('Chat'),
('Chien'),
('Serpent'),
('Lézard'),
('Tortue'),
('Furet'),
('Lapin'),
('Hamster'),
('Oiseau');

INSERT INTO "animal"
("name",
"registration_nb",
"age",
"weight",
"gender",
"color",
"price",
"description",
"picture",
"user_id",
"specie_id")
VALUES
('Iris', '123456789012345', 2, 15, 'Femelle', 'Argent', 150.75, 'Très caline', 'animal1.jpeg', 2, 1),
('Max', '234567890123456', 2, 15, 'Mâle', 'Crème', 150.75, 'Chien énergique et amical', 'animal2.jpeg', 3, 2),
('Luna', '345678901234567', 1, 8, 'Femelle', 'Crème', 120.50, 'Chaton joueur et curieux', 'animal3.jpeg', 2, 1),
('Rocky', '456789012345678', 5, 25, 'Mâle', 'Roux', 180.25, 'Loyal et protecteur', 'animal4.jpeg', 2, 2),
('Milo', '567890123456789', 4, 12, 'Mâle', 'Tigré', 100.00, 'Chat indépendant et charmant', 'animal5.jpeg', 2, 1),
('Bella', '678901234567890', 2, 10, 'Femelle', 'Crème', 130.50, 'Chien doux et affectueux', 'animal6.jpeg', 2, 2),
('Simba', '789012345678901', 3, 18, 'Mâle', 'Gris', 140.00, 'Energique et joueur', 'animal7.jpeg', 2, 1),
('Daisy', '890123456789012', 2, 6, 'Femelle', 'Roux', 95.25, 'Chaton gracieux et câlin', 'animal8.jpeg', 2, 1),
('Charlie', '901234567890123', 7, 22, 'Mâle', 'Blanc', 170.75, 'Facile à vivre et amical', 'animal9.jpeg', 2, 2),
('Oliver', '012345678901234', 1, 9, 'Mâle', 'Argent', 110.50, 'Curieux et joueur', 'animal10.jpeg', 2, 1),
('Lucy', '987654321098765', 6, 17, 'Femelle', 'Marron', 135.00, 'Chat élégant et vocal', 'animal11.jpeg', 2, 1),
('Jack', '876543210987654', 4, 14, 'Mâle', 'Brun', 125.25, 'Energique et loyal', 'animal12.jpeg', 2, 2),
('Sophie', '765432109876543', 2, 7, 'Femelle', 'Blanc', 105.50, 'Amical et affectueux', 'animal13.jpeg', 2, 1),
('Cooper', '654321098765432', 8, 26, 'Mâle', 'Blanc', 185.75, 'Joueur et intelligent', 'animal14.jpeg', 2, 2),
('Chloe', '543210987654321', 3, 11, 'Femelle', 'Gris', 115.00, 'Chaton doux et gentil', 'animal15.jpeg', 2, 1),
('Thomas', '432109876543210', 2, 15, 'Male', 'Gris', 50.00, 'Un boa docile et gourmand', 'animal16.jpeg', 3, 3),
('Isabelle', '321098765432109', 1, 12, 'Femelle', 'Jaune', 40.00, 'Un python timide et curieux', 'animal17.jpeg', 3, 3),
('Boris', '210987654321098', 3, 1, 'Mâle', 'Orange', 20.00, 'Lézard actif et vif', 'animal18.jpeg', 3, 4),
('Joséphine', '109876543210987', 2, 2, 'Femelle', 'Jaune', 25.00, 'Timide et territoriale', 'animal19.jpeg', 3, 4),
('Caroline', '098765432109876', 5, 3, 'Femelle', 'Marron', 30.00, 'Tortue calme et tranquille', 'animal20.jpeg', 3, 5),
('Alphonse', '987654321098760', 4, 2, 'Mâle', 'Marron', 35.00, 'Tortue curieuse et bavarde', 'animal21.jpeg', 3, 5),
('Elise', '876543210987651', 1, 2, 'Femelle', 'Blanc', 15.00, 'Espiègle et joueuse', 'animal22.jpeg', 2, 7),
('Roger', '765432109876542', 2, 2, 'Mâle', 'Marron', 20.00, 'Doux et curieux', 'animal23.jpeg', 3, 7),
('Jonathan', '654321098765433', 3, 1, 'Mâle', 'Blanc', 40.00, 'Furet joueur et affectueux', 'animal24.jpeg', 2, 6),
('Alice', '543210987654324', 2, 1, 'Femelle', 'Blanc', 45.00, 'Très gourmande', 'animal25.jpeg', 2, 6),
('Eric', '432109876543215', 1, 1, 'Mâle', 'Crème', 5.00, 'Hamster curieux et agile', 'animal26.jpeg', 2, 8),
('Béatrice', '321098765432106', 1, 1, 'Femelle', 'Blanc', 5.00, 'Douce et nocturne', 'animal27.jpeg', 2, 8);

INSERT INTO "user_receive_adoption_request"
("request_message",
"status",
"user_id",
"animal_id")
VALUES
('Je suis intéressé par l''adoption de ce chien.', 'pending', 1, 4),
('Bonjour, je souhaite adopter ce chat adorable.', 'pending', 5, 3),
('Je sis intéressé par l''adoption de ce chien.', 'pending', 2, 12),
('Bonjour, je suhaite adopter ce chat adorable.', 'pending', 3, 21),
('Je suis intéresé par l''adoption de ce chien.', 'pending', 4, 10),
('Bonjour, je souhait adopter ce chat adorable.', 'pending', 4, 7),
('Je suis intéressé par l''adption de ce chien.', 'pending', 2, 9),
('Bonjour, je souhaite adopte ce chat adorable.', 'pending', 5, 5);

INSERT INTO "shelter"
("company_name",
"siret",
"user_id")
VALUES
('Les petits NAC', 123456789, 2),
('Le paradis des poilus', 987654321, 3);

COMMIT;