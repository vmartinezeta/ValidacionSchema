/* Autor:Víctor Martínez */
class StringType {
    constructor() {
        this._min = undefined
        this._max = undefined
        this.empty = undefined
        this._email = undefined
    }

    optional() {
        this.empty = true
    }    

    hasOptional() {
        return this.empty !== undefined
    }

    nonEmpty() {
        this.empty = false
        return this
    }

    hasNonEmpty () {
        return this.empty !== undefined && !this.empty
    }

    min(min) {
        this._min = min
        return this
    }

    hasMin() {
        return this._min !== undefined
    }

    max (max) {
        this._max = max
    }

    hasMax () {
        return this._max !== undefined
    }

    email() {
        this._email = /^(\w+@\w+\.\w+)$/
    }

    hasEmail () {
        return this._email !== undefined
    }

    isValid(input) {
        if (!this.hasOptional() || !this.hasNonEmpty() || input === undefined) {
            return false
        } else if (this.hasNonEmpty() && input.length===0 ) {
            return false
        } else if (this.hasEmail() && !this._email.test(input)) {
            return false
        } else if (this.hasMin() && input.length < this._min) {
            return false
        } else if (this.hasMax() && input.length > this._max) {
            return false
        }
        return true
    }
}

module.exports = StringType