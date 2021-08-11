<?php
  function retornarConexion() {
                       //servidor  usuario password   nombre de la bd
    $con=mysqli_connect("localhost","root","","bduta");   
    return $con;
   }
?>