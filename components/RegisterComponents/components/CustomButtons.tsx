import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { supabase } from '../../../suprabase.config';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
const screenHeight = Dimensions.get('window').height;
const gapSize = screenHeight * 0.005;
const CustomButtons = () => {
  const router = useRouter();
  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    console.log(data);
    if (!error) {
      console.log(data);
    }
  };
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        style={styles.emailButton}
        labelStyle={styles.signInButtonText}
        onPress={() => router.push('/login')}>
        Sign in with Email
      </Button>
      <View style={{ flex: gapSize }} />
      <View style={styles.socialButtons}>
        <Button
          mode="outlined"
          style={styles.googleButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="google" size={24} color="#407BFF" />}
          onPress={handleGoogleLogin}
          textColor="#407BFF">
          Google
        </Button>
        <Button
          mode="outlined"
          style={styles.whatsappButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="whatsapp" size={24} color="#407BFF" />}
          onPress={() => console.log('Sign in with Whatsapp')}
          textColor="#407BFF">
          WhatsApp
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
    gap: gapSize,
  },
  emailButton: {
    backgroundColor: '#407BFF',
    marginBottom: 16,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#407BFF',
  },
  signInButtonText: {
    textTransform: 'uppercase',
    color: 'white',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  googleButton: {
    borderColor: '#407BFF',
    borderWidth: 1,
    flex: 1,
    marginRight: 8,
  },
  whatsappButton: {
    borderColor: '#407BFF',
    borderWidth: 1,
    flex: 1,
    marginLeft: 8,
  },
});

export default CustomButtons;
