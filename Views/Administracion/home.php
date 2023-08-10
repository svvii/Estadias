<?php include "Views/Templates/header.php";?>

<div class="row">
    <div class="col-xl-3 col-md-6">
        <div class="card bg-primary" >
            <div class="card-body d-flex text-white">
                Usuarios
                <i class="fas fa-user fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex aling-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Usuarios" class="text-white">Ver Detalle</a>
                <span class="text-white"><?php echo $data ['usuarios']['total']?></span>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card bg-success" >
            <div class="card-body d-flex text-white">
                Lectores
                <i class="fa-solid fa-book-open-reader fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex aling-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Lectores" class="text-white">Ver Detalle</a>
                <span class="text-white"><?php echo $data ['lectores']['total']?></span>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card bg-danger">
            <div class="card-body d-flex text-white">
                Prestamos
                <i class="fa-solid fa-handshake fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex aling-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Prestamos" class="text-white">Ver Detalle</a>
                <span class="text-white"><?php echo $data ['prestamos']['total']?></span>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card bg-warning" >
            <div class="card-body d-flex text-white">
                Estadias
                <i class="fa-solid fa-file-circle-plus fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex aling-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Estadias" class="text-white">Ver Detalle</a>
                <span class="text-white"><?php echo $data ['estadias']['total']?></span>
            </div>
        </div>
    </div>
</div>





<?php include "Views/Templates/footer.php";?>