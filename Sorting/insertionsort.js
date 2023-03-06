const myArr = [3,78,4,45,14,7]

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++){
        for (let j = i; j > 0; j--){
            if (arr[j] < arr[j - 1]){
                let temp = arr[j];
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            } else {
                break;
            }
        }
    }
    return arr
}

console.log(insertionSort(myArr)); 