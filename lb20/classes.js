class PowerPlant {
    get lowerBound() { return 1 }
    get upperBound() { return 100 }
    constructor(mW, amount) {
        if (mW < this.lowerBound || mW > this.upperBound) {
            throw new Error(`зазначена кількість мегават поза межами (${this.lowerBound} - ${this.upperBound}).`)
        }
        this.mW = mW
        this.amount = amount || 1
    }
    CalculatePowerGeneration() {
        return this.mW * this.amount
    }
}

class SolarPowerPlant extends PowerPlant {
    get upperBound() { return 5 }
    CalculatePowerGeneration(dayTime) {
        if (dayTime) {
            return this.mW * this.amount
        } else {
            return 0
        }
    }
}

class House {
    get lowerBound() { return 1 }
    get upperBound() { return 400 }
    constructor(apartments, amount) {
        if (apartments < this.lowerBound || apartments > this.upperBound) {
            throw new Error(`зазначена кількість квартир поза межами (${this.lowerBound} - ${this.upperBound}).`)
        }
        this.apartments = apartments
        this.amount = amount || 1
    }
    #dayTimeUsage = 0.004
    #nightTimeUsage = 0.001
    CalculatePowerUsage(dayTime) {
        let powerUsage = this.apartments * this.amount
        if (dayTime) {
            powerUsage *= this.#dayTimeUsage
        } else {
            powerUsage *= this.#nightTimeUsage
        }
        return powerUsage
    }
}

class PowerLine {
    constructor(mW, price, amount) {
        this.mW = mW
        this.price = price
        this.amount = amount || 1
    }
    CalculatePowerTransfer() {
        return this.mW * this.amount
    }
    CalculatePriceTransfer() {
        return this.mW * this.amount * this.price
    }
}