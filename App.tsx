import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopCart from './src/screens/public/ShopCart';
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { PaperProvider } from 'react-native-paper';
import { CartContextProvider } from './src/contexts/CartContext';

const Stack = createNativeStackNavigator();

const RoutesTarget: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='shopcart'>
        <Stack.Screen
          name='shopcart'
          component={ShopCart}
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
