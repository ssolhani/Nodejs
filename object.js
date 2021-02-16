var member = ['hs','mh','lee'];
console.log(member[1]);
var i = 0;
while(i < member.length){
  console.log('array loop', member[i]);
  i= i + 1;
}

var roles = {
  'programmer':'hs',
  'designer':'mh',
  'manager':'lee'
}
console.log(roles.designer);
console.log(roles['designer']);

for(var name in roles){
  console.log('object =>', name,'value => ' , roles[name]);
}
