import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 1. Definimos los tipos de las propiedades que va a recibir la tarjeta
interface TarjetaEstudioProps {
  titulo: string;
  institucion: string;
  anio: string;
  enCurso: boolean;
}

// 2. Aplicamos la interfaz al componente
export default function TarjetaEstudio({ titulo, institucion, anio, enCurso }: TarjetaEstudioProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text>{institucion} ({anio})</Text>
      {enCurso && <Text style={styles.enCurso}>En curso</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  enCurso: {
    color: '#0284c7',
    fontWeight: '600',
    marginTop: 4,
  },
});