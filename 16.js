let now = new Date(); // Створюємо новий об'єкт Date для поточної дати та часу.
let strtday = new Date(now.toDateString()); // Створюємо об'єкт Date з поточною датою, але з часом встановленим на початок дня.
let delta = now.getTime() - strtday.getTime(); // Розраховуємо різницю між поточним часом та початком дня в мілісекундах.

let scheduler = []; // Створюємо порожній масив для зберігання розкладу подій.

// Додаємо події до масиву scheduler з використанням часу в мілісекундах з початку дня.
scheduler.push({
    tbegin: delta + 5000, // Час початку першої події - поточний час + 5000 мілісекунд.
    tend: delta + 10000, // Час кінця першої події - поточний час + 10000 мілісекунд.
    topic: "lamp1", // Тема першої події.
    cmdbegin: "on", // Команда на виконання для початку першої події.
    cmdend: "off" // Команда на виконання для кінця першої події.
});

scheduler.push({
    tbegin: delta + 6000, // Час початку другої події - поточний час + 6000 мілісекунд.
    tend: delta + 8000, // Час кінця другої події - поточний час + 8000 мілісекунд.
    topic: "lamp2", // Тема другої події.
    cmdbegin: "on", // Команда на виконання для початку другої події.
    cmdend: "off" // Команда на виконання для кінця другої події.
});

scheduler.push({
    tbegin: delta + 3000, // Час початку третьої події - поточний час + 3000 мілісекунд.
    tend: delta + 9000, // Час кінця третьої події - поточний час + 9000 мілісекунд.
    topic: "power", // Тема третьої події.
    cmdbegin: "85", // Команда на виконання для початку третьої події.
    cmdend: "0" // Команда на виконання для кінця третьої події.
});

// Функція daytoshed перетворює час початку та кінця кожної події в об'єкті scheduler на відлік від початку дня.
function daytoshed(scheduler) {
    let strtday = new Date(now.toDateString()); // Оновлюємо значення strtday на початок поточного дня.
    for (let schedevt of scheduler) { // Проходимося по кожній події у масиві scheduler.
        schedevt.tbegin = new Date(strtday.getTime() + schedevt.tbegin); // Обчислюємо новий час початку події.
        schedevt.tend = new Date(strtday.getTime() + schedevt.tend); // Обчислюємо новий час кінця події.
    }
}

daytoshed(scheduler); // Викликаємо функцію для перетворення часу кожної події.

for (let schedevt of scheduler) { // Проходимося по кожній події у масиві scheduler.
    console.log(schedevt.tbegin); // Виводимо час початку події у консоль.
    console.log(schedevt.tend); // Виводимо час кінця події у консоль.
}

let fnshed = function () {
    let dt = new Date();
    msgtxt = dt.toLocaleString();
    console.log (msgtxt);
    for (let schedevt of scheduler) checkshed (schedevt);
    for (let i = 0; i < scheduler.length; i++) {
        if (dt.getTime()> scheduler[i].tend.getTime()){
            console.log (scheduler[i].topic);
            scheduler.splice(i,1);
        }
    }
    if (scheduler.length === 0) clearTimeout(htmr);         
}

function checkshed (shedevt) {
    let dt = new Date();
    let msg = {};
    if (dt.getTime()>=shedevt.tend.getTime()) {
        if (shedevt.started){
            shedevt.started = false; 
            msg.payload = shedevt.cmdend;
            msg.topic = shedevt.topic;
            console.log ("Подію для "  + msg.topic + " зупинено ");
        }        
    }    
    else if ((dt.getTime()>=shedevt.tbegin.getTime()) && (! shedevt.started)) {
        msg.payload = shedevt.cmdbegin;
        msg.topic = shedevt.topic;
        shedevt.started = true; 
        console.log ("Подію для "  + msg.topic + " запущено");  
    }
}    
htmr = setInterval(fnshed, 1000);
console.log (now.toLocaleString () + " Планувальник запущено");