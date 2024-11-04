CREATE TABLE "showroom" (
    "name" VARCHAR(100) NOT NULL,
    "commercial_registration_number" NUMERIC(10) NOT NULL UNIQUE,
    "manager_name" VARCHAR(100),
    "contact_number" NUMERIC(15) NOT NULL,
    "address" VARCHAR(255),
    PRIMARY KEY ("commercial_registration_number")
);

CREATE TABLE "car" (
     "vin" VARCHAR(25) NOT NULL,
     "maker" VARCHAR(25) NOT NULL,
     "model" VARCHAR(25) NOT NULL,
     "model_year" NUMERIC(4) NOT NULL,
     "price" NUMERIC NOT NULL,
     "commercial_registration_number" NUMERIC(10),
     PRIMARY KEY ("vin"),
     FOREIGN KEY ("commercial_registration_number") REFERENCES "showroom" ("commercial_registration_number")
);
