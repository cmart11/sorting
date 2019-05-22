
function swap(el1, el2) {
    let temp = el1;
    el1 = el2;
    el2 = temp;
    return [el1, el2]
}

function bubbleSort(array) {

    let tracker = true;

    // let copy = array.slice()
    console.log('init', array)

    while (tracker) {
        tracker = false;
        for (let i = 0; i < array.length - 1; i++) {

            if (array[i] > array[i + 1]) {
                tracker = true;
                // let temp = array[i];
                // array[i] = array[i + 1];
                // array[i + 1] = temp;
                const fixed = swap(array[i], array[i + 1]);
                array.splice(i, 2, fixed[0], fixed[1]);
            }
            console.log(iterations)
        }
    }
    console.log('return ', array)
    return array
}
