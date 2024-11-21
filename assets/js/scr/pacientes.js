export function registrarPaciente(nombre, documento, diagnostico) {
    console.log(`Registrando paciente: ${nombre}, Documento: ${documento}, Diagnóstico: ${diagnostico}`);
    const paciente = { nombre, documento, diagnostico };
    console.log("Paciente registrado exitosamente:", paciente);
    return paciente;
}
