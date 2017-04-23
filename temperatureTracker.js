// You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
// Write a class TempTracker with these methods:
//
// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns a mode ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.
//
// Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.
//
// If there is more than one mode, return any of the modes.


const TemperatureTracker = function(){
  //storage data
  this.temperatures = {};
  //min max data
  this.max = null;
  this.min = null;
  //mode data
  this.mode = null;
  this.currentMode = null;
  //average data
  this.total = 0;
  this.length = 0;
};

//helper to update min/max
TemperatureTracker.prototype._updateMinMax = function(value){
  if (this.max < value || !this.max) {
    this.max = value;
  }
  if (this.min > value || !this.min) {
    this.min = value;
  }
};

//helper to update mode
TemperatureTracker.prototype._updateMode = function(count, value){
  if (!this.mode) {
    this.mode = count;
    this.currentMode = value;
  } else {
    if (this.mode < count) {
      this.mode = count;
      this.currentMode = value;
    }
  }
};

//helper to update average
TemperatureTracker.prototype._updateAverage = function(value){
  this.length++;
  this.total += value;
  this.average = value/this.length;
}

TemperatureTracker.prototype.insert = function(value){
  // use helper function to update our max/min
  this._updateMinMax(value);
  this._updateAverage(value);
  if (!this.temperatures[value]) {
    this.temperatures[value] = 1;
  } else {
    this.temperatures[value] += 1;
  }
  this._updateMode(this.temperatures[value], value);
  console.log(`${value} inserted in to the TemperatureTracker`);
  return value;
};


TemperatureTracker.prototype.getMax = function(){
  return this.max;
};

TemperatureTracker.prototype.getMin = function(){
  console.log('Current min: ' + this.min)
  return this.min;
};

TemperatureTracker.prototype.getMode = function(){
  console.log('Current mode: ' + this.currentMode)
  return this.currentMode;
};

TemperatureTracker.prototype.getMean = function(){
  console.log('Current Average: ' + this.total / this.length)
  return this.total / this.length;
};

const tempTrack = new TemperatureTracker();
tempTrack.insert(76);
tempTrack.insert(35);
tempTrack.insert(80);
tempTrack.insert(99);
tempTrack.insert(99);
tempTrack.getMin();
tempTrack.getMean();
tempTrack.getMode();

// console.log(tempTrack)
