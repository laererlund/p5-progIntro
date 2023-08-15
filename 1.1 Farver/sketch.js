/*
Første simple øvelse med programmering og med p5.js

Der er opgaver nederst i denne fil

Denne kode og forløbet som helhed er inspireret af 
Daniel Shiffman på Youtube-kanalen "The Coding Train"
Simon Moe, Erik Lund
*/

/*
 * setup()-funktionen køres når scriptet starter (eller genstarter)
 * Det er en del af p5.js
 */
function setup() {
    createCanvas(640, 360);
}

/*
 * draw()-funktionen kører hele tiden, 60 gange i sekundet, hvis det er muligt
 * Det er også en del af p5.js - måske den vigtigste
 */
function draw() {
    background(255,204,0);
    fill('#af9'); 
    noStroke();
    ellipse(120, 100, 75, 55);
}

/*
OPGAVER:

1) Prøv at ændre størrelse på programmets canvas, 
   ved at ændre i de tal der står i parantesen efter createCanvas()
   Gem ændringerne ved at trykke på ctrl-s (cmd-s på en mac)
   
2) Prøv at slette linjen noStroke() – hvad sker der nu?

3) Fortryd sletningen ved hjælp af ctrl-z. Og gem igen.
   Tjek at det ser ud som før.
   Skriv i stedet to skråstreger foran linjen. Hvad skete der så?
   De to skråstreger angiver, at det der kommer bagefter ikke skal
   forstås som kode der skal eksekveres men en kommentar. At 
   "udkommentere" en linje er en hurtig måde at afprøve ændringer 
   i sin kode, ved at gemme det væk men ikke slette det

4) Undersøg på   https://p5js.org/reference/
   de øvrige tre ord i draw()-funktionen, og find ud af hvad det 
   er for tal og værdier, der står inde i parenteserne  
   
5) metoden fill() tager en mærkelig parameter: ‘#fae’. 
   I virkeligheden svarer det til en farvekode – se om du kan google
   #fae og oversætte den til tre tal, ligesom der står i metoden 
   background. På den måde kan metoder ofte tage flere forskellige 
   slags parametre – og man skal kigge i referencen for at se 
   hvilke.

6) Find i   Reference   metoden rect() – se om du kan tegne 
   en firkant oven over cirklen. ellipse, rect og en række andre
   typer af figurer står under "2D Primitives"
   
7) Metoden fill() virker ligesom en farvevælger. Man kan vælge 
   en ny farve før man tegner noget – fx din firkant. Prøv at 
   indsætte fill(100,100,0) før du tegner firkanten – hvad sker 
   der nu? Prøv så at indsætte en fjerde parameter i din fill:
    fill(100,200,50,150);
   Hver gang man vil skifte farve på fyld eller streg, er man nødt til at angive det.

*/