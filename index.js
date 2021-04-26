
/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

// My Code

let usbigMacPrice = 5.66
let chfswissBigMacPrice = 6.50 
let cadBigMacPrice = 6.77
let norBigMacPrice = 52
let sweBigMacPrice = 52.88
let azerBigMacPrice = 3.95

// - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56

let impliedPPPUsSwiss = usbigMacPrice / chfswissBigMacPrice
let impliedPPPUsCad = usbigMacPrice / cadBigMacPrice
let impliedPPPUsNor = usbigMacPrice / norBigMacPrice
let impliedPPPUsSwe = usbigMacPrice / sweBigMacPrice
let impliedPPPUsAzer = usbigMacPrice / azerBigMacPrice

console.log("Implied Purchasing Power Parity US-SWISS:", impliedPPPUsSwiss)
console.log("Implied Purchasing Power Parity US-CAD:", impliedPPPUsCad)
console.log("Implied Purchasing Power Parity US-NOR:", impliedPPPUsNor)
console.log("Implied Purchasing Power Parity US-SWE:", impliedPPPUsSwe)
console.log("Implied Purchasing Power Parity US-AZER:", impliedPPPUsAzer)

let compareUsSwiss = ((0.91- impliedPPPUsSwiss) * impliedPPPUsSwiss)*100
let compareUsCad = ((1.24- impliedPPPUsCad) * impliedPPPUsCad)*100
let compareUsNor = ((8.29- impliedPPPUsNor) * impliedPPPUsNor)*100
let compareUsSwe = ((8.39- impliedPPPUsSwe) * impliedPPPUsSwe)*100
let compareUsAzer = ((1.7- impliedPPPUsAzer) * impliedPPPUsAzer)*100

console.log("Compare Exchange US-SWISS:", compareUsSwiss)
console.log("Compare Exchange US-CAD:", compareUsCad)
console.log("Compare Exchange US-NOR:", compareUsNor)
console.log("Compare Exchange US-SWE:", compareUsSwe)
console.log("Compare Exchange US-AZER:", compareUsAzer)

console.log("Is IPPP of Azerbaijan higher than Sweden?", impliedPPPUsAzer > impliedPPPUsSwe)
console.log("Is IPPP of Sweden higher than Canada?", impliedPPPUsSwe > impliedPPPUsCad)
console.log("Is IPPP of Switzerland higher than Azerbaijan?", impliedPPPUsSwiss > impliedPPPUsAzer)
console.log("Is IPPP of Canada higher than Norway?", impliedPPPUsCad > impliedPPPUsNor)