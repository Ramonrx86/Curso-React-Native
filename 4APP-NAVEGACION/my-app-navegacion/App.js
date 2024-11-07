import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Home';

const Stack = createNativeStackNavigator();

function MainScreen({ navigation }) {
  const showAlert = () => {
    Alert.alert("Alerta", "¡Has presionado el botón!", [{ text: "OK" }]);
  };

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
      {/* <View style={styles.buttonContainer}>
        <Button title="PULSA AQUÍ" onPress={showAlert} color="#4CAF50" />
      </View> */}

      {/* Botón 2 personalizado usando TouchableHighlight */}
      {/* <TouchableHighlight
        style={styles.customButton}
        onPress={showCustomAlert}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.buttonText}>Presiona Aquí</Text>
      </TouchableHighlight> */}

      {/* Botón 3 Pressable con un icono */}
      {/* <Pressable style={styles.pressableButton} onPress={showCustomAlert}>
        <MaterialIcons name="login" size={24} color="white" />
        <Text style={styles.buttonText}> Enviar</Text>
      </Pressable> */}

      {/* Nuevo botón para navegar a Home */}
      <Pressable style={styles.navigationButton} onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="lock" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </Pressable>
    </LinearGradient>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: 'center', // Centra los elementos verticalmente
    alignItems: 'center', // Centra los elementos horizontalmente
  },
  innerContainer: {
    alignItems: 'center', // Centra los elementos horizontalmente
    marginBottom: 20, // Espacio debajo del contenedor
  },
  image: {
    width: 150, // Ancho de la imagen
    height: 150, // Alto de la imagen
    marginBottom: 10, // Espacio debajo de la imagen
  },
  text: {
    fontSize: 20, // Tamaño de fuente
    fontWeight: '600', // Grosor de la fuente
    color: 'green', // Color verde
  },
  buttonText: {
    color: 'white', // Color del texto
    fontSize: 16, // Tamaño de fuente
    textAlign: 'center', // Alineación centrada
  },
  navigationButton: {
    flexDirection: 'row', // Disposición horizontal de los elementos
    alignItems: 'center', // Centra los elementos verticalmente
    width: 150, // Ancho del botón
    height: 50, // Alto del botón
    backgroundColor: '#4CAF50', // Color verde
    borderRadius: 5, // Bordes redondeados
    marginTop: 20, // Espacio encima del botón
    justifyContent: 'center', // Centra los elementos horizontalmente
  },
  icon: {
    marginRight: 8, // Espacio entre el icono y el texto
  },
});
