// JS/Usuario.js

let usuarios = [
{
    idUsuario: 1,
    nombre: "Juan",
    apellidos: "Perez Rodriguez",
    telefono: "4771234567",
    tarjeta: {
        numTarjeta: "1234567890123456",
        mm: "12",
        yy: "28",
        cvv: "123",
        nombreTitular: "Juan Perez R"
    },
    direccion: {
        calle: "Emilio Carranza",
        numCalle: "105",
        colonia: "Centro",
        ciudad: "León",
        estado: "Guanajuato",
        codigoPostal: "37000"
    },
    activo: 1
},
{
    idUsuario: 2,
    nombre: "Maria",
    apellidos: "Lopez Hernandez",
    telefono: "4779876543",
    tarjeta: {
        numTarjeta: "9876543210987654",
        mm: "05",
        yy: "26",
        cvv: "456",
        nombreTitular: "Maria Lopez H"
    },
    direccion: {
        calle: "Bosque de Eucaliptos",
        numCalle: "50",
        colonia: "Bosques de la Presa",
        ciudad: "León",
        estado: "Guanajuato",
        codigoPostal: "37100"
    },
    activo: 1
}
];

function cargarUsuarios() {
    document.getElementById("contenido").style.display = 'flex';
    // Nota: El path se asume de la misma manera que en Sucursal.js
    fetch("/Html/Usuario.html") 
        .then(response => response.text())
        .then(response => {
            document.getElementById("contenido").innerHTML = response;
            cargarCatUsuario();
        });
}

function cargarCatUsuario(){
    let contTabla = "";
    
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        contTabla += "<tr>";
        contTabla += "<td>" + usuario.idUsuario + "</td>";
        contTabla += "<td>" + usuario.nombre + "</td>";
        contTabla += "<td>" + usuario.apellidos + "</td>";
        contTabla += "<td>" + usuario.telefono + "</td>";
        contTabla += "<td>" + usuario.tarjeta.numTarjeta.slice(-4) + "</td>"; // Mostrar solo los últimos 4 dígitos
        contTabla += "<td>" + usuario.direccion.ciudad + "</td>";
        contTabla += "<td>" + usuario.activo + "</td>";
        contTabla += "<td>" + "<button onclick='verDatosUsuario(" + i + ");'><i class=\"fa-solid fa-eye\"></i> Ver</button>" + "</td>";
        contTabla += "<td>" + "<button onclick='eliminarUsuario(" + i + ");'><i class=\"fa-solid fa-delete-left\"> Eliminar</i></button>" + "</td>"; 
        contTabla += "</tr>";
    }
    
    document.getElementById("tbUsuario").innerHTML = contTabla;
}

function eliminarUsuario(i){
    usuarios.splice(i,1);
    cargarCatUsuario();
    Swal.fire({
        icon:"error",
        title:"Eliminación",
        text:"Eliminación de usuario completa"
    });
}

function verDatosUsuario(i) {
    // Nota: El path se asume de la misma manera que en Sucursal.js
    fetch("/Html/VerUsuario.html") 
    .then(response => response.text())
    .then(html => {
        document.getElementById("ver").innerHTML = html;

        let usuario = usuarios[i];
        document.getElementById("txtIdUsr").value = usuario.idUsuario;
        document.getElementById("txtNombreUsr").value = usuario.nombre;
        document.getElementById("txtApellidosUsr").value = usuario.apellidos;
        document.getElementById("txtTelefonoUsr").value = usuario.telefono;
        // Datos de Tarjeta
        document.getElementById("txtTarjetaNum").value = usuario.tarjeta.numTarjeta;
        document.getElementById("txtTarjetaMM").value = usuario.tarjeta.mm;
        document.getElementById("txtTarjetaYY").value = usuario.tarjeta.yy;
        document.getElementById("txtTarjetaCVV").value = usuario.tarjeta.cvv;
        document.getElementById("txtTarjetaTitular").value = usuario.tarjeta.nombreTitular;
        // Datos de Dirección
        document.getElementById("txtCalleUsr").value = usuario.direccion.calle;
        document.getElementById("txtNumeroUsr").value = usuario.direccion.numCalle;
        document.getElementById("txtColoniaUsr").value = usuario.direccion.colonia;
        document.getElementById("txtCiudadUsr").value = usuario.direccion.ciudad;
        document.getElementById("txtEstadoUsr").value = usuario.direccion.estado;
        document.getElementById("txtCPUsr").value = usuario.direccion.codigoPostal;
        document.getElementById("txtActivoUsr").value = usuario.activo;
    });
}

