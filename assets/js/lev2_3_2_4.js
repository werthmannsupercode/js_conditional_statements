console.log("hi")

// Lev2_3


function diff(a) {
    if (a > 27) {
        let case1 = (a - 27) * 2;
        return case1;
    }

    else if (a <= 27) {
        let case2 = a - 27;
        return case2;
    }
}
let result = diff(35);
console.log(result);
let result2 = diff(74);
console.log(result2);
let result3 = diff(140);
console.log(result3);

// Lev2_4

function sum(a, b) {
    if (a == b) {
        let sum = (a + b) * 5;
        return sum;
    }

    else {
        let sum = a + b;
        return sum;
    }
}

let result4 = sum(12, 54);
console.log(result4);
let result5 = sum(34, 34);
console.log(result5);
let result6 = sum(57, 9);
console.log(result6);