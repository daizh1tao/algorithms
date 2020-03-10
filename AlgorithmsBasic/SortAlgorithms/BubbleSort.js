/**
 *
 * @param {number[]} array
 * @param {boolean} asc
 * @constructor
 */
let BubbleSort = function (array, asc = true) {
    for (let i = 0; i < array.length; ++i) {
        for (let j = i + 1; j < array.length; ++j ) {
            let sortWay = asc ? array[j] <= array[i] : array[j] > array[i]
            if (sortWay) {
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
        }
    }
}

let arr = [5, 2, 4, 6, 1, 3]

BubbleSort(arr, false)
console.log(arr)