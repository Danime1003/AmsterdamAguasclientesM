<?php

include 'conexionQuejas.php';

$nombre=$_POST['nombre'];
$telefono=$_POST['telefono'];
$email=$_POST['email'];
$mensaje=$_POST['mensaje'];



$consulta="INSERT INTO opinion(nombre,telefono,email,mensaje)
            VALUES ('$nombre','$telefono','$email','$mensaje')";
//insertar($con);


$insert=mysqli_query($conexion,$consulta);



if($insert){
    echo"<script>alert('Se ha enviado su informe');</script>";
}
?>
