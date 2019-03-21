console.log('js');

$(document).ready(onReady);

function onReady() {
   getGames();
}

function getGames() {
   $.ajax({
      type: 'GET',
      url: '/games'
   }).then(function (response) {
      renderGames(response);
   }).catch (function (error) {
      alert('Something has gone wrong! Check logs for details');
      console.log('Error:', error);
   });
}

function renderGames(games) {
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
