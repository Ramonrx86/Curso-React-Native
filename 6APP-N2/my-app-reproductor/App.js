import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function MusicScreen() {
  // Estado para el icono de "me gusta"
  const [isLiked, setIsLiked] = useState(false);

  // Función para cambiar el estado de "me gusta"
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <LinearGradient colors={['#E6A1E3', '#FAD7A1']} style={styles.container}>
      {/* Imagen del álbum */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Heart_-_Barracuda.png' }}
          style={styles.albumImage}
        />
      </View>

      {/* Título de la canción y nombre del artista */}
      <Text style={styles.songTitle}>Barracuda</Text>
      <Text style={styles.artist}>Heart - Rock</Text>
      
      {/* Botón de "me gusta" con estado */}
      <Pressable onPress={toggleLike} style={styles.heartIcon}>
        <MaterialIcons name="favorite" size={30} color={isLiked ? "red" : "gray"} />
      </Pressable>
      
      {/* Controles de música */}
      <View style={styles.controls}>
        <Pressable onPress={() => { /* Funcionalidad de retroceder */ }}>
          <MaterialIcons name="skip-previous" size={40} color="black" />
        </Pressable>
        <Pressable onPress={() => { /* Funcionalidad de reproducir */ }} style={styles.playButton}>
          <MaterialIcons name="play-arrow" size={40} color="#FAD7A1" />
        </Pressable>
        <Pressable onPress={() => { /* Funcionalidad de adelantar */ }}>
          <MaterialIcons name="skip-next" size={40} color="black" />
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 0, height: 6 }, // Más sombra hacia abajo
    shadowOpacity: 0.4, // Mayor opacidad de la sombra
    shadowRadius: 8, // Mayor difuminado
    elevation: 12, // Aumenta la elevación para Android
  },  
  albumImage: {
    width: 250,
    height: 250, 
    borderRadius: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  artist: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  heartIcon: {
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 20,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
