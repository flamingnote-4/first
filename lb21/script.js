// 1
const weekdayNames = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота"
]
const monthNames = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
]
function returnDate() {
    console.log("Завдання 1")
    const d = new Date() 
    const format = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}, ${weekdayNames[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()} року`
    console.log(format);
    return Date.now(format)
}

// 2
let numberToGuess = 0
let guesses = 0
let guess = 0

function setupGame() {
    numberToGuess = Math.floor(Math.random() * 50)
    guess = -1
    guesses = 0
}
function getInput() {
    let value = prompt("Введіть число:")
    let notInt = true
    while (notInt) {
        guess = parseInt(value)
        if (guess == guess) {
            notInt = false
            break
        }
        value = prompt("Введіть число:")
    }
    return guess
}
function checkGuess() {
    let isGuessCorrectString = "не "
    if (numberToGuess == guess) {
        isGuessCorrectString = ""
    }
    const d = new Date() 
    const format = `${d.getDate().toString().padStart(2, '0')}.${d.getMonth().toString().padStart(2, '0')}.${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')} Спроба ${guesses}: число ${guess} - ${isGuessCorrectString}вірно.`
    console.log(format)
    const magnitude = Math.abs(numberToGuess-guess)
    if (magnitude > 13) {
        alert("Холодно")
    } else if (magnitude > 5) {
        alert("Тепло") 
    } else if (magnitude > 2) {
        alert("Тепліше")
    } else if (magnitude > 0) {
        alert("Гаряче")
    }
}

function game() {
    console.log("Завдання 2")
    setupGame()
    while (guess != numberToGuess) {
        guess = getInput()
        guesses += 1
        checkGuess()
    }
    alert(`Ви вгадали число ${numberToGuess}!\nКількість спроб: ${guesses}.`)
}