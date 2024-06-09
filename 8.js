// Створення об'єкту Student з використанням літерального синтаксису
const Student = {
    firstName: "Дмитрій", // Впишіть своє ім'я
    lastName: "Кальмуцький", // Впишіть своє прізвище
    nick: "DmitriiKalmutskyi", // Впишіть нік на GitHub
    age: 18, // Впишіть свій вік
    weight: 66.5, // Впишіть свою вагу (приблизно)
    height: 1.75, // Впишіть свій ріст в метрах (приблизно)
    birthday: null, // Залишити порожнім
    marital: false, // Впишіть одружений/заміжня

    // Метод для розрахунку IMT та IMTstate
    getIMT() {
        let IMT = this.weight / (this.height * this.height);
        let IMTstate;

        if (IMT < 18.5) {
            IMTstate = "недостатня вага";
        } else if (IMT >= 18.5 && IMT <= 24.9) {
            IMTstate = "нормальна вага";
        } else if (IMT >= 25.0 && IMT <= 29.9) {
            IMTstate = "зайва вага";
        } else {
            IMTstate = "дуже надмірна вага";
        }

        return { IMT, IMTstate };
    },

    // Метод для розрахунку найчастіше застосовної літери та їх кількості
    getLitfavor() {
        let fullName = (this.firstName + this.lastName).toLowerCase();
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
};

// Виклик методів об'єкта Student та виведення результатів в консоль

// Зміна властивості ваги
Student.weight = 85;
let { IMT, IMTstate } = Student.getIMT();
console.log(`IMT: ${IMT}, IMTstate: ${IMTstate}`); // Виводить IMT та IMTstate після зміни ваги

// Зміна прізвища та імені
Student.firstName = "Дімасік";
Student.lastName = "Кальмуцький";
let { lit, cnt } = Student.getLitfavor();
console.log(`Найчастіше використовувана у імені та прізвищі літера - ${lit}, зустрічається ${cnt} разів`); // Виводить lit та cnt після зміни імені та прізвища
