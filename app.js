// Togloomiin olon gazar ashiglagdah global huvisagchdiig zarlah
// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley,
var activePlayer;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores;

// Toglogchdiin eeljinde tsugluulj baigaa onoog hadgalah huvisagch
var roundScore ;

// Shooni ali talaaraa buusaniig hadgalah huvisagch, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnu.
var diceNumber;

// Togloom duussan esehiig shalgadag tuluv-g hadgalah huvisagch;
var isGameOver;

// Shoonii zurgiig DOM-s olj hadgalah
var diceDom = document.querySelector('.dice');

// Togloomiig ehluulne
initGame();

// Togloom shineer ehlehed beldey.
function initGame() {
    isGameOver =  false;
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    diceNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById('score-0').textContent = "0"; // olon dahin hurdan hurdan. 
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    // Toglogchdiin neriig butsaaj anhnii helbert oruuulah
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
    diceDom.style.display = "none";
}

// ROLLDICE tovchnii event listener
document.querySelector('.btn-roll').addEventListener('click', function() {
   if (isGameOver === false) {
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
   } else {
        alert('Togloom duussan baina!. NEW GAME tovchiig darj shine togloom ehluulne uu!.');
   }
});

// HOLD tovchnii event listener
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(isGameOver === false) {
            // eeljiin onoog toglogchiin global onoon deer nemeh
            scores[activePlayer] = scores[activePlayer] + roundScore;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
            // Ug toglogch hojson elehiig shalgah
            if ( scores[activePlayer] >= 10) {
                document.getElementById('name-' + activePlayer).textContent = 'WINNER!!!';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                
                // Togloom-n tuluv-iig uurchluh
                isGameOver =  true;
            } else {
                switchToNextPlayer();
            }
    } else {
        alert('Togloom duussan baina!. NEW GAME tovchiig darj shine togloom ehluulne uu!.');
    }
});

// NEW GAME tovchnii event listener
document.querySelector('.btn-new').addEventListener('click', initGame);

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
