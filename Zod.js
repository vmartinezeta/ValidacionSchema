// Autor:Víctor Martínez
import StringType from "./StringType.js"

export default function Zod() {
    if (new.target) {
        throw new TypeError("No se puede instanciar")
    }
    this.stringType = null
}

Zod.blank = function () { }
Zod.context = Zod.blank.prototype
Zod.blank.prototype = Zod.prototype
Zod.context.constructor = Object

Zod.create = function () {
    const schema = new this.blank()
    this.apply(schema, arguments)
    return schema
}

Zod.prototype.string = function () {
    this.stringType = new StringType()
    return this.stringType
}

Zod.prototype.object = function () { }

Zod.prototype.parse = function (input) {
    if (this.stringType instanceof StringType && this.stringType.hasOptional() && input === undefined) {
        throw new TypeError("Falta argumento")
    } else if (this.stringType instanceof StringType && this.stringType.hasNonEmpty() && input.length === 0) {
        throw new TypeError("No puede estar vacio")
    } else if (this.stringType instanceof StringType 
        && this.stringType.hasNonEmpty()
        && this.stringType.hasEmail() && !this.stringType._email.test(input)) {
        throw new TypeError("No es un email")
    } else if (this.stringType instanceof StringType
        && this.stringType.hasNonEmpty()
        && this.stringType.hasMin() && input.length < this.stringType._min
    && !this.stringType.hasMax()) {
        throw new TypeError("No cumple los requisitos minimos")
    } else if (this.stringType instanceof StringType
        && this.stringType.hasNonEmpty()
        && this.stringType.hasMin() && input.length < this.stringType._min
        || this.stringType.hasMax() && input.length > this.stringType._max) {
        throw new TypeError("No cumple los requisitos minimos")
    }
    return input
}