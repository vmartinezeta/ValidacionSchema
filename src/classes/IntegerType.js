class IntegerType {
    constructor() {
        this._unsigned = undefined
        this.cifrasMax = undefined
        this.cifrasMin = undefined
        this.largeDecimal = /(?<=[,\.]0*)[1-9]+/g
    }

    unsigned() {
        this._unsigned = /\d+/g
        return this
    }

    hasUnsigned() {
        return this._unsigned !== undefined
    }

    max(cifras) {
        this.cifrasMax = cifras
        return this
    }

    hasMax() {
        return this.cifrasMax !== undefined
    }

    min(cifras) {
        this.cifrasMin = cifras
        return this
    }

    hasMin() {
        return this.cifrasMin !== undefined
    }

    isString(input){
        return /[a-zA-Z\.]+/g.test(input)
    }

    isValid(input) {
        if(typeof input === "number") input = input + ""
        if (this.isString(input)) return false
        if (this.hasUnsigned() && this.largeDecimal.test(input)) return false
        if(this.hasUnsigned() && Number(input)<0) return false
        if (this.hasMin() && input.length < this.cifrasMin) return false
        if(this.hasMax() && input.length > this.cifrasMax) return false
        return true
    }
}


module.exports = IntegerType