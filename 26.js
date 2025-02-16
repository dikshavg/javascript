let tp=3500,sp=7000;
let profit,vat,tax;
tax=sp/10;//(10/100)*sp;
vat=sp/20;
sp=sp-(tax+vat);
profit=sp-tp;
console.log("Profit is:"+profit);
