document.addEventListener("DOMContentLoaded", async () => {
    const API_URL = 'https://66db3d8df47a05d55be77b53.mockapi.io/api/v1/estudiante';
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id'); // Obtener el ID del estudiante de la URL

    // Referencias a los elementos del formulario
    const inputEditarID = document.getElementById("editarID");
    const inputEditarNombre = document.getElementById("editarNombre");
    const inputEditarApellido = document.getElementById("editarApellido");
    const inputEditarCiudad = document.getElementById("editarCiudad");
    const inputEditarCalle = document.getElementById("editarCalle");
    const btnActualizar = document.getElementById("btnActualizar");

    // Función para cargar los datos del registro a editar
    const cargarDatos = async () => {
        try {
            const response = await fetch(`${API_URL}/${id}`); // Hacer petición a la API para obtener los datos
            const estudiante = await response.json(); // Convertir la respuesta a JSON

            // Asignar los datos al formulario
            inputEditarID.value = estudiante.id;
            inputEditarNombre.value = estudiante.Nombre;
            inputEditarApellido.value = estudiante.Apellido;
            inputEditarCiudad.value = estudiante.Ciudad;
            inputEditarCalle.value = estudiante.Calle;
        } catch (error) {
            console.error("Error al cargar los datos:", error);
            alert("No se pudo cargar el registro. Intenta de nuevo.");
        }
    };

    // Función para actualizar el registro en la API
    const actualizarRegistro = async () => {
        // Obtener los datos actualizados del formulario
        const datosActualizados = {
            Nombre: inputEditarNombre.value,
            Apellido: inputEditarApellido.value,
            Ciudad: inputEditarCiudad.value,
            Calle: inputEditarCalle.value
        };

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT', // Método de actualización
                headers: {
                    'Content-Type': 'application/json' // Especificar el tipo de contenido
                },
                body: JSON.stringify(datosActualizados) // Convertir los datos a JSON
            });

            if (response.ok) {
                alert(`Registro con ID ${id} actualizado exitosamente.`); // Mensaje de éxito
                window.location.href = "index.html";  // Redirigir a la página principal
            } else {
                throw new Error('Error al actualizar el registro'); // Manejo de error si la respuesta no es ok
            }
        } catch (error) {
            console.error("Error al actualizar el registro:", error);
            alert("No se pudo actualizar el registro. Intenta de nuevo.");
        }
    };

    // Cargar los datos al iniciar la página
    cargarDatos();

    // Agregar evento al botón actualizar
    btnActualizar.addEventListener("click", actualizarRegistro);
});
