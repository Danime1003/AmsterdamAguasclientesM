<?php
    require("conexion.php");
    $con=retornarConexion();
    $nombre=$_POST['nombre'];
    echo $nombre;
    $email=$_POST['email'];
    $usuario=$_POST['usuario'];
    $password=$_POST['password'];
    mysqli_query($con,
     "insert into tusuarios values ('$nombre','$email','$usuario','$password')");
?>