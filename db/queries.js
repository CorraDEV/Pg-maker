const pool = require("../models/pool");

async function getAllCharactersDB() {
    const sql = `
        SELECT Characters.id, ch_name, ra_name as ra_name, ro_name as ro_name
        FROM Characters
        LEFT JOIN Races ON Characters.id_race = Races.id
        LEFT JOIN Roles ON Characters.id_role = Roles.id
        ORDER BY id;
    `;    
    const { rows } = await pool.query(sql); 
    return rows;
}

async function getAllRacesDB() {    
    const sql = "SELECT * FROM Races ORDER BY id;";
    const { rows } = await pool.query(sql); 
    return rows;
}

async function getAllRolesDB() {    
    const sql = "SELECT * FROM Roles ORDER BY id;";
    const { rows } = await pool.query(sql); 
    return rows;
}

async function getSingleCharacterDB(id) {
    const sql = `
        SELECT Characters.*, ra_name, ro_name
        FROM Characters
        LEFT JOIN Races ON Characters.id_race = Races.id
        LEFT JOIN Roles ON Characters.id_role = Roles.id
        WHERE Characters.id = $1;
    `;    
    const { rows } = await pool.query(sql, [id]);     
    return rows;
}

async function getSingleRaceDB(id) {        
    const sql = "SELECT * FROM Races WHERE id = $1;";
    const { rows } = await pool.query(sql, [id]); 
    return rows;
}

async function getSingleRoleDB(id) {
    const sql = "SELECT * FROM Roles WHERE id = $1;";
    const { rows } = await pool.query(sql, [id]);    
    return rows;
}

async function insertCharacterDB(name, race, role) {
    const sql = "INSERT INTO Characters (ch_name, id_race, id_role) VALUES ($1, $2, $3);";    
    await pool.query(sql, [name, role, race]);
}

async function insertRaceDB(race) {
    const sql = "INSERT INTO Races (ra_name) VALUES ($1);";
    await pool.query(sql, [race]);
}

async function insertRoleDB(role) {
    const sql = "INSERT INTO Roles (ro_name) VALUES ($1);";
    await pool.query(sql, [role]);
}

async function updateCharacterDB(id, name, id_race, id_role) {
    const sql = "UPDATE Characters SET ch_name = $1, id_race = $2, id_role = $3 WHERE id = $4;";
    await pool.query(sql, [name, id_race, id_role, id]);
}

async function updateRaceDB(id, name) {
    const sql = "UPDATE Races SET ra_name = $1 WHERE id = $2;";    
    await pool.query(sql, [name, id]);
}

async function updateRoleDB(id, name) {
    const sql = "UPDATE Roles SET ro_name = $1 WHERE id = $2;";    
    await pool.query(sql, [name, id]);
}

async function deleteCharacterDB(id) {
    const sql = "DELETE FROM Characters WHERE id = $1;";
    await pool.query(sql, [id]);
}

async function deleteRaceDB(id) {
    const sql = "DELETE FROM Races WHERE id = $1;";
    await pool.query(sql, [id]);
}

async function deleteRoleDB(id) {
    const sql = "DELETE FROM Roles WHERE id = $1;";
    await pool.query(sql, [id]);
}

module.exports = {
    getAllCharactersDB,
    getAllRacesDB,
    getAllRolesDB,
    getSingleCharacterDB,
    getSingleRaceDB,
    getSingleRoleDB,
    insertCharacterDB,
    insertRaceDB,
    insertRoleDB,
    updateCharacterDB,
    updateRaceDB,
    updateRoleDB,
    deleteCharacterDB,
    deleteRaceDB,
    deleteRoleDB
};