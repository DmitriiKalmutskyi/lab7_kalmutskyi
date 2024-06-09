// Створення змінних
let firstName = "Дмитрій"; // Впишіть своє ім'я
let lastName = "Кальмуцький"; // Впишіть своє прізвище
let nick = "DmitriiKalmutskyi"; // Впишіть нік на GitHub
let age = 18; // Впишіть свій вік
let weight = 66.5; // Впишіть свою вагу (приблизно)
let height = 1.75; // Впишіть свій ріст в метрах (приблизно)
let birthday = null; // Залишити порожнім
let marital = false; // Впишіть одружений/заміжня

// Індекс маси тіла (IMT)
let IMT = weight / (height * height);
console.log(IMT); // Виводить індекс маси тіла (IMT)

// Використовуючи інструкцію if для виведення повідомлень згідно таблиці 7.2
if (IMT < 18.5) {
    console.log("Показник Менше 18,5"); // Виводить повідомлення для IMT менше 18,5
} else if (IMT >= 18.5 && IMT <= 24.9) {
    console.log("Показник між 18,5 та 24,9"); // Виводить повідомлення для IMT між 18,5 та 24,9
} else if (IMT >= 25.0 && IMT <= 29.9) {
    console.log("Показник між 25,0 та 29,9"); // Виводить повідомлення для IMT між 25,0 та 29,9
} else {
    console.log("Показник Понад 30"); // Виводить повідомлення для IMT більше 30
}

// Використовуючи інструкцію if для визначення IMTstate згідно таблиці 7.3
let IMTstate;
if (IMT < 18.5) {
    IMTstate = "недостатня вага"; // Встановлює IMTstate для IMT менше 18,5
} else if (IMT >= 18.5 && IMT <= 24.9) {
    IMTstate = "нормальна вага"; // Встановлює IMTstate для IMT між 18,5 та 24,9
} else if (IMT >= 25.0 && IMT <= 29.9) {
    IMTstate = "зайва вага"; // Встановлює IMTstate для IMT між 25,0 та 29,9
} else {
    IMTstate = "дуже надмірна вага"; // Встановлює IMTstate для IMT більше 30
}
console.log(IMTstate); // Виводить IMTstate

// Використовуючи конструкцію switch для визначення приналежності до діапазону значень
switch (Math.floor(IMT / 10)) {
    case 0:
        console.log("IMT нульове"); // Виводить повідомлення для IMT 0-10
        break;
    case 1:
        console.log("IMT від 10 до 20"); // Виводить повідомлення для IMT 10-20
        break;
    case 2:
        console.log("IMT від 20 до 30"); // Виводить повідомлення для IMT 20-30
        break;
    case 3:
        console.log("IMT від 30 до 40"); // Виводить повідомлення для IMT 30-40
        break;
    default:
        console.log("IMT неможливе"); // Виводить повідомлення для IMT більше 40
        break;
}
