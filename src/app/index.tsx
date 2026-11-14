import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

export default function Inicio() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Melanye Contreras</Text>
        <Text style={estilos.profesion}>Tecnóloga en ADSO</Text>
      </View>
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>Aprendiz del SENA apasionada por el desarrollo de aplicaciones móviles y web. Con habilidades en React Native, JavaScript, HTML5, Python y bases de datos.</Text>
      </View>
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>
        <MiBoton textoBoton="Enviar Correo" nombreIcono="mail" colorBoton="#E8D464" onPress={() => Alert.alert("Correo", "melanye@misena.edu.co")} />
        <MiBoton textoBoton="Llamar" nombreIcono="call" colorBoton="#3b82f6" onPress={() => Alert.alert("Teléfono", "Llamando al +57 3000000000")} />
        <MiBoton textoBoton="Ver LinkedIn" nombreIcono="logo-linkedin" colorBoton="#ef4444" onPress={() => Alert.alert("LinkedIn", "linkedin.com/in/melanye-contreras")} />
        <MiBoton textoBoton="Repositorio GitHub" nombreIcono="logo-github" colorBoton="#333333" onPress={() => Alert.alert("GitHub", "github.com/tu-usuario")} />
      </View>
    </ScrollView>
  );
}
const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  profesion: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: { backgroundColor: "#fff", padding: 16, borderRadius: 12, marginBottom: 16, elevation: 1 },
  subtitulo: { fontSize: 16, fontWeight: "bold", color: "#1e293b", marginBottom: 8 },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
});