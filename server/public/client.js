$(document).ready(onReady);

function onReady() {
   getGames();

   $('#btn-add-game').on('click', addGame);
}

function addGame(event) {

   event.preventDefault();

   let newGame = {
      title: $('#in-title').val(),
      publisher: $('#in-publisher').val(),
      releaseYear: $('#in-releaseYear').val(),
      rating: $('#in-rating').val(),
   };

   console.log('in addGame', newGame);

   $.ajax({
      type: 'POST',
      url: '/addGame',
      data: newGame,
   }).then( function (response) {
      console.log('in .then of POST', response);
      getGames();
      $('#in-title').val('');
      $('#in-publisher').val('');
      $('#in-releaseYear').val('');
      $('#in-rating').val('');
   }).catch( function (error) {
      console.log(`Error adding the game ${newGame.title}:`, error);
      alert(`Couldn't add game, try again later`);
   });
}

function getGames() {
   $.ajax({
      type: 'GET',
      url: '/games',
   }).then(function (response) {
      renderGames(response);
   }).catch (function (error) {
      alert('Something has gone wrong! Check logs for details');
      console.log('Error:', error);
   });
}

function renderGames(games) {
   $('#gameTable').empty();

   for (let game of games) {
      $('#gameTable').append(`
      <tr>
         <td>${game.title}</td>
         <td>${game.publisher}</td>
         <td>${game.releaseYear}</td>
         <td>${game.rating}</td>
      </tr>
      `);
   }
}
