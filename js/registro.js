// Añadir un evento al formulario al enviar
document.getElementById('formCrearRegistro').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Obtén los valores de los inputs
    const Nombre = document.getElementById('inputNombre').value;
    const Apellido = document.getElementById('inputApellido').value;
    const Ciudad = document.getElementById('inputCiudad').value;
    const Calle = document.getElementById('inputCalle').value;

    // Validar que los campos no estén vacíos
    if (!Nombre || !Apellido || !Ciudad || !Calle) {
        alert("Por favor, completa todos los campos."); // Mensaje de alerta
        return; // Salir de la función si hay campos vacíos
    }

    // Crear el objeto con los datos del nuevo registro
    const nuevoRegistro = {
        Nombre: Nombre,
        Apellido: Apellido,
        Ciudad: Ciudad,
        Calle: Calle
    };

    console.log('Datos a enviar:', nuevoRegistro); // Verifica los datos antes de enviar

    // Enviar los datos a la API Mockapi
    fetch('https://66db3d8df47a05d55be77b53.mockapi.io/api/v1/estudiante', {
        method: 'POST', // Método HTTP para crear un nuevo registro
        headers: {
            'Content-Type': 'application/json', // Indicar que se envían datos en formato JSON
        },
        body: JSON.stringify(nuevoRegistro) // Convertir el objeto a JSON
    })
    .then(response => {
        console.log('Estado de la respuesta:', response.status); // Verificar el estado de la respuesta
        if (response.ok) {
            alert("Registro creado exitosamente."); // Mensaje de éxito
            // Redirigir a la página principal
            window.location.href = 'index.html';
        } else {
            throw new Error('Error al crear el registro. Status: ' + response.status); // Manejo de errores
        }
    })
    .catch(error => {
        console.error('Error en la petición:', error); // Log de errores en la consola
        alert('Ocurrió un error al intentar crear el registro.'); // Mensaje de error
    });
});
