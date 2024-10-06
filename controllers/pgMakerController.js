const { getAllCharactersDB, getAllRacesDB, getAllRolesDB,
    insertRaceDB, insertRoleDB, insertCharacterDB, } = require("../db/queries");

async function insertRace(req, res){
    const { raceName } = req.body;
    await insertRaceDB(raceName);
    res.redirect("/");
}

async function insertRole(req, res){
    const { roleName } = req.body;
    await insertRoleDB(roleName);
    res.redirect("/");
}

async function insertCharacter(req, res){
    const { name, race, role } = req.body;
    await insertCharacterDB(name, race, role);
    res.redirect("/");
}

async function renderHomepage(req, res){
    const pages = [
        {title: "Add Character", url: "./addCharacter"},
        {title: "Add Race", url: "./addRace"},
        {title: "Add Role", url: "./addRole"}
    ];
    const characters = await getAllCharactersDB();  
    res.render('homepage', { title: 'homepage', pages, characters });
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
    insertRace,
    insertRole,
    insertCharacter,
    renderHomepage,
    renderAddCharacter,
    renderAddRace,
    renderAddRole
 };