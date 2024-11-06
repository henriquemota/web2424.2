<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario PHP</title>
</head>
<body>

<form action="" method="get">

  <label for="nome">Nome</label>
  <input type="text" name="nome" id="nome">
  <label for="sobrenome">Sobrenome</label>
  <input type="text" name="sobrenome" id="sobrenome">
  <input type="submit" value="Enviar">

</form>

<?php
if (isset($_GET)) {
  echo "<p>Bem vindo " . $_GET['nome'] . "</p>";
}
?>
  
</body>
</html>