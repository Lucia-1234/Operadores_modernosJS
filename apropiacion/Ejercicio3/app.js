function registrarActividad(actividad) {
  try {
    const { nombre, fecha } = actividad;

    if (!nombre || !fecha) {
      throw new Error("La actividad no es válida: faltan propiedades.");
    }

    console.log(`Actividad "${nombre}" registrada para la fecha ${fecha}.`);
  } catch (error) {

    console.error("Error al registrar actividad:", error.message);
  }
}
registrarActividad({ nombre: "Reunión de equipo", fecha: "2026-03-06" });

registrarActividad({ nombre: "Presentación" });
