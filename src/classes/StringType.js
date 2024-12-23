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
        return this
    }

    hasOptional() {
        return this.empty !== undefined && this.empty
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
        return this
    }

    hasMax () {
        return this._max !== undefined
    }

    email() {
        this.empty = false
        this._email = /^(\w+@\w+\.\w+)$/
        return this
    }

    hasEmail () {
        return this._email !== undefined
    }

    isValid(input) {
        if ((this.hasOptional()|| this.hasNonEmpty) && input === undefined) {
            return false
        } else if (this.hasNonEmpty() && input.length===0 ) {
            return false
        } else if (this.hasNonEmpty() && this.hasEmail() && !this._email.test(input)) {
            return false
        } else if (this.hasNonEmpty() &&this.hasMin() && input.length < this._min) {
            return false
        } else if (this.hasNonEmpty() &&this.hasMax() && input.length > this._max) {
            return false
        }
        return true
    }
}

module.exports = StringType