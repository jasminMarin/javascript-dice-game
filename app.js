// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley,
var activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchdiin eeljinde tsugluulj baigaa onoog hadgalah huvisagch
var roundScore = 0;

// Shooni ali talaaraa buusaniig hadgalah huvisagch, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnu.
var diceNumber = Math.floor(Math.random() * 6) + 1;

// Togloom ehlehed beldey.
document.getElementById('score-0').textContent = "0"; // olon fain hurdan hurdan. 
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";
var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";

document.querySelector('.btn-roll').addEventListener('click', function() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + '.png';
});
