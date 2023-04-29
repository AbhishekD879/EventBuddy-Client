import React, { useState } from 'react';
import { View, StyleSheet, Alert ,Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import SVGFallback from '../../../Utils/components/SVGFallback';
import dimensionConstants from '../../../constantConfig';
import RegisterSvg from '../../../components/RegisterComponents/with-email_Components/RegisterSvg';
import { supabase } from '../../../suprabase.config';
import useKeyboardStatus from '../../../Utils/hooks/useKeybordStatus';
import withSafeAreaWrapper from '../../../Utils/decorators/withSafeAreaView';
import { useRouter } from 'expo-router';
import { useLoading } from '../../../Utils/components/LoadingContext';
const RegistrationView = () => {
  const isKeywordActive = useKeyboardStatus()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation=useRouter()
  const {withLoading}=useLoading()
  const validateEmail = (email:string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Phone Number:', phoneNumber);
    const { error } = await withLoading(()=>supabase.auth.signUp({
      email: email,
      password: password,
      phone:phoneNumber
    }))
  
      if (error) Alert.alert(error.message)
      if(!error) navigation.push("/")
  };

  return (
    <>
    {!isKeywordActive && (
    <SVGFallback>
      <RegisterSvg width={dimensionConstants.welcomeImage.width} height={dimensionConstants.welcomeImage.height}/>
  </SVGFallback>
    )}
    <View style={styles.container}>
      {isKeywordActive && <Text style={styles.attractiveText}>Register With Us!</Text>}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        theme={{ colors: { primary: '#407BFF' } }}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
        theme={{ colors: { primary: '#407BFF' } }}
        mode="outlined"
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        style={styles.input}
        theme={{ colors: { primary: '#407BFF' } }}
        mode="outlined"
      />
      <TextInput
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        theme={{ colors: { primary: '#407BFF' } }}
        keyboardType="phone-pad"
        mode="outlined"
      />
      <Button
        mode="contained"
        onPress={handleRegister}
        style={styles.button}
      >
        Register
      </Button>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flex:1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#407BFF',
  },
  attractiveText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#407BFF',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
});

export default withSafeAreaWrapper(RegistrationView);
