
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

 CREATE TABLE "locations" (
 "id" serial primary key,
 "activity" varchar(255) NOT NULL,
 "location" varchar(255) NOT NULL,
 "picture" varchar(500),
 "user_id" INT REFERENCES "user"
 );

-- test data
INSERT INTO "locations" ("user_id", "activity", "location, "picture") VALUES (
	1, 'fishing at vino in the valley', '44.69642787608416, -92.32431865781662', 'images/pexels-ian-turnell-709552.jpg
);

