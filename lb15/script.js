// для завдання 1
function isPrime(n) {
    for (j = 2; j < n; j++) {
        if (n % j == 0) {return false};
    }
    return true;
}

// для завдання 4
function getSeason(n) {
    if (n < 1 || n > 12) {
        return "Номер місяця має бути в проміжку від 1 до 12.";
    }

    let month = parseInt(n /3 % 12) % 4;

    if (month != month) {
        return "Функція приймає лише числові значення.";
    }

    switch (month) {
        case 0: return "Зима";
        case 1: return "Весна";
        case 2: return "Літо";
        case 3: return "Осінь";
        default: return ""
    }
}

// для завдання 6
function getWeekday(n) {
    if (n < 1 || n > 7) {
        return "має бути в проміжку від 1 до 12.";
    }

    let weekday = parseInt(n);

    if (weekday != weekday) {
        return "функція приймає лише числові значення.";
    }

    switch (weekday) {
        case 1: return "Понеділок";
        case 2: return "Вівторок";
        case 3: return "Середа";
        case 4: return "Четвер";
        case 5: return "П'ятниця";
        case 6: return "Субота";
        case 7: return "Неділя";
        default: return ""
    }
}

console.log("Завдання 1");

let i = 2;

while (i <= 100) {
    if (isPrime(i) == true) {
        console.log(i);
    }
    i++;
}

console.log("Завдання 2");

i = 0;
let strAnswer;
do {
    if (i == 0) {
        strAnswer = "це нуль";
    } else if (i % 2 == 0) {
        strAnswer = "парне число";
    } else {
        strAnswer = "непарне число";
    }
    console.log(i + " - " + strAnswer);
    i++;
} while (i <= 10)

console.log("Завдання 3");

let numb = 10000;
let counter = 0;
let result = numb;

while (result >= 50) {
    result /= 2;
    counter++;
}

console.log("result: " + result + ", counter: " + counter);

//Завдання 4
let str = prompt("Введіть номер місяця");
alert("Номер: " + str + "\n" + getSeason(str));

// Завдання 5
str = prompt("Введіть температуру за Цельсієм:")
let tempC = parseInt(str)
let tempF

if (tempC == tempC) {
    tempF = (9/5)*tempC + 32
    alert("За Цельсієм: " + tempC + "\nЗа Фаренгейтом: " + tempF)
} else {
    alert("Приймаються лише числові значення.")
}

// Завдання 6
str = prompt("Введіть номер дня тижня:")
alert("День тижня: " + getWeekday(str))