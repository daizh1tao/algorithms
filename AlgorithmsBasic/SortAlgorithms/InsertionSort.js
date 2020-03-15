/**
 *  插入排序
 * @param {number[]} array
 * @param {boolean} asc
 * @constructor
 */
function InsertionSort (array, asc = true) {
    for (let j = 1; j < array.length; ++j) {
        let key = array[j]

        // 将A[i]插入到A[0,2,...,]
        let i = j - 1

        // 当前元素与前部分数组元素进行比较交换
        while ((i >= 0) && (asc ? (array[i] > key) : (array[i] < key))) {
            array[i + 1] = array[i]
            i -= 1
        }

        array[i + 1] = key
    }
    return array
}

let arr = [5, 2, 4, 6, 1, 3]

console.log(InsertionSort(arr, false))
