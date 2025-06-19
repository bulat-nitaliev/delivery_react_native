
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Appbar, Card, Button } from "react-native-paper";

import  { useState, useEffect } from 'react';
import { getDeliveries } from '../api/deliveryService';

  

export default function DeliveryListScreen({ navigation }) {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      const data = await getDeliveries();
      setDeliveries(data);
    };
    
    fetchDeliveries();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#555" }}>
      <Appbar.Header>
        <Appbar.Content title="Доставки" />
        <Appbar.Action
          icon="plus"
          onPress={() => navigation.navigate("CreateDelivery")}
        />
      </Appbar.Header>
      <FlatList
        data={deliveries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Card>
              <Card.Title
                title={`№ ${item.id}`}
                subtitle={`${item.model} • ${item.number_model}`}
              />
              <Card.Content style={styles.card}>
                <Text variant="bodyMedium" style={{ color: "white" }}>
                  Услуга: {item.service_name}
                </Text>
                <Text variant="bodyMedium" style={{ color: "white" }}>
                  Упаковка: {item.package}
                </Text>
                <Text
                  variant="bodyMedium"
                  style={{
                    color: item.stutus_delivery === "Проведено" ? "green" : "orange",
                  }}
                >
                  Статус: {item.stutus_delivery}
                </Text>
              </Card.Content>
              <Card.Actions>
                <Button
                  onPress={() =>
                    navigation.navigate("DeliveryDetail", { delivery: item })
                  }
                >
                  Редактировать
                </Button>
                <Button mode="contained" disabled={item.stutus_delivery === "Проведено"}>
                  Провести
                </Button>
              </Card.Actions>
            </Card>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  card: {
    marginBottom: 10,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//   },
//   list: {
//     padding: 10,
//   },
//   card: {
//     marginBottom: 10,
//     backgroundColor: '#1E1E1E',
//   },
// });
// import React, { useState } from 'react';
// import { FlatList, StyleSheet } from 'react-native';
// import { Appbar, Card, Button, Text, View } from 'react-native-paper';

// const mockDeliveries = [
//   {
//     id: '1',
//     number: '127',
//     duration: '2 часа',
//     distance: '2 км',
//     service: 'До клиента, хрупкий груз',
//     packaging: 'пакет до 1 кг',
//     status: 'В ожидании',
//   },
//   {
//     id: '2',
//     number: '126',
//     duration: '1.5 часа',
//     distance: '3 км',
//     service: 'Документы',
//     packaging: 'конверт',
//     status: 'Проведен',
//   },
// ];

// export default function DeliveryListScreen({ navigation }) {
//   const [deliveries] = useState(mockDeliveries);

//   const renderDeliveryItem = ({ item }) => (
// <Card style={styles.card}>
//   <Card.Title
//     title={`№${item.number}`}
//     subtitle={`${item.duration} • ${item.distance}`}
//   />
//   <Card.Content>
//     <Text variant="bodyMedium">Услуга: {item.service}</Text>
//     <Text variant="bodyMedium">Упаковка: {item.packaging}</Text>
//     <Text variant="bodyMedium" style={{ color: item.status === 'Проведен' ? 'green' : 'orange' }}>
//       Статус: {item.status}
//     </Text>
//   </Card.Content>
//   <Card.Actions>
//     <Button onPress={() => navigation.navigate('DeliveryDetail', { delivery: item })}>
//       Редактировать
//     </Button>
//     <Button mode="contained" disabled={item.status === 'Проведен'}>
//       Провести
//     </Button>
//   </Card.Actions>
// </Card>
//   );

//   return (
//     <View style={styles.container}>
//       <Appbar.Header>
//         <Appbar.Content title="Доставки" />
//         <Appbar.Action icon="plus" onPress={() => navigation.navigate('CreateDelivery')} />
//       </Appbar.Header>
//       <FlatList
//         data={deliveries}
//         renderItem={renderDeliveryItem}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//   },
//   list: {
//     padding: 10,
//   },
//   card: {
//     marginBottom: 10,
//     backgroundColor: '#1E1E1E',
//   },
// });
