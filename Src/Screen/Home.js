import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { useState , useEffect , Component} from 'react';
// style sheet in separate file
import styles from './styles';


const Child =(props) =>{
    return(
        <View style={styles.text_end}>
             <Text style={styles.text}>
                 Hello I am {props.name}, I have {props.age}
             </Text>
             <Button onPress={props.changeName} title="Change Name" />
        </View>
        
    );
}
const Home = () => {
    const [name,setName] = useState('Amira');
    const [visible,setVisible]=useState(false);
// arr
  const persons = [
  {
	id: "1",
	name: "Amira",
  },
  {
	id: "2",
	name: "Amal",
  },
  {
	id: "3",
	name: "Amer",
  }];

    setTimeout(()=>{
        setName("Ahmed");
    }
    ,3000)
  
    const changeName = ()=>{
         setName("Ali");
    };

    useEffect(() =>{
        if(name === "Ahmed"){
            setVisible(true);
        }
    },[name]);

  return (
  <View style={styles.home}>  
    <View style={styles.container}>
      <Child name={name} age="23" change={changeName}/>
     {visible && <Text style={{color: 'green', fontSize: 20 }}>hello i test use effect</Text>}
     {/* map */}
     {persons.map((e) =>{
        return(
             <Text style={styles.list} key={e.id}>{e.name}</Text>
        )
     })}
    </View>

   <View style={styles.container1}>
    <Text>Hello one and </Text>
    <Text>Hello two </Text>
    <Text>Hello one and </Text>
    <Text>Hello two </Text>
    <Text>Hello one and </Text>
    <Text>Hello two </Text>
   </View>

   <View style={styles.container2}>
    <Text>Hello one and </Text>
    <Text>Hello two </Text>
    <Text>Hello one and </Text>
    <Text>Hello two </Text>
    <Text>Hello one and </Text>
    <Text>Hello two </Text>
   </View>
  </View>
  );
}

export default Home;
// class Vs Function 

// class Home extends Component{
//     state ={
//       name :"amira"
//     }
//     componentDidMount(){
//         this.setState({name: "alaa"});
//         console.log("component Did mount")
//     }
//     componentDidUpdate(){
//         if(this.state.name == "alaa"){
//               this.setState({name: "alaa2"});
//         }
       
//     }
//     render () {
//         return(
//             <View>
//                 <Text>Hello I am HomeClass ,My name is {this.state.name}</Text>
//                 <Button title='Change' onPress={() => {
//                     this.setState({name : "Ahmed"})
//                 }}/>
//             </View>
//         )
//     }
// }

// style sheet on same file

// const styles = StyleSheet.create({
//     container:{
//      margin:8,
//      padding:8,
//      display:'flex',
//      justifyContent:'center',
//      alignItems:'center',
//      backgroundColor:'#ff0'
//     },
//     text: {
//      color:"red",
//      fontSize:32,
//      backgroundColor: '#fff',
//     },
//     list:{
//         margin:9,
//         color:"#000",
//         fontSize:18,
//         fontWeight:700,
       
//     }
// });

