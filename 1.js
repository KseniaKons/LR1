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


console.log(typeof("сыр" + "ы"));
// Предположение: string
// Фактический: string

console.log(typeof("сыр" - "ы"));
// Предположение: NaN
// Фактический: number

console.log(typeof("2" + "4"));
// Предположение: string
// Фактический: string

console.log(typeof("2" - "4"));
// Предположение: NaN
// Фактический: number

console.log(typeof("Сэм" + 5));
// Предположение: string
// Фактический: string

console.log(typeof("Сэм" - 5));
// Предположение:  NaN
// Фактический: number

console.log(typeof(99 * "шары"));
// Предположение:  NaN
// Фактический: number