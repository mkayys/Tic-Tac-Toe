const View = require('./ttt-view.js');
const Game = require('./game.js');

  const game = new Game();

  $(() => {
    let $el = $(".ttt");
    let view = new View(game, $el);
  });
