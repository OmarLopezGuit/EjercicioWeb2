<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <title>EjercicioWeb2</title>
</head>
<body>
  <div class="container">
  <p class="text_class"><strong>Validar número divisible</strong></p>
    <form method="post">
      <div>
        <table>
          <tr>
            <td><label class="text_class" id="etiqueta_1">Primer Número</label></td>
            <td><input type="number" class="input_class" id="numero_1" name="numero_1" /></td>
          </tr>
          <tr>  
            <td><label class="text_class" id="etiqueta_2">Segundo Número</label></td>
            <td><input type="number" class="input_class" id="numero_2" name="numero_2"/></td>
          </tr>      
        </table>
      </div>
      <button id="guardar" name="guardar" value="Validar" onclick="validar()" class="btn btn-primary">Validar</button>
    </form>
    <script src="js/respuesta.js"></script>
  </div>
</body>
</html>