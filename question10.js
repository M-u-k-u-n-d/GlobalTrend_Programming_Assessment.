function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function (match) {
        return match.toUpperCase();
    });
}

let inputString = "hello world";
let titleCaseString = toTitleCase(inputString);
console.log(titleCaseString); 
