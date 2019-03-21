CREATE TABLE "videogames" (
	"id" serial primary key,
	"title" varchar(120),
	"publisher" varchar(120),
	"release-year" varchar(120),
	"rating" integer,
);

INSERT INTO "videogames" ("title", "publisher", "release-year", "rating")
VALUES ('Grand Theft Auto 5', 'Rockstar', '2013', '9');

INSERT INTO "videogames" ("title", "publisher", "release-year", "rating")
VALUES ('Watch Dogs', 'Ubisoft Montreal', '2014', '3');

INSERT INTO "videogames" ("title", "publisher", "release-year", "rating")
VALUES ('Watch Dogs 2', 'Ubisoft Montreal', '2016', '9');

INSERT INTO "videogames" ("title", "publisher", "release-year", "rating")
VALUES ('Skyrim', 'Bethesda', '2011', '10');

INSERT INTO "videogames" ("title", "publisher", "release-year", "rating")
VALUES ('Legend of Zelda: Ocarina of Time', 'Nintendo', '1998', '8');

INSERT INTO "videogames" ("title", "publisher", "release-year", "rating")
VALUES ('Crazy Frog Racing', 'Valcon Games', '2006', '5');
