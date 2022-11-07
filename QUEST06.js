const element1 = ['hydrogen', 'H', 1.008];
const element2 = ['helium', 'He', 4.003] ;
const element26 = ['iron', 'Fe', 55.85];
const table=[element1,element2,element26];
console.log(table);
console.log('show table[1] : '+table[1]);
console.log('Reason : table[1] show all elements in the second row (second row contains the element of seconf array.)')
console.log('show table[1][1] : '+table[1][1]);
console.log('Reason : table[1][1] show the second element in the second row row (second row contains the element of second array.)')
 
console.log('mass of the element1 is : '+table[0][2]);
console.log('name of the element2 is : '+table[1][0]);
console.log('symbol of the element26 is : '+table[2][1]);
