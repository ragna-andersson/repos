// Hittar ribrik med ID. Sen byer den ut texten där i mot den nedan (i InnerHTML):
document.getElementById("hej").innerHTML = "Ragnas häst";


// HUR MAN GÖR MALL/VARIABEL:
// Här är tre mallar som läses in efter varandra.
// första mallen letar upp rätt ID (Skottkärra)
var HittaRubrikenJagHarGettNamnet = document.getElementById("skottkärra");
// andra mallen säger bara att det finns en text med dena info:
var MallMedDennatexten = "Skottkärrans kärra x";
// tredje mallen säger bara en siffra
var läggaTillSiffraPåText = 2;

// Här testar vi mallarna efter varandra.
// Hitta rätt ställe. Action: byta ut (innerHTML). Vad? Jo = text + siffra
HittaRubrikenJagHarGettNamnet.innerHTML = MallMedDennatexten + läggaTillSiffraPåText;

//Mall till dikt
var kväde = "(Hav fördrag med min vers. Jag kostar ej på dig så många!).";
var kväde2 = "Stor är du bliven i truten när fram du som krigare träder.";

//HÄR TESTAR VI EVENTLISTENER/
//leta upp Id med namn knapp1. Lyssna på knappen (addEventlistner). (Här börjar eventet. När knappen klickas (klick) då ska du (,) göra funktion. 
//Måsvingen beräattar att det är en grupp
document.getElementById("knapp1").addEventListener("click", function () {
   //gå till dokument, hitta ID Dikt. Byt ut text. Till "xxx". lägg till (+) siffran 2
   document.getElementById("dikt").innerHTML = kväde + "<br>" + "Störes det äktsvenska sinnet till andakt och ro och vila.";
   // Här slutat eventet) Måsvingen berättar att det är slut på funktionsgrupp. ; slut på hela skiten
});

//HÄR TESTAR VI EVENTLISTENER FAST MED EN MALL FÖR NAMNET; INTE FUNTIONEN
//Mall hittaKnapp letar upp Id med namn knapp2.
var hittaKnapp = document.getElementById("knapp2");
//Lyssna på knappen (addEventlistner). (Här börjar eventet. När knappen klickas (klick) då ska du (,) göra funktion. 
//Måsvingen beräattar att det är en grupp
hittaKnapp.addEventListener("click", function () {
   //gå till dokument, hitta ID Dikt. Byt ut text. Till "xxx". lägg till (+) siffran 2
   document.getElementById("dikt2").innerHTML = kväde2 + "<br>" + "Måtte det unnas dig leva till dess du har lärt dig att blöda.";
   // Här slutat eventet) Måsvingen berättar att det är slut på funktionsgrupp. ; slut på hela skiten
});


//NINAS KOD IF FUNKTION  
var firstHeading = document.getElementsByClassName("hello")[0];
var myButton = document.getElementById("button");
var myText = "Hello World x";
var myNumber = 2;

function changeTheText1() {
   firstHeading.innerHTML = myText + myNumber;
}

function changeTheText() {
   //OM första rubrikens, text är exakt lika med "hello World"
   if (firstHeading.innerHTML == "Hello World!") {
      //då ska texten ändras till = mall myText + mall myNumber
      firstHeading.innerHTML = myText + myNumber;
   }
   // OM ovanstående inte stämmer. Ändra istället till:
   else {
      firstHeading.innerHTML = "Texten stämde inte överens med Hello World! så jag ändrar den till detta istället";
   }


}

myButton.addEventListener("click", changeTheText);