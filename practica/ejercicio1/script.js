

operaciones = true

while (operaciones) {
    
    let opciones = prompt(`================
    SELECCIONA LA OPERACION QUE DESEAS REALIZAR
    1. SUMA
    2. RESTA
    3. MULTIPLICACION
    4. DIVISION
    ==================`);
    if (opciones == "1"){
    let a =Number (prompt(`ESCRIBE EL PRIMER NUMERO` ))

    let b = Number  (prompt(`Escribe el segundo numero`))
    
        alert(a+b)
        
    } else if (opciones == "2"){
        let a =Number (prompt(`ESCRIBE EL PRIMER NUMERO` ))

    let b = Number  (prompt(`Escribe el segundo numero`))
    
        alert(a-b)
    }

        

    
    
}

