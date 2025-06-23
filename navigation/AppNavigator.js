import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DeliveryListScreen from "../screens/DeliveryListScreen";

import DeliveryDetailScreen from "../screens/DeliveryDetailScreen";
import CreateDeliveryScreen from "../screens/CreateDeliveryScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1E1E1E" },
          headerTintColor: "#BB86FC",
        }}
      >
        <Stack.Screen
          name="DeliveryList"
          component={DeliveryListScreen}
          // children={DeliveryDetailScreen}
          options={{ title: "Доставки" }}
        />
        <Stack.Screen
          name="DeliveryDetail"
          component={DeliveryDetailScreen}
          options={({ route }) => ({
            title: `Доставка №${route.params.delivery.number}`,
          })}
        />
        <Stack.Screen
          name="CreateDelivery"
          component={CreateDeliveryScreen}
          options={{ title: "Новая доставка" }}
        />
        <Stack.Screen
          name="ServiceSelection"
          component={ServiceSelectionScreen}
          options={{ title: "Услуга" }}
        />
        <Stack.Screen
          name="PackagingSelection"
          component={PackagingSelectionScreen}
          options={{ title: "Упаковка" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// // ... другие импорты
// import DeliveryDetailScreen from '../screens/DeliveryDetailScreen';

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: { backgroundColor: '#1E1E1E' },
//           headerTintColor: '#BB86FC'
//         }}
//       >
//         {/* ... другие экраны */}
//         <Stack.Screen
//           name="DeliveryDetail"
//           component={DeliveryDetailScreen}
//           options={({ route }) => ({
//             title: `Доставка №${route.params.delivery.number}`
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
