var player1score = Math.floor(Math.random() * 6) + 1;
var player2score = Math.floor(Math.random() * 6) + 1;

var player1img = "images/dice" + player1score + ".png";
var player2img = "images/dice" + player2score + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", player1img);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", player2img);

if (player1score > player2score) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
}

else if (player1score < player2score) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
}

else {
  document.querySelector("h1").innerHTML = "It's a Draw!"
}
