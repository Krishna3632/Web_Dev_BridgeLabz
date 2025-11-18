let showTime="evening",numTickets=4,ageCategory="student";
let price=showTime==="morning"?120:180;
let base=price*numTickets;
let d=ageCategory==="student"?0.1:ageCategory==="senior"?0.2:0;
let after=base-base*d;
let fee=numTickets>3?50:0;
console.log(after+fee);