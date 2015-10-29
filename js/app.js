var Character = function(sprite, x, y) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
};

Character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Enemies our player must avoid
var Enemy = function(x, y) {
    Character.call(this, 'images/enemy-bug.png', x, y);
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Character;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (10 * dt);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    Character.call(this, 'images/char-boy.png', x, y);
};

Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Character;

Player.prototype.update = function() {
};

Player.prototype.handleInput = function(direction) {
    var xInterval = 83;
    var yInterval = 101;
    switch(direction) {
        case 'left':
            this.x = this.x - xInterval;
            break;
        case 'up':
            this.y = this.y - yInterval;
            break;
        case 'right':
            this.x = this.x + xInterval;
            break;
        case 'down':
            this.y = this.y + yInterval;
            break;
        default:
            //do nothing
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(100, 100);
var enemy2 = new Enemy(200, 200);
var enemy3 = new Enemy(300, 300);
var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player(400, 400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
