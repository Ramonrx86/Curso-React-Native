import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#FFFFFF', '#B2FF66']} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('./assets/LOGO-ORIGINAL-TRANS.png')} // Imagen PNG
          style={styles.image}
          resizeMode="contain" // Ajustar sin distorsionar
        />
        <Text style={styles.text}>Departamento de Medioambiente</Text>
      </View>
      <Image
        source={{ uri: 'https://goctechnology.com/images/btn_g_login.png' }} // Imagen desde URL
        style={styles.logo}
        resizeMode="contain"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar todo el espacio disponible
    justifyContent: 'center', // Centrar contenido verticalmente
    alignItems: 'center', // Centrar contenido horizontalmente
  },
  innerContainer: {
    alignItems: 'center', // Centra horizontalmente los elementos
    marginBottom: 20, // Espacio inferior entre elementos
  },
  image: {
    width: 200, // Ancho de la imagen superior
    height: 200, // Altura de la imagen superior
    marginBottom: 10, // Espacio entre la imagen y el texto
  },
  text: {
    fontSize: 20, // Tamaño del texto
    fontWeight: '600', // Grosor de la fuente
    color: 'green', // Color del texto
  },
  logo: {
    width: 250, // Ancho del logo inferior
    height: 250, // Altura del logo inferior
    position: 'absolute', // Posición absoluta del logo
    bottom: 10, // Distancia desde el fondo
  },
}); 