document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registro-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = "https://jsonplaceholder.typicode.com/users";

    const data = {
      nombre: form.nombre.value,
      apellido: form.apellido.value,
      fechaNacimiento: form.fechaNacimiento.value,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // La respuesta del servidor
        // Puedes realizar acciones adicionales con la respuesta aquí
      })
      .catch((error) => console.error("Error:", error));
  });
});
