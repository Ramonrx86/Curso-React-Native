import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Home';
import Settings from './Settings';

const Stack = createNativeStackNavigator();

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seleccione una opción</Text>
      
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="home" size={40} color="#FFA726" />
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
        
        <Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons name="settings" size={40} color="#26A69A" />
          <Text style={styles.buttonText}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fondo blanco
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
});
