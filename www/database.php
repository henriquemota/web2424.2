<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<form action="" method="post">

<div>
  <label for="nome">Nome</label>
  <input type="text" id="nome" name="nome" />
</div>
<div>
  <label for="telefone">Telefone</label>
  <input type="text" id="telefone" name="telefone" />
</div>

<input type="submit" value="Gravar">

</form>

<?php 
  if (!empty($_POST)) {
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    inserir($nome, $telefone);
  }
?>
  
<?php

  function inserir($nome, $telefone) {
    try {
      $host = 'mysql';
      $dbname = 'estacio';
      $username = 'estacio';
      $password = 'senha';
      $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
  
      // $query = $pdo->exec("insert into usuarios (nome, telefone) values ('$nome','$telefone');");

      $stmt = $pdo->prepare('insert into usuarios (nome, telefone) values (:nome,:telefone);');
      $stmt->bindParam(':nome', $nome);
      $stmt->bindParam(':telefone', $telefone);
      $stmt->execute();

    } catch (PDOException $e) {
      echo("<pre>");
      echo("erro");
      var_dump($e);
      echo("</pre>");
    }
  }
  function ler() {
    try {

      $host = 'mysql';
      $dbname = 'estacio';
      $username = 'estacio';
      $password = 'senha';
    
      $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
      // Configura o modo de erro do PDO para exceções
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
      $query = $pdo->query('SELECT id, nome, telefone FROM usuarios;');
    
      // Itera sobre os resultados
      while ($row = $query->fetch()) {
        // Acessa cada coluna da linha atual
        echo "ID: " . $row['id'] . "<br>";
        echo "Nome: " . $row['nome'] . "<br>";
        echo "Telefone: " . $row['telefone'] . "<br>";
        echo "<hr />";
      }
    
    } catch (PDOException $e) {
    
      echo("<pre>");
      echo("erro");
      var_dump($e);
      echo("</pre>");
    }
  }

  ler();
  
?>
</body>
</html>




