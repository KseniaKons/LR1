console.log("Задание №1 \n");
console.log(typeof(9));
// Предположение: number
// Фактический: number

console.log(typeof(1.2));
// Предположение: number
// Фактический: c

console.log(typeof(NaN));
// Предположение: NaN
// Фактический: number

console.log (typeof("Hello World"));
// Предположение: string
// Фактический: string

console.log(typeof(true));
// Предположение: boolean
// Фактический: boolean

console.log(typeof(2 != 1));
// Предположение: boolean
// Фактический: boolean


console.log("сыр" + "ы");
// Предположение: сыры
// Фактический: сыры

console.log("сыр" - "ы");
// Предположение: NaN
// Фактический: NaN

console.log("2" + "4");
// Предположение: 24
// Фактический: 24

console.log("2" - "4");
// Предположение: NaN
// Фактический: NaN

console.log("Сэм" + 5);
// Предположение: Сэм5
// Фактический: Сэм5

console.log("Сэм" - 5);
// Предположение:  NaN
// Фактический: NaN

console.log(99 * "шары");
// Предположение:  NaN
// Фактический: NaN