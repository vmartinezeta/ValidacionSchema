/* Autor:Víctor Martínez */
const DecimalType = require("./DecimalType")
const StringType = require("./StringType")

class Zod {
    constructor() {
        this.types = []
    }

    decimal() {
        const decimalType = new DecimalType()
        this.types.push(decimalType)
        return decimalType
    }

    string() {
        const stringType = new StringType()
        this.types.push(stringType)
        return stringType
    }

    parse(input) {
        for (const type of this.types) {
            if (!type.isValid(input)) {
                throw new TypeError("No es valido")
            }
        }
        return input
    }
}

module.exports = Zod