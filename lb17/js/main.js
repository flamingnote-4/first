async function main() {
    let response = await fetch("js/labels.json")
    let json = await response.json()
    
    createElements(json)
    setupCalculator()
}

function createElements(json) {
    const calculator = document.createElement('div')
    calculator.id = 'calculator'
    calculator.style.display = 'grid'
    calculator.style.gridTemplateColumns = 'repeat(4, 1fr)'
    calculator.style.gap = '2vh'
    calculator.style.fontSize = '6vh'
    calculator.style.maxWidth = '62vh'
    calculator.style.margin = 'auto'
    
    for (var key in json) {
        const value = json[key]
        const element = document.createElement('button')
        
        if (value.row && value.column) {
            element.style.gridRow = value.row
            element.style.gridColumn = `${value.column} / span ${value.colspan || 1}`
        }
        
        if (value.class) {
            element.className = value.class
        }
        
        element.id = key
        element.textContent = value.label || key
        
        element.style.height = '14vh'
        element.style.padding = '1vh'
        element.style.fontSize = '1em'
        element.style.borderRadius = '100vh'
        element.style.border = 'none'
        
        if (value.class === 'title') {
            element.style.backgroundColor = '#000'
            element.style.color = 'white'
            element.style.textAlign = 'right'
            element.style.fontSize = 'clamp(1rem, 10vw, 12vh)'
            element.style.whiteSpace = 'nowrap'
            element.style.overflow = 'hidden'
            element.style.textOverflow = 'ellipsis'
            element.style.fontWeight = '100'
            element.style.width = 'min(62vh, 100vw)'
        } else {
            element.style.cursor = 'pointer'
            element.style.width = `${16*value.colspan - 2}vh`
        }
        
        if (value.class === 'special') {
            element.style.backgroundColor = '#b8b8b8'
            element.style.color = 'black'
        }
        
        if (value.class === 'number') {
            element.style.backgroundColor = '#2c2c2c'
            element.style.color = 'white'
        }
        
        if (value.class === 'operation') {
            element.style.backgroundColor = '#ff9800'
            element.style.color = 'white'
        }
        
        calculator.appendChild(element)
    }
    
    document.body.appendChild(calculator)
}

function setupCalculator() {
    let currentInput = ''
    let previousInput = ''
    let operation = null
    
    const buttons = document.querySelectorAll('#calculator button')
    
    let display = document.getElementById('title')

    document.body.style.backgroundColor = '#000'
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.id
            const label = button.textContent
            
            if (id === 'ac') {
                currentInput = ''
                previousInput = ''
                operation = null
                display.textContent = '0'
            }
            else if (id === 'negate') {
                if (currentInput !== '') {
                    currentInput = calculate(currentInput, "-1", 'multiply')
                    display.textContent = currentInput
                    previousInput = ''
                    operation = null
                }
            }
            else if (id === 'percent') {
                if (currentInput !== '') {
                    currentInput = calculate(currentInput, "100", 'divide')
                    display.textContent = currentInput
                    previousInput = ''
                    operation = null
                }
            }
            else if (id === 'result') {
                if (operation && previousInput !== '' && currentInput !== '') {
                    currentInput = calculate(previousInput, currentInput, operation)
                    display.textContent = currentInput
                    previousInput = ''
                    operation = null
                }
            }
            else if (id === 'plus' || id === 'minus' || id === 'multiply' || id === 'divide') {
                if (currentInput !== '') {
                    if (previousInput !== '') {
                        previousInput = calculate(previousInput, currentInput, operation)
                        display.textContent = previousInput
                    } else {
                        previousInput = currentInput
                    }
                    currentInput = ''
                    operation = id
                }
            }
            else if (id === 'decimal' || id === '0' || id === '1' || id === '2' || id === '3' || 
                     id === '4' || id === '5' || id === '6' || id === '7' || id === '8' || id === '9') {
                if (id === 'decimal' && currentInput.includes('.')) {
                    return
                }
                currentInput += label
                display.textContent = currentInput
            }
        })
    })
}

function calculate(num1, num2, operation) {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    
    switch(operation) {
        case 'plus':
            return (a + b).toString()
        case 'minus':
            return (a - b).toString()
        case 'multiply':
            return (a * b).toString()
        case 'divide':
            if (b === 0) {
                return 'Error'
            }
            return (a / b).toString()
        default:
            return num2
    }
}

main()