const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./module/pool');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`listening on PORT ${PORT}...`);
});

app.use('/games', function (req, res) {
   pool.query(`SELECT * FROM "videogames" ORDER BY "releaseYear"`)
   .then((response) => {
      res.send(response.rows);
   }).catch((error) => {
      console.log(`Error getting videogames`, error);
      res.sendStatus(500);
   })
});

app.post('/addGame', function (req, res) {
   let game = req.body;
   console.log('Adding game', game);

   let sqlText = `INSERT INTO "videogames" ("title", "publisher", "releaseYear",
      "rating") VALUES ($1, $2, $3, $4);`;

   pool.query(sqlText, [game.title, game.publisher, game.releaseYear, game.rating])
      .then((response) => {
         res.sendStatus(201);
      }).catch((error) => {
         console.log(`Error posting videogames`, error);
         res.sendStatus(500);
      })
});
