function findOutlier(integers){
  //your code here
  let odd = [];
  let even = [];
  integers.map(e => {
    if(e % 2 == 0){
      even.push(e);
    }else{
      odd.push(e);
    }
  });
  let out;
  if(even.length > odd.length){
    out = odd[0];
  }else{
    out = even[0];
  }
  return out;
}

// BEST practice
// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }
