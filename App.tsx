import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from './src/screens/public/Products';
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { PaperProvider } from 'react-native-paper';
import { CartContextProvider } from './src/contexts/CartContext';
import Cart from './src/screens/public/Cart';

const Stack = createNativeStackNavigator();

const RoutesTarget: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='products'>
        <Stack.Screen
          name='products'
          component={Products}
          options={{
            header: (props) => {
              return (
                <View>
                  <Text>
                    <>{props.options.headerTitle}</>
                  </Text>
                </View>
              )
            }
          }} />
        <Stack.Screen
          name='cart'
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <CartContextProvider>
          <RoutesTarget />
        </CartContextProvider>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
