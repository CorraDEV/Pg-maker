async function deleteAllTables() {    
    const sql = `
        DROP TABLE IF EXISTS Characters;
        DROP TABLE IF EXISTS Races;
        DROP TABLE IF EXISTS Roles;
    `;
  
    const client = require('./client');
    await client.connect();
    await client.query(sql);
    await client.end();
}
  
deleteAllTables();