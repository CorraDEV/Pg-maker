const pool = require("../models/pool");

async function getAllCharactersDB() {
    const sql = `
        SELECT ch_name, ra_name, ro_name
        FROM Characters
        LEFT JOIN Races ON Characters.id_race = Races.id
        LEFT JOIN Roles ON Characters.id_role = Roles.id;
    `    
    const { rows } = await pool.query(sql); 
    return rows;
}

async function getAllRacesDB() {    
    const { rows } = await pool.query("SELECT * FROM Races;"); 
    return rows;
}

async function getAllRolesDB() {    
    const { rows } = await pool.query("SELECT * FROM Roles;"); 
    return rows;
}

async function insertRaceDB(race) {
    await pool.query("INSERT INTO Races (ra_name) VALUES ($1)", [race]);
}

async function insertRoleDB(role) {
    await pool.query("INSERT INTO Roles (ro_name) VALUES ($1);", [role]);
}

async function insertCharacterDB(name, race, role) {
    const sql = "INSERT INTO Characters (ch_name, id_race, id_role) VALUES ($1, $2, $3);"
    await pool.query(sql, [name, role, race]);
}

module.exports = {
    getAllCharactersDB,
    getAllRacesDB,
    getAllRolesDB,
    insertRaceDB,
    insertRoleDB,
    insertCharacterDB
};