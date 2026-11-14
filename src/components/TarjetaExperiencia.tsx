import React from "react";
import { StyleSheet, Text, View } from "react-native";
type Props = { puesto: string; empresa: string; periodo: string; descripcion: string };
export default function TarjetaExperiencia({ puesto, empresa, periodo, descripcion }: Props) {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.puesto}>{puesto}</Text>
      <Text style={estilos.empresa}>{empresa} ({periodo})</Text>
      <Text style={estilos.desc}>{descripcion}</Text>
    </View>
  );
}
const estilos = StyleSheet.create({
  tarjeta: { backgroundColor: "#fff", padding: 16, borderRadius: 10, marginVertical: 8, borderWidth: 1, borderColor: "#ddd" },
  puesto: { fontSize: 16, fontWeight: "bold", color: "#1e293b" },
  empresa: { fontSize: 14, color: "#2563eb", fontWeight: "600", marginVertical: 2 },
  desc: { fontSize: 13, color: "#475569" },
});