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

//brute force approach
const stockPricesYesterday = (array) => {
  let profit = null;
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      let sum = array[j] - array[i];
      if (sum > profit) {
        profit = sum;
      } else {
        if (profit === null || profit < sum) {
          profit = sum;
        }
      }
    }
  }
  return profit;
};

// one pass thru 0(n)
const betterStockPriceYesterday = (stocks) => {
  // if one item or if none, profit is 0
  if (stocks.length === 1 || stocks.length === 0){
    return 0;
  }
  // stocks with a length of 2 or greater...
  let min = null;
  let maxProfit = null;
  for (var i = 1; i < stocks.length; i++) {
    //set min if number is less than
    if (stocks[i-1] < min || min === null) {
      min = stocks[i-1];
    }
    let currProfit = stocks[i] - stocks[i-1];
    //if the current profit is greater than the max or it hasnt been set
    let olderProfit = stocks[i] - min;
    if (maxProfit < currProfit || maxProfit === null) {
      maxProfit = currProfit;
    } else {
      if (olderProfit > maxProfit) {
        maxProfit = olderProfit;
      }
    }
  }
  return maxProfit;
};

const assert = (condition, expected, errorMessage) => {
  return condition === expected ? console.log('Test passed') : console.log(errorMessage);
};

// brute force tests
assert(stockPricesYesterday(stockPrices), 6, 'Should equal 6');
assert(stockPricesYesterday(stockPrices2), 10, 'Should equal 10');
assert(stockPricesYesterday(stockPrices3), -1, 'Should equal -1');

// better solution approach 0(n)
assert(betterStockPriceYesterday(stockPrices), 6, 'Should equal 6');
assert(betterStockPriceYesterday(stockPrices2), 10, 'Should equal 10');
assert(betterStockPriceYesterday(stockPrices3), -1, 'Should equal -1');
