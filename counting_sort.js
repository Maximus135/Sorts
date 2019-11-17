function counting_sort(array) {
    let n = array.length;
    let Count = [];
    let B = [];
    for (let i = 0; i < n; i++) {
        Count[i] = 0;
    }
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (array[i] < array[j]) {
                Count[j]++;
            } else {
                Count[i]++;
            }
        }
    }
    for (var i = 0; i < n; i++)
        B[Count[i]] = array[i];
    return B;
}
let arr = [1, 3, 2, 1];
console.log(counting_sort(arr));