let now = new Date(); // поточне значення часу
let tssp = new Date(now.getTime() - 5000); // значення часу 5 секунд тому
console.log("Зараз - \t\t" + now.toLocaleString()); // виводить поточний час у локальному форматі
console.log("5 секунд назад було \t" + tssp.toLocaleString()); // виводить час 5 секунд тому у локальному форматі

let ny = new Date(now.getFullYear() + ", 1, 1 00:00:00"); // дата та час нового року

// Функція для розрахунку різниці в часі
function getTimeDifference(DT1, DT2) {
    let totalsec = Math.fround((DT1 - DT2) / 1000); // різниця в секундах
    let days = Math.floor(totalsec / (60 * 60 * 24)); // дні
    let hours = Math.floor(totalsec / (60 * 60)) % 24; // години
    let mins = Math.floor(totalsec / 60) % 60; // хвилини
    let seconds = totalsec % 60; // секунди
    
    return { days, hours, mins, seconds };
}

let fromNY = getTimeDifference(now, ny); // різниця з нового року
console.log("З нового року пройшло \t" + fromNY.days + " днів, " + fromNY.hours + " годин, " + fromNY.mins + " хвилин, " + fromNY.seconds + " секунд."); // виводить час з нового року

// Дата вашого дня народження
let birthday = new Date(now.getFullYear(), 3, 11); // приклад: 11 квітня поточного року
let fromBirthday = getTimeDifference(now, birthday); // різниця з дня народження
console.log("З дня народження пройшло \t" + fromBirthday.days + " днів, " + fromBirthday.hours + " годин, " + fromBirthday.mins + " хвилин, " + fromBirthday.seconds + " секунд."); // виводить час з дня народження