function insertarUsuario(){
    let nuevoId = usuarios[usuarios.length - 1].idUsuario + 1;
    let nombre = document.getElementById("txtNombreUsr").value;
    let apellidos = document.getElementById("txtApellidosUsr").value;
    let telefono = document.getElementById("txtTelefonoUsr").value;
    // Datos de Tarjeta
    let numTarjeta = document.getElementById("txtTarjetaNum").value;
    let mm = document.getElementById("txtTarjetaMM").value;
    let yy = document.getElementById("txtTarjetaYY").value;
    let cvv = document.getElementById("txtTarjetaCVV").value;
    let nombreTitular = document.getElementById("txtTarjetaTitular").value;
    // Datos de Dirección
    let calle = document.getElementById("txtCalleUsr").value;
    let numCalle = document.getElementById("txtNumeroUsr").value;
    let colonia = document.getElementById("txtColoniaUsr").value;
    let ciudad = document.getElementById("txtCiudadUsr").value;
    let estado = document.getElementById("txtEstadoUsr").value;
    let codigoPostal = document.getElementById("txtCPUsr").value;
    let activo = document.getElementById("txtActivoUsr").value;

    let nuevoUsuario = {
        idUsuario: nuevoId,
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        tarjeta: {
            numTarjeta: numTarjeta,
            mm: mm,
            yy: yy,
            cvv: cvv,
            nombreTitular: nombreTitular
        },
        direccion: {
            calle: calle,
            numCalle: numCalle,
            colonia: colonia,
            ciudad: ciudad,
            estado: estado,
            codigoPostal: codigoPostal
        },
        activo: activo
    };

    usuarios.push(nuevoUsuario);
    cargarCatUsuario();
    cancelarUsuario();
    
    Swal.fire({
        icon: "success",
        title: "Inserción",
        text: "Inserción de usuario completa"
    });
}

function modificarUsuario(){
    let idUsuarioModificar = parseInt(document.getElementById("txtIdUsr").value);
    let nombre = document.getElementById("txtNombreUsr").value;
    let apellidos = document.getElementById("txtApellidosUsr").value;
    let telefono = document.getElementById("txtTelefonoUsr").value;
    // Datos de Tarjeta
    let numTarjeta = document.getElementById("txtTarjetaNum").value;
    let mm = document.getElementById("txtTarjetaMM").value;
    let yy = document.getElementById("txtTarjetaYY").value;
    let cvv = document.getElementById("txtTarjetaCVV").value;
    let nombreTitular = document.getElementById("txtTarjetaTitular").value;
    // Datos de Dirección
    let calle = document.getElementById("txtCalleUsr").value;
    let numCalle = document.getElementById("txtNumeroUsr").value;
    let colonia = document.getElementById("txtColoniaUsr").value;
    let ciudad = document.getElementById("txtCiudadUsr").value;
    let estado = document.getElementById("txtEstadoUsr").value;
    let codigoPostal = document.getElementById("txtCPUsr").value;
    let activo = document.getElementById("txtActivoUsr").value;

    let indice = -1;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].idUsuario === idUsuarioModificar) {
            indice = i;
            break;
        }
    }

    if (indice !== -1) {
        usuarios[indice].nombre = nombre;
        usuarios[indice].apellidos = apellidos;
        usuarios[indice].telefono = telefono;
        // Tarjeta
        usuarios[indice].tarjeta.numTarjeta = numTarjeta;
        usuarios[indice].tarjeta.mm = mm;
        usuarios[indice].tarjeta.yy = yy;
        usuarios[indice].tarjeta.cvv = cvv;
        usuarios[indice].tarjeta.nombreTitular = nombreTitular;
        // Dirección
        usuarios[indice].direccion.calle = calle;
        usuarios[indice].direccion.numCalle = numCalle;
        usuarios[indice].direccion.colonia = colonia;
        usuarios[indice].direccion.ciudad = ciudad;
        usuarios[indice].direccion.estado = estado;
        usuarios[indice].direccion.codigoPostal = codigoPostal;
        usuarios[indice].activo = activo;

        cargarCatUsuario();
        cancelarUsuario();
        Swal.fire({
            icon: "success",
            title: "Modificación",
            text: "Modificación de usuario completa"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Usuario no encontrado para modificar"
        });
    }
}


function cancelarUsuario() {
    document.getElementById("txtIdUsr").value = "";
    document.getElementById("txtNombreUsr").value = "";
    document.getElementById("txtApellidosUsr").value = "";
    document.getElementById("txtTelefonoUsr").value = "";
    // Tarjeta
    document.getElementById("txtTarjetaNum").value = "";
    document.getElementById("txtTarjetaMM").value = "";
    document.getElementById("txtTarjetaYY").value = "";
    document.getElementById("txtTarjetaCVV").value = "";
    document.getElementById("txtTarjetaTitular").value = "";
    // Dirección
    document.getElementById("txtCalleUsr").value = "";
    document.getElementById("txtNumeroUsr").value = "";
    document.getElementById("txtColoniaUsr").value = "";
    document.getElementById("txtCiudadUsr").value = "";
    document.getElementById("txtEstadoUsr").value = "";
    document.getElementById("txtCPUsr").value = "";
    document.getElementById("txtActivoUsr").value = "";
}