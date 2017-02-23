//<!-- Matrix Sum ->
// find the max sum where each element is the only one in its row and column

//  7      53    183    439   863x
// 497    383x    563    79    973
// 287    63     343x    169   583
// 627    343    773    959x   943
//767x    473    103    699   303
// -->

var board = [
  [7,  53, 183, 439, 863],
  [497, 383, 563,  79, 973],
  [287, 63, 343, 169, 583],
  [627, 343, 773, 959, 943],
  [767, 473, 103, 699, 303]
];
//
// var board = [
//   [9,10, 1],
//   [8,3, 1],
//   [1,1,1]
// ];

var answerBoard1 = 3315;

var board2 = [
  [7, 53, 183, 439, 863, 497, 383, 563, 79, 973, 287, 63, 343, 169, 583],
  [627, 343, 773, 959, 943, 767, 473, 103, 699, 303, 957, 703, 583, 639, 913],
  [447, 283, 463,  29,  23, 487, 463, 993, 119, 883, 327, 493, 423, 159, 743],
  [217, 623,   3, 399, 853, 407, 103, 983,  89, 463, 290, 516, 212, 462, 350],
  [960, 376, 682, 962, 300, 780, 486, 502, 912, 800, 250, 346, 172, 812, 350],
  [870, 456, 192, 162, 593, 473, 915,  45, 989, 873, 823, 965, 425, 329, 803],
  [973, 965, 905, 919, 133, 673, 665, 235, 509, 613, 673, 815, 165, 992, 326],
  [322, 148, 972, 962, 286, 255, 941, 541, 265, 323, 925, 281, 601,  95, 973],
  [445, 721,  11, 525, 473,  65, 511, 164, 138, 672,  18, 428, 154, 448, 848],
  [414, 456, 310, 312, 798, 104, 566, 520, 302, 248, 694, 976, 430, 392, 198],
  [184, 829, 373, 181, 631, 101, 969, 613, 840, 740, 778, 458, 284, 760, 390],
  [821, 461, 843, 513,  17, 901, 711, 993, 293, 157, 274,  94, 192, 156, 574],
  [34, 124,   4, 878, 450, 476, 712, 914, 838, 669, 875, 299, 823, 329, 699],
  [815, 559, 813, 459, 522, 788, 168, 586, 966, 232, 308, 833, 251, 631, 107],
  [813, 883, 451, 509, 615,  77, 281, 613, 459, 205, 380, 274, 302,  35, 805]
];

var answerBoard2 = 13938;

function findMatrixSum(board) {
  var saved =[];

  const boardDecisionTree = (board, row, values) =>{
    if (board[row] === undefined) {
      // console.log(values, 'row:',row);
      // console.log(values.length)
      if (values.length === board.length){
        values = values.reduce( (a,b) => {
          return a+b;
        });
        saved.push(values);
        return;
      }
      return;
    }
    for (var col = 0; col < board[row].length; col++) {
      let currNum = board[row][col];
      if (checkCol(board, col)) {
        //no 'collisions'
        values.push(currNum);
        board[row][col] = false;
        // console.log(board)
        boardDecisionTree(board, row+1, values);
        board[row][col] = currNum;
        // reset values back to original
        // for next path down decision tree
        values = [];
      }
    }
  }

  function checkCol(board, col){
    for (var i = 0; i < board.length; i++) {
      if (!board[i][col]) {
        return false;
      }
    }
    return true;
  }

  boardDecisionTree(board, 0, []);
  // console.log(saved);
  console.log(Math.max(...saved));
  return Math.max(...saved);

}



// Tests
console.log(findMatrixSum(board) === answerBoard1);
// console.log(findMatrixSum(board) === answerBoard2);
