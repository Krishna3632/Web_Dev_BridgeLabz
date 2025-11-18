let temperature=36,humidity=72,windSpeed=12;
let r=temperature>35&&humidity>70?"Cancel Heat":temperature<10||windSpeed>40?"Cancel Cold/Windy":"Approved";
let t=temperature<20?"Wear Jacket":temperature<=30?"Comfortable":"Stay Hydrated";
console.log(r,t);