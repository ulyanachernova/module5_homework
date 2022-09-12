// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
//
// split - разделяет строку на массив
// reverse - переворачивает массив
// join - собирает элементы массива

let str = "Hello";
let hello = str.split('').reverse().join('');
console.log(hello)