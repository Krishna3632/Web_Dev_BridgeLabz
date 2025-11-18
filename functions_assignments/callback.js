function print(message) {
    console.log(message);
}

function greet(name, callback) {
    const message = `Hello, ${name}! Welcome aboard.`;
    callback(message);
}


function applyOp(nums,operation){
    if (operation === "square"){
        return nums.map(n => n * n);
    }
    else if (operation === "double"){
        return nums.map(n => n * 2);
    } 
}

function opArray(nums, operation, callback){
    const result = applyOp(nums, operation);
    print(result);
}

opArray([1, 2, 3, 4], "double", print);
greet("Alice", print);