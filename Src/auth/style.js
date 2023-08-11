import { StyleSheet} from 'react-native';

const style = StyleSheet.create({

    container:{
     flex:1,
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:'#fff',
   
    },
    text:{
       fontSize:36, 
       fontWeight:800,
       fontFamily: 'Dosis',
       textAlign:"center",
       padding:26,
       marginVertical:10,
    },
    input:{
         height: 40,
         width:250,
         margin: 12,
         borderWidth: 1,
         padding: 10,
         borderRadius: 5,
        backgroundColor: '#fff',
        fontFamily: 'Dosis',
    },
    button: {
         width:250,
         margin: 12,
         borderWidth: 1,
         paddingVertical:10,
         borderRadius: 5,
         backgroundColor:"#000",
         fontFamily: 'Dosis',
         borderColor: "#000"
    },
    buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    },
    forgot:{
    fontFamily: 'Dosis',
     color: "#333333",
     fontSize:14,
     marginTop:4,
     marginBottom:10,
     alignSelf:"flex-end"
   },
})

export default style;