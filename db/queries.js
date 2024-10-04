const pool = require("./pool");

async function getAllCharactersDB() {
    const sql = `
        SELECT ch_name, ra_name, ro_name
        FROM Characters
        INNER JOIN Races ON Characters.id_race = Races.id
        INNER JOIN Roles ON Characters.id_role = Roles.id;
    `    
    const { rows } = await pool.query(sql); 
    return rows;
}

async function insertRaceDB(race) {
    await pool.query("INSERT INTO Races (ra_name) VALUES ($1)", [race]);
}

async function insertRoleDB(role) {
    await pool.query("INSERT INTO Roles (ro_name) VALUES ($1)", [role]);
}

module.exports = {
    getAllCharactersDB,
    insertRaceDB,
    insertRoleDB
};