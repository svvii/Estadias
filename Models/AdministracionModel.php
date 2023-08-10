<?php
class AdministracionModel extends Query
{
    public function __construct()
    {
      parent::__construct();
    }
    public function getEmpresa()
    {
        $sql = "SELECT * FROM configuracion";
        $data = $this->select($sql);
        return $data;
    }
    public function getDatos(string $table)
    {
        $sql = "SELECT COUNT(*)  AS total FROM $table";
        $data = $this->select($sql);
        return $data;
    }
    public function modificar(string $nombre,string $telefono,string $direccion,string $mensaje,int $id)
    {
        $sql = "UPDATE configuracion SET nombre = ?, telefono = ?, direccion = ?, mensaje = ? WHERE id=?";
        $datos = array($nombre,$telefono,$direccion,$mensaje,$id);
        $data = $this->save($sql,$datos);
        if ($data == 1) {
            $res = "ok";
        }else{
            $res = "error";
        }
        return $res;
    }
    public function getreporte()
    {
        $sql = "SELECT * FROM estadias";
        $data = $this->select($sql);
        return $data; 
    }
    public function verficarpermiso(int $id_user,string $nombre) 
    {
       $sql = "SELECT P.id, p.permiso, d.id, d.id_usuario, d.id_permiso FROM permisos p INNER JOIN detalle_permisos d ON p.id = d.id_permiso WHERE d.id_usuario = $id_user AND p.permiso = '$nombre'";
       $data = $this->selectAll($sql);
       return $data;
    }

}
?>