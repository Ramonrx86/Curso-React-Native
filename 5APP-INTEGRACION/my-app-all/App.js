import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Pressable, Button, TouchableHighlight } from 'react-native';
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

      {/* Nuevo botón para navegar a Home */}
      <Pressable style={styles.navigationButton} onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="lock" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </Pressable>
      <Image
        source={{ uri: 'https://goctechnology.com/images/btn_g_login.png' }} // Imagen desde URL
        style={styles.logo}
        resizeMode="contain"
      />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  navigationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 120,
    marginTop: 20,
  },
  customButton: {
    width: 120,
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  pressableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    height: 50,
    backgroundColor: '#4285F4',
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    position: 'absolute',
    bottom: 30,
  },
  icon: {
    marginRight: 8,
  },
}); 