let sucursales = [
{
        idSucursal: 1,
        nombre: "Centro",
        latitud: "21.059122",
        longitud: "-101.67672",
        foto: "",
        urlWeb: "https://maps.app.goo.gl/LKVxgNxC7UooMuwz5",
        horarios: "Lunes a domingo de 08:00 - 14:00",
        calle: "Pedro Moreno",
        numCalle: "507",
        colonia: "Centro",
        ciudad: {
            nombre: "León",
            activo: 1
        }
},
{
    idSucursal: 2,
        nombre: "Principal",
        latitud: "21.059122",
        longitud: "-101.616232",
        foto: "",
        urlWeb: "https://maps.app.goo.gl/SaHgrrta2xRkVcqQ6",
        horarios: "Lunes a domingo de 08:00 - 14:00",
        calle: "San jose de buenaventura",
        numCalle: "316",
        colonia: "Refugio de San José",
        ciudad: {
            nombre: "Leon",
            activo: 1
        }
},
{
    idSucursal: 3,
        nombre: "Boulverad",
        latitud: "21.059991",
        longitud: "-101.610982",
        foto: "",
        urlWeb: "https://maps.app.goo.gl/jdPPinjCVXpsd7689",
        horarios: "Lunes a domingo de 08:00 - 14:00",
        calle: "Blvd Timoteo Lozano",
        numCalle: "5717",
        colonia: "Hacienda San José",
        ciudad: {
            nombre: "Leon",
            activo: 1
        }
},
{
    idSucursal: 4,
        nombre: "Leon 1",
        latitud: "21.129604",
        longitud: "-101.649791",
        foto: "",
        urlWeb: "https://maps.app.goo.gl/r99Dnw2oNLpJHvSE9",
        horarios: "Lunes a domingo de 08:00 - 14:00",
        calle: "Villa de los Olivos",
        numCalle: "311",
        colonia: "San Felipe de Jesús",
        ciudad: {
            nombre: "Leon",
            activo: 1
        }
},
{
    idSucursal: 5,
        nombre: "Leon 1",
        latitud: "21.116572",
        longitud: "-101.671776",
        foto: "",
        urlWeb: "https://maps.app.goo.gl/sJXPx6pSpbibSFP87",
        horarios: "Lunes a domingo de 08:00 - 14:00",
        calle: "Heroico colegio Militar",
        numCalle: "323",
        colonia: "Francisco Lozornio",
        ciudad: {
            nombre: "Leon",
            activo: 1
        }
}
];

function cargarSucursal() {
    document.getElementById("contenido").style.display = 'flex';
    fetch("/Html/Sucursal.html")
        .then(response => response.text())
        .then(response => {
            document.getElementById("contenido").innerHTML = response;
            cargarCatSucursal();
        });
    
}

function cargarCatSucursal(){
    let contTabla = "";
    
    for (let i = 0; i < sucursales.length; i++) {
        contTabla += "<tr>";
        contTabla += "<td>" + sucursales[i].idSucursal + "</td>";
        contTabla += "<td>" + sucursales[i].nombre + "</td>";
        contTabla += "<td>" + sucursales[i].latitud + "</td>";
        contTabla += "<td>" + sucursales[i].longitud + "</td>";
        contTabla += "<td>" + sucursales[i].foto + "</td>";
        contTabla += "<td>" + sucursales[i].urlWeb + "</td>";
        contTabla += "<td>" + sucursales[i].horarios + "</td>";
        contTabla += "<td>" + sucursales[i].calle + "</td>";
        contTabla += "<td>" + sucursales[i].numCalle + "</td>";
        contTabla += "<td>" + sucursales[i].colonia + "</td>";
        contTabla += "<td>" + sucursales[i].ciudad.nombre + "</td>";
        contTabla += "<td>" + sucursales[i].ciudad.activo + "</td>";

        contTabla += "<td>" + "<button onclick='verDatosSuc(" + i + ");'><i class=\"fa-solid fa-eye\"></i> Ver</button>" + "</td>";
        contTabla += "<td>" + "<button onclick='eliminarSuc(" + i + ");'><i class=\"fa-solid fa-delete-left\"> Eliminar</i></button>" + "</td>"; 
        contTabla += "</tr>";
    }
    
    document.getElementById("tbSucursal").innerHTML = contTabla;
}

function eliminarSuc(i){
    sucursales.splice(i,1);
    cargarCatSucursal();
    Swal.fire({
        icon:"error",
        title:"elimincacion",
        text:"Eliminacion completa"
    });
}

