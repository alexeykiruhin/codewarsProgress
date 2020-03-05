function isValidWalk(walk) {
  //insert brilliant code here
  const startPoint = {n:0, s:0, w:0, e:0};
  const endPoint = {n:0, s:0, w:0, e:0};
  let out;
  if(walk.length == 10 ) {
    walk.map(e => {
      switch(e) {
        case 'n':
          endPoint.n++;
          endPoint.s--;
          break;
        case 's':
          endPoint.n--;
          endPoint.s++;
          break;
        case 'w':
          endPoint.w++;
          endPoint.e--;
          break;
        case 'e':
          endPoint.e++;
          endPoint.w--;
          break;
      }
    });
    return JSON.stringify(startPoint)===JSON.stringify(endPoint);
  } else {
    return false;
  }
}

// BEST practice
// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length
//
//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
//
//   return dt === 10 && dx === 0 && dy === 0
// }
