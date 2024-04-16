let score = "33abc"
let s=null
let a=undefined
let b=true

console.log(typeof(score));

let valueInNumber = Number(score)
let valueInNull = Number(s)
let valueInUndefined = Number(a)
let valueInboolean = Number(b)


console.log(typeof(valueInNumber));
console.log(valueInNumber);

console.log(typeof(valueInNull));
console.log(valueInNull);

console.log(typeof(valueInUndefined));
console.log(valueInUndefined);

console.log(typeof(valueInboolean));
console.log(valueInboolean);

//Notes
// confusion in javascript using Number conversion function 
//"33" => 33(type=number)
//"33abc" => NaN(type=number)
//"undefined" =>NaN(type=number)
//"null" => 0(type=number)
//"bollean"=> true=>1,false=>0(type=number)


//confusion in java script
/* All datypes are converted in to  number using Number function
but actual value is not a number in all casses */

/* For boolean convesion function*/

//1=>true ,0=>false
//""=> false
//"sathya" => true



//********************operations ******* */


