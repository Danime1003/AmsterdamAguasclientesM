<?php  
  require("conexion.php");
  $con=retornarConexion();
  $password = $_POST['password']; 
  $usuario = $_POST['usuario']; 
    mysqli_query($con,"select * from tusuarios where password='$password' and usuario='usuario'");
    $resultado = mysqli_query($con, "select * from tusuarios where password='$password' and usuario='usuario'")
     or
     die("Problemas en el select:" . mysqli_error($conexion));    
    
    if (!$resultado) {
        echo "No se encontro el registro, usuario incorrecto, no se puede entrar\n";
        echo "Error MySQL: ' . mysql_error()";
        exit;
    }
    else
    {
        header("Location: ../Amstedam 1.1/index.html");
    }
    mysql_free_result($resultado);
?>