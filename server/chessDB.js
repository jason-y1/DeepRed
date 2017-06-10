const knex = require('knex')(require('../knexfile'));

// const newRoomWhite = (game) => {
//   knex.insert({
//     room: game.room,
//     white: game.display,
//     black: null,
//     result: null,
//     turns: 0,
//     history: '[]',
//     black_pieces: '[]',
//     white_pieces: '[]',
//   }).into('games').then((res) => {
//     console.log(res);
//   });
// }

// const newRoomBlack = (game) => {
//   knex.insert({
//     room: game.room,
//     white: null,
//     black: game.display,
//     result: null,
//     turns: 0,
//     history: '[]',
//     black_pieces: '[]',
//     white_pieces: '[]',
//   }).into('games').then((res) => {
//     console.log(res);
//   });
// };

// const joinRoomWhite = (game) => {
//   knex('games').where({ room: game.room }).update({
//     white: game.display,
//   }).then((res) => {
//     console.log(res);
//   });
// };

// const joinRoomBlack = (game) => {
//   knex('games').where({ room: game.room }).update({
//     black: game.display,
//   }).then((res) => {
//     console.log(res);
//   });
// };

// const saveMove = (game) => {
//   knex('games').where({ room: game.room })
//     .increment('turns', 1)
//     .then((res) =>
//       console.log(res)
//    );

//   knex('games').where('room', game.room).then((res) => { 
      
//   var history = JSON.parse(res[0].history);
//   history.push(game.history);

//     knex('games').where({ room: game.room }).update({
//       history: JSON.stringify(history)
//     }).then((res) =>
//         console.log(res)
//     )
//   });
// }

// const saveWhitePiece = (game) => {

//   knex('games').where('room', game.room).then((res) => {

//   var history = JSON.parse(res[0].white_pieces);
//   history.push(JSON.parse(game.white_pieces));

//     knex('games').where({ room: game.room }).update({
//     white_pieces: JSON.stringify(history),
//   }).then((res) =>
//       console.log(res)
//    );
//   });



// }

// const saveBlackPiece = (game) => {

//   knex('games').where('room', game.room).then((res) => {

//   var history = JSON.parse(res[0].black_pieces);
//   history.push(JSON.parse(game.black_pieces));

//     knex('games').where({ room: game.room }).update({
//     black_pieces: JSON.stringify(history),
//   }).then((res) =>
//       console.log(res)
//    );
//   });

// }

// // game = {
// //   session_id: 'session_id'
// //   result: 'name/name2' || 'draw'
// //   white: 'name',
// //   black: 'name2',
// // }


// const finishGame = (game) => {
//   if (game.result == 'draw'){
//     knex('games').where({room: game.room}).update({
//       result: 'Draw'
//     }).then((res) => 
//       console.log(res)
//     );

//     knex('profiles').where({display: game.white}).increment('draw', 1)
//     .then((res) => 
//       console.log(res)
//     );

//     knex('profiles').where({display: game.black}).increment('draw', 1)
//     .then((res) => 
//       console.log(res)
//     );

//     knex('profiles').where({ display: game.white }).increment('total_games', 1)
//     .then((res) =>
//       console.log(res)
//     );

//     knex('profiles').where({ display: game.black }).increment('total_games', 1)
//     .then((res) =>
//       console.log(res)
//     );

//   } else if (game.result == game.white) {

//     knex('games').where({room: game.room}).update({
//       result: game.result
//     }).then((res) => 
//       console.log(res)
//     );

//     knex('profiles').where({display: game.result}).increment('win', 1)
//     .then((res) => 
//       console.log(res)
//     );

//     knex('profiles').where({ display: game.black }).increment('loss', 1)
//     .then((res) =>
//       console.log(res)
//     );

//     knex('profiles').where({ display: game.white }).increment('total_games', 1)
//     .then((res) =>
//       console.log(res)
//     );

//     knex('profiles').where({ display: game.black }).increment('total_games', 1)
//     .then((res) =>
//       console.log(res)
//     );
//   } else {

//     knex('games').where({room: game.room}).update({
//       result: game.result
//     }).then((res) => 
//       console.log(res)
//     );

//     knex('profiles').where({display: game.result}).increment('win', 1)
//     .then((res) =>
//       console.log(res)
//     );

//     knex('profiles').where({ display: game.white }).increment('loss', 1)
//     .then((res) =>
//       console.log(res)
//     );

//     knex('profiles').where({ display: game.white }).increment('total_games', 1)
//     .then((res) =>
//       console.log(res)
//     );

//     knex('profiles').where({ display: game.black }).increment('total_games', 1)
//     .then((res) =>
//       console.log(res)
//     );

//   }
// };





// const requestClient = (user) => {
//   knex('profiles').where('display', user.display).then((res) =>
//      console.log(res[0])
//   );
// };

// const requestGame = (game) => {
//   knex('games').where('room', game.room).then((res) =>
//      console.log(res[0])
//   );
// };

// const requestHistory = (game) => {
//   knex('games').where('room', game.room).then((res) =>
//      console.log(res[0].history)
//   );
// };

// const requestWhitePieces = (game) => {
//   knex('games').where('room', game.room).then((res) =>
//      console.log(res[0].white_pieces)
//   );
// };

// const requestBlackPieces = (game) => {
//   knex('games').where('room', game.room).then((res) =>
//      console.log(res[0].black_pieces)
//   );
// };

// module.exports.newRoomWhite = newRoomWhite;
// module.exports.newRoomBlack = newRoomBlack;
// module.exports.joinRoomWhite = joinRoomWhite;
// module.exports.joinRoomBlack = joinRoomBlack;
// module.exports.saveWhitePiece = saveWhitePiece;
// module.exports.saveBlackPiece = saveBlackPiece;
// module.exports = finishGame;
// module.exports = requestClient;
// module.exports = requestGame;
// module.exports.requestHistory = requestHistory;
// module.exports = requestWhitePieces;
// module.exports = requestBlackPieces;


const saveDeepRedWhite = (move) => {
  // search table , if parent = parent & move = move
    // increment blackWins & whiteWins 
    // update winPercentage to whiteWins / blackWins + whiteWins
    // else insert

  knex.insert({
    parent: move.parent,
    move: move.move,
    blackWins: move.blackWins,
    whiteWins: move.whiteWins,
    stalemate: move.stalemate,
    winPercentage: move.winPercentage,
  }).into('DeepRed_WhiteMoves').then((res) => {
    console.log(res);
  });
}

const saveDeepRedBlack = (move) => {
  knex.insert({
    parent: move.parent,
    move: move.move,
    blackWins: move.blackWins,
    whiteWins: move.whiteWins,
    stalemate: move.stalemate,
    winPercentage: move.winPercentage,
  }).into('DeepRed_BlackMoves').then((res) => {
    console.log(res);
  });
}

module.exports.saveDeepRedWhite = saveDeepRedWhite;
module.exports.saveDeepRedBlack = saveDeepRedBlack;

