import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image } from 'react-native';

const RegisterScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.body}>
      <Image style={styles.img} source={require('./assets/logo.png')} />
      <Text style={styles.titulo1}>SICOMRE</Text>
      <View style={styles.container}>
        <Text style={styles.title}>¡¡Registrate!!</Text>
        <TextInput style={styles.input} placeholder="Nombre y apellido" />
        <TextInput style={styles.input} placeholder="Usuario"/>
        <TextInput style={styles.input} placeholder="Contraseña" keyboardType='visible-password' secureTextEntry />
        <Button title="Registrar" color='#138d75' onPress={() => { /* manejar registro */ }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#27ae60',
    flex: 1,
  },
  titulo1: {
    fontSize: 45,
    marginLeft: 150, // Ajustar margen según necesidad
    marginTop: -90,
  },
  img: {
    marginTop: 35,
    marginLeft: 15,
    width: 125,
    height: 125,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;
