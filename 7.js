// Створення змінних
let firstName = "Дмитрій"; // Впишіть своє ім'я
let lastName = "Кальмуцький"; // Впишіть своє прізвище
let nick = "DmitriiKalmutskyi"; // Впишіть нік на GitHub
let age = 18; // Впишіть свій вік
let weight = 66.5; // Впишіть свою вагу (приблизно)
let height = 1.75; // Впишіть свій ріст в метрах (приблизно)
let birthday = null; // Залишити порожнім
let marital = false; // Впишіть одружений/заміжня

// Функція для розрахунку IMT
function getIMT(weight, height) {
    return weight / (height * height);
}

// Функція для розрахунку IMTstate
function getIMTstate(IMT) {
    if (IMT < 18.5) {
        return "недостатня вага";
    } else if (IMT >= 18.5 && IMT <= 24.9) {
        return "нормальна вага";
    } else if (IMT >= 25.0 && IMT <= 29.9) {
        return "зайва вага";
    } else {
        return "дуже надмірна вага";
    }
}

// Функція для розрахунку найчастіше застосовної літери та їх кількості
function getLitfavor(name, surname) {
    let fullName = (name + surname).toLowerCase();
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
    
    return { lit, cnt };
}

// Виклик функцій та виведення результатів в консоль
let IMT = getIMT(weight, height);
console.log(IMT); // Виводить індекс маси тіла (IMT)

let IMTstate = getIMTstate(IMT);
console.log(IMTstate); // Виводить IMTstate

let litfavor = getLitfavor(firstName, lastName);
console.log(`Найчастіше використовувана у імені та прізвищі літера - ${litfavor.lit}, зустрічається ${litfavor.cnt} разів`); // Виводить найчастіше використовувану літеру і кількість її входжень
