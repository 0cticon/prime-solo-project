
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
 "user_id" serial primary key,
 "activity" varchar(255),
 "location" varchar(255)
 );

-- test data
INSERT INTO "locations" ("user_id", "activity", "location") VALUES (
	1, 'fishing at vino in the valley', '44.69642787608416, -92.32431865781662'
);

