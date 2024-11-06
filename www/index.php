<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu primeiro PHP</title>
</head>
<body>

  <h1>Meu primeiro PHP</h1>
  <h2><?php echo "Bem vindo ao PHP"; ?></h2>
  <h2><?php echo 2 + 2 * 8 / 3; ?></h2>

  <ol>
  <?php 
  for ($i=1; $i <= 10; $i++) { 
    echo "<li>item " . $i . "</li>";
  }  
  ?>
  </ol>

</body>
</html>