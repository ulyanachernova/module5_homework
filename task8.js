// Создайте произвольный массив Map.
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let newStudents = new Map();
newStudents.set('Петров', 'Самара');
newStudents.set('Семенов', 'Москва');
newStudents.set('Архипова', 'Пермь');
newStudents.set('Матвеева', 'Краснодар');

for (let surname of newStudents.keys()) {
    let city = newStudents.get(surname)
    console.log(`Фамилия студента - ${surname}, город - ${city}`)
}