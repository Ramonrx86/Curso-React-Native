import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ManualCardApp = () => {
  const artists = [ // Lista de artistas con sus detalles
    {
      id: 1,
      name: 'Vicente Fernández',
      genre: 'Ranchera, Mariachi, Bolero, Corrido.',
      description: 'Fue un cantante y actor mexicano, ícono de la música ranchera, también interpretó baladas, boleros y música tradicional mexicana. Su estilo único lo hizo famoso tanto en México como a nivel internacional.',
      image: 'https://i.ytimg.com/vi/5g_xFbNsktU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHIB4AC0AWKAgwIABABGH8gICgTMA8=&rs=AOn4CLDU8T2e6yctqCvGXTnLNVcAfUnX9A',
    },
    {
      id: 2,
      name: 'Luis Miguel',
      genre: 'Balada, Bolero, Ranchera, Pop latino, Música latina.',
      description: 'Es un cantante mexicano reconocido por su poderosa voz y versatilidad en géneros como balada, bolero, ranchera y pop latino, siendo uno de los artistas más exitosos e influyentes de la música latina.',
      image: 'https://s.yimg.com/ny/api/res/1.2/DbUiThpr26znFhD7oOnLOg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/es/hola.com/63632048371dd25a78e493d69e59b701',
    },
  ];

  return (
    <LinearGradient colors={['#ebaeae', '#a84d4d', '#550909']} style={styles.gradient}>
      <View style={styles.container}>
        {artists.map((artist) => (
          <View key={artist.id} style={styles.card}>
            <Image source={{ uri: artist.image }} style={styles.image} />
            <Text style={styles.title}>{artist.name}</Text>
            <Text style={styles.genre}>Género: {artist.genre}</Text>
            <Text style={styles.description}>{artist.description}</Text>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: { flex: 1 }, // Gradiente
  container: {
    flex: 1,
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    paddingHorizontal: 1, // Espaciado horizontal
  },
  card: {
    backgroundColor: '#FFF', // Fondo blanco de la tarjeta
    borderRadius: 10, // Bordes redondeados
    padding: 16, // Espaciado interno
    marginBottom: 16, // Espacio entre tarjetas
    shadowColor: '#000', // Sombra de la tarjeta
    shadowOpacity: 0.2, // Opacidad de la sombra
    shadowRadius: 5, // Radio de la sombra
    alignItems: 'center', // Centrado del contenido dentro de la tarjeta
    width: '90%', // Ancho de la tarjeta
    maxWidth: 400, // Ancho máximo de la tarjeta
  },
  image: {
    marginTop: 10, // Espacio superior para la imagen
    borderRadius: 15, // Bordes redondeados de la imagen
    height: 150, // Altura de la imagen
    width: '100%', // Ancho de la imagen
  },
  title: {
    fontSize: 20, // Tamaño de fuente del título
    fontWeight: 'bold', // Negrita
    marginTop: 8, // Espacio superior
    textAlign: 'center', // Centrado del texto
  },
  genre: {
    fontSize: 16, // Tamaño de fuente del género
    color: '#6C757D', // Color gris para el texto
    marginTop: 4, // Espacio superior
    textAlign: 'center', // Centrado del texto
  },
  description: {
    fontSize: 14, // Tamaño de fuente de la descripción
    color: '#6C757D', // Color gris
    marginTop: 8, // Espacio superior
    textAlign: 'justify', // Justificación del texto
  },
});

export default ManualCardApp;

