function solution(str){
   let arr = str.split('');
   if(arr.length % 2 !== 0) {
      arr.push('_');
   }
   let out = new Array(arr.length/2);
   out.fill('');
   for(let i = 0; i < out.length; i++) {
    for(let n = 0; n < 2; n++) {
      out[i] += arr.shift()
    }
   }
   return out;
}

// BEST practice
// function solution(str) {
//   return (str.length % 2 ? str + '_' : str).match(/../g);
// }
