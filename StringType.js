export default function StringType() {
    this._min = undefined
    this._max = undefined
    this.empty = undefined
    this._email = undefined
}

StringType.prototype = Object.create(StringType.prototype)
StringType.prototype.constructor = StringType

StringType.prototype.optional = function () {
    this.empty = true
}

StringType.prototype.nonEmpty = function () {
    this.empty = false
    return this
}

StringType.prototype.min = function (min) {
    this._min = min
    return this
}

StringType.prototype.max = function (max) {
    this._max = max
}

StringType.prototype.email = function () {
    this._email = /^(\w+@\w+\.\w+)$/
}

StringType.prototype.hasEmail = function () {
    return this._email !== undefined
}

StringType.prototype.hasOptional = function () {
    return this.empty !== undefined
}

StringType.prototype.hasNonEmpty = function () {
    return this.empty !== undefined && !this.empty
}

StringType.prototype.hasMin = function () {
    return this._min !== undefined
}

StringType.prototype.hasMax = function () {
    return this._max !== undefined
}