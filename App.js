import React from 'react';
import { View, StyleSheet } from 'react-native';
import User from './Src/Home/User';

const App = () => {
  return (
    <View style={styles.container}>
      <User />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import User from './Src/Home/User'
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//             <Stack.Screen name="USER" component={User} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
