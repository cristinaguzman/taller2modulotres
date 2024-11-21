
document.addEventListener("DOMContentLoaded", function () {
    // Solicitar información al usuario
    const nombre = prompt("Ingresa tu nombre:");
    const email = prompt("Ingresa tu correo electrónico:");
    const telefono = prompt("Ingresa tu número de teléfono:");

    // Validar los datos ingresados
    let errores = [];
    
    // Validación del nombre
    if (!nombre || nombre.trim() === "") {
        errores.push("El nombre no puede estar vacío.");
    }

    // Validación del email
    if (!email || !email.includes("@")) {
        errores.push("El correo debe contener un '@'.");
    }

    // Validación del teléfono
    if (!telefono || isNaN(telefono)) {
        errores.push("El teléfono debe ser un número.");
    }

    // Mostrar información o errores
    if (errores.length > 0) {
        alert("Errores encontrados:\n" + errores.join("\n"));
        console.error("Errores encontrados:", errores);
    } else {
        // Usar `const` para datos que no cambiarán
        const mensaje = `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}`;
        alert("Datos ingresados correctamente:\n" + mensaje);
        console.log("Datos ingresados correctamente:", { nombre, email, telefono });
    }
});
