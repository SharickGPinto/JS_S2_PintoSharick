//// GET PARA OBTENER USUARIO ////
async function getUsuarios() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log("Usuarios:", data);
}


//// POST CREAR USUARITO ///////
async function createusuarito(nombre, email) {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nombre,
      email: email
    })
  });
  const data = await resp.json();
  console.log("Usuario creado:", data);
}


//// PUT ACTUALIZAR USUARITO /////
async function actualizarusuarito(id, nuevoNombre) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nuevoNombre
    })
  });
  const data = await resp.json();
  console.log("Usuario actualizado:", data);
}

/// ELIMINAR USUARIO /////
async function deleteusuarito(id) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE"
  });
  console.log("Usuario eliminado, status:", resp.status);
}


