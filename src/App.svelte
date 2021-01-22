// Asignamos la logica de nuestra aplicación
<script>
  export let name; // Hacemos referenccia al Prop Name
</script>

// Creamos los estilos de la aplicación.
<style>
  :global(body) { 
    background-color: #676778;
    color: white;
  }
  .main {
    display: flex;
    justify-content: center;
  }
</style>

// Llamamos el HTML de nuestro sitio.
<div class="main">
  <h1>Hello {name}!</h1>
</div>
