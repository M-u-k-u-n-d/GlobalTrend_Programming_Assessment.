function capitalizeWords(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

const inputString = "hello world! this is a test.";
const capitalizedString = capitalizeWords(inputString);
console.log(capitalizedString); 