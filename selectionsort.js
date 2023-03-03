const randomArray = [1, 6, 4, 8, 12, 2];

const selectionSort = (arr) => {

    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]) minIndex = j
        }
        const temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

console.log(selectionSort(randomArray))
