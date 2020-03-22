import InsertionSort from "./InsertionSort.js"

function BucketSort (array) {
    let len = array.length
    let barray = []


    for (let i = 0; i < len; ++i) {
        barray[i] = []
    }

    for (let i = 0; i < len; ++i) {
        barray[(array[i] / 10) ^ 0].push(array[i])
    }

    

    for (let i = 0; i < len; ++i) {
        barray[i] = InsertionSort(barray[i])
    }
    
    return barray.flat()
}

console.log(BucketSort([78, 17, 39, 26, 72, 94, 21, 12, 23, 68]));
