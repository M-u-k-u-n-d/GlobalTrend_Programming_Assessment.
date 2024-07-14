function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 !== 0);
}

const arrayWithEvenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbersArray = filterEvenNumbers(arrayWithEvenNumbers);
console.log(oddNumbersArray);