// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

// Есть решение короче???

    let arr = [3, null, 2, 0, 'sos', 4];

function countOfNumbersZero(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((typeof arr[i] === 'number') && (arr[i] === 0)) {
            count ++;
        }
    }
    return count;
}
console.log(`Нулевых элементов: ${countOfNumbersZero(arr)}`);

function countOfNumbersEven(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((typeof arr[i] === 'number') && (arr[i] % 2 === 0) && (arr[i] !== 0)) {
            count ++;
        }
    }
    return count;
}
console.log(`Четных элементов: ${countOfNumbersEven(arr)}`);


function countOfNumbersOdd(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((typeof arr[i] === 'number') && (arr[i] % 2 !== 0)) {
            count ++;
        }
    }
    return count;
}
console.log(`Нечетных элементов: ${countOfNumbersOdd(arr)}`);
