/* Autor:Víctor Martínez */
const Zod = require("./classes/Zod")

const z = new Zod()
const User = z.object({
    username: z.string().email(),
    password: z.string().nonEmpty()
})

const user = User.parse({username:"vito@gmail.com", password:"123"})
console.log(user)