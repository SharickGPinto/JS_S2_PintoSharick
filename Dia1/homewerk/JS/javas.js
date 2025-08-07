//##############################
//####SIMULADOR DE GASTOS######
//#############################
gasto = []

menu = true;

while (menu) {
    let opcion = prompt(` 
    =============================================
            Simulador de Gasto Diario
    =============================================
    Seleccione una opción:
    1.Registrar nuevo gasto
    2.Listar gastos
    3.Calcular total de gastos
    4.Generar reporte de gastos
    5.Salir
    =============================================` );
    if (opcion == "1") {
        let monto = prompt("Monto del gasto:");
        let categoria = prompt("Categoría (ej. comida, transporte, entretenimiento, otros)");
        let Descripcion = prompt("Descripción (opcional)");
        let guardar = prompt("Ingrese 'S' para guardar o 'N' para cancelar.");
        if (guardar == "S") {
            let nuevoGasto = {
                "monto": monto,
                "categoria": categoria,
                "Descripcion": Descripcion,
            };

            gasto.push(nuevoGasto);
            alert("el gasto fue guardado exitosamente");
        }
        else if (guardar == "N") {
            alert("NO SE GUARDO NADA");
        } else {
            (alert("No puso nada bien, mal "));
            break;
        }
    }
    else if (opcion == "2") {
        let listar = prompt(`Listar Gastos
    =============================================
    Seleccione una opción para filtrar los gastos:

    1.Ver todos los gastos
    2.Filtrar por categoría
    3.Regresar al menú principal
    =============================================` );
        if (listar == "1") {
            let nlista = gasto.length;
            for (i = 0; i < nlista; i++) {
                alert("Ver gastos" +
                    "Monto: " + gasto[i]["monto"] + "\n" +
                    "Categoria: " + gasto[i]["categoria"] + "\n" +
                    "Descripcion: " + gasto[i]["Descripcion"] + "\n"
                )
            };
        }
        else if (listar == "2") {
            let categoriaF = prompt("Ingrese la categoria que desea filtrar (comida,transporte,entretenimiento,otros)");
            let encontrados = false;

            for (let i = 0; i < gasto.length; i++) {
                if (gasto[i]["categoria"].toLowercase() === categoriaF);
                alert("gasto" + (i + 1) +
                    `Monto` + gasto[i]["monto"] +
                    `categoria` + gasto[i]["categoria"] +
                    `Descripcion` + gasto[i]["descripcion"] + ``);
                encontrados = true;
            }
        };
        if (!encontrados) {
            alert("No se encontro gastos en la categoria");
        }
    }
    else if (opcion == "3") {
        let total = 0;
        for (let i = 0; i < gasto.length; i++) {
            total += gasto[i].monto;
        }
        alert("El total de los gastos registrados es $" + total.toFixed(2));
    }
    else if (opcion == "4") {
        let reporte = `reporte de gastos`
        for (let i = 0; i < gasto.length; i++) {
            reporte += `gasto ${i + 1}:\nMonto: $${gasto[i].monto}\nCategoría: ${gasto[i].categoria}\nDescripción: ${gasto[i].descripcion}\n\n`;
        }
        alert(reporte);
    }
    else if  (opcion == "5"){
        alert("saliste del simulador")
        menu = false;
    }


}

//Desarrollado por Sharick Giovanna t.i 1098674201