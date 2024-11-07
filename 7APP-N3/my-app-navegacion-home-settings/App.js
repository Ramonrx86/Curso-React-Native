// Importación de módulos de React, navegación y diseño
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Home';
import Settings from './Settings';

// Creación del stack de navegación
const Stack = createNativeStackNavigator();

// Definición de la pantalla principal con opciones de navegación
function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seleccione una opción</Text>
      
      {/* Contenedor de botones para navegación */}
      <View style={styles.buttonContainer}>
        
        {/* Botón de navegación a la pantalla Home */}
        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
          <View style={[styles.iconCircle, { backgroundColor: '#FFA726' }]}>
            <MaterialIcons name="home" size={65} color="#FFFFFF" />
          </View>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
        
        {/* Botón de navegación a la pantalla Settings */}
        <Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <View style={[styles.iconCircle, { backgroundColor: '#26A69A' }]}>
            <MaterialIcons name="settings" size={65} color="#FFFFFF" />
          </View>
          <Text style={styles.buttonText}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

// Componente principal de la app que configura la navegación
export default function App() {
  return (
    <NavigationContainer>
      {/* Configuración del stack de navegación */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos para la pantalla principal y los botones
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 40,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  iconCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 85,
    height: 85,
    borderRadius: 55,
    marginBottom: 17.5,
  },
});
