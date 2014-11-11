window.theme = {};
window.game = {};

game.up = 1;
game.down = 1;
game.limit = 10;

game.questions = [
    {
        statement:"On which website can you look up and compare financial product offerings in the UAE?",
        a:"www.souqalmal.com",
        b:"www.google.ae",
        c:"www.dubizzle.com",
        d:"www.compareloans.com",
        correct:"a",
        level:"1"
    }
];

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function getRandom(min, max) {
    var n = Math.floor(Math.random() * (max-min) + min);
    return n;
}