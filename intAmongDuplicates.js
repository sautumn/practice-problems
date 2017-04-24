// Your company delivers breakfast via autonomous quadcopter drones. And something
// mysterious has happened.
//
// Each breakfast delivery is assigned a unique ID, a positive integer. When one
// of the company's 100 drones takes off with a delivery, the delivery's ID is
// added to an array, deliveryIdConfirmations. When the drone comes back and
// lands, the ID is again added to the same array.
//
// After breakfast this morning there were only 99 drones on the tarmac. One of
// the drones never made it back from a delivery. We suspect a secret agent from
// Amazon placed an order and stole one of our patented drones. To track them down,
// we need to find their delivery ID.
//
// Given the array of IDs, which contains many duplicate integers and one unique
// integer, find the unique integer.

// array of delivery IDs
// same id is added when the drone returns
// need to find the one none dupe among the array

//step through the array and add all them to a hash table
//makes it so we have to go thru all items
//sorting would be nice but would take longer than n
//unless we used radix sort or something but still risking +n operations

//hash table way: add each item to the hash table, once its added twice its value
//is true, at the end if its false then we know we have a dupe
//we could also just remove it from the hash table once its in there twice
// at the end we should only have the one value left

function findTheDrone(array) {
  return array.reduce((a,b) => {
    return a ^= b;
  });
}

console.log(findTheDrone([1,2,4,5,5,4]));
