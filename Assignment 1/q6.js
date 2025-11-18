let level=10,performanceScore=60,missionsCompleted=true;
let coins=level*50+performanceScore*10;
if(missionsCompleted)coins*=2;
let rank=coins>1000?"Elite":"Regular";
console.log(coins,rank);