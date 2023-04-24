import React, { useState } from 'react';
import { View, StyleSheet, Alert,Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import RegisterSvg from '../register/with-email/RegisterSvg';
import SVGFallback from '../../Utils/components/SVGFallback';
import dimensionConstants from '../../constantConfig';
import { supabase } from '../../suprabase.config';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import useKeyboardStatus from '../../Utils/hooks/useKeybordStatus';
import withSafeAreaWrapper from '../../Utils/decorators/withSafeAreaView';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import rf from '../../Utils/functions/responsiveFontSize';
import { useLoading } from '../../Utils/components/LoadingContext';

const Login = () => {
  const {withLoading} =useLoading()
  const isKeyboardActive = useKeyboardStatus()
  const [email, setEmail] = useState('hemyluvu@brand-app.biz');
  const [password, setPassword] = useState('hemyluvu');
  const router=useRouter()
  const validateEmail = (email:string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleLogin = async() => {
    // Implement your login logic here
    if (!validateEmail(email)) {
        Alert.alert('Error', 'Please enter a valid email address');
        return;
      }
  
      if (password.length < 6) {
        Alert.alert('Error', 'Password must be at least 6 characters long');
        return;
      }
    console.log('Email:', email);
    console.log('Password:', password);
    const {data,error}= await withLoading(()=>supabase.auth.signInWithPassword({
      email: email,
      password: password
    }))
    console.log(data)
    if(!error) router.push("/")
    
  };

  return (
    <View style={{
      flex:1,
      flexDirection: 'column',
      justifyContent: isKeyboardActive ? 'center' : 'space-between',
      height: dimensionConstants.screen.height,
      padding: 16,
    }}>
    {!isKeyboardActive && 
    (<SVGFallback>
        <RegisterSvg width={dimensionConstants.welcomeImage.width} height={dimensionConstants.welcomeImage.height}/>
    </SVGFallback>)}
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        defaultValue='hemyluvu@brand-app.biz'
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
        defaultValue='hemyluvu'
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <View style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,marginTop:10}}>
      <Text>Don't have account Yet?</Text>
       <Text style={{color:"#407BFF",fontWeight:"700"}} onPress={()=>router.push("/register/with-email")}>Create A Account</Text>
      </View>
    </View>
    <View style={styles.socialButtons}>
        <Button
          mode="outlined"
          style={styles.googleButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="google" size={24} color="#407BFF" />}
          onPress={()=>console.log("login with google")}
          textColor='#407BFF'
        >
          Google
        </Button>
        <Button
          mode="outlined"
          style={styles.whatsappButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="whatsapp" size={24} color="#407BFF" />}
          onPress={() => console.log('Sign in with Whatsapp')}
          textColor='#407BFF'
        >
          WhatsApp
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    backgroundColor: 'white',
  },
  input: {
    marginBottom: hp(2),
    borderColor: '#407BFF',
  },
  button: {
    backgroundColor: '#407BFF',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  googleButton: {
    borderColor: '#407BFF',
    borderWidth: 1,
    flex: 1,
    marginRight: wp(2),
  },
  whatsappButton: {
    borderColor: '#407BFF',
    borderWidth: 1,
    flex: 1,
    marginLeft: wp(2),
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: rf(14),
    color: '#407BFF',
  },
});

export default withSafeAreaWrapper(Login);
