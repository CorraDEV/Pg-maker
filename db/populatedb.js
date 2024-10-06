async function populatedb() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Races (
      id SERIAL PRIMARY KEY,
      ra_name VARCHAR(100)
    );

    CREATE TABLE IF NOT EXISTS Roles (
      id SERIAL PRIMARY KEY,
      ro_name VARCHAR(100)
    );

    CREATE TABLE IF NOT EXISTS Characters (
      id SERIAL PRIMARY KEY,
      ch_name VARCHAR(100),
      id_role integer REFERENCES Roles (id),
      id_race integer REFERENCES Races (id)
    );    

    INSERT INTO Races (ra_name) 
    VALUES
      ('Elf'),
      ('Human'),
      ('Orc');

    INSERT INTO Roles (ro_name) 
    VALUES
      ('Warrior'),
      ('Paladin'),
      ('Mage');

    INSERT INTO Characters (ch_name, id_role, id_race) 
    VALUES
      ('Paramsin', 1, 1),
      ('Eratus', 2, 2),
      ('Yonathan', 3, 3);
  `;

  const client = require('../models/client');
  await client.connect();
  await client.query(sql);
  await client.end();
}

populatedb();