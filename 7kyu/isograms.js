function isIsogram(str){
  str = str.toLowerCase();
  const arr = str.split('');
  let cnt = 0;
  arr.map((e, key) => {
    for(let i = 0; i < str.length; i++) {
      if(e == str[i]) {
        console.log(e + ' + ' + str[i]);
        cnt++
      }
    }

  });
  if(cnt == str.length){
    return true;
  }else{
    return false;
  }
}


// BEST practice
// function isIsogram(str){
//   return !/(\w).*\1/i.test(str)
// }
