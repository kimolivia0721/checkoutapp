import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Main from './components/Main';
// const Separator = () => (
//   <View style={styles.separator} />
// );

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }
// const Stack = createStackNavigator();

// class App extends Component {
//   constructor() {
//     super();
//     this.onPressButton = this.onPressButton.bind(this);
//   }
//   render(){
//     return(<SafeAreaView style={styles.container}>
//       <View>
//         <Button
//           title="shop"
//           color="#f194ff"
//           onPress={() => this.onPressButton}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Button
//           title="cart"
//           color="#f194ff"
//           onPress={() => Alert.alert('Button with adjusted color pressed')}
//         />
//       </View>
//       <Separator />
//       <View>
  
//         <Button
//           title="Press me"
//           color="#f255ff"
//           onPress={() => Alert.alert('Cannot press this one')}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Text style={styles.title}>
//           This layout strategy lets the title define the width of the button.
//         </Text>
//         <View style={styles.fixToText}>
//           <Button
//             title="Left button"
//             onPress={() => Alert.alert('Left button pressed')}
//           />
//           <Button
//             title="Right button"
//             onPress={() => Alert.alert('Right button pressed')}
//           />
//         </View>
//       </View>
//     </SafeAreaView>)
//   }
//   onPressButton() {
//     const { navigate } = this.props.navigation;

//     var options = {
//       title: strings.app_name,
//       content: strings.create_message,
//       positiveText: strings.OK,
//       onPositive: () => navigate("DashboardScreen")
//     };
//     var dialog = new DialogAndroid();
//     dialog.set(options);
//     dialog.show();
//   }
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#737373',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });

// export default App;
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Shop</Text>
      <Button
        title="Start Shopping"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={Main} />

        </Stack.Navigator>
      </NavigationContainer>

    );
  }
  
}

export default App;