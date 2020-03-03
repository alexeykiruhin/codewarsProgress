function solution(number){
let out = 0;
  for(let i=0; i < number; i++) {
    if(i%3 == 0) {
      out += i;
    }else if(i%5 == 0) {
      out += i;
    }
  }
  return out;
}

// BEST practice
// function solution(number){
//   var sum = 0;
//
//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }
