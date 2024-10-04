async function deleteAllData() {    
    const sql = `TRUNCATE Races, Roles, Characters RESTART IDENTITY;`;  
    const client = require('./client');
    await client.connect();
    await client.query(sql);
    await client.end();
}
  
deleteAllData();