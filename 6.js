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

let fullName = (firstName + lastName).toLowerCase();

// Об'єкт для зберігання кількості входжень кожної літери
let letterCount = {};

// Підрахунок входжень літер
for (let i = 0; i < fullName.length; i++) {
    let letter = fullName[i];
    if (letterCount[letter]) {
        letterCount[letter]++;
    } else {
        letterCount[letter] = 1;
    }
}

// Знаходження літери з найбільшою кількістю входжень
let lit = '';
let cnt = 0;
for (let letter in letterCount) {
    if (letterCount[letter] > cnt) {
        lit = letter;
        cnt = letterCount[letter];
    }
}

console.log(`Найчастіше використовувана у імені та прізвищі літера - ${lit}, зустрічається ${cnt} разів`); // Виводить найчастіше використовувану літеру і кількість її входжень
