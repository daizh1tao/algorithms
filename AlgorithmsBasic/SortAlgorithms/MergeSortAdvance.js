let merge = function (array, p, q, r) {
    let l_array = array.slice(p, q + 1)
    let r_array = array.slice(q + 1, r + 1)

    let i, j
    i = j = 0

    for (let k = p; k <= r; ++k) {
        if (i === l_array.length) {
            array[k] = r_array[j]
            j += 1
            continue
        }

        if (j === r_array.length) {
            array[k] = l_array[i]
            i += 1
            continue
        }

        if (l_array[i] <= r_array[j]) {
            array[k] = l_array[i]
            i += 1
        } else {
            array[k] = r_array[j]
            j += 1
        }
    }
}

/**
 * 分治排序，对数组的某一子数组进行排列
 * @param {number[]} array
 * @param {number} p
 * @param {number} r
 * @constructor
 */
let MergeSort = function (array, p, r) {
    if (p < r) {
        let q = ((p + r) / 2) ^ 0
        MergeSort(array, p, q)
        MergeSort(array, q + 1, r)
        merge(array, p, q, r)
    }
}

let array = [10, 2, 4, 5, 7, 1, 2, 3, 6, 0]
MergeSort(array, 0, array.length - 1)

console.log(array)
