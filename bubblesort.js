let arr = [1,5,2,6,8,10,4]

const bubbleSort = (array) => {
    arrLength = array.length;

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (arr[j] > arr[j+1]){
                const temporal = arr[j]
                arr[j] = arr[j+1]
                arr[j + 1] = temporal 
            }
        }
    }
    console.log(array)

}

bubbleSort(arr)