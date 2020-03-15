/**
 *  author: daizh1tao
 *  email: daizh1tao@163.com
 *  create_date: 2020/3/13
 *  description: Priority Queue
 */

/**
 *
 * @param {number} i
 * @return {number}
 * @return {number}
 */
let PARENT = function (i) {
    return ((i + 1) / 2) ^ 0
}

/**
 *
 * @param {number} i
 * @return {number}
 * @return {number}
 */
let LEFT = function (i) {
    return 2 * (i + 1) - 1
}

/**
 *
 * @param {number} i
 * @return {number}
 * @return {number}
 */
let RIGHT = function (i) {
    return 2 * (i + 1)
}

/**
 *
 * @param {number[]} array
 * @param {number}i
 * @return
 *
 * @description: 对节点及其子节点进行判断，若子节点值大于根节点，则交换
 */
function MaxHeapify (array, i) {
    let left = LEFT(i)
    let right = RIGHT(i)
    let largest

    if ((left < array.heapSize) && (array[left] > array[i])) {
        largest = left
    } else {
        largest = i
    }

    if ((right < array.heapSize) && (array[right] > array[largest])) {
        largest = right
    }

    if (largest !== i) {
        let temp = array[largest]
        array[largest] = array[i]
        array[i] = temp

        MaxHeapify(array, largest)
    }
}

/**
 *
 * @param array
 * @return {void}
 */
function BuildMaxHeap(array) {
    array.heapSize = array.length
    for (let i = ((array.length / 2) ^ 0); i >= 0; --i) {
        MaxHeapify(array, i)
    }
}

/**
 *
 * @param {number[]} array
 * @return {void}
 */
function HeapSort(array) {
    BuildMaxHeap(array)

    for (let i = array.length - 1; i > 0; --i) {
        let temp = array[0]
        array[0] = array[i]
        array[i] = temp

        array.heapSize -= 1

        MaxHeapify(array, 0)
    }
}

/**
 *
 * @param {number[]} array
 * @return {number}
 */
function HeapMaximum (array) {
    return array[0]
}

/**
 *
 * @param {number[]} array
 * @return {Error|number}
 */
function HeapExtractMax(array) {
    if (array.heapSize < 1) {
        return new Error("Heap is underflow")
    }

    let max = array[0]
    array[0] = array[array.heapSize - 1]
    MaxHeapify(array, 0)
    return max
}

/**
 *
 * @param {number[]} array
 * @param {number} i
 * @param {number} key
 * @return {Error}
 */
function HeapIncreaseKey(array, i, key) {
    if (key < array[i]) {
        return new Error("new key is smaller than current key")
    }

    array[i] = key

    while ((i > 0) && (array[PARENT(i)] < array[i])) {
        let temp = array[PARENT(i)]
        array[PARENT(i)] = array[i]
        array[i] = temp

        i = PARENT(i)
    }
}

/**
 *
 * @param {number[]} array
 * @param {number} key
 * @return {void}
 */
function MaxHeapInsert(array, key) {
    array.heapSize += 1
    array[array.heapSize] = Infinity
    HeapIncreaseKey(array, array.heapSize, key)
}
// HeapSort([4, 1, 3, 2, 16, 9, 10, 14, 8, 7])
