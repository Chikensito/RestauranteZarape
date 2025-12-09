// =======================================================
// DATOS (Array inicial de Bebidas)
// =======================================================
let bebidas = [
    {id: 1, nombre: 'Agua Mineral', descripcion: 'Agua con gas, 600ml.', foto: '[Imagen]', precio: 25.00, categoria: 'Aguas', activo: 1},
    {id: 2, nombre: 'Jugo de Naranja', descripcion: 'Natural, recién exprimido.', foto: '[Imagen]', precio: 45.00, categoria: 'Jugos', activo: 1},
    {id: 3, nombre: 'Café Americano', descripcion: 'Café de grano oscuro.', foto: '[Imagen]', precio: 30.00, categoria: 'Cafés', activo: 0}
];

// Array temporal para almacenar los resultados de búsqueda
let bebidasFiltradas = [...bebidas];


// =======================================================
// FUNCIONES DE CARGA Y VISUALIZACIÓN
// =======================================================

function cargarBebidas() {
    document.getElementById('sucursal').innerHTML = '';
    if (document.getElementById('verBebida')) document.getElementById('verBebida').innerHTML = ''; 
    
    document.getElementById("contenido").style.display = 'flex';

    fetch("Bebidas.html") 
        .then(Response => Response.text())
        .then(response => {
            document.getElementById("contenido").innerHTML = response;
            
            // Configurar el evento de búsqueda
            configurarBusqueda();
            
            // Cargar todas las bebidas inicialmente
            bebidasFiltradas = [...bebidas];
            cargarCatBebidas();
        });
}

function cargarCatBebidas() {
    let contTabla = "";
    
    for (let i = 0; i < bebidasFiltradas.length; i++) {
        // Encontrar el índice real en el array original
        const indiceReal = bebidas.findIndex(b => b.id === bebidasFiltradas[i].id);
        const estatusDisplay = bebidasFiltradas[i].activo === 1 ? 'Activo' : 'Baja';
        
        contTabla += "<tr>";
        contTabla += "<td>" + bebidasFiltradas[i].id + "</td>";
        contTabla += "<td>" + bebidasFiltradas[i].nombre + "</td>";
        contTabla += "<td>" + bebidasFiltradas[i].descripcion + "</td>";
        contTabla += "<td>" + bebidasFiltradas[i].foto + "</td>"; 
        contTabla += "<td>$" + bebidasFiltradas[i].precio.toFixed(2) + "</td>";
        contTabla += "<td>" + bebidasFiltradas[i].categoria + "</td>";
        contTabla += "<td>" + estatusDisplay + "</td>"; 
        
        contTabla += "<td>" + "<button onclick='verDatosBebida(" + indiceReal + ");'><i class=\"fa-solid fa-eye\"></i> Ver</button>" + "</td>";
        contTabla += "<td>" + "<button onclick='eliminarBebida(" + indiceReal + ");'><i class=\"fa-solid fa-delete-left\"></i> ELIMINAR</button>" + "</td>"; 
        contTabla += "</tr>";
    }
    
    document.getElementById("tbBebidas").innerHTML = contTabla;
}


// =======================================================
// FUNCIÓN DE BÚSQUEDA (Nueva funcionalidad)
// =======================================================

function configurarBusqueda() {
    const inputBusqueda = document.querySelector('#control-section-bebidas input[type="text"]');
    const btnBuscar = document.querySelectorAll('#control-section-bebidas button')[1]; // Segundo botón
    const btnImprimir = document.querySelectorAll('#control-section-bebidas button')[2]; // Tercer botón
    
    // Búsqueda en tiempo real mientras se escribe
    inputBusqueda.addEventListener('input', realizarBusqueda);
    
    // Búsqueda al hacer clic en el botón
    btnBuscar.addEventListener('click', realizarBusqueda);
    
    // Búsqueda al presionar Enter
    inputBusqueda.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            realizarBusqueda();
        }
    });
    
    // Configurar botón de imprimir
    btnImprimir.addEventListener('click', imprimirResultados);
}

function realizarBusqueda() {
    const inputBusqueda = document.querySelector('#control-section-bebidas input[type="text"]');
    const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
    
    if (textoBusqueda === '') {
        // Si no hay texto de búsqueda, mostrar todas las bebidas
        bebidasFiltradas = [...bebidas];
    } else {
        // Filtrar bebidas por nombre, precio o categoría
        bebidasFiltradas = bebidas.filter(bebida => {
            const nombreCoincide = bebida.nombre.toLowerCase().includes(textoBusqueda);
            const categoriaCoincide = bebida.categoria.toLowerCase().includes(textoBusqueda);
            const precioCoincide = bebida.precio.toString().includes(textoBusqueda);
            
            return nombreCoincide || categoriaCoincide || precioCoincide;
        });
    }
    
    cargarCatBebidas();
    
    // Mostrar mensaje si no hay resultados
    if (bebidasFiltradas.length === 0) {
        document.getElementById("tbBebidas").innerHTML = 
            '<tr><td colspan="9" style="text-align:center; padding:20px;">No se encontraron bebidas que coincidan con la búsqueda.</td></tr>';
    }
}


// =======================================================
// FUNCIÓN DE IMPRESIÓN (Nueva funcionalidad)
// =======================================================

function imprimirResultados() {
    // Crear una ventana nueva para imprimir
    const ventanaImpresion = window.open('', '_blank');
    
    // Construir el HTML para impresión
    let htmlImpresion = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Bebidas - Impresión</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                h1 {
                    text-align: center;
                    color: #333;
                }
                .info-impresion {
                    text-align: right;
                    margin-bottom: 20px;
                    font-size: 12px;
                    color: #666;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #4CAF50;
                    color: white;
                }
                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
                .activo {
                    color: green;
                    font-weight: bold;
                }
                .baja {
                    color: red;
                }
                @media print {
                    button {
                        display: none;
                    }
                }
            </style>
        </head>
        <body>
            <h1>Catálogo de Bebidas</h1>
            <div class="info-impresion">
                <strong>Fecha de impresión:</strong> ${new Date().toLocaleDateString('es-MX')} ${new Date().toLocaleTimeString('es-MX')}<br>
                <strong>Total de bebidas:</strong> ${bebidasFiltradas.length}
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    // Agregar las filas de bebidas
    bebidasFiltradas.forEach(bebida => {
        const estadoClase = bebida.activo === 1 ? 'activo' : 'baja';
        const estadoTexto = bebida.activo === 1 ? 'Activo' : 'Baja';
        
        htmlImpresion += `
            <tr>
                <td>${bebida.id}</td>
                <td>${bebida.nombre}</td>
                <td>${bebida.descripcion}</td>
                <td>$${bebida.precio.toFixed(2)}</td>
                <td>${bebida.categoria}</td>
                <td class="${estadoClase}">${estadoTexto}</td>
            </tr>
        `;
    });
    
    htmlImpresion += `
                </tbody>
            </table>
            <br>
            <button onclick="window.print()" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; cursor: pointer; font-size: 16px;">
                Imprimir
            </button>
        </body>
        </html>
    `;
    
    // Escribir el HTML en la nueva ventana
    ventanaImpresion.document.write(htmlImpresion);
    ventanaImpresion.document.close();
    
    // Mostrar mensaje de confirmación
    Swal.fire({
        icon: 'info',
        title: 'Vista de Impresión',
        text: 'Se ha abierto una nueva ventana con la vista de impresión.',
        timer: 2000
    });
}


// =======================================================
// FUNCIÓN VER DATOS (Mejorada)
// =======================================================

function verDatosBebida(i) {
    document.getElementById("contenido").style.display = 'none'; 

    fetch("VerBebida.html")
    .then(response=> response.text())
    .then(html => {
        document.getElementById("verBebida").innerHTML = html;

        let bebida = bebidas[i];
        document.getElementById("txtIdBebida").value = bebida.id;
        document.getElementById("txtNombreBebida").value = bebida.nombre;
        document.getElementById("txtDescripcionBebida").value = bebida.descripcion;
        document.getElementById("txtRutaFotoBebida").value = bebida.foto;
        document.getElementById("txtPrecioBebida").value = bebida.precio;
        document.getElementById("txtCategoriaBebida").value = bebida.categoria;
        document.getElementById("txtActivoBebida").value = bebida.activo;

        // Guardar el índice para usar en modificación
        document.getElementById("verBebida").setAttribute('data-indice', i);

        // Mostrar/ocultar botones según el contexto
        const btnInsertar = document.querySelector('#verBebida button[onclick="insertarBebida();"]');
        const btnModificar = document.querySelector('#verBebida button[onclick="modificarBebida();"]');
        const btnEliminar = document.querySelector('#verBebida button[onclick*="eliminarBebida"]');
        
        if (btnInsertar) btnInsertar.style.display = 'none';
        if (btnModificar) btnModificar.style.display = 'inline-block';
        if (btnEliminar) btnEliminar.style.display = 'none';
    });
}


function mostrarFormularioAgregarBebida() {
    document.getElementById("contenido").style.display = 'none';
    
    fetch("VerBebida.html")
    .then(response=> response.text())
    .then(html => {
        document.getElementById("verBebida").innerHTML = html;
        
        // Limpiar campos para inserción
        document.getElementById("txtIdBebida").value = '';
        document.getElementById("txtNombreBebida").value = '';
        document.getElementById("txtDescripcionBebida").value = '';
        document.getElementById("txtRutaFotoBebida").value = '[Imagen]';
        document.getElementById("txtPrecioBebida").value = '';
        document.getElementById("txtCategoriaBebida").value = '';
        document.getElementById("txtActivoBebida").value = 1; 

        // Mostrar/ocultar botones según el contexto
        const btnInsertar = document.querySelector('#verBebida button[onclick="insertarBebida();"]');
        const btnModificar = document.querySelector('#verBebida button[onclick="modificarBebida();"]');
        const btnEliminar = document.querySelector('#verBebida button[onclick*="eliminarBebida"]');
        
        if (btnInsertar) btnInsertar.style.display = 'inline-block';
        if (btnModificar) btnModificar.style.display = 'none';
        if (btnEliminar) btnEliminar.style.display = 'none';
    });
}


// =======================================================
// CRUD (Mejorado)
// =======================================================

function insertarBebida() {
    let ultimoID = bebidas.reduce((max, b) => b.id > max ? b.id : max, 0);
    let idBebida = ultimoID + 1;

    let nombre = document.getElementById("txtNombreBebida").value.trim();
    let descripcion = document.getElementById("txtDescripcionBebida").value.trim();
    let precio = parseFloat(document.getElementById("txtPrecioBebida").value);
    let categoria = document.getElementById("txtCategoriaBebida").value.trim();
    
    // Validación mejorada
    if (!nombre || !descripcion || isNaN(precio) || precio <= 0 || !categoria) {
        Swal.fire({
            icon: "warning", 
            title: "Faltan Datos", 
            text: "Todos los campos son obligatorios y el precio debe ser mayor a 0."
        });
        return;
    }
    
    let nuevaBebida = {
        id: idBebida, 
        nombre: nombre, 
        descripcion: descripcion,
        foto: document.getElementById("txtRutaFotoBebida").value || '[Imagen]', 
        precio: precio, 
        categoria: categoria, 
        activo: 1
    };

    bebidas.push(nuevaBebida);
    
    Swal.fire({
        icon: "success", 
        title: "¡Bebida Agregada!", 
        text: `${nombre} se agregó correctamente al catálogo.`,
        timer: 2000
    });
    
    cancelarBebida();
}

function modificarBebida() {
    let idModificar = parseInt(document.getElementById("txtIdBebida").value);
    let indice = bebidas.findIndex(b => b.id === idModificar);

    if (indice !== -1) {
        let nombre = document.getElementById("txtNombreBebida").value.trim();
        let descripcion = document.getElementById("txtDescripcionBebida").value.trim();
        let precio = parseFloat(document.getElementById("txtPrecioBebida").value);
        let categoria = document.getElementById("txtCategoriaBebida").value.trim();
        
        // Validación
        if (!nombre || !descripcion || isNaN(precio) || precio <= 0 || !categoria) {
            Swal.fire({
                icon: "warning", 
                title: "Datos Inválidos", 
                text: "Todos los campos son obligatorios y el precio debe ser mayor a 0."
            });
            return;
        }
        
        bebidas[indice].nombre = nombre;
        bebidas[indice].descripcion = descripcion;
        bebidas[indice].foto = document.getElementById("txtRutaFotoBebida").value;
        bebidas[indice].precio = precio;
        bebidas[indice].categoria = categoria;
        bebidas[indice].activo = parseInt(document.getElementById("txtActivoBebida").value);

        Swal.fire({
            icon: "success", 
            title: "¡Modificación Exitosa!", 
            text: `${nombre} se actualizó correctamente.`,
            timer: 2000
        });
        
        cancelarBebida();
    } else {
        Swal.fire({
            icon: "error", 
            title: "Error", 
            text: "Bebida no encontrada para modificar"
        });
    }
}

function eliminarBebida(i) {
    let bebida = bebidas[i];
    
    Swal.fire({
        title: bebida.activo === 1 ? '¿Desactivar bebida?' : '¿Eliminar permanentemente?',
        text: bebida.activo === 1 
            ? `La bebida "${bebida.nombre}" será puesta en BAJA.` 
            : `La bebida "${bebida.nombre}" será eliminada permanentemente.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: bebida.activo === 1 ? 'Sí, desactivar' : 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            if (bebida.activo === 1) {
                bebida.activo = 0; 
                Swal.fire({
                    icon: "warning", 
                    title: "Bebida Desactivada", 
                    text: `${bebida.nombre} puesta en BAJA.`,
                    timer: 2000
                });
            } else {
                const nombreBebida = bebida.nombre;
                bebidas.splice(i, 1);
                Swal.fire({
                    icon: "success", 
                    title: "Bebida Eliminada", 
                    text: `${nombreBebida} eliminada permanentemente.`,
                    timer: 2000
                });
            }
            
            // Actualizar la vista
            bebidasFiltradas = [...bebidas];
            cargarCatBebidas();
        }
    });
}

function cancelarBebida() {
    document.getElementById("verBebida").innerHTML = '';
    cargarBebidas(); 
}