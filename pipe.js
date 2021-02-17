const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

// individual functions to be used
const multiplyByTen = array => array.map(num => {
    if (num < 10){
        return num *10;
    }
    return num;
});

const removeHighScores = array => array.filter(num => num <= 100);

const aboveZero = array => array.filter(num => num > 0);

const totalScores = array => array.reduce((prev, next) => prev += next, 0);

// Construction of a Pipe function
const pipe = function(...funcArray){
  return function(firstArg){
      return funcArray.reduce(function(prevOutput, nextFunc){
          return nextFunc(prevOutput);
      }, firstArg);
  }
};

// Compose the 4 above functions into one reusable function using our new pipe
const totalAllScores = pipe(
    multiplyByTen,
    removeHighScores,
    aboveZero,
    totalScores);

// Using the new complex reusable function
console.log(totalAllScores(scores));