function verDatosSuc(i) {
    fetch("/Html/VerSucuusal.html")
    .then(response=> response.text())
    .then(html => {
        document.getElementById("ver").innerHTML = html;

    let sucursal=sucursales[i];
    document.getElementById("txtIdSuc").value = sucursal.idSucursal;
    document.getElementById("txtNombreSuc").value = sucursal.nombre;
    document.getElementById("txtLatitudSuc").value = sucursal.latitud;
    document.getElementById("txtLongitudSuc").value = sucursal.longitud;
    document.getElementById("txtRutaFotoSuc").value = sucursal.foto;
    document.getElementById("txtUrlSuc").value = sucursal.urlWeb;
    document.getElementById("txtHorariosSuc").value = sucursal.horarios;
    document.getElementById("txtCalleSuc").value = sucursal.calle;
    document.getElementById("txtNumeroSuc").value = sucursal.numCalle;
    document.getElementById("txtColoniaSuc").value = sucursal.colonia;
    document.getElementById("txtCiudadSuc").value = sucursal.ciudad.nombre;
    document.getElementById("txtActivoSuc").value = sucursal.activo;
});
}

function insertarSuc(){
    let ultimoID=sucursales.length-1;
    let idSucursal=sucursales[ultimoID].idSucursal+1;
    let nombre = document.getElementById("txtNombreSuc").value;
    let latitud = document.getElementById("txtLatitudSuc").value;
    let longitud = document.getElementById("txtLongitudSuc").value;
    let foto = document.getElementById("txtRutaFotoSuc").value;
    let urlWeb = document.getElementById("txtUrlSuc").value;
    let horarios = document.getElementById("txtHorariosSuc").value;
    let calle = document.getElementById("txtCalleSuc").value;
    let numCalle = document.getElementById("txtNumeroSuc").value;
    let colonia = document.getElementById("txtColoniaSuc").value;
    let ciudad = document.getElementById("txtCiudadSuc").value;
    let activo = document.getElementById("txtActivoSuc").value;

    let sucursal = {
        idSucursal: idSucursal,nombre: nombre,
        latitud: latitud,longitud: longitud,
        foto: foto,urlWeb: urlWeb,
        horarios: horarios,calle: calle,
        numCalle: numCalle,colonia: colonia,
        ciudad: {nombre:ciudad},activo: activo};

        sucursales[sucursales.length]=sucursal;
        cancelarSuc();
        
        Swal.fire({
        icon: "success",
        title: "Inserción",
        text: "Inserción completa"
        });
}


function cancelarSuc() {
    document.getElementById("txtIdSuc").value = "";
    document.getElementById("txtNombreSuc").value = "";
    document.getElementById("txtLatitudSuc").value = "";
    document.getElementById("txtLongitudSuc").value = "";
    document.getElementById("txtRutaFotoSuc").value = "";
    document.getElementById("txtUrlSuc").value = "";
    document.getElementById("txtHorariosSuc").value = "";
    document.getElementById("txtCalleSuc").value = "";
    document.getElementById("txtNumeroSuc").value = "";
    document.getElementById("txtColoniaSuc").value = "";
    document.getElementById("txtCiudadSuc").value = "";
    document.getElementById("txtActivoSuc").value = "";
}
//preguntar maniana para cambiar este pedo
function modificarSuc(){
    let idSucursalModificar = parseInt(document.getElementById("txtIdSuc").value);
    let nombre = document.getElementById("txtNombreSuc").value;
    let latitud = document.getElementById("txtLatitudSuc").value;
    let longitud = document.getElementById("txtLongitudSuc").value;
    let foto = document.getElementById("txtRutaFotoSuc").value;
    let urlWeb = document.getElementById("txtUrlSuc").value;
    let horarios = document.getElementById("txtHorariosSuc").value;
    let calle = document.getElementById("txtCalleSuc").value;
    let numCalle = document.getElementById("txtNumeroSuc").value;
    let colonia = document.getElementById("txtColoniaSuc").value;
    let ciudadNombre = document.getElementById("txtCiudadSuc").value;
    let activo = document.getElementById("txtActivoSuc").value;

    let indice = -1;
    for (let i = 0; i < sucursales.length; i++) {
        if (sucursales[i].idSucursal === idSucursalModificar) {
            indice = i;
            break;
        }
    }

    if (indice !== -1) {
        sucursales[indice].nombre = nombre;
        sucursales[indice].latitud = latitud;
        sucursales[indice].longitud = longitud;
        sucursales[indice].foto = foto;
        sucursales[indice].urlWeb = urlWeb;
        sucursales[indice].horarios = horarios;
        sucursales[indice].calle = calle;
        sucursales[indice].numCalle = numCalle;
        sucursales[indice].colonia = colonia;
        sucursales[indice].ciudad.nombre = ciudadNombre; 
        sucursales[indice].ciudad.activo = activo;

        cargarCatSucursal();
        cancelarSuc();
        Swal.fire({
            icon: "success",
            title: "Modificación",
            text: "Modificación de sucursal completa"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Sucursal no encontrada para modificar"
        });
    }
}