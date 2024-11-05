// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const API_GEOLOCATION_URL = '//54.85.200.247/geolocation/index.php';

    // Referencia al tbody de la tabla
    const tbody = document.querySelector("tbody");

    // Función para obtener los datos de geolocalización
    const obtenerDatosGeolocalizacion = async () => {
        try {
            const response = await fetch("http://54.85.200.247/geolocation/index.php"); // Hacer petición a la API
            const data = await response.json(); // Convertir respuesta a JSON

            // Limpiar el tbody
            tbody.innerHTML = '';

            // Crear fila con los datos de la geolocalización
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${data.ip}</td>
                <td>${data.country_name}</td>
                <td>${data.continent_name}</td>
                <td>${data.city}</td>
            `;

            // Agregar la fila al tbody
            tbody.appendChild(fila);

        } catch (error) {
            console.error("Error al obtener los datos de geolocalización:", error);
            alert("No se pudo obtener la información de geolocalización.");
        }
    };

    // Llamar a la función de actualización cuando se hace clic en el botón
    document.getElementById("refreshButton").addEventListener("click", obtenerDatosGeolocalizacion);
});
