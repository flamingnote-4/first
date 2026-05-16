// 1
const weekdayNames = {
    en: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    ua: [
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П'ятниця",
        "Субота",
        "Неділя"
    ]
}

function getLang() {
    let langPrompt = prompt("Виберіть мову (ua / en)")
    let lang = langPrompt.toLowerCase()
    if (lang == "ua" || lang == "en") {
        return lang
    } else {
        return getLang()
    }
}

function getWeekNum() {
    let weekNumPrompt = prompt("Оберіть день тижня від 1 до 7.")
    let weekNum = parseInt(weekNumPrompt)
    if (!isNaN(weekNum) && weekNum > 0 && weekNum <= 7) {
        return weekNum - 1
    } else {
        return getWeekNum()
    }
}

function getWeekday() {
    let weekDay = {
        language: "",
        number: 0,
    }

    weekDay.language = getLang()
    weekDay.number = getWeekNum()

    alert(weekdayNames[weekDay.language][weekDay.number])
}

// 2
function parse(text) {
    text = text.replaceAll(' ', '')
    text = text.toLowerCase()
    let city = text.split(",")
    return city
}

function makeObjects(city) {
    let cityObjects = []
    city.forEach(element => {
        let data = element.split(":")
        if (isNaN(data[1]) || isNaN(data[2])) {
            return
        }

        let Object
        
        try {
            switch (data[0]) {
                case "pp": { Object = new PowerPlant(data[1], data[2]); break; }
                case "sol": { Object = new SolarPowerPlant(data[1], data[2]); break; }
                case "h": { Object = new House(data[1], data[2]); break; }
                case "opl": { Object = new PowerLine(data[1], data[2], data[3]); break; }
                default: {return;}
            }
        } catch(err) {
            alert(`Елемент ${element} буде пропущено: ${err.message}`)
            return
        }

        cityObjects.push(Object)
    });
    return cityObjects
}

function calculateTotalPower(elements, dayTime) {
    let powerGeneration = 0
    let powerUsage = 0
    let powerLines = 0
    let powerLinesPrice = 0

    elements.forEach(element => {
        switch (element.constructor.name) {
            case "PowerPlant": {
                powerGeneration += element.CalculatePowerGeneration()
                break
            }
            case "SolarPowerPlant": {
                powerGeneration += element.CalculatePowerGeneration(dayTime)
                break
            }
            case "House": {
                powerUsage += element.CalculatePowerUsage(dayTime)
                break
            }
            default: break
        }
    });
    elements.forEach(element => {
        if (Math.max(powerGeneration, powerUsage) < powerLines) {
            return
        }
        if (element.constructor.name == "PowerLine") {
            powerLines += element.CalculatePowerTransfer()
            powerLinesPrice += element.CalculatePriceTransfer()
        }
    });
    if (Math.min(powerGeneration, powerUsage) > powerLines) {
        alert("Недостатньо ліній електропередач.")
        return 0
    }
    console.log(dayTime ? "Вдень":"Вночі",
        "/ Виробництво:", powerGeneration,
        "/ Споживання:", powerUsage,
        "/ Баланс:", powerGeneration-powerUsage,
        "/ Електропередача", powerLines,
        "/ Ціна", powerLinesPrice
    )
    powerGeneration -= powerUsage
    return powerGeneration
}

function writeReport(dayPower, nightPower) {
    let result = "Вдень "
    if (dayPower > 0) {
        result += `потрібно продати ${dayPower} МВТ електрики.`
    } else if (dayPower < 0) {
        result += `потрібно закупити ${-dayPower} МВТ електрики.`
    } else {
        result += `не потрібно закупляти / продавати електрику.`
    }
    result += "\nВночі "
    if (nightPower > 0) {
        result += `потрібно продати ${nightPower} МВТ електрики.`
    } else if (nightPower < 0) {
        result += `потрібно закупити ${-nightPower} МВТ електрики.`
    } else {
        result += `не потрібно закупляти / продавати електрику.`
    }
    return result
}

function game() {
    const text = document.getElementById("task2").value
    const city = parse(text)
    const elements = makeObjects(city)

    let dayPowerBalance = calculateTotalPower(elements, true)
    let nightPowerBalance = calculateTotalPower(elements, false)

    let result = writeReport(dayPowerBalance, nightPowerBalance)
    
    alert(result)
    return
}