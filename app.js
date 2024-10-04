const express = require('express');
const app = express();
const path = require('path');
const { renderHomepage } = require("./controllers/pgMakerController");
const addCharacterRoute = require("./routes/addCharacterRoute");
const addRaceRoute = require("./routes/addRaceRoute");
const addRoleRoute = require("./routes/addRoleRoute");

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get('/', renderHomepage);
app.use('/addCharacter', addCharacterRoute);
app.use('/addRace', addRaceRoute);
app.use('/addRole', addRoleRoute);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});