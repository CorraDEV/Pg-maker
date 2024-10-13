const { validationResult } = require('express-validator');
const { getAllCharactersDB, getAllRacesDB, getAllRolesDB,
getSingleCharacterDB, getSingleRaceDB, getSingleRoleDB,
insertCharacterDB, insertRaceDB, insertRoleDB, 
updateCharacterDB, updateRaceDB, updateRoleDB,
deleteCharacterDB, deleteRaceDB, deleteRoleDB} = require("../db/queries");

const pages = [
    {title: "characters", url: "/"},
    {title: "races", url: "races"},
    {title: "roles", url: "roles"}    
];

async function insertCharacter(req, res){
    const checkResult = validationResult(req);

    if(checkResult.isEmpty()){
        const { name, race, role } = req.body;
        await insertCharacterDB(name, race, role);
        res.redirect("/");
    }
    else{
        res.json({ errors: checkResult.array() });
    }        
}

async function insertRace(req, res){
    const checkResult = validationResult(req);

    if(checkResult.isEmpty()){
        const { raceName } = req.body;
        await insertRaceDB(raceName);
        res.redirect(req.baseUrl);        
    }
    else{
        res.json({ errors: checkResult.array() });
    }    
}

async function insertRole(req, res){
    const checkResult = validationResult(req);

    if(checkResult.isEmpty()){
        const { roleName } = req.body;
        await insertRoleDB(roleName);
        res.redirect(req.baseUrl);        
    }
    else{
        res.json({ errors: checkResult.array() });
    }    
}

async function updateCharacter(req, res){
    const checkResult = validationResult(req);

    if(checkResult.isEmpty()){
        const { name, race, role } = req.body;
        const { id } = req.params;
        await updateCharacterDB(id, name, race, role);
        res.redirect("/");        
    }
    else{
        res.json({ errors: checkResult.array() });
    }    
}

async function updateRace(req, res){
    const checkResult = validationResult(req);
    
    if(checkResult.isEmpty()){
        const { raceName } = req.body;
        const { id } = req.params;
        await updateRaceDB(id, raceName);
        res.redirect(req.baseUrl);          
    }
    else{
        res.json({ errors: checkResult.array() });
    }    
}

async function updateRole(req, res){
    const checkResult = validationResult(req);

    if(checkResult.isEmpty()){
        const { roleName } = req.body;
        const { id } = req.params;
        await updateRoleDB(id, roleName);
        res.redirect(req.baseUrl);        
    }    
    else{
        res.json({ errors: checkResult.array() });
    }    
}

async function deleteCharacter(req, res){    
    const { id } = req.params;
    await deleteCharacterDB(id);
    res.redirect("/");
}

async function deleteRace(req, res){
    const { id } = req.params;
    await deleteRaceDB(id);
    res.redirect(req.baseUrl);
}

async function deleteRole(req, res){
    const { id } = req.params;
    await deleteRoleDB(id);
    res.redirect(req.baseUrl);
}

async function renderCharacters(req, res){        
    const characters = await getAllCharactersDB();      
    res.render('characters', { title: 'characters', pages, characters });
}

async function renderRaces(req, res){    
    const races = await getAllRacesDB();  
    res.render('races', { title: 'races', pages, races });
}

async function renderRoles(req, res){    
    const roles = await getAllRolesDB();  
    res.render('roles', { title: 'roles', pages, roles });
}

async function renderSingleCharacter(req, res){        
    const { id } = req.params;
    const [character] = await getSingleCharacterDB(id);
    console.log(character);
    const races = await getAllRacesDB();
    const roles = await getAllRolesDB();
    res.render('singleCharacter', { title: character.ch_name, character, races, roles });
}

async function renderSingleRace(req, res){        
    const { id } = req.params;
    const [race] = await getSingleRaceDB(id);      
    res.render('singleRace', { title: race.ra_name, race });
}

async function renderSingleRole(req, res){        
    const { id } = req.params;
    const [role] = await getSingleRoleDB(id);      
    res.render('singleRole', { title: role.ro_name, role });
}

async function renderAddCharacter(req, res){
    const races = await getAllRacesDB();    
    const roles = await getAllRolesDB();    
    res.render('addCharacter', { title: 'Add Character', races, roles });
}

function renderAddRace(req, res){
    res.render('addRace', { title: 'Add Race'});
}

function renderAddRole(req, res){
    res.render('addRole', { title: 'Add Role'});
}

module.exports = { 
    insertCharacter,
    insertRace,
    insertRole,
    updateCharacter,
    updateRace,
    updateRole,
    deleteCharacter,
    deleteRace,
    deleteRole,
    renderCharacters,
    renderRaces,
    renderRoles,
    renderSingleCharacter,
    renderSingleRace,
    renderSingleRole,
    renderAddCharacter,
    renderAddRace,
    renderAddRole
 };