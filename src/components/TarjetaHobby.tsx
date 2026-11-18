import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TarjetaHobbyProps {
  titulo: string;
  detalle: string;
  onPress: () => void;
}

export default function TarjetaHobby({
  titulo,
  detalle,
  onPress,
}: TarjetaHobbyProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.detalle}>{detalle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
  },
  detalle: {
    fontSize: 14,
    color: "#475569",
    marginTop: 2,
  },
});