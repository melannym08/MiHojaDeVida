import { Alert, ScrollView, StyleSheet } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function HobbiesScreen() {
  return (
    <ScrollView style={estilos.container}>
      <TarjetaHobby
        titulo="Programar Open Source"
        detalle="GitHub"
        onPress={() =>
          Alert.alert("Hobby", "Me encanta programar aplicaciones móviles.")
        }
      />

      <TarjetaHobby
        titulo="Lectura"
        detalle="Libros de tecnología"
        onPress={() =>
          Alert.alert("Hobby", "Leo libros de arquitectura de software.")
        }
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