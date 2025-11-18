let n=Math.floor(Math.random()*100)+1;
let msg=n<=30?"10%":n<=60?"20%":n<=90?"30%":"50% Mega Offer";
function isPrime(x){if(x<2)return false;for(let i=2;i*i<=x;i++)if(x%i===0)return false;return true;}
if(isPrime(n))msg+=" + Prime bonus";
console.log(n,msg);