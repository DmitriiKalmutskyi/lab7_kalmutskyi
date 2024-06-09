let now = new Date(); // Створюємо новий об'єкт Date для поточної дати та часу.
let scheduler = []; // Створюємо масив scheduler для зберігання розкладу подій.
scheduler.push({
    tbegin: new Date(now.getTime()+ 5000), // Дата/час початку першої події - через 5 секунд від поточного часу.
    tend: new Date (now.getTime() + 10000), // Дата/час кінця першої події - через 10 секунд від поточного часу.
    topic: "lamp1", // Адресат першої події.
    cmdbegin:"on", // Команда на виконання для початку першої події.
    cmdend:"off" // Команда на виконання для кінця першої події.
});
// Аналогічно додаємо ще дві події до масиву scheduler.
scheduler.push({
    tbegin: new Date(now.getTime()+ 6000),
    tend: new Date (now.getTime() + 8000),
    topic: "lamp2",
    cmdbegin:"on",
    cmdend:"off"
});
scheduler.push({
    tbegin: new Date(now.getTime()+ 3000),
    tend: new Date (now.getTime() + 9000),
    topic: "power",
    cmdbegin:"85",
    cmdend:"0"	
});

for (let schedevt of scheduler) {
    console.log (schedevt.topic); // Виводимо адресати усіх подій у масиві scheduler.
}

let fnshed = function () { // Оголошуємо функцію fnshed без параметрів.
    let dt = new Date(); // Створюємо новий об'єкт Date для поточної дати та часу.
    msgtxt = dt.toLocaleString(); // Генеруємо рядок, що представляє поточну дату та час у локальному форматі.
    console.log (msgtxt); // Виводимо поточний час у консоль.
    for (let schedevt of scheduler) checkshed (schedevt); // Перевіряємо кожну подію у масиві scheduler.
    for (let i = 0; i < scheduler.length; i++) { // Проходимо по кожній події у масиві scheduler.
        if (dt.getTime()> scheduler[i].tend.getTime()){ // Перевіряємо, чи минув час кінця події.
            console.log (scheduler[i].topic); // Виводимо адресата події, яка завершилася.
            scheduler.splice(i,1); // Видаляємо завершену подію з масиву scheduler.
        }
    }
    if (scheduler.length === 0) clearTimeout(htmr); // Якщо масив scheduler порожній, очищаємо таймер htmr.         
}

function checkshed (shedevt) { // Оголошуємо функцію checkshed з параметром shedevt.
    let dt = new Date(); // Створюємо новий об'єкт Date для поточної дати та часу.
    let msg = {}; // Створюємо об'єкт для зберігання повідомлення.
    if (dt.getTime()>=shedevt.tend.getTime()) { // Перевіряємо, чи поточний час більший або рівний кінцевому часу події.
        if (shedevt.started){ // Якщо подія була запущена.
            shedevt.started = false; // Встановлюємо прапорець, що подія зараз не працює.
            msg.payload = shedevt.cmdend; // Додаємо команду на виконання для кінця події до об'єкта повідомлення.
            msg.topic = shedevt.topic; // Додаємо адресат для події до об'єкта повідомлення.
            console.log ("Подію для "  + msg.topic + " зупинено "); // Виводимо повідомлення у консоль.
        }        
    }    
    else if ((dt.getTime()>=shedevt.tbegin.getTime()) && (! shedevt.started)) { // Якщо поточний час більший або рівний початковому часу події, і подія ще не почалася.
        msg.payload = shedevt.cmdbegin; // Додаємо команду на виконання для початку події до об'єкта повідомлення.
        msg.topic = shedevt.topic; // Додаємо адресат для події до об'єкта повідомлення.
        shedevt.started = true; // Встановлюємо прапорець, що подія зараз працює.
        console.log ("Подію для "  + msg.topic + " запущено");  // Виводимо повідомлення у консоль.
    }
}    

htmr = setInterval(fnshed, 1000); // Встановлюємо інтервал виклику функції fnshed кожну секунду.
console.log (now.toLocaleString () + " Планувальник запущено"); // Виводимо поточну дату та час у локальному форматі разом з повідомленням "Планувальник запущено"
