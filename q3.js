function primeNumber(a) {
    if (a <= 1) {
        return "No";
    }
    
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return "No";
        }
    }
    return "Yes";
    
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1)); 
console.log(primeNumber(d2)); 
console.log(primeNumber(d3)); 

module.exports = primeNumber;