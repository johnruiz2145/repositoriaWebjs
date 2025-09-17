// Ejemplo con la API pública JSONPlaceholder que provee datos de prueba
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Verificar si la petición fue exitosa
    if (!response.ok) {
      throw new Error('La petición falló con estado ' + response.status);
    }
    // Convertir la respuesta a formato JSON
    return response.json();
  })
  .then(usuarios => {
    // Trabajar con los datos de los usuarios
    console.log('Usuarios obtenidos:', usuarios);
    
    // Por ejemplo, mostrar solo los nombres en la consola
    usuarios.forEach(usuario => {
      console.log(`- ${usuario.name} (${usuario.email})`);
    });
    
    // O mostrarlos en el DOM
    const lista = document.createElement('ul');
    usuarios.forEach(usuario => {
      const item = document.createElement('li');
      item.textContent = usuario.name;
      lista.appendChild(item);
    });
    document.body.appendChild(lista);
  })
  .catch(error => {
    // Manejar errores
    console.error('Error al obtener los usuarios:', error);
  });