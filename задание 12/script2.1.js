var temperature = 20;
var isRaining = true;
var minutes = 0;

if (!isRaining) {
  if (10 <= temperature && temperature < 15) {
    minutes = 30;
  } else if (15 <= temperature && temperature < 25) {
    minutes = 40;
  } else if (25 <= temperature && temperature <= 35) {
    minutes = 20;
  }
} else {
  minutes = 0;
}
