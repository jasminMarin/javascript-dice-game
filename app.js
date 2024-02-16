// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley,
var activePlayer = 0;

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
// Shoonii zurgiig DOM-s olj hadgalah
var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";

// Shoog shideh event listener
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1-6 hultel sanamsargui toog uusgeh
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    
    // shoonii zurgiig web derr gargana
    diceDom.style.display = "block";

    // buusan toonii zurgiig web deer gargana
    diceDom.src = "dice-" + diceNumber + '.png';

    // buusan toon ni 1-s ylgaatai bol, idevhitei toglogchiig onoog nemegduulne
    if(diceNumber !== 1) {
        // 1-s ylgaatai onoo buusan tul toglogchiin onoog nemne
        roundScore =  roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        // ene toglogchiin eeljin deer tsugluulsan onoog 0 bolgono
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;

        // 1 buusam tul toglogchiin eeljiig solino
        // herev idevhitei toglogch ni 0 baival idehvhitei toglogchiig 1 bolgono
        // ugui bol idehvhitei toglogchiig 0 bolgono
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        
        // Ulaan tsegiig shiljuuleh
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // 1-buusnii daraa shoog tur alga bolgoh
          diceDom.style.display = 'none';
    }
});
