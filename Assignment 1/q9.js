let delays=[2,7,12,6],count=delays.length;
let fine=0;
for(let d of delays){fine+=d<=5?d*10:d<=10?d*20:d*50;}
if(count>3)fine+=200;
console.log(fine);