//##############################
//####SIMULADOR DE GASTOS######
//#############################
gasto=[]

menu= true;

while (menu){
    let opcion = prompt(` 
    =============================================
            Simulador de Gasto Diario
    =============================================
    1.Seleccione una opción:
    2.Registrar nuevo gasto
    3.Listar gastos
    4.Calcular total de gastos
    5.Generar reporte de gastos
    6.Salir
    =============================================` );
    if (opcion ==  "1"){
        let monto = prompt ("Monto del gasto:");
        let categoria = prompt("Categoría (ej. comida, transporte, entretenimiento, otros)");
        let Descripcion = prompt("Descripción (opcional)");
        let guardar = prompt ("Ingrese 'S' para guardar o 'C' para cancelar.");
        if (opcion == "S"){
            
        }
    }
}

//Desarrollado por Sharick Giovanna t.i 1098674201