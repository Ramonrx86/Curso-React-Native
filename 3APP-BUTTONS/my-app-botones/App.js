import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Dependencia de iconos

export default function App() {
  const showAlert = () => {
    Alert.alert("Alerta", "¡Has presionado el botón!", [{ text: "OK" }]);
  };

  {/* Alerta de boton 2 y 3 */}
  const showCustomAlert = () => {
    Alert.alert("Alerta Personalizada", "¡Este es un botón personalizado!", [{ text: "Entendido" }]);
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#B2FF66']} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('./assets/LOGO-ORIGINAL-TRANS.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>Departamento de Medioambiente</Text>
      </View>
      
      {/* Botón 1 que muestra una alerta */}
      <View style={styles.buttonContainer}>
        <Button title="PULSA AQUÍ" onPress={showAlert} color="#4CAF50" />
      </View>

      {/* Botón 2 personalizado usando TouchableHighlight */}
      <TouchableHighlight
        style={styles.customButton}
        onPress={showCustomAlert}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.buttonText}>Presiona Aquí</Text>
      </TouchableHighlight>

      {/* Botón 3 Pressable con un icono */}
      <Pressable style={styles.pressableButton} onPress={showCustomAlert}>
        <MaterialIcons name="login" size={24} color="white" />
        <Text style={styles.buttonText}> Enviar</Text>
      </Pressable>

      {/* Imagen del logo (comentada) */}
      {/*<Image
        source={{ uri: 'https://goctechnology.com/images/btn_g_login.png' }}
        style={styles.logo}
        resizeMode="contain"
      />*/}
    </LinearGradient>
  );
}

{/* ESTILOS */}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
  },
  innerContainer: {
    alignItems: 'center', // Centra elementos dentro del contenedor
    marginBottom: 20, // Espacio inferior para separación
  },
  image: {
    width: 150, // Ancho de la imagen
    height: 150, // Altura de la imagen
    marginBottom: 10, // Espacio entre imagen y texto
  },
  text: {
    fontSize: 20, // Tamaño del texto
    fontWeight: '600', // Grosor de la fuente
    color: 'green', // Color del texto
  },
  buttonContainer: {
    width: 120, // Ancho del botón básico 1
    marginTop: 20, // Espacio superior 1
  },
  customButton: {
    width: 120, // Ancho del botón personalizado 2
    height: 50, // Altura del botón personalizado 2
    backgroundColor: '#4CAF50', // Color de fondo 2
    justifyContent: 'center', // Centra el texto verticalmente 2
    alignItems: 'center', // Centra el texto horizontalmente 2
    borderRadius: 5, // Bordes redondeados 2
    marginTop: 20, // Espacio superior 2
  },
  buttonText: {
    color: 'white', // Color del texto en el botón 23
    fontSize: 16, // Tamaño del texto 23
    textAlign: 'center', // Centra el texto horizontalmente 23
  },
  pressableButton: {
    flexDirection: 'row', // Elementos alineados en fila 3
    alignItems: 'center', // Centra verticalmente 3
    width: 120, // Ancho del botón Pressable 3
    height: 50, // Altura del botón Pressable 3
    backgroundColor: '#4285F4', // Color de fondo 3
    borderRadius: 5, // Bordes redondeados 3
    marginTop: 20, // Espacio superior 3
    justifyContent: 'center', // Centra contenido 3
  },
  logo: {
    width: 150, // Ancho del logo
    height: 150, // Altura del logo
    position: 'absolute', // Posición absoluta
    bottom: 30, // Distancia desde el fondo
  },
}); 