const { getAllCharactersDB, insertRaceDB, insertRoleDB } = require("../db/queries");

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

async function renderHomepage(req, res){
    const pages = [
        {title: "Add Character", url: "./addCharacter"},
        {title: "Add Race", url: "./addRace"},
        {title: "Add Role", url: "./addRole"}
    ];
    const characters = await getAllCharactersDB();    
    res.render('homepage', { title: 'homepage', pages, characters });
}

function renderAddCharacter(req, res){
    res.render('addCharacter', { title: 'Add Character' });
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
    renderHomepage,
    renderAddCharacter,
    renderAddRace,
    renderAddRole
 };