import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    home:{
      flex:1,
    },
    container:{
     flex:2,
     justifyContent:"space-around",
     alignItems:"center",
     padding:20,
     margin:20,
     backgroundColor:'#C8AE7D'
    },
    text_end:{
      alignSelf:"flex-start",
    },
     container1:{
     flex:1,
     alignItems:"center",
     justifyContent:"center",
     padding:20,
     margin:20,
     backgroundColor:'#9ED2BE'
    },
    container2:{
     flex:1,
     padding:20,
     margin:20,
     backgroundColor:'#ff0'
    },
    text: {
     color:"red",
     fontSize:32,
     backgroundColor: '#fff',
    },

    list:{
        margin:9,
        color:"#000",
        fontSize:18,
        fontWeight:700,
       
    },
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
});

export default styles;