
let arr = [1,23,4,3,2,12,43,5312,432,4234,12,3];
function bubbleSort(arr) {
    let length = arr.length - 1;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length-i; j++) {
            let temp = arr[j + 1];
            if (temp < arr[j]) {
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr));