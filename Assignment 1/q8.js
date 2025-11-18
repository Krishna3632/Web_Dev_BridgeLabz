let rating=4,exp=6,salary=120000;
let bonus=rating===5?0.2:rating===4?0.15:rating===3?0.1:0;
if(exp>5)bonus+=0.05;
let val=salary*bonus;
if(val>25000)val=25000;
console.log(val,(salary+val));