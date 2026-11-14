import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

export default function MiBoton({ textoBoton, nombreIcono, colorBoton, onPress }: Props) {
  return (
    <TouchableOpacity style={[estibotones.boton, { backgroundColor: colorBoton }]} onPress={onPress}>
      <Ionicons name={nombreIcono} size={20} color="#fff" style={estibotones.icono} />
      <Text style={estibotones.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
}

const estibotones = StyleSheet.create({
  boton: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 12, borderRadius: 8, marginVertical: 6 },
  icono: { marginRight: 8 },
  texto: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});