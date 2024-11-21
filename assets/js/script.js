console.log("El archivo JavaScript está correctamente enlazado.");

const mensaje = "¡Bienvenido al sitio web!";
console.log("Mensaje de bienvenida:", mensaje);

function mostrarDatosUsuario(nombre, edad) {
    console.log(`Nombre del usuario: ${nombre}`);
    console.log(`Edad del usuario: ${edad}`);
}

mostrarDatosUsuario("Juan", 30);


    // Datos estáticos de los doctores
    const doctores = [
        { nombre: "Dr. Pablo Parada", especialidad: "Cardiología", experiencia: 15 },
        { nombre: "Dra. María Jara", especialidad: "Neurología", experiencia: 10 },
        { nombre: "Sonia Soto", especialidad: "Pediatría", experiencia: 5 }
    ];

    // Selección del contenedor del DOM
    const doctorList = document.getElementById("doctor-list");

    // Mostrar solo doctores con más de 10 años de experiencia
    doctores.forEach(doctor => {
        if (doctor.experiencia > 10) {
            const doctorCard = document.createElement("div");
            doctorCard.className = "col-md-4 doctor-card";
            doctorCard.innerHTML = `
                <div class="card h-100 text-center">
                    <div class="card-body">
                        <h3 class="card-title">${doctor.nombre}</h3>
                        <p><strong>Especialidad:</strong> ${doctor.especialidad}</p>
                        <p><strong>Experiencia:</strong> ${doctor.experiencia} años</p>
                    </div>
                </div>
            `;
            doctorList.appendChild(doctorCard);
        }
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita la recarga de la página

        const phoneInput = document.getElementById('phone').value;
        const errorMessage = document.getElementById('error-message');

        try {
            // Activa el debugger para inspeccionar el flujo
            debugger;

            // Validación del formato del teléfono
            if (!/^\d{10}$/.test(phoneInput)) {
                throw new Error('El formato del número de teléfono es incorrecto.');
            }

            errorMessage.style.display = 'none';
            alert('¡Número enviado con éxito!');
        } catch (error) {
            console.error('Error detectado:', error.message);
            errorMessage.style.display = 'block'; // Muestra el mensaje de error en pantalla
        }
    });
