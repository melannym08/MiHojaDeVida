import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
type Props = { titulo: string; detalle: string; onPress: () => void };
export default function TarjetaHobby({ titulo, detalle, onPress }: Props) {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress}>
      <Text style={estilos.titulo}>❤️ {titulo}</Text>
      <Text style={estilos.sub}>Toca para ver detalles</Text>
    </TouchableOpacity>
  );
}
const estilos = StyleSheet.create({
  tarjeta: { backgroundColor: "#fff", padding: 16, borderRadius: 10, marginVertical: 8, borderWidth: 1, borderColor: "#cbd5e1" },
  titulo: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  sub: { fontSize: 12, color: "#64748b", marginTop: 2 },
});