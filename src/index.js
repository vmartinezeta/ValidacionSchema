/* Autor:Víctor Martínez */
const Zod = require("./classes/Zod")

const schema = new Zod()
schema.decimal().max(2)
console.log(schema.parse("10.20"))