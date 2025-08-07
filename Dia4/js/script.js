let ingredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
]

let categorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]

let hamburguesas = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]

let chef = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]

tabla = true;

while (tabla) {
    let opcion = prompt(`#####################
======================================================
1. Ingredientes
2. Categorias   
3. Hamburguesas
4. Chef
5. Salir 
======================================================`);

    if (opcion == "1") {
        prompt(` Ingredietes
======================================================
    1. Ver ingredientes 
    2. Añadir Ingredientes
    3. Eliminar ingredientes
    4. Modificar ingredientes
===========================================================`);

    } if (opcion == "1") {
        let tdsIngre = ""
        for (let i = 0; i < ingredientes.length; i++) {
            tdsIngre += `${i + 1} - ${ingredientes[i].nombre}- ${ingredientes[i].descripcion} - ${ingredientes[i].precio}- ${ingredientes[i].stock}`;
        }
        alert(tdsIngre);
    } else if (opcion == "2") {
        let nombreIng = prompt("Nombre del nuevo ingrediente");
        let descripIng = prompt("Descripcion del nuevo ingrediente")
        let precioIng = parseInt(prompt("Ingrese el precio del nuevo ingrediente"));
        let stockIng = parseInt(prompt("Ingrese el stock del ingredinete"));

        let nuevoIng = {
            nombre: nombreIng,
            descripcion: descripIng,
            precio: precioIng,
            stock: stockIng
        }
        ingredientes.push(nuevoIng);

        let nuevoIngre = `Nombre - Descripcion - Precio - Stock`
        for (let i = 0; i < ingredientes.length; i++) {
            nuevoIng += `\n${i + 1} - ${ingredientes[i].nombre} - ${ingredientes[i].descripcion} - ${ingredientes[i].precio} - ${ingredientes[i].stock}`;
        }
        alert("La lista de ingredientes fue actualizada")
        alert("ingredientes agregados ---->")
        alert(nuevoIngre)
    } else if (tdsIngre == "3") {
        let borrarIng = parseInt(prompt("Ingrese el numero de ingredientes que desea eliminar"));
        ingredientes.splice(borrarIng, 1)
        alert(JSON.stringify(ingredientes, null, 2));
    } else if (tdsIngre == "4") {
        let nombreMo = prompt("nuevo nombre: ");
        let descripcionMo = prompt("nueva descripcion");
        let precioMo = prompt("nuevo precio");
        let sorckMo = prompt("nuevo stock");

        for (let i = 0; i < ingredientes.length; i++) {
            if (i == ingredientes) {
                ingredientes[i].nombre = nombreMo
                ingredientes[i].descripcion = descripcionMo
                ingredientes[i].precio = precioMo
                ingredientes[i].stock = sorckMo
                alert(JSON.stringify(ingredientes, null, 2));
            }
        }
    } else if (opcion == "2") {
        let categorias = prompt(`
        1. Ver categorías
        2. Añadir categorías
        3. Eliminar categorías
        4. Modificar categorías`);
        if (categorias = "1"){

        }

    }

}

