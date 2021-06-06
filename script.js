/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */


/**************************************************
** speltoestand **
***************************************************/
const UITLEG = 0;           // startscherm
const SPELEN = 1;           // het spel
const GAMEOVER = 2;         // eindscherm

var spelStatus = SPELEN;    // wat het spel nu doet


/**************************************************
** speler **
**************************************************/
var spelerX = 200;          // x-positie van speler
var spelerY = 100;          // y-positie van speler
var spelerW = 100;          // breedte van speler x
var spelerH = 100;          // hoogte van speler y 

var kogelX1 = 200;           // x-positie van kogel 1
var kogelX2 = 500;           // x-positie van kogel 2
var kogelY1 = 100;           // y-positie van kogel 1
var kogelY2 = 100;           // y-positie van kogel 2


/************************************************
** vijand **
************************************************/
var vijandX = 200;          // x-positie van vijand
var vijandY = 200;          // y-positie van vijand
var vijandW = 100;          // breedte van vijand x
var vijandH = 100;          // hoogte van vijand y


/*************************************************
** extra **
*************************************************/
var score = 0;              // aantal behaalde punten






/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */



/**************************************************
 * Tekent het speelveld
 *************************************************/
var tekenVeld = function () {
  fill("white");
  rect(20, 20, 1240, 680);
};


/****************************************
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 ****************************************/

var tekenSpeler = function(x, y) {  
  // speler getekend
  fill("grey");
  ellipse(spelerX+400, spelerY+230, spelerW, spelerH);
  ellipse(spelerX+800, spelerY+230, spelerW, spelerH);

  fill("blue");
  rect(spelerX+400, spelerY-40, spelerW+300, spelerH+100);
  rect(spelerX+350, spelerY+40, spelerW, spelerH+100);
  rect(spelerX+750, spelerY+40, spelerW, spelerH+100);

  fill("grey");
  ellipse(spelerX+600, spelerY+60, spelerW, spelerH+50);

/*
  // beweging speler                                               // CHECK WAAROM TOETSEN HET NIET DOEN
  if(keyIsDown(LEFT_ARROW)){
          spelerX = spelerX - 30;
  }
  if (keyIsDown(RIGHT_ARROW)){
          spelerX = spelerX + 30;
  }
  */
 
};



/*****************************************************
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 *****************************************************/
var tekenVijand = function(x, y) {
    fill(9, 81, 148);
    ellipse(vijandX, vijandY, vijandW+10, vijandH+10);

    // pistolen
    fill("white")
    rect(vijandX-10, vijandY-80, vijandW-80, vijandH-55);    // boven
    rect(vijandX-10, vijandY+35, vijandW-80, vijandH-55);    // onder
    rect (vijandX-95, vijandY-20, vijandW-40, vijandH-70);   // rechts
    rect(vijandX+35, vijandY-20, vijandW-40, vijandH-70);    // links

    // ronddraaiende kabine
    rect (vijandX-35, vijandY-35, vijandW-30, vijandH-30);
    fill(9, 81, 148)
    ellipse(vijandX, vijandY, vijandW-50, vijandH-50);

    // beweging vijand

};



/*********************************************************
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 *********************************************************/
var tekenKogel = function(x, y) {
   fill("grey");
   ellipse(kogelX1, kogelY2, 100, 100);
   ellipse(kogelX2, kogelY2, 100, 100);

  // beqeging kogel
  kogelX1 = spelerX + 400;
  kogelX2 = spelerX + 800;
  kogelY1 = spelerY + 230;
  kogelY2 = spelerY + 230;

/*
  if (keyIsDown(spatiebalk)){
    if (kogelY1 > 720) {                                               // + KOGELBREEDTE
  kogelY1 = kogelY1 + 5;
  kogelY2 = kogelY2 + 5;
    }
  }
  */

};



/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

 // X KOGEL = X VIJAND && Y KOGEL = Y VIJAND 
  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
    // ZEGGEN X VIJAND = X SPELER && Y VIJNAD (- GROOTE VIJAND) = Y SPELER (GEEFT GAME OVER)

  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**************************************************************************
***************************************************************************
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
**************************************************************************
**************************************************************************/

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

}


/**************************************************************************
***************************************************************************
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
***************************************************************************
**************************************************************************/

function draw() {

    
  switch (spelStatus) {
    case SPELEN:

      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken

        /* BIJV IF ISVIJNADGERAAKT = TRUE {
            PUNTEN = PUNTEN +1;
        }
        */
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX1, kogelY1);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
