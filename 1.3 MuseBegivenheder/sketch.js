/*
Denne kode og forløbet som helhed er inspireret af 
Daniel Shiffman på Youtube-kanalen "The Coding Train"
samt af Simon Moes tilpasning heraf til htx på Slotshaven
*/

var x = 310;
var y = 180;
var xSpeed = 1 ;
var ySpeed = 2;
var radius = 30;
var gr = 204;
var g = 1;
var f = 0.5;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(200,gr,80);
    if (dist(x, y, mouseX, mouseY) < radius) {
        fill('#f9a')
    } else {
        fill('#af9');
    }
    noStroke();
    ellipse(x, y, 2*radius, 2*radius);
    x += xSpeed; x += xSpeed;
    y += ySpeed; 
    y += ySpeed; 
    if (x < radius || x > 640-radius) {xSpeed = -xSpeed;}
    if (y < radius || y > 360-radius) {
        ySpeed = -ySpeed;
        ySpeed += f;
    } else {
        ySpeed += g;
    }
    textSize(16);
    text("ySpeed er nu " + ySpeed, 10, 30); 
}

function mouseClicked() {
    xSpeed = (mouseX - x) / 64;
    ySpeed = (mouseY - y) / 36;
    gr = floor(random(100, 255));
}


/*
OPGAVER:

Her har jeg introduceret flere ting: En ny funktion, som kaldes når 
man klikker med musen, en tekst i øverste venstre hjørne, samt et 
if-else-statement der får cirklen til at skifte farve. Prøv tingene
af og find ud af hvordan de virker. Dernæst:

1) Undersøg i Reference hvad metoderne dist() og random() gør.
   Prøv at ændre tallene inde i parentesen i linje 38. Prøv at lave
   variabler som styrer boldens farve, og lad dem ændre sig når der
   klikkes med musen

2) Få programmet til at tegne en trekant, der følger musen. Prøv at
   få trekanten til at ændre farve, hver gang der klikkes,
   uden at cirklen ændrer farve. Det kræver nogle flere variabler...

3) Undersøg betydningen af om linjen der tegner trekanten står før
   eller efter linjen der tegner cirklen, når de passerer hinanden.
   
4) Lav programmet om sådan at at cirklen står stille nede i nederste 
   højre hjørne, og sørg for at den virker som "affyringsknap",
   sådan at når man trykker på den, så skydes der en anden figur 
   (cirkel, trekant eller hvad du nu synes) afsted fra bunden og
   opad i en tilfældig vinkel. Det vil sige, at du inde i 
   mouseClicked()-funktionen må teste, om musen er over knappen
   eller ej, når der klikkes (brug dist() som før), og du må sørge
   for at give figuren en fornuftig hastighed. Skriv i toppen af
   canvas hvor mange figurer du har skudt af
   
5) Find selv på andre ting, du kan gøre med museklik og knapper i
   din sketch

*/