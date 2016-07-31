setInterval(function(){ 

var now = new Date();

var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();

hour = ('0' + hour).slice(-2);
minute = ('0' + minute).slice(-2);
second = ('0' + second).slice(-2);

var code = '#'+hour+minute+second;

document.body.style.backgroundColor = code;


}, 1000);



