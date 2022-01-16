
// eslint-disable-next-line func-style
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN > toN) {
    return 0; //stop the recursion
  }
  let accumulator = fromN;
  accumulator += sum(fromN + 1, toN); //recursive call
  return accumulator;
}



module.exports = sum;