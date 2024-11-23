import React from 'react';
import { StyleSheet, ScrollView, View, Text, Linking } from 'react-native';
import { Card, Button, Title, Paragraph, Avatar, DefaultTheme, PaperProvider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

// Tema personalizado
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ae1515', // Color para el botón 'contained'
    accent: '#ae1515',  // Color para el texto del botón 'outlined'
  },
};

const PaperCardApp = () => {
  const artists = [ // Lista de artistas con sus detalles
    {
      id: 1,
      name: 'Vicente Fernández',
      genre: 'Ranchera, Mariachi, Bolero, Corrido.',
      description: 'Fue un cantante y actor mexicano, ícono de la música ranchera, también interpretó baladas, boleros y música tradicional mexicana. Su estilo único lo hizo famoso tanto en México como a nivel internacional.',
      image: 'https://i.ytimg.com/vi/5g_xFbNsktU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHIB4AC0AWKAgwIABABGH8gICgTMA8=&rs=AOn4CLDU8T2e6yctqCvGXTnLNVcAfUnX9A',
      spotify: 'https://open.spotify.com/intl-es/artist/4PPoI9LuYeFX8V674Z1R6l',
      wiki: 'https://es.wikipedia.org/wiki/Vicente_Fern%C3%A1ndez',
    },
    {
      id: 2,
      name: 'Luis Miguel',
      genre: 'Balada, Bolero, Ranchera, Pop latino, Música latina.',
      description: 'Es un cantante mexicano reconocido por su poderosa voz y versatilidad en géneros como balada, bolero, ranchera y pop latino, siendo uno de los artistas más exitosos e influyentes de la música latina.',
      image: 'https://s.yimg.com/ny/api/res/1.2/DbUiThpr26znFhD7oOnLOg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/es/hola.com/63632048371dd25a78e493d69e59b701',
      spotify: 'https://open.spotify.com/intl-es/artist/2nszmSgqreHSdJA3zWPyrW',
      wiki: 'https://es.wikipedia.org/wiki/Luis_Miguel',
    },
  ];

    // Icono en el lado izquierdo de cada tarjeta
  const LeftContent = (props) => <Avatar.Icon {...props} icon="music" style={styles.icon} />;

  return (
    <PaperProvider theme={customTheme}>  
      <LinearGradient colors={['#ebaeae', '#a84d4d', '#550909']} style={styles.gradient}>
        <ScrollView contentContainerStyle={styles.container}>
          {artists.map((artist) => (
            <Card key={artist.id} style={styles.card}>
              <Card.Title
                title={`Artista N°${artist.id}`}
                subtitle={`Género: ${artist.genre}`}
                left={LeftContent}
              />
              <Card.Content>
                <Title style={styles.title}>{artist.name}</Title>
                <Paragraph style={styles.description}>{artist.description}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: artist.image }} style={styles.image} />
              <Card.Actions style={styles.actions}>
                <Button mode="outlined" onPress={() => Linking.openURL(artist.spotify)}>
                  Spotify
                </Button>
                <Button mode="contained" onPress={() => Linking.openURL(artist.wiki)}>
                  Más Info
                </Button>
              </Card.Actions>
            </Card>
          ))}
          <View style={styles.footerSpace} />
        </ScrollView>
      </LinearGradient>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  gradient: { 
    flex: 1, // Gradiente
  },
  container: {
    paddingTop: 50, // Espacio superior
    paddingBottom: 10, // Espacio inferior
    paddingHorizontal: 20, // Espaciado a los lados
  },
  card: {
    marginBottom: 16, // Espacio entre tarjetas
    borderRadius: 10, // Bordes redondeados
    backgroundColor: '#FFF', // Fondo blanco
    elevation: 3, // Sombra para profundidad
  },
  icon: { 
    backgroundColor: '#ae1515', // Fondo rojo
  },
  title: {
    fontWeight: 'bold', // Negrita
    marginTop: 8, // Espacio superior
  },
  description: {
    marginTop: 8, // Espacio superior
    textAlign: 'justify', // Justificar texto
    color: '#6C757D', // Color gris
  },
  image: {
    marginTop: 10, // Espacio superior
    borderRadius: 15, // Bordes redondeados
    height: 150, // Altura fija
    width: '95%', // Ancho al 95%
    alignSelf: 'center', // Centrado horizontal
  },
  actions: {
    justifyContent: 'space-between', // Distribución de botones
    paddingHorizontal: 8, // Espaciado a los lados
    paddingBottom: 8, // Espaciado inferior
  },
  footerSpace: { 
    height: 30, // Espacio inferior
  },
});

export default PaperCardApp;


