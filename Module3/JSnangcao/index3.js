let sumArray = (arr) => {
    let sum = arr.reduce(
        (sum1, item) => {
            return sum1 + item;
        }
    )
}

let array = [1, 4, 5, 6, 7];
let sum = sumArray(array);
console.log(sum);