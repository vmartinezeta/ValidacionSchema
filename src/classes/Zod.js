/* Autor:Víctor Martínez */
const DecimalType = require("./DecimalType")
const IntegerType = require("./IntegerType")
const ParserObject = require("./ParserObject")
const StringType = require("./StringType")

class Zod  extends ParserObject{
    constructor() {
        super()
    }

    decimal() {
        Object.assign(this, this.newInstance())
        const decimalType = new DecimalType()
        this.types.push(decimalType)
        return decimalType
    }

    string() {
        Object.assign(this, this.newInstance())
        const stringType = new StringType()
        this.types.push(stringType)
        return stringType
    }

    int() {
        Object.assign(this, this.newInstance())
        const intType = new IntegerType()
        this.types.push(intType)
        return intType
    }

    object(object) {
        return new ParserObject(object)
    }  

    newInstance() {
        return new Zod()
    }
}

module.exports = Zod