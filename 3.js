// Створення змінних
let firstName = "Дмитрій"; // Впишіть своє ім'я
let lastName = "Кальмуцький"; // Впишіть своє прізвище
let nick = "DmitriiKalmutskyi"; // Впишіть нік на GitHub
let age = 18; // Впишіть свій вік
let weight = 70.5; // Впишіть свою вагу (приблизно)
let height = 1.75; // Впишіть свій ріст в метрах (приблизно)
let birthday = null; // Залишити порожнім
let marital = false; // Впишіть одружений/заміжня

// Виведення типів усіх змінних
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof nick);
console.log(typeof age);
console.log(typeof weight);
console.log(typeof height);
console.log(typeof birthday);
console.log(typeof marital);

// Результат множення висоти на 100
console.log(height * 100);
// Привітання
console.log(`Привіт! Мене звати ${firstName} ${lastName}, мені ${age} років.`);

// Повідомлення про свій вік у 10-ковому, 2-ковому та 16-ковому форматі
console.log(age.toString(10)); // 10-ковий формат
console.log(age.toString(2));  // 2-ковий формат
console.log(age.toString(16)); // 16-ковий формат

// Прізвище та ім'я у верхньому регістрі
console.log(firstName.toUpperCase());
console.log(lastName.toUpperCase());

// Суми довжин в літерах прізвища та імені
console.log(firstName.length + lastName.length);
// Перші три літери імені
console.log(firstName.substring(0, 3));