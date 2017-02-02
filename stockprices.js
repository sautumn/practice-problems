// Suppose we could access yesterday's stock prices as an array, where:
//
// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500;.
//
// Write an efficient function that takes stockPricesYesterday
// and returns the best profit I could have made from 1 purchase and 1 sale
// of 1 Apple stock yesterday.

var stockPrices = [10, 7, 5, 8, 11, 9];
var stockPrices2 = [14, 1, 5, 8, 11, 1];
var stockPrices3 = [14, 13, 12, 11, 1];

const stockPricesYesterday = (array) => {
  let profit = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      let sum = array[j] - array[i];
      if (sum > profit) {
        profit = sum;
      }
    }
  }
  return profit;
};

const assert = (condition, expected, errorMessage) => {
  return condition === expected ? console.log('Test passed') : console.log(errorMessage);
};

assert(stockPricesYesterday(stockPrices), 6, 'Should equal 6');
assert(stockPricesYesterday(stockPrices2), 10, 'Should equal 10')
assert(stockPricesYesterday(stockPrices3), 0, 'Should equal 10')
