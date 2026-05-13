// 1
function seconds(total) {
    const Total = parseFloat(total)
    if (!isNaN(Total)) {
        alert(Total % 60)
    } else {
        alert("total не є числовим значенням.")
    }
    return Total % 60
}
// 2
function perimeter(side, count) {
    const Side = parseFloat(side)
    const Count = parseInt(count)
    if (!isNaN(Side) && !isNaN(Count)) {
        if (Count < 3) {
            alert("Фігура не є багатокутником.")
        } else if (Side <= 0) {
            alert("Довжина сторін має бути додатньою.")
        } else {
            alert(Side*Count)
        }
    } else {
        alert("Одне із значень не є числовим")
    }
    return Side*Count
}
// 3
function fizzbuzz(n) {
    const N = parseInt(n)
    if (isNaN(N)) {
        alert("n не є числовим значенням.")
        return 0
    }
    console.log("Завдання 3")
    for (i = 1; i <= N; i++) {
        let str = ""

        if (i % 3 == 0) { str += "fizz" }
        if (i % 5 == 0) { str += "buzz" }
        
        if (str == "") {
            str = i
        }
        console.log(str)
    }
}
// 4
function calculateAverage(a, b, c) {
    const A = parseInt(a)
    const B = parseInt(b)
    const C = parseInt(c)
    if (!isNaN(A) && !isNaN(B) && !isNaN(C)) {
        alert( (A+B+C)/3 )
    }
    return (A+B+C)/3
}
// 5
function isDivisible(n, x, y) {
    const N = parseInt(n)
    const X = parseInt(x)
    const Y = parseInt(y)
    const Type = document.querySelector('input[name="task5type"]:checked').value;
    let result = false

    if (isNaN(N) || isNaN(X) || isNaN(Y)) {
        alert("Не всі вхідні параметри є числами.")
        return null
    } else if (N <= 0 || X <= 0 || Y <= 0) {
        alert("Не всі вхідні параметри є додатними.")
        return null
    } 

    const Condition = (N % X == 0 && N % Y == 0)

    if (Type == "A") {
        if (Condition) {
            result = true
        } else {
            result = false
        }
    } else if (Type == "B") {
        Condition ? result = true : result = false
    } else {
        result = Condition
    }
    alert(result)
    return result
}
// 6
function initArray(n) {
    const N = parseInt(n)
    const RandomUpperBound = 10

    if (isNaN(N)) { return false }

    let array = new Array(N)
    let oddValues = []

    let max = 0
    let min = RandomUpperBound
    let sum = 0
    let average = 0

    for (i = 0; i < N; i++) {
        array[i] = Math.ceil(Math.random()*RandomUpperBound)
        if (max < array[i]) {max = array[i]}
        if (min > array[i]) {min = array[i]}
        if (array[i] % 2 == 1) {
            oddValues.push(array[i])
        }
        sum += array[i]
    }

    average = sum/N

    let result = `Завдання 6
    Масив: ${array}
    Найбільше значення масиву: ${max}
    Найменше значення масиву: ${min}
    Сума елементів: ${sum}
    Середнє арифметичне: ${average}
    Непарні значення масиву: ${oddValues}
    `

    alert(result)
}

// 7
function init2DArray() {
    const RandomUpperBound = 10
    let array2d = []
    let s = "До заміни:\n"

    console.log("Завдання 7")
    for (i = 0; i < 5; i++) {
        array2d[i] = []
        for (j = 0; j < 5; j++) {
            array2d[i][j] = Math.ceil(Math.random()*RandomUpperBound)-RandomUpperBound/2
        }
        s += array2d[i]
        s += "\n"
    }

    s += "\nПісля заміни:\n"
    for (i = 0; i < 5; i++) {
        array2d[i][i] >= 0 ? array2d[i][i] = 1 : array2d[i][i] = 0
        s += array2d[i]
        s += "\n"
    }

    alert(s)
}
// 8
function Add(a, b) {
    alert(a+b)
}
function Sub(a, b) {
    alert(a-b)
}
function Mul(a, b) {
    alert(a*b)
}
function Div(a, b) {
    if (b == 0) {
        alert("Невизначений результат")
    } else {
        alert(a/b)
    }
}

function doOperation(a, b) {
    const A = parseFloat(a)
    const B = parseFloat(b)
    const Operation = document.querySelector("select").value

    if (isNaN(A) || isNaN(B)) {
        return
    }

    switch (Operation) {
        case "Add": {Add(A, B); break;}
        case "Sub": {Sub(A, B); break;}
        case "Mul": {Mul(A, B); break;}
        case "Div": {Div(A, B); break;}
    }
}
// 9
function check(n) {
    const N = parseInt(n)
    let s = ""

    if (isNaN(N)) {
        return
    }

    if (N % 2 == 0 &&
        N % 3 == 0 &&
        N % 5 == 0 &&
        N % 6 == 0 &&
        N % 9 == 0
    ) {
        s += "Число ділиться на 2, 3, 5, 6 та 9 без залишку.\n"
    } else {
        s += "Число не ділиться на 2, 3, 5, 6 та 9 без залишку.\n"
    }

    if (N < 0) {
        s += "Число від'ємне\nЧисло не є простим."
        alert(s)
        return
    }

    s += "Число невід'ємне.\n"
    let isPrime = true
    for (i = 2; i < N/2; i++) {
        if (N % i == 0) {
            isPrime = false
        }
    }
    if (isPrime) {
        s += "Число є простим.\n"
    } else {
        s += "Число не є простим.\n"
    }

    alert(s)
}
// 10
function rotateAndSquare(a) {
    const Array = a.split(",")
    let newArray = []
    Array.forEach(element => {
        let x = parseInt(element)
        if (isNaN(x)) {
            newArray.unshift(element)
        } else {
            newArray.unshift(x**2)
        }
    });
    alert(newArray)
}
// 11
function removeDuplicates(a) {
    const Array = a.split(",")
    let newArray = []
    Array.forEach(element => {
        if (!newArray.includes(element)) {
            newArray.push(element)
        }
    });
    alert(newArray)
}