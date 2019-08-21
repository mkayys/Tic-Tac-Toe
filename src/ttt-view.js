class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
    // this.bindEvents = this.bindEvents.bind(this);
  }

  bindEvents() {
    this.$el.on('click', 'li', (e) => {
      this.makeMove($(e.currentTarget))
    });
  }

  makeMove($square) {

    try {
      this.game.playMove($sqaure.data('pos'));
    } catch(err) {
      alert(err.msg);
      return;
    }

    $square.addClass(this.game.currentPlayer);
    $sqaure.text(this.game.currentPlayer.toUpperCase());


    // if (this.game.playMove($square.data("pos"))){
    //   alert('not a valid move!');
    // } else {
    //   $square.addClass(this.game.currentPlayer);
    //   $square.text(this.game.currentPlayer.toUpperCase());
    // }
    // this.game.playMove($square.data("pos"));
  }

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
      // console.log([xPos, yPos]);
      // $li.data('pos',[ xPos, yPos ]);

      $li.data('pos', [xPos, yPos]);

      // $li.click(this.bindEvents);
      $ul.append($li);
    }

  }
}

module.exports = View;
