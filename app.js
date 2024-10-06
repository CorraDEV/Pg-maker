const express = require('express');
const app = express();
const path = require('path');
const charactersRoute = require("./routes/charactersRoute");
const racesRoute = require("./routes/racesRoute");
const rolesRoute = require("./routes/rolesRoute");

app.set('view engine', 'ejs');
app.set("views", [path.join(__dirname, "views"), path.join(__dirname, "views/partials")]);
app.use(express.urlencoded({ extended: true }));

app.use('/races', racesRoute);
app.use('/roles', rolesRoute);
app.use('/', charactersRoute);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});