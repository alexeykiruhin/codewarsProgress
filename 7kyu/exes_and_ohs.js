function XO(str) {
    //code here
    let arrStr = str.toLowerCase().split('');
    let x = 0;
    let o = 0;
    arrStr.filter((item) => {
      switch(item) {
        case 'x':
          x++;
          break;
        case 'o':
          o++;
          break;
      }
    });
    return x == o;
}


// BEST practice
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
