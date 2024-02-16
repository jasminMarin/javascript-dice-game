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

// ROLLDICE tovchnii event listener
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
        // 1 buusan tul toglogchiin eeljiig solih
     switchToNextPlayer(); // DRY: DON'T REPEAT YOURSELF
    }
});

// HOLD tovchnii event listener
document.querySelector('.btn-hold').addEventListener('click', function() {
        // eeljiin onoog toglogchiin global onoon deer nemeh
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Ug toglogch hojson elehiig shalgah
        if ( scores[activePlayer] >= 20) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            // document.querySelector('.btn-roll').classList.add('inactive');
        } else {
            switchToNextPlayer();
        }
});

// Ene funkts ni togloh eeljiig daraachiin toglogch ru shiljuulne
function switchToNextPlayer() {
   // eeljiin onoog 0 bolgoh
   roundScore = 0;
   document.getElementById('current-' + activePlayer).textContent = roundScore;
   
  // eeljiig shiljuuleh
   activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');   

   // 1-buusnii daraa shoog tur alga bolgoh
   diceDom.style.display = 'none';
}

// NEW GAME tovchnii event listener
document.querySelector('.btn-new').addEventListener('click', function() {
    alert('clicked');
});
