<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Panel de Administracion</title>
        <link rel = "icon" href="http://utparral.edu.mx/logotipos/UTP.png">
        <link href="<?php echo base_url; ?>Assets/css/styles.css" rel="stylesheet">
        <link href="<?php echo base_url; ?>Assets/css/estilos.css" rel="stylesheet">
        <link href="<?php echo base_url; ?>Assets/DataTables/datatables.min.css" rel="stylesheet" crossorigin="anonymous" />
        <script src="<?php echo base_url; ?>Assets/js/all.min.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    </head>
    <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="<?php echo base_url; ?>Administracion/home">  
            <img src="Assets/img/LOGO.png" width="90" height="50"></a>
            <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
  
            <!-- Navbar-->
            <ul class="navbar-nav ml-auto ">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#cambiarpass"><i class="fa-solid fa-id-badge mr-2"></i>Perfil</a>
                       
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<?php echo base_url; ?>Usuarios/salir"><i class="fa-solid fa-right-from-bracket mr-2"></i>Cerrar Sesion</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-house fa-2x"></i></div>
                                Administracion
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="<?php echo base_url;?>Usuarios"><i class="fa-solid fa-user-plus mr-2 "></i>Usuarios</a>
                                    <a class="nav-link" href="<?php echo base_url;?>Roles"><i class="fa fa-retweet mr-2 " aria-hidden="true"></i>Roles</a>
                                    <a class="nav-link" href="<?php echo base_url;?>Administracion"><i class="fas fa-cog mr-2 " aria-hidden="true"></i>Configuracion</a>

                                </nav>
                            </div>
                            <a class="nav-link" href="<?php echo base_url;?>Lectores">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-book-open-reader fa-2x"></i></div>
                                Lectores
                            </a>
                            <a class="nav-link" href="<?php echo base_url;?>Carrerass">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-gears fa-2x"></i></div>
                                Carreras
                            </a>
                             <a class="nav-link" href="<?php echo base_url;?>Generaciones">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-square-poll-horizontal fa-2x"></i></div>
                                Generaciones
                            </a>
                           
                            <a class="nav-link" href="<?php echo base_url;?>Prestamos">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-handshake fa-2x"></i></div>
                                Prestamos
                            </a>
                            <a class="nav-link" href="<?php echo base_url;?>Estadias">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-file-circle-plus fa-2x"></i></div>
                                Estadias
                            </a>
                            <a class="nav-link" href="<?php echo base_url; ?>Administracion/home">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-chart-line fa-2x"></i></div>
                                Estadisticas
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid mt-2">
             
                        
                        
                  
            