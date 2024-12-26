![logo](https://github.com/luccsll/loader/blob/main/thumb.png)

# Custom Loader para Fluig

Este é um plugin jQuery para adicionar um loader customizado em elementos do Fluig. O loader exibe uma animação de bolas giratórias que foi inspirada no loader disponibilizado pelo Fluig Style Guide, para indicar que uma ação está em progresso.

## Instalação

Para usar este plugin, basta incluir o script no seu projeto:

html

```
<script src="path/to/loader.js"></script>
```

## Uso

Você pode usar o plugin chamando a função loader em qualquer elemento jQuery. A função aceita uma ação como parâmetro, que pode ser `load` para exibir o loader ou `unload` para removê-lo.

## Exibir o Loader

Para exibir o loader em um elemento, use a ação "load" ou simplesmente não passe nada:

```
$(element).loader("load");
```

## Remover o Loader

Para remover o loader de um elemento, use a ação "unload":

```
$(element).loader("unload");
```

## Funcionamento

Aqui está um exemplo completo de como usar o plugin:

html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Loader</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="path/to/loader.js"></script>
</head>
<body>
  <div id="content">
    <p>Conteúdo do Fluig</p>
  </div>
  <button id="load">Load</button>
  <button id="unload">Unload</button>

  <script>
    $(document).ready(function() {
      $('#load').click(function() {
        $('#content').loader('load');
      });

      $('#unload').click(function() {
        $('#content').loader('unload');
      });
    });
  </script>
</body>
</html>

```

## Créditos

Lucas Lima  
@luccsll
