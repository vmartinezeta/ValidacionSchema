/* Autor:Víctor Martínez */
class ParserObject {
    constructor(objectType) {
        this.types = []
        this.objectType = objectType || undefined
    }

    parse(input) {
        if (typeof input === "object") {
            for (const entry of Object.entries(input)) {
                if (!this.objectType[entry.at(0)].isValid(entry.at(1))) {
                    throw new TypeError("No es valido")
                }
            }
            return input
        }
        
        for (const type of this.types) {
            if (!type.isValid(input)) {
                throw new TypeError("No es valido")
            }
        }
        return input
    }
}

module.exports = ParserObject