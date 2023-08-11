import React from "react";
import { Image ,View,Text,StyleSheet,TextInput} from "react-native";


const page2 = () => {
  return (
  <View style={styles.container}>
    <Image source={require('./ME2.jpg')}   style={styles.img} resizeMode={"contain"}/>
    <Image source={{uri: 'https://solarsystem.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamRTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8f58db6031cb325cfbaf366a330cf78148c0444a/Sun.png?disposition=inline'}}
       style={{width: 200, height: 200}} />

    <View style={styles.container1}>
    <Text>Hello one and </Text>
    <Text>Hello two </Text>
    <Text>Hello one and </Text>
    <Text>Hello two </Text>
    <Text>Hello one and </Text>
    <Text>Hello two </Text>
   </View>
    <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        secureTextEntry
        value={passwordRepeat}
        onChangeText={setPasswordRepeat} 
       />
   
  </View>
  );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#A8AB7D"
    },
    container1:{
     flex:1,
     alignItems:"center",
     justifyContent:"center",
     padding:20,
     margin:20,
     backgroundColor:'#9ED2BE'
    },

    img:{
     width: 300, 
     height: 300,
     margin:20,
     backgroundColor:'#ff0'
    },
})
export default page2; 
