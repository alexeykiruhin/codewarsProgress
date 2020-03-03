function friend(friends){
  let out =[];
  friends.map((item) => {item.length == 4 ? out.push(item): out});
  return out;
}


// BEST practice
// function friend(friends){
//   return friends.filter(n => n.length === 4)
// }
