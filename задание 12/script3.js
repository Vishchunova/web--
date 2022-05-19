var time = 14;

var goToDairy = false;
var goToStore = false;
var goToMarket = false;

if (time >= 8 && time < 19) {
  goToDairy = true;
    if (time >= 13 && time < 14) {
     goToDairy = false;
     }
  }
if (time >= 9 && time < 17) {
  goToStore = true;
   if (time >= 14 && time < 15) {
     goToStore = false;
     }
  }
if (time >= 7 && time < 20) {
  goToMarket = true;
  }
  
if (goToDairy == true) {
  goToStore = false;
  goToMarket = false;
  }
if (goToDairy == false && goToStore == true) {
  goToMarket = false;
  }


console.log(goToDairy, goToStore, goToMarket)


