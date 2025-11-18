let baseCost=2500,dining=true;
let gst=baseCost*0.05;
let service=dining?baseCost*0.1:0;
let subtotal=baseCost+gst+service;
let tip=subtotal>2000?subtotal*0.08:0;
let total=subtotal+tip;
console.log(total.toFixed(2));