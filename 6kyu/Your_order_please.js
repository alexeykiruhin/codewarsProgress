function order(words){
  let arr = words.split(' ');
  let out = [];
  arr.map((e, key) => {
    let cnt = arr[key].match(/[0-9]/gi);
    out[cnt-1] = arr[key];
  });
  return out.join(' ');
}

// BEST practice
// function order(words){
//
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }
