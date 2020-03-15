/**
 * @param {number} i
 * @return {number}
 */
function PARENT (i) {
    return ((i + 1) / 2) ^ 0
}

/**
 *
 * @param {number} i
 * @return {number}
 */
function LEFT (i) {
    return 2 * (i + 1) - 1
}

/**
 *
 * @param {number} i
 * @return {number}
 */
function RIGHT (i) {
    return 2 * (i + 1)
}


/**
 *
 * @param {number[]} array
 * @param i
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
        let temp = array[i]
        array[i] = array[largest]
        array[largest] = temp

        MaxHeapify(array, largest)
    }
}

/**
 *
 * @param {number[]} array
 * @return {array}
 */
function BuildMaxHeap (array) {
    array.heapSize = array.length

    for (let i = ((array.length / 2) ^ 0) - 1; i >= 0; --i) {
        MaxHeapify(array, i)
    }
}

/**
 *
 * @param array
 * @return {array}
 */

function HeapSort (array) {
    BuildMaxHeap(array)

    for (let i = array.length - 1; i >= 1; --i) {
        let temp = array[i]
        array[i] = array[0]
        array[0] = temp

        array.heapSize = array.heapSize - 1

        MaxHeapify(array, 0)
    }

    console.log(array)
}

HeapSort([4, 1, 3, 2, 16, 9, 10, 14, 8, 7])

