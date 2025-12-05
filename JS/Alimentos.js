let productos =[
{
        idProducto:1,
        nombre:"Enchiladas",
        descripcion:"5 Ricas enchiladas de pollo en salsa verde con queso fresco",
        foto:"",
        precio:75,
        idCategoria:1
},
{
        idProducto:2,
        nombre:"Birria",
        descripcion:"Rica birria con su consomé y sus tortillitas recien salidas del comal",
        foto:"",
        precio:105,
        idCategoria:2
},
{
        idProducto:3,
        nombre:"Enmoladas",
        descripcion:"Orden de 6 deliciosas enmoladas de pollo con queso fresco y cebolla encurtida",
        foto:"",
        precio:85,
        idCategoria:1
},
{
        idProducto:4,
        nombre:"Chilaquiles",
        descripcion:"Deliciosos chilaquiles con huevo,pollo y salsa a elección del cliente",
        foto:"",
        precio:75,
        idCategoria:1
},
];

function cargarAlimentos(){
        document.getElementById("contenido").style.display = 'flex';
        fetch("/Html/Alimentos.html")
        .then(response => response.text())
        .then(response => {
                document.getElementById("contenido").innerHTML = response;
                cargarCatAlimentos();
        });
}

function cargarCatAlimentos(){
        let contTabla = "";

        for (let i = 0; i < productos.length; i++) {
        contTabla += "<tr>";
        contTabla += "<td>" + productos[i].idProducto + "</td>";
        contTabla += "<td>" + productos[i].nombre + "</td>";
        contTabla += "<td>" + productos[i].descripcion + "</td>";
        contTabla += "<td>" + productos[i].foto + "</td>";
        contTabla += "<td>" + "$"+productos[i].precio + "</td>";
        contTabla += "<td>" + productos[i].idCategoria + "</td>";

        contTabla += "<td>" + "<button onclick='verDatosAlimento(" + i + ");'><i class=\"fa-solid fa-eye\"></i> Ver</button>" + "</td>";
        contTabla += "<td>" + "<button onclick='eliminarAlimento(" + i + ");'><i class=\"fa-solid fa-delete-left\"> Eliminar</i></button>" + "</td>"; 
        contTabla += "</tr>";
}
        document.getElementById("tbAlimentos").innerHTML = contTabla;
}

function eliminarAlimento(i){
        productos.splice(i,1);
        cargarCatAlimentos();
        Swal.fire({
        icon:"error",
        title:"elimincacion",
        text:"Eliminacion completa"
        });
}

function verDatosAlimento(i) {
        fetch("/Html/VerAlimentos.html")
        .then(response=> response.text())
        .then(html => {
                document.getElementById("ver").innerHTML = html;

        let producto=productos[i];
        document.getElementById("txtIdProducto").value = producto.idProducto;
        document.getElementById("txtNombreAli").value = producto.nombre;
        document.getElementById("txtDescripcion").value = producto.descripcion;
        document.getElementById("txtRutaFotoAli").value = producto.foto;
        document.getElementById("txtPrecio").value = producto.precio;
});
}

function insertarAlimento(){
        let ultimoID=productos.length-1;
        let idProducto=productos[ultimoID].idProducto+1;

        let nombre=document.getElementById("txtNombreAli").value;
        let descripcion=document.getElementById("txtDescripcion").value;
        let foto=document.getElementById("txtRutaFotoAli").value;
        let precio= document.getElementById("txtPrecio").value;
        let idCategoria = document.getElementById("txtIdCategoria").value;

        let producto ={
        idProducto:idProducto,nombre:nombre,
        descripcion:descripcion,foto:foto,
        precio:precio,idCategoria:idCategoria};

        productos[productos.length]=producto;
        cancelarAlimento();

        Swal.fire({
        icon: "success",
        title: "Inserción",
        text: "Inserción completa"
        });
}
function cancelarAlimento(){
        document.getElementById("txtIdProducto").value="";
        document.getElementById("txtNombreAli").value="";
        document.getElementById("txtDescripcion").value="";
        document.getElementById("txtRutaFotoAli").value="";
        document.getElementById("txtPrecio").value="";
        document.getElementById("txtIdCategoria").value="";
}

function modificarAlimento(){
        let idProductoModificar = parseInt(document.getElementById("txtIdProducto").value);

        let nombre = document.getElementById("txtNombreAli").value;
        let descripcion = document.getElementById("txtDescripcion").value;
        let foto = document.getElementById("txtRutaFotoAli").value; 
        let precio = document.getElementById("txtPrecio").value;
        let idCategoria = parseInt(document.getElementById("txtIdCategoria").value); 

        let indice = -1;
        for (let i = 0; i < productos.length; i++) {
        if (productos[i].idProducto === idProductoModificar) {
                indice = i;
                break;
        }
        }

        if (indice !== -1) {
        productos[indice].nombre = nombre;
        productos[indice].descripcion = descripcion;
        productos[indice].foto = foto;
        productos[indice].precio = precio; 
        productos[indice].idCategoria = idCategoria; 

        cargarCatAlimentos(); 
        cancelarAlimento();

        Swal.fire({
                icon: "success",
                title: "Modificación",
                text: "Modificación de producto completa"
        });
        } else {
        Swal.fire({
                icon: "error",
                title: "Error",
                text: "Producto no encontrado para modificar"
        });
        }
}