// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его
// и вывести в консоль каждый элемент массива.

let arr = [1, 3, 5, 7];
console.log(arr.length);
let elementArr = arr.map(function(item) {
    return item;
});
console.log(elementArr);