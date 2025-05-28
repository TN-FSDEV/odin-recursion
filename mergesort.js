function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.ceil(arr.length / 2);
    const mergeSortLeft = mergeSort(arr.slice(0, mid));
    const mergeSortRight = mergeSort(arr.slice(mid));

    let result = [];
    while (mergeSortLeft.length > 0 && mergeSortRight.length > 0) {
        let sortedElement;
        if (mergeSortLeft[0] < mergeSortRight[0]) {
            sortedElement = mergeSortLeft.splice(0, 1);
        } else {
            sortedElement = mergeSortRight.splice(0, 1);
        }
        result = result.concat(sortedElement);
    }
    console.log("This is the result after the while loop:", result);
    console.log("First Half after the while loop:", mergeSortLeft);
    console.log("Second Half after the while loop:", mergeSortRight);
    result = (mergeSortLeft.length > 0) ? result.concat(mergeSortLeft) : result.concat(mergeSortRight);
    console.log("This is the final result:", result);
    console.log("--------------------------");
    return result;
}

// console.log(mergeSort([34, 7, 23, 32, 5, 62])); // [ 5, 7, 23, 32, 34, 62 ]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
// console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]

