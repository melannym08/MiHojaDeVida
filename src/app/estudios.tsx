
import { ScrollView, StyleSheet } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function EstudiosScreen() {
  return (
    <ScrollView style={estilos.container}>
      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Institución Educativa"
        anio="2020"
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Técnico en Sistemas"
        institucion="Colegio Técnico"
        anio="2022"
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Tecnólogo en ADSO"
        institucion="SENA"
        anio="2026"
        enCurso={true}
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
