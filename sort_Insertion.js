function sort_Insertion(array) {
    let j;
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        j = i;
        while (j > 0 && array[j - 1] > current) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = current;
    }
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let arr = [32, 1, 4, 23, 32, 1, 2, 3, 1, 2, 3];
sort_Insertion(arr);