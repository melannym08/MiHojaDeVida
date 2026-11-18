import { ScrollView, StyleSheet } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function ExperienciaScreen() {
  return (
    <ScrollView style={estilos.container}>
      <TarjetaExperiencia
        puesto="Desarrolladora Frontend Junior"
        empresa="Proyecto RefugiPet"
        periodo="2026 - Presente"
        descripcion="Desarrollo de interfaces móviles con React Native y Node.js."
      />

      <TarjetaExperiencia
        puesto="Practicante de Soporte"
        empresa="SENA"
        periodo="2025 - 2026"
        descripcion="Gestión de bases de datos relacionales en MySQL y PostgreSQL."
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc",
  },
});