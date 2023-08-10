let tblUsuarios,tblLectores, tblGeneraciones,tblCarrerass,tblRoles,tblPrestamos,tblEstadias;
document.addEventListener("DOMContentLoaded", function() {
    tblUsuarios =$('#tblUsuarios').DataTable( {
        ajax: {
            url: base_url + "Usuarios/listar",
            dataSrc: ''
        },
        columns: [
            {
            'data' : 'id' 
            },
            {
            'data' : 'usuario'
            },
            {
            'data' : 'nombre'
            },
            {
           'data' : 'caja'
            },
            {
            'data' : 'estado'
            },
            {
            'data' : 'acciones'
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
    ]
    } );
    //FIN DE LA TABLA USUARIOS
    tblCarrerass =$('#tblCarrerass').DataTable( {
        ajax: {
            url: base_url + "Carrerass/listar",
            dataSrc: ''
        },
        columns: [
            {
            'data' : 'id' 
            },
            {
            'data' : 'nombre'
            },
            {
           'data' : 'abreviatura'
            },
            {
            'data' : 'estado'
            },
            {
            'data' : 'acciones'
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
    ]
    } );
    //FIN DE LA TABLA CARRERASS
    tblLectores =$('#tblLectores').DataTable( {
        ajax: {
            url: base_url + "Lectores/listar",
            dataSrc: ''
        },
        columns: [
            {
            'data' : 'id' 
            },
            {
            'data' : 'dni'
            },
            {
            'data' : 'nombre'
            },
            {
           'data' : 'telefono'
            },
            {
            'data' : 'direccion'
            },
            {
            'data' : 'estado'
            },
            {
            'data' : 'acciones'
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
    ]
    } );
    //FIN TABLA LECTORES
    tblGeneraciones =$('#tblGeneraciones').DataTable( {
        ajax: {
            url: base_url + "Generaciones/listar",
            dataSrc: ''
        },
        columns: [
            {
            'data' : 'id' 
            },
            {
            'data' : 'inicio'
            },
            {
            'data' : 'final'
            },
            {
            'data' : 'estado'
            },
            {
            'data' : 'acciones'
        }],  language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
    ]
    } ); 
    //FIN TABLA GENERACIONES
    tblRoles =$('#tblRoles').DataTable( {
        ajax: {
            url: base_url + "Roles/listar",
            dataSrc: ''
        },
        columns: [
            {
            'data' : 'id' 
            },
            {
            'data' : 'caja'
            },
            {
            'data' : 'estado'
            },
            {
            'data' : 'acciones'
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
    ]
        
    } );
    //FIN TABLA ROLES
    tblPrestamos =$('#tblPrestamos').DataTable( {
        ajax: {
            url: base_url + "Prestamos/listar",
            dataSrc: ''
        },
        columns: [
            {
            'data' : 'id' 
            },
            {
            'data' : 'id_lector'
            },
            {
           'data' : 'fecha_prestamo'
            },
            {
            'data' : 'fecha_devolucion'
            },
            {
            'data' : 'estado'
            },
            {
            'data' : 'acciones'
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
    ]
    } );
    //FIN TABLA PRESTAMOS
    tblEstadias =$('#tblEstadias').DataTable( {
        ajax: {
            url: base_url + "Estadias/listar",
            dataSrc: ''
        },
        columns: [
            {
            'data' : 'id' 
            },
            {
            'data' : 'nombre'
            },
            {
           'data' : 'matricula'
            },
            {
            'data' : 'titulo'
            },
            {
            'data' : 'codigo'
            },
            {
            'data' : 'estante'
            },
            {
            'data' : 'color'
            },
            {
            'data' : 'carrera'
            },
            {
            'data' : 'generacion'
            },
            {
            'data' : 'estado'
            },
            {
            'data' : 'acciones'
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
    ]
    } );
    
})

function frmCambiarPass(e) {
        e.preventDefault();
        const actual = document.getElementById('clave_actual').value;
        const nueva = document.getElementById('clave_nueva').value;
        const confirmar = document.getElementById('confirmar_clave').value;
        if (actual == ''  || nueva == '' || confirmar =='') {
            alertas('todos los campos son obligatorios' , 'warning');
        }else{
         if (nueva != confirmar) {
            alertas('Las contraseñas no coinciden' , 'warning');
            return false;
            
         }else{
            const url = base_url + "Usuarios/CambiarPass";
            const frm = document.getElementById("frmCambiarPass");
            const http = new XMLHttpRequest();
            http.open("POST", url , true);
            http.send(new FormData(frm));
            http.onreadystatechange =function(){
                if (this.readyState ==4 && this.status == 200) {
                    console.log(this.responseText);
                    const res = JSON.parse(this.responseText);
                    $("#cambiarpass").modal("hide");
                    alertas(res.msg, res.icono);
                    frm.reset();
                }
            }
        }
    }
}

function frmUsuario() {
    document.getElementById("title").innerHTML = "Nuevo Usuario";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("claves").classList.remove("d-none");
    document.getElementById("frmUsuario").reset();
    $("#nuevo_usuario").modal("show");
    document.getElementById("id").value = "";
}
function registrarUser(e) {
    e.preventDefault();
    const usuario =document.getElementById("usuario");
    const nombre =document.getElementById("nombre");
    const clave =document.getElementById("clave");
    const confirmar =document.getElementById("confirmar");
    const caja =document.getElementById("caja");
    if (usuario.value ==""  || nombre.value == ""|| caja.value == "" ){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })  
    }else{
        const url = base_url + "Usuarios/registrar";
        const frm = document.getElementById("frmUsuario");
        const http = new XMLHttpRequest();
        http.open("POST", url , true);
        http.send(new FormData(frm));
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Usuario registrado con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      frm.reset();
                      $("#nuevo_usuario").modal("hide");
                      tblUsuarios.ajax.reload();
                }else if (res =="Modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Usuario Modificado con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      $("#nuevo_usuario").modal("hide");
                      tblUsuarios.ajax.reload();
                }else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                }
                
            }
        }
    }
   
}
function btnEditarUser(id){
    document.getElementById("title").innerHTML = "Actualizar Usuario";
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Usuarios/editar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                document.getElementById("id").value = res.id;
                document.getElementById("usuario").value = res.usuario;
                document.getElementById("nombre").value = res.nombre;
                document.getElementById("caja").value = res.id_caja;
                document.getElementById("claves").classList.add("d-none");
                $("#nuevo_usuario").modal("show");
            }
        } 
}
function btnEliminarUser(id){
    Swal.fire({
        title: 'Estas Seguro de Eliminar?',
        text: "El usuario no se eliminara de forma permanente,solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Usuarios/eliminar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Usuario eliminado con exito',
                        'success'
                      ) 
                      tblUsuarios.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}
function btnReingresarUser(id){
    Swal.fire({
        title: 'Estas Seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Usuarios/reingresar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Usuario reingresado con exito',
                        'success'
                      ) 
                      tblUsuarios.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}
//FIN USUARIOS

function frmCarreraa() {
    document.getElementById("title").innerHTML = "Nueva Carrera";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("frmCarreraa").reset();
    $("#nuevo_carreraa").modal("show");
    document.getElementById("id").value = "";
}
function registrarCarr(e) {
    e.preventDefault();
    const nombre =document.getElementById("nombre");
    const abreviatura =document.getElementById("abreviatura");
    if (nombre.value == ""|| abreviatura.value == "" ){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })  
    }else{
        const url = base_url + "Carrerass/registrar";
        const frm = document.getElementById("frmCarreraa");
        const http = new XMLHttpRequest();
        http.open("POST", url , true);
        http.send(new FormData(frm));
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Carrera registrado con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      frm.reset();
                      $("#nuevo_carreraa").modal("hide");
                      tblCarrerass.ajax.reload();
                }else if (res =="Modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Carrera Modificado con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      $("#nuevo_carreraa").modal("hide");
                       tblCarrerass.ajax.reload();
                }else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                }
                
            }
        }
    }
   
}
function btnEditarcarr(id){
    document.getElementById("title").innerHTML = "Actualizar Carrera";
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Carrerass/editar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                document.getElementById("id").value = res.id;
                document.getElementById("nombre").value = res.nombre;
                document.getElementById("abreviatura").value = res.abreviatura;
                $("#nuevo_carreraa").modal("show");
            }
        } 
}
function btnEliminarcarr(id){
    Swal.fire({
        title: 'Estas Seguro de Eliminar?',
        text: "El usuario no se eliminara de forma permanente,solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Carrerass/eliminar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Carrera eliminada con exito',
                        'success'
                      ) 
                      tblCarrerass.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}
function btnReingresarcarr(id){
    Swal.fire({
        title: 'Estas Seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Carrerass/reingresar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Carrera reingresado con exito',
                        'success'
                      ) 
                      tblCarrerass.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}
//FIN CARRERASS

function frmLector() {
    document.getElementById("title").innerHTML = "Nuevo Lector";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("frmLector").reset();
    $("#nuevo_Lector").modal("show");
    document.getElementById("id").value = "";
}
function registrarLec(e) {
    e.preventDefault();
    const dni =document.getElementById("dni");
    const nombre =document.getElementById("nombre");
    const telefono =document.getElementById("telefono");
    const direccion =document.getElementById("direccion");
    if (dni.value ==""  || nombre.value == "" || telefono.value == "" || direccion.value == "" ){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })  
    }else{
        const url = base_url + "Lectores/registrar";
        const frm = document.getElementById("frmLector");
        const http = new XMLHttpRequest();
        http.open("POST", url , true);
        http.send(new FormData(frm));
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Lector registrado con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      frm.reset();
                      $("#nuevo_Lector").modal("hide");
                     tblLectores.ajax.reload();
                }else if (res =="Modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Lector Modificado con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      $("#nuevo_Lector").modal("hide");
                      tblLectores.ajax.reload();
                }else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                }
                
            }
        }
    }
   
}
function btnEditarLE(id){
    document.getElementById("title").innerHTML = "Actualizar Lector";
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Lectores/editar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                document.getElementById("id").value = res.id;
                document.getElementById("dni").value = res.dni;
                document.getElementById("nombre").value = res.nombre;
                document.getElementById("telefono").value = res.telefono;
                document.getElementById("direccion").value = res.direccion;
                $("#nuevo_Lector").modal("show");
            }
        } 
}
function btnEliminarLE(id){
    Swal.fire({
        title: 'Estas Seguro de Eliminar?',
        text: "El usuario no se eliminara de forma permanente,solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Lectores/eliminar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Lector eliminado con exito',
                        'success'
                      ) 
                      tblLectores.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}
function btnReingresarLE(id){
    Swal.fire({
        title: 'Estas Seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Lectores/reingresar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Lector reingresado con exito',
                        'success'
                      ) 
                      tblLectores.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}
//FIN LECTORES

function frmGeneracion() {
    document.getElementById("title").innerHTML = "Nueva Generacion";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("frmGeneracion").reset();
    $("#nuevo_generacion").modal("show");
    document.getElementById("id").value = "";
}
function registrarGENE(e) {
    e.preventDefault();
    const inicio =document.getElementById("inicio");
    const final =document.getElementById("final");
    if (inicio.value == ""|| final.value == "" ){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })  
    }else{
        const url = base_url + "Generaciones/registrar";
        const frm = document.getElementById("frmGeneracion");
        const http = new XMLHttpRequest();
        http.open("POST", url , true);
        http.send(new FormData(frm));
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Generacion registrada con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      frm.reset();
                      $("#nuevo_generacion").modal("hide");
                     tblGeneraciones.ajax.reload();
                }else if (res =="Modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Generacion Modificada con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      $("#nuevo_generacion").modal("hide");
                      tblGeneraciones.ajax.reload();
                }else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                }
                
            }
        }
    }
   
}
function btnEditarGENE(id){
    document.getElementById("title").innerHTML = "Actualizar Generacion";
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Generaciones/editar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                document.getElementById("id").value = res.id;
                document.getElementById("inicio").value = res.inicio;
                document.getElementById("final").value = res.final;
                $("#nuevo_generacion").modal("show");
            }
        } 
}
function btnEliminarGENE(id){
    Swal.fire({
        title: 'Estas Seguro de Eliminar?',
        text: "La generacion no se eliminara de forma permanente,solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Generaciones/eliminar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Generacion eliminada con exito',
                        'success'
                      ) 
                      tblGeneraciones.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}
function btnReingresarGENE(id){
    Swal.fire({
        title: 'Estas Seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Generaciones/reingresar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Generacion reingresada con exito',
                        'success'
                      ) 
                      tblGeneraciones.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}

//FIN GENERACION

function frmRol() {
    document.getElementById("title").innerHTML = "Nuevo Rol";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("frmRol").reset();
    $("#nuevo_rol").modal("show");
    document.getElementById("id").value = "";
}
function registrarRol(e) {
    e.preventDefault();
    const caja =document.getElementById("caja");
    if (caja.value == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })  
    }else{
        const url = base_url + "Roles/registrar";
        const frm = document.getElementById("frmRol");
        const http = new XMLHttpRequest();
        http.open("POST", url , true);
        http.send(new FormData(frm));
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Carrera registrado con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      frm.reset();
                      $("#nuevo_rol").modal("hide");
                     tblRoles.ajax.reload();
                }else if (res =="Modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Carrera Modificado con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      $("#nuevo_rol").modal("hide");
                       tblRoles.ajax.reload();
                }else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                }
                
            }
        }
    }
   
}
function btnEditarROL(id){
    document.getElementById("title").innerHTML = "Actualizar Carrera";
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Roles/editar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                document.getElementById("id").value = res.id;
                document.getElementById("caja").value = res.caja;
                $("#nuevo_rol").modal("show");
            }
        } 
}
function btnEliminarROL(id){
    Swal.fire({
        title: 'Estas Seguro de Eliminar?',
        text: "El usuario no se eliminara de forma permanente,solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Roles/eliminar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Carrera eliminada con exito',
                        'success'
                      ) 
                      tblRoles.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}
function btnReingresarROL(id){
    Swal.fire({
        title: 'Estas Seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Roles/reingresar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Carrera reingresado con exito',
                        'success'
                      ) 
                      tblRoles.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}

//FIN ROLES

function frmPrestamos() {
    document.getElementById("title").innerHTML = "Nuevo Prestamo";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("frmPrestamos").reset();
    $("#nuevo_prestamos").modal("show");
    document.getElementById("id").value = "";
}
function registrarPRESTAMO(e) {
    e.preventDefault();
    const id_lector =document.getElementById("id_lector");
    const fecha_prestamo =document.getElementById("fecha_prestamo");
    const fecha_devolucion =document.getElementById("fecha_devolucion");
    if (id_lector.value ==""  || fecha_prestamo.value == ""|| fecha_devolucion.value == "" ){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })  
    }else{
        const url = base_url + "Prestamos/registrar";
        const frm = document.getElementById("frmPrestamos");
        const http = new XMLHttpRequest();
        http.open("POST", url , true);
        http.send(new FormData(frm));
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Prestamo registrado con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      frm.reset();
                      $("#nuevo_prestamos").modal("hide");
                      tblPrestamos.ajax.reload();
                }else if (res =="Modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Prestamo Modificado con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      $("#nuevo_prestamos").modal("hide");
                      tblPrestamos.ajax.reload();
                }else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                }
                
            }
        }
    }
   
}
function btnEditarPresta(id){
    document.getElementById("title").innerHTML = "Actualizar Prestamo";
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Prestamos/editar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                document.getElementById("id").value = res.id;
                document.getElementById("id_lector").value = res.id_lector;
                document.getElementById("fecha_prestamo").value = res.fecha_prestamo;
                document.getElementById("fecha_devolucion").value = res.fecha_devolucion;
                $("#nuevo_prestamos").modal("show");
            }
        } 
}
function btnEliminarPresta(id){
    Swal.fire({
        title: 'Estas Seguro de Eliminar?',
        text: "El usuario no se eliminara de forma permanente,solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Prestamos/eliminar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Usuario eliminado con exito',
                        'success'
                      ) 
                      tblPrestamos.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}
function btnReingresarPresta(id){
    Swal.fire({
        title: 'Estas Seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Prestamos/reingresar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Usuario reingresado con exito',
                        'success'
                      ) 
                      tblPrestamos.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
        }
      })
}
//FIN 
function frmestadia() {
    document.getElementById("title").innerHTML = "Nueva Estadia";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("frmestadia").reset();
    $("#nuevo_estadia").modal("show");
    document.getElementById("id").value ="";
}
function registrarestadia(e) {
    e.preventDefault();
    const nombre =document.getElementById("nombre");
    const matricula =document.getElementById("matricula");
    const titulo =document.getElementById("titulo");
    const codigo =document.getElementById("codigo");
    const estante =document.getElementById("estante");
    const color =document.getElementById("color");
    const carrera =document.getElementById("carrera");
    const generacion =document.getElementById("generacion");
    if (nombre.value == "" || matricula.value == ""|| titulo.value == "" || codigo.value == "" || estante.value == "" || color.value == "" || carrera.value == "" || generacion.value == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })  
    }else{
        const url = base_url + "Estadias/registrar";
        const frm = document.getElementById("frmestadia");
        const http = new XMLHttpRequest();
        http.open("POST", url , true);
        http.send(new FormData(frm));
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) {    
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Estadia registrada con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      frm.reset();
                      $("#nuevo_estadia").modal("hide");
                      tblEstadias.ajax.reload();
                }else if (res =="Modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Estadia Modificada con exito',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                      $("#nuevo_estadia").modal("hide");
                      tblEstadias.ajax.reload();
                }else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                      }) 
                }
                
            }
        }
    }
   
}
function btnEditarES(id){
    document.getElementById("title").innerHTML = "Actualizar Estadia";
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Estadias/editar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                document.getElementById("id").value = res.id;
                document.getElementById("nombre").value = res.nombre;
                document.getElementById("matricula").value = res.matricula;
                document.getElementById("titulo").value = res.titulo;
                document.getElementById("codigo").value = res.codigo;
                document.getElementById("estante").value = res.estante;
                document.getElementById("color").value = res.color;
                document.getElementById("carrera").value = res.carrera;
                document.getElementById("generaciones").value = res.generaciones;
                $("#nuevo_estadia").modal("show");
            }
        } 
}
function btnEliminarES(id){
    Swal.fire({
        title: 'Estas Seguro de Eliminar?',
        text: "La Estadia no se eliminara de forma permanente,solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Estadias/eliminar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Estadia eliminada con exito',
                        'success'
                      ) 
                    tblEstadias.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}
function btnReingresarES(id){
    Swal.fire({
        title: 'Estas Seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
    const url = base_url + "Estadias/reingresar/"+id;
        const http = new XMLHttpRequest();
        http.open("GET", url , true);
        http.send();
        http.onreadystatechange =function(){
            if (this.readyState ==4 && this.status == 200) { 
                const res = JSON.parse(this.responseText);
                if (res== "ok") { 
                    Swal.fire(
                        'Mensaje!',
                        'Estadia reingresado con exito',
                        'success'
                      ) 
                     tblEstadias.ajax.reload();
                }else {
                    Swal.fire(
                        'Mensaje!',
                        res,
                        'error'
                      ) 
                }
            }
        } 
       
        }
      })
}

//fin cruds 

function Modificarempresa(){
    const frm = document.getElementById('frmEmpresa');
    const url = base_url + "Administracion/modificar";
        const http = new XMLHttpRequest();
        http.open("POST", url , true);
        http.send(new FormData(frm));
        http.onreadystatechange =function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if(res == 'ok'){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Datos Actualizados Correctamente',
                        showConfirmButton: false,
                        timer: 3000
                      }) 
            }
        }
    }
}

function alertas(mensaje,icono) {
    Swal.fire({
        position: 'top-end',
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
      }) 
}

function registrarpermisos(e) {
    e.preventDefault();
    const url = base_url + "Usuarios/registrarpermiso";
    const frm = document.getElementById("formulario");
    const http = new XMLHttpRequest();
    http.open("POST", url , true);
    http.send(new FormData(frm));
    http.onreadystatechange =function(){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            if (res != '') {
                alertas(res.msg,res.icono);
            }else{  
                alertas('error no identificado','error');
            }
        }
    }
}









