

function intheButton() {
var randomRound = Math.floor( Math.random() * 4) + 1;
var imgSelector = "photos/photo" + randomRound + ".png";


var randomImgSelect = document.querySelectorAll("img")[0];
randomImgSelect.setAttribute("src", imgSelector);

var tonmoy = "photos/photo1.png";
var shamim = "photos/photo2.png";
var mikail = "photos/photo3.png";
var tara   = "photos/photo4.png";

if (imgSelector === tonmoy ) {
  document.querySelector("h1").innerHTML = "Tonmoy sALA Taka an";
} else if (imgSelector === shamim ) {
  document.querySelector("h1").innerHTML = "Shamim bokachoda Taka an";
} else if (imgSelector === mikail ) {
  document.querySelector("h1").innerHTML = "MikIL babu Takata anoto";
} else {
  document.querySelector("h1").innerHTML = "tARA tumi jau taka ante";
}



}
