class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  bindEvents() {

  }

  makeMove($square) {}

  setupBoard() {
    let $ul = $('<ul>');

    this.$el.append($ul);

    for (let i=0; i < 9; i++) {
      let $li = $('<li>');

      let xPos;
      if (i < 3) {
        xPos = 0;
      } else if ( i >=3 && i < 6 ) {
        xPos = 1;
      } else {
        xPos = 2;
      }

      let yPos = i % 3;

      $li.data('pos',[ xPos, yPos ]);
      $ul.append($li);
    }

  }
}

module.exports = View;
