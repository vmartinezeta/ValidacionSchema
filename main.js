// Autor:Víctor Martínez
import Zod from "./Zod.js"


const schema = Zod.create()
schema.string().nonEmpty().min(5).max(60)
const input = schema.parse("Víctor Martínez")
console.log(input)