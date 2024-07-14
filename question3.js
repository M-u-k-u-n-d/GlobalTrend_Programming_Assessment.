function flattenArray(nestedArray) {
    let flattenedArray = [];

    function flatten(element) {
        if (Array.isArray(element)) {
            for (let item of element) {
                flatten(item);
            }
        } else {
            flattenedArray.push(element);
        }
    }

    flatten(nestedArray);

    return flattenedArray;
}

const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
const result = flattenArray(nestedArray);
console.log(result); 
