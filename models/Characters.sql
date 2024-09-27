CREATE TABLE Characters (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	id_role integer REFERENCES Roles (id),
    id_race integer REFERENCES Races (id)
);