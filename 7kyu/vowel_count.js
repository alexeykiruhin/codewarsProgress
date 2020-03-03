function getCount(str) {
  var vowelsCount = 0;

  str = str.split('')

  let out = str.filter(function(item, index, array) {
    switch(item) {
    case 'a':
            return true;
            break;
    case 'e':
            return true;
            break;
    case 'i':
            return true;
            break;
    case 'o':
            return true;
            break;
    case 'u':
            return true;
            break;
  }
});
  vowelsCount += out.length;

  return vowelsCount;
}

// BEST practice
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }
