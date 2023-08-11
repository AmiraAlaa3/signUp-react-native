import React from 'react';
import { View, Text, ImageBackground, StyleSheet ,TouchableHighlight} from 'react-native';


const WelcomePage = ({ navigation }) => {
  const handleLogin = () => {
    // Navigate to the login screen when the login button is pressed
    navigation.navigate('Login');
  };
  return (
     <View style={styles.containerHome}>

         <ImageBackground
         source={require('./ME2.jpg')} 
          style={styles.img}
         >
        </ImageBackground>

          <TouchableHighlight  style={styles.btnSignUp} onPress={handleLogin}>
               <Text style={styles.signupText}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight  style={styles.button}>
               <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableHighlight>
     </View>
  
  );
};
const styles = StyleSheet.create({
   containerHome: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    backgroundColor:"#000",
  },
  btnSignUp:{
     width:250,
     margin: 12,
     borderWidth: 1,
     paddingVertical:10,
     borderRadius: 5,
     backgroundColor:"#fff",
     borderColor: "#fff" 
  },
  signupText:{
     color: '#FD0054',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
     width:250, 
     margin: 12,
     borderWidth: 1,
     paddingVertical:10,
     borderRadius: 5,
     backgroundColor:"#FD0054",
     borderColor: "#FD0054"
    },
    buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
   img:{
     width: 300, 
     height: 300,
     margin:20,
     backgroundColor:'#ff0'
    },
});

export default WelcomePage;
