let number = 4936;
let onesPlace = number % 10;
let tensPlace = ((number - onesPlace) / 10) % 10;
let hundredsPlace = ((number - onesPlace - (10 * tensPlace)) / 100) % 10;
let thousandsPlace = ((number - onesPlace - (10 * tensPlace) - (100 * hundredsPlace)) / 1000) % 10;

console.log(`${thousandsPlace}${hundredsPlace}${tensPlace}${onesPlace}`);