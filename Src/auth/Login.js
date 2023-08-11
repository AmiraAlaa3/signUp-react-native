import React from 'react';
import { Text, View ,TextInput, TouchableOpacity,TouchableHighlight, Alert } from 'react-native';
import { useState , useCallback } from 'react';
// style sheet in separate file
import styles from './style.js';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Login = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
   // google font 
  const [fontsLoaded] = useFonts({
    'Dosis': require('../../assets/font/static/Dosis-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
   }, [fontsLoaded]);

   if (!fontsLoaded) {
    return null;
   }
  const onPressForgotPassword = () => {
  // Do something about forgot password operation
   Alert("IT IS OK")
   };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
         <View>
         <Text style={styles.text}>Welcome back! SA to see you, Again! </Text>
         
        </View> 
      
        <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        inputMode="email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#706C61"
       />
        <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#706C61"
       />
       <TouchableOpacity onPress = {onPressForgotPassword}>
          <Text style={styles.forgot}>Forgot Password?</Text>
       </TouchableOpacity>

        <TouchableHighlight  style={styles.button}>
           <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>

        
    </View>
  )
}
export default Login;
