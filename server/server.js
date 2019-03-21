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
