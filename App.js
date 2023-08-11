import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Src/auth/Login';
import Home from './Src/Screen/Home'
import page2 from './Src/Screen/page2';
import WelcomePage from './Src/Screen/WelcomePage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Welcome" component={WelcomePage} />
         <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import Home from './Src/Screen/Home'
// import page2 from './Src/Screen/page2';
// import login from './Src/auth/login';
// const navigator = createStackNavigator(
//   {
//     Home:login,
//   },{
//     initialRouteName:"Home",
//     defaultNavigationOptions:{
//     title:"SA_FashionStyle",
//     },
//   }
// );
// export default createAppContainer(navigator);