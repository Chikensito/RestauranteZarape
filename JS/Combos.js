let combos = [
    {
        idCombo: 1,
        nombre: "Combo 1",
        descripcion: "1 torta y 3 tacos (incluye coca de 600 ml)",
        estatus: 1
    },
    {
        idCombo: 2,
        nombre: "Combo 2",
        descripcion: "3 quesadillas con cualquier guisado y un sprite de 600 ml",
        estatus: 1
    },
    {
        idCombo: 3,
        nombre: "Combo 3",
        descripcion: "2 burritos y una orden de nachos",
        estatus: 1
    },
    {
        idCombo: 4,
        nombre: "Combo niños",
        descripcion: "Quesadilla pequeña con un jugo de manzana del valle",
        estatus: 1
    },
];

function cargarCombos() {
    document.getElementById("contenido").style.display = 'flex';
    document.getElementById("ver").innerHTML = ''; 
    
    fetch("/Html/Combos.html")
    .then(response => response.text())
    .then(htmlResponse => {
        // CORRECCIÓN: Se añade el punto y coma para separar sentencias
        document.getElementById("contenido").innerHTML = htmlResponse; 
        
        cargarTablaCombos();
    })
    .catch(error => {
        console.error("Error al cargar la plantilla de Combos.html:", error);
    });
}

function cargarTablaCombos() {
    let contTabla = "";

    for (let i = 0; i < combos.length; i++) {
        const estatusTexto = combos[i].estatus === 1 ? 'Activo' : 'Inactivo';

        contTabla += "<tr>";
        contTabla += "<td>" + combos[i].idCombo + "</td>";
        contTabla += "<td>" + combos[i].nombre + "</td>";
        contTabla += "<td>" + combos[i].descripcion + "</td>";
        contTabla += "<td>" + estatusTexto + "</td>"; 
        contTabla += "<td>" + "<button onclick='verDatosCombo(" + i + ");'><i class=\"fa-solid fa-eye\"></i> Ver</button>" + "</td>";
        contTabla += "<td>" + "<button onclick='eliminarCombo(" + i + ");'><i class=\"fa-solid fa-delete-left\"></i> Eliminar</button>" + "</td>"; 
        contTabla += "</tr>";
    }
    // Asumiendo que el tbody en Combos.html tiene el ID 'tbAlimentos'
    document.getElementById("tbAlimentos").innerHTML = contTabla; 
}

function eliminarCombo(i) {
    combos.splice(i, 1);
    cargarTablaCombos();
    document.getElementById("ver").innerHTML = ''; // Limpiar la Card
    Swal.fire({
        icon: "error",
        title: "Eliminación",
        text: "Eliminación completa"
    });
}

function eliminarComboDesdeVista() {
    let idComboEliminar = parseInt(document.getElementById("txtIdCombo").value);

    let indice = -1;
    for (let i = 0; i < combos.length; i++) {
        if (combos[i].idCombo === idComboEliminar) {
            indice = i;
            break;
        }
    }

    if (indice !== -1) {
        eliminarCombo(indice); 
        cancelarCombo(); 
    } else {
        Swal.fire({ icon: "error", title: "Error", text: "Combo no encontrado para eliminar" });
    }
}

function verDatosCombo(i) {
    fetch("/Html/VerCombos.html")
    .then(response => response.text())
    .then(html => {
        // Insertamos el HTML de la Card en la sección 'ver'
        document.getElementById("ver").innerHTML = html;

        let combo = combos[i];
        document.getElementById("txtIdCombo").value = combo.idCombo;
        document.getElementById("txtNombreCombo").value = combo.nombre;
        document.getElementById("txtDescripcion").value = combo.descripcion;
        document.getElementById("txtEstatus").value = combo.estatus;
    });
}

function insertarCombo() {
    let ultimoID = combos.length > 0 ? combos[combos.length - 1].idCombo : 0;
    let idCombo = ultimoID + 1;

    let nombre = document.getElementById("txtNombreCombo").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let estatus = document.getElementById("txtEstatus").value ? parseInt(document.getElementById("txtEstatus").value) : 1; 

    let nuevoCombo = {
        idCombo: idCombo, 
        nombre: nombre,
        descripcion: descripcion, 
        estatus: estatus
    };

    combos.push(nuevoCombo);
    cargarTablaCombos();
    cancelarCombo(); 

    Swal.fire({ icon: "success", title: "Inserción", text: "Inserción completa" });
}

function cancelarCombo() {
    // Limpiamos el contenido HTML para que la Card desaparezca
    document.getElementById("ver").innerHTML = '';
}

function modificarCombo() {
    let idComboModificar = parseInt(document.getElementById("txtIdCombo").value);

    let nombre = document.getElementById("txtNombreCombo").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let estatus = parseInt(document.getElementById("txtEstatus").value); 

    let indice = -1;
    for (let i = 0; i < combos.length; i++) {
        if (combos[i].idCombo === idComboModificar) {
            indice = i;
            break;
        }
    }

    if (indice !== -1) {
        combos[indice].nombre = nombre;
        combos[indice].descripcion = descripcion;
        combos[indice].estatus = estatus; 

        cargarTablaCombos(); 
        cancelarCombo();

        Swal.fire({ icon: "success", title: "Modificación", text: "Modificación de combo completa" });
    } else {
        Swal.fire({ icon: "error", title: "Error", text: "Combo no encontrado para modificar" });
    }
}