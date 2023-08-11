import React from 'react';
import { StyleSheet,Text, View ,TextInput, TouchableOpacity,TouchableHighlight, Alert } from 'react-native';
import { useState , useCallback } from 'react';


const Signup = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordRepeat, setPasswordRepeat] = useState('');
   
   const handlePassword =() =>{
    if(password === passwordRepeat){
        setPasswordMatch(true);
    }
    else{
        setPasswordMatch(false);
    }
   }
 

  return (
    <View style={styles.container} >
      <View style={styles.topContent}>
        <Text style={styles.text}>Sign Up</Text>      
        <TextInput
        style={[styles.input, styles.shadow]}
        placeholder="Email"
        inputMode="email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#7C9D96"
       />
        <TextInput
        style={[styles.input, styles.shadow]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#7C9D96"
       />
       <TextInput
         style={[styles.input, styles.shadow]}
        placeholder="Repeat Password"
        secureTextEntry
        value={passwordRepeat}
        onChangeText={setPasswordRepeat} 
         placeholderTextColor="#7C9D96"
       />
       {!passwordMatch && (<Text style={styles.textMatch}>Password do not match.</Text>)}
      </View>
      <View style={styles.buttonContent}>
          <TouchableHighlight  style={[styles.button ,styles.shadow]} onPress={handlePassword}>
             <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableHighlight>
        
          <TouchableOpacity>
            <Text style={styles.btnRead}>Read User License Assignment</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
     flex:1,
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:'#DDE6ED',
    },
    topContent:{
         flex:2,
         justifyContent:"top",
         alignItems:"center",
         marginTop:24,
    },
    buttonContent:{
         flex:1,
         justifyContent:"center",
         alignItems:"center",
    },
    text:{
       fontSize:38, 
       fontWeight:800,
       textAlign:"center",
       padding:12,
       marginVertical:12,
       color:"#4682A9"
    },
    input:{
         height: 40,
         width:250,
         margin: 12,
         borderWidth: 1,
         padding: 14,
         borderRadius: 25,
         backgroundColor: '#fff',
         borderColor:"#4682A9",
    },
    button: {
         width:250,
         margin: 12,
         borderWidth: 1,
         paddingVertical:12,
         borderRadius: 25,
         backgroundColor:"#4682A9",
         borderColor: "#4682A9",
    },
    shadow:{
         shadowColor: '#171717',
         shadowOffset: {width: 0, height: 4},
         shadowOpacity: 0.2,
         shadowRadius: 3,
    },
    buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    },
    btnRead:{
     color: "#4682A9",
     fontSize:14,
     margin:10
   },
   textMatch:{
    color:"red",
   }
})

export default Signup;
