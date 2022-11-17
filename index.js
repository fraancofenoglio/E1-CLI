const fs = require("fs");

let total = ""
let ac = 0

function agregarGasto(...gastos) {

    for (let i = 0; i < gastos.length; i++) {
        const gasto = gastos[i];
        ac = ac + gasto
        total += `"Gasto-${i}": "$${gasto}",\n`
    }
    return total = `{\n${total}\n"Total": "$${ac}"\n}`
}

agregar = agregarGasto(40,10,10)

fs.writeFile("gastos.json", agregar, (err) => {
    if (err) throw err
    console.log("Archivo creado exitosamente")
})
