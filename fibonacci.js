function fibs(n) {
    const arr = [];
    for (let i = 0; i < n; i += 1) {
        if (i < 2) {
            arr.push(i);
        } else {
            arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        }
    }
    return arr;
}

function fibsRec(n, i = 0, list = []) {
    // console.log("This was printed recursively");

    if (i === n) {
        return list;
    } else if (i < 2) {
        list.push(i);
        return fibsRec(n, i + 1, list);
    } else {
        list.push(list[list.length - 2] + list[list.length - 1]);
        return fibsRec(n, i + 1, list);
    }
}

function cleanerFibsRec(n, list = [0, 1]) {
    // console.log("This was printed recursively");

    if (list.length >= n) {
        return list.slice(0, n); // in case n = 1
    }

    let nextVal = list[list.length - 1] + list[list.length - 2];
    list.push(nextVal);
    return cleanerFibsRec(n, list);
}

// console.log(fibs(8));
console.log(fibsRec(8));
// console.log(cleanerFibsRec(8));

// console.log(fibs(15));
// console.log(fibsRec(15));
// console.log(cleanFibsRec(15));