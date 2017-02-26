let meetings = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

let meetingsBaseCase = [{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}];

const mergeRanges = (meetings) => {
  // if we only have one meeting
  if (meetings.length === 1){
    return meetings;
  }
  // OTHERWISE:
  // sort by starting time o(n lg n) - worst case
  const sortedMeetings = meetings.sort((a,b) => {
    return a.startTime > b.startTime;
  });
  // now we need to make one pass through merging the meetings o(n)
  // greedy approach
  // we now the first in the array will be the first since we sorted it
  let mergedMeetings = [sortedMeetings[0]];
  // our current index in our meeting array
  let mIndex = 0;
  // starting at one because we already know the first one
  for (let i = 1, length = meetings.length; i < length; i++) {
    // if the next startTime is greater than our endTime, we dont overlap
    if (meetings[i]['startTime'] > mergedMeetings[mIndex]['endTime']) {
      // add the current meeting because it doesnt overlapp
      mergedMeetings.push(meetings[i]);
      // increment our index so we know the check the new meeting
      // against the next one
      mIndex++;
    } else { // overlapping case
      // start time is less than it so it overlaps, check end time
      // if the end time is more than the current end time, replace it
      mergedMeetings[mIndex]['endTime'] = meetings[i]['endTime'];
    }
  }
  return mergedMeetings;
};

console.log(mergeRanges(meetings));
