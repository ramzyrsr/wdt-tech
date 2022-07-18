function compare(array1, array2) {
    let a = 0;
    let b = 0;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > array2[i]) {
            a++;
        }
        if (array1[i] < array2[i]) {
            b++;
        }
    }

    return `${a} ${b}`;
}

console.log(compare([5, 6, 7], [3, 6, 10]));