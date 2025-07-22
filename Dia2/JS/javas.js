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
            let nuevo = {
                "monto": monto,
                "categoria": categoria,
                "Descripcion": Descripcion,
            };
            alert("el gasto fue guardado exitosamente");
            gasto.push(nuevo);
        }
        else if (guardar == "N") {
            alert("NO SE GUARDO NADA");
            break;
        }
        else {
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
                alert("Ver gastos"+
                    "Monto: " + gasto[i]["monto"] + "\n" +
                    "Categoria: " + gasto[i]["categoria"] + "\n" +
                    "Descripcion: " + gasto[i]["Descripcion"] + "\n"
                )
            };
        }
        else if (listar == "2") {
            let Fcategoria = gasto.length;
            for (i= 0; i<Fcategoria; i++) {
            prompt("SELECCIONE LA CATEGORIA" (alert("ver categorias"+
                "Categoria: " + gasto[i]["categoria"] + "\n" 
                )   ))
             
            };
        }



    }
}

//Desarrollado por Sharick Giovanna t.i 1098674201