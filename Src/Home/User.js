import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axiosClient from '../api/axiosClient';

const User = () =>{
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    try{
       const response = await axiosClient.get('/users/1');
       setUserData(response);
    }catch(error){
       console.error('Error fetching user data:', error);
    }
  }
  
 useEffect(() => {
   getUser();
  }, []);
  return(
    <View style={styles.container}>
        {userData ? (
        <View>
          <Image source={{ uri: userData.avatar_url }} style={styles.avatar} />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.location}>{userData.location}</Text>
        </View>
      ) : (
        <Text>Loading user data...</Text>
      )}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: 'gray',
  },
 
});

export default User;