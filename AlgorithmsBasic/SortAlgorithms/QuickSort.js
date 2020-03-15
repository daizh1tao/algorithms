/**
 *  author: daizh1tao
 *  email: daizh1tao@163.com
 *  create_date: 2020/3/15 10:12
 *  description:
 */

/**
 *
 * @param array
 * @param p
 * @param r
 */
function QuickSort (array, p, r) {
    if (p < r) {
        let q = Partition(array, p, r)
        QuickSort(array, p, q - 1)
        QuickSort(array, q + 1, r)
    }
}

/**
 *
 * @param array
 * @param p
 * @param r
 * @return {number}
 */
function Partition(array, p, r) {
    let x = array[r]
    let i = p - 1


    let temp

    for (let j = p; j <= r - 1; ++j) {
        if (array[j] <= x) {
            i += 1

            temp = array[j]
            array[j] = array[i]
            array[i] = temp
        }
    }

    temp = array[r]
    array[r] = array[i + 1]
    array[i + 1] = temp
    return i + 1
}

let arr = [5, 2, 4, 6, 1, 3]

QuickSort(arr, 0, 5)

console.log(arr)