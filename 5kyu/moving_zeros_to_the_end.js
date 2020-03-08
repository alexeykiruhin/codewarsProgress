var moveZeros = function (arr) {
  const first = [];
  const last = [];
  arr.map(e => {
    if(e === 0) {
      last.push(e);
    } else {
      first.push(e);
    }
  });
  first.push(...last);
  return first;
}

// BEST practice
// var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }
