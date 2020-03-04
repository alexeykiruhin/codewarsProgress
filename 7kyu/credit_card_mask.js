function maskify(cc) {
  const arr = cc.split('');
  end = arr.splice(-4);
  arr.map((e,key) => {arr[key] = '#'});
  const masked = [...arr, ...end].join('');
  return masked;
}

// BEST practice
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }
