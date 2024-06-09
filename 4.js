// Створення змінних
let firstName = "Дмитрій"; // Впишіть своє ім'я
let lastName = "Кальмуцький"; // Впишіть своє прізвище
let nick = "DmitriiKalmutskyi"; // Впишіть нік на GitHub
let age = 18; // Впишіть свій вік
let weight = 66.5; // Впишіть свою вагу (приблизно)
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

// Остача від ділення росту на 1
console.log(height % 1); // Виводить остачу від ділення росту на 1

// Результат порівняння height > 1.80
let isHigh = height > 1.80;
console.log(isHigh); // Виводить true, якщо ріст більше 1.80, і false, якщо менше або дорівнює

// Індекс маси тіла (IMT)
let IMT = weight / (height * height);
console.log(IMT); // Виводить індекс маси тіла (IMT)

// Вага нормальна або поза нормою
let IMTstate = (IMT >= 18.5 && IMT <= 24.9) ? "Вага нормальна" : "Вага поза нормою";
console.log(IMTstate); // Виводить "Вага нормальна" якщо IMT в діапазоні 18.5-24.9, і "Вага поза нормою" якщо поза діапазоном
