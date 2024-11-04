import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido/a al Home!</Text>
      
      {/* Botón para regresar a la pantalla principal */}
      <Button
        title="Regresar"
        onPress={() => navigation.navigate("Main")}
        color="#4CAF50"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // Ocupa todo el espacio disponible
      justifyContent: 'center', // Centra los elementos verticalmente
      alignItems: 'center', // Centra los elementos horizontalmente
      backgroundColor: '#FFFFFF', // Color de fondo blanco
    },
    welcomeText: {
      fontSize: 24, // Tamaño de fuente
      fontWeight: 'bold', // Negrita
      color: '#4CAF50', // Color verde
      marginBottom: 20, // Espacio debajo del texto
    },
  });
  
