// ШПАРГАЛКА //

let inscr = 10,
    descr = 10;

++inscr; // '++' - увеличение на 1
--descr; // '--' - уменьшение на 1

console.log(inscr);
console.log(descr);

// ВЫВОД 1, потому что % - остаток
console.log(5%2);

// ЗНАКИ СРАВНЕНИЯ
console.log(2*4 == 8); // ВЫВОД: true
console.log(2*4 == '8'); // ВЫВОД: true

console.log(2*4 === 8); // ВЫВОД: true, потому что === строгое сравнение, а '8' - это цифра
console.log(2*4 === '8'); //ВЫВОД: false, потому что === строгое стравнение, а '8' - это строка

// && - И
// || - ИЛИ