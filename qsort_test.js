var { qsort } = require("./qsort");

function generateList(size) {
    var arr = [];
    while (size-- > 0) {
        arr.push(parseInt(Math.random() * size));
    }
    return arr;
}

function compareArrays(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }

    return arr1.length == arr2.length;
}

function benchmark(fn, text) {
    var d = new Date();
    fn();
    var t = new Date() - d;
    console.log(`Took '${(t)}ms' with ${text}`);
    return t;
}

// first sort
console.log("simple sort");
var arr = [5, 2, 9, 4, 6, 2, 2, 3, 1];
console.log(arr.join(", "));
qsort(arr)
console.log(arr.join(", "));


console.log("");
console.log("array bellow was not working... so, i'll let here for testing.");
var bug1_array = [0, 0, 1, 13, 9, 0, 4, 6, 8, 6, 7, 6, 5, 3, 0, 2, 1, 15, 16, 17];
var bug1_expected = [0, 0, 1, 13, 9, 0, 4, 6, 8, 6, 7, 6, 5, 3, 0, 2, 1, 15, 16, 17].sort((a, b) => a - b);
qsort(bug1_array);
console.log("test1: are equal =", (compareArrays(bug1_array, bug1_expected)));


console.log("");
console.log("sorting an already sorted array not shuffles anything?");
var test1 = [1, 2, 3, 4, 5];
var test2 = [1, 2, 3, 4, 5];
qsort(test2);
console.log("test2: are equal =", (compareArrays(test1, test2)));


// BIG SORT
console.log("");
console.log("okay, lets compare the sort with big lists and the default javascript array sort.");
var one_million = 1000 * 1000;
var list1 = generateList(10 * one_million); // 10 million numbers list is sorted in ~1150ms (Ryzen 7 2700X no OC + 32GB DDR4 2933Mhz Dual Channel)
var list2 = list1.slice(0);
console.log("Array Size = ", list1.length);
benchmark(() => list2.sort((a, b) => a - b), "native sort");
benchmark(() => qsort(list1), "custom sort");
console.log("test3: are equal =", compareArrays(list1, list2));

// NOTE: To run the big sort may be necessary execute the cmd bellow to allow more memory to be used:
// node --max-old-space-size=8192 qsort_test.js