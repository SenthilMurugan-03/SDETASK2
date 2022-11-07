//1.
let people = ["Greg", "Mary", "Devon", "James"];
for(let i=0;i<people.length;i++){
  console.log(people[i]);
}
/*
console.log(foreach(people));
*/
//2.
people.shift();
//3.
people.pop();
//4.
people.unshift("Matt");
//5.
people.push('senthil');
//6.
for(let i=0;i<people.length;i++){
  console.log(people[i]);
  if(people[i]=="Mary"){
    break;
  }
}
//7.
let copyar=people.slice(2);
console.log('copied array : '+copyar);
//8.
console.log("The location of mary is : "+(people.indexOf('Mary')));
//9.
console.log("The location of mary is : "+(people.indexOf('Foo')));
//10.
people.splice(people.indexOf('Devon'),1,"Elizabeth" ,"Artie");
console.log(people); 
//11.
let withBob=people.concat('Bob');
console.log(withBob);

