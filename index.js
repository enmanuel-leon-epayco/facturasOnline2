const fs = require('fs');
let myJson = {
    "facturas3":[]
}
const array = Array.from(Array(25).keys())
const formatValue = (value) =>{
    return String(value) + String(value+1)+ String(value+2)
}
for (let index = 0; index < array.length; index++) {
    let value = index+1
    myJson.facturas3.push({
        "id": value,
        "doc": formatValue(value),
        "valor": 5000.25,
        "valor2": 70.41,
        "porcentaje": 50,
        "correo": "enmanuel.leon@epayco.com",
        "texto": "Factura " + value
    })
}
fs.writeFile ("input.json", JSON.stringify(myJson), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);