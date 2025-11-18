let accountType="fixed deposit",amount=150000,years=3;
let rate=accountType==="savings"?4:6.5;
if(amount>100000)rate+=1;
let total=amount*Math.pow(1+rate/100,years);
console.log(total.toFixed(2));