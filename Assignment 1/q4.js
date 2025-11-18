let marks=[85,72,90,33,48];
let sum=0,fail=0;
for(let m of marks){sum+=m;if(m<40)fail++;}
let avg=sum/marks.length;
let g=avg>=90?"A+":avg>=75?"A":avg>=60?"B":avg>=40?"C":"Fail";
if(fail>=2)console.log("Repeat Year");else console.log(g);