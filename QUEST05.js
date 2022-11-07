let str='In space, no one can hear you code.';
console.log("split() : "+str.split());
console.log("split('e') : "+str.split('e'));
console.log("split('') : "+str.split(''));
console.log("split(' ') : "+str.split(' '));

let arr = ['B', 'n', 'n', 5];
console.log("join() : "+arr.join());
console.log("join('a') : "+arr.join('a'));
console.log("join(' ') : "+arr.join(' '));
console.log("join('') : "+arr.join(''));

let str1='bnn1';
let ar1=str1.split('');
str1=ar1.join('a');
console.log('After Modify : '+str1);

let con="water,space suits,food,plasma sword,batteries";
const ar=con.split(',');
ar.sort();
console.log('After combined : '+ar.join(' '));
