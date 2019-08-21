class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $ul = $('<ul>');

    this.$el.append($ul);

    for (let i=0; i < 9; i++) {
      let $li = $('<li>');
      $ul.append($li);
    }

  }
}

module.exports = View;
