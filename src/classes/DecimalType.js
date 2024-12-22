/* Autor:Víctor Martínez */
class DecimalType {
    constructor() {
        this.largeDecimal = /(?<=[,\.]0*)[1-9]+/g
        this.cantidad = undefined
    }

    max(cantidad) {
        this.cantidad = cantidad
    }

    hasDecimal() {
        return this.largeDecimal !== undefined
    }

    hasShortDecimal() {
        return this.cantidad !== undefined
    }

    isValid(numero) {
        if (!this.hasShortDecimal()) {
            return this.largeDecimal.test(numero)
        }
        const regExp = /(?<=[,\.])\d+/g
        const matches = numero.match(regExp) || []
        return this.largeDecimal.test(numero) && matches.at(0).length === this.cantidad
    }
}

module.exports = DecimalType