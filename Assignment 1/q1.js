let orderAmount=420,isPremium=false,isRemote=true;
let deliveryFee=orderAmount<500&&!isPremium?50:0;
let days=3+(isRemote?2:0);
let total=orderAmount+deliveryFee;
console.log(total,days);