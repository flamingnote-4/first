const startingTime = 60
const tileCount = 25
let time = startingTime
let progress = 1
let gameRunning = false
let gameNumber = 0
let bestTime = 0

function initialize() {
    $(".statusbar p").hide()

    if (gameRunning) {
        addMessage()
    }

    time = startingTime
    gameNumber++
    progress = 1

    $(".gamegrid").empty()

    for (i = 1; i <= tileCount; i++) {
        let rng = Math.ceil(Math.random()*100)
        let element = $("<p></p>").text(i)
        element.css("font-size",(rng%25/35)+1.5+"em")
        element.css("order",rng)
        element.css("color",`hsl(${Math.random()*360}, 100%, 40%)`)
        element.click(function(){
            if (element.text() == progress && gameRunning == true) {
                progress++
                if (progress-1 == tileCount) {
                    victory()
                }
                element.addClass("toggled")
            }
        })
        $(".gamegrid").append(element)
    }

    gameRunning = true
    timer(gameNumber)
}

function addMessage() {
    let message = $("<tr></tr>")
    let messageNumber = $("<td></td>").text("Гра " + gameNumber)
    let messageTime = $("<td></td>")
    let messageProgress = $("<td></td>").text(`${progress-1}/${tileCount}`)
    if (time < 0) {
        messageTime.text("Програш.")
    } else {
        messageTime.text(startingTime-time-1 + " с")
        if (time > bestTime) {
            bestTime = time
            $(".bestscore").removeClass("bestscore")
            message.addClass("bestscore")
        }
    }
    if (gameRunning) {
        messageProgress.append(" (рестарт)")
    }
    message.append(messageNumber, messageTime, messageProgress)
    $(".leaderboard table").append(message)
}

function loss() {
    $("#statusmsg").text("Час вичерпано.")
    $("#statusmsg").addClass("loss")
    $("#statusmsg").show()
    gameRunning = false
    addMessage()
}
 
function victory() {
    $("#statusmsg").text("Ви виграли!")
    $("#statusmsg").addClass("win")
    $("#statusmsg").show()
    gameRunning = false
    addMessage()
}

function timer(thisGameNumber) {
    if (!gameRunning || gameNumber != thisGameNumber) {
        return
    } else if (time < 0) {
        loss()
        return
    }

    if (progress <= tileCount) {
        $(".statusbar span").text(`${Math.floor(time/60).toString().padStart(2, "0")}:${(time%60).toString().padStart(2, "0")}`)
        time--
        setTimeout(timer, 1000, thisGameNumber)
    } else {
        time = -1
    }
}

$(document).ready(function(){
    initialize()
})