/*
Denne kode og forløbet som helhed er inspireret af 
Daniel Shiffman på Youtube-kanalen "The Coding Train"
samt af Simon Moes tilpasning heraf til htx på Slotshaven
*/

var x = 120;
var xSpeed = 3;
var radius = 40;
function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(255,204,0);
    fill('#af9');
    noStroke();
    ellipse(x, 180, 2*radius, 2*radius);
    if (x > 640-radius) {xSpeed = -xSpeed;}
    if (x < radius) {xSpeed = -xSpeed;}
    x += xSpeed;
}

/*
OPGAVER:

Her har vi indført en variabel, x, som vi erklærer og giver værdi
i linje 7. Vi bruger variablen ved tegning af cirklen, og vi ændrer
den lidt, hver gang vi løber draw()-funktionen igennem.

1) Prøv at ændre værdien af x i linje 7, samt værdien der lægges
   til x i linje 18. Kan du få cirklen til at bevæge sig mod 
   venstre i stede for mod højre?
   
2) Lav en ny variabel, var xSpeed = 1 , oppe i linje 8.
   Brug den i stedet for tallet i linje 18 (måske linje 19 nu).
   Virker det stadig? Prøv at ændre værdien i linje 8 nu, ligesom du
   gjorde før.
   
Men vi vil gerne have cirklen til at blive på skærmen. Det betyder, 
at vi skal ændre hastigheden, når cirklen rammer højre side af
canvasset (xSpeed skal være positiv)
Det gør vi ved at indsætte denne linje umiddelbart før vi opdaterer værdien af x, altså lige før linje 18 i den oprindelige kode:
  if (x > 640) {xSpeed = -xSpeed;}
Gør det, og gem. Virker det? Det var derfor, vi lavede xSpeed som
en variabel i stedet for et fast tal. 

Kommandoen i de krøllede klammer udføres kun, hvis betingelsen i 
parentesen er opfyldt.

3) Få cirklen til også at blive inden for canvas i venstre side. 
   Hvilken betingelse skal da opfyldes?
   
4) Lav to nye variable, y og ySpeed, og brug dem til at få cirklen
   til også at bevæge sig op og ned i vinduet
   
5) Lav nogle variable der ændrer farven på cirklen, når den bevæger
   sig. Det er nemmest at styre hvis fill får parametre på formen 
   fill(r, g, b) eller fill(r, g, b, a)
   
6) Det ser dumt ud at cirklen kommer halvt ud af skærmen før den
   vender om. Ret det. Prøv at undgå at bruge tal, lav variabler, 
   der rummer de relevante værdier og brug dem hvor du kan.

*/