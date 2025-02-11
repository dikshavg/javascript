let a=+prompt("enter the elements");
let b=+prompt("enter the elements");
let c=+prompt("enter the elements");


var res=(a>b && a>c) && "a is Max"||  (b>a && b>c) && "b is Max"||"c is Max";
console.log(res);