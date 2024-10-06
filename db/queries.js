const pool = require("../models/pool");

async function getAllCharactersDB() {
    const sql = `
        SELECT Characters.id, ch_name, ra_name, ro_name
        FROM Characters
        LEFT JOIN Races ON Characters.id_race = Races.id
        LEFT JOIN Roles ON Characters.id_role = Roles.id
        ORDER BY id;
    `;    
    const { rows } = await pool.query(sql); 
    return rows;
}

async function getAllRacesDB() {    
    const { rows } = await pool.query("SELECT * FROM Races ORDER BY id;"); 
    return rows;
}

async function getAllRolesDB() {    
    const { rows } = await pool.query("SELECT * FROM Roles ORDER BY id;"); 
    return rows;
}

async function getSingleCharacterDB(id) {
    const sql = `
        SELECT Characters.id, ch_name, ra_name, ro_name
        FROM Characters
        LEFT JOIN Races ON Characters.id_race = Races.id
        LEFT JOIN Roles ON Characters.id_role = Roles.id
        WHERE Characters.id = $1;
    `;    
    const { rows } = await pool.query(sql, [id]);     
    return rows;
}

async function getSingleRaceDB(id) {        
    const { rows } = await pool.query(`SELECT * FROM Races WHERE id = $1;`, [id]); 
    return rows;
}

async function getSingleRoleDB(id) {
    const { rows } = await pool.query(`SELECT * FROM Roles WHERE id = $1;`, [id]);    
    return rows;
}

async function insertCharacterDB(name, race, role) {
    const sql = "INSERT INTO Characters (ch_name, id_race, id_role) VALUES ($1, $2, $3);";
    await pool.query(sql, [name, role, race]);
}

async function insertRaceDB(race) {
    await pool.query("INSERT INTO Races (ra_name) VALUES ($1)", [race]);
}

async function insertRoleDB(role) {
    await pool.query("INSERT INTO Roles (ro_name) VALUES ($1);", [role]);
}

async function updateCharacterDB(id, name, id_race, id_role) {
    const sql = `
        UPDATE Characters 
        SET ch_name = '${name}', id_race = ${id_race}, id_role = ${id_role}
        WHERE id = ${id};
    `;
    await pool.query(sql);
}

async function updateRaceDB(id, name) {
    const sql = `
        UPDATE Races 
        SET ra_name = '${name}'
        WHERE id = ${id};
    `;
    await pool.query(sql);
}

async function updateRoleDB(id, name) {
    const sql = `
        UPDATE Roles 
        SET ro_name = '${name}'
        WHERE id = ${id};
    `;
    await pool.query(sql);
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
    updateRoleDB
};