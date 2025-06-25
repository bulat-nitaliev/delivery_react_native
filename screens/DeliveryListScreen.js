import { View, Text, StyleSheet, FlatList } from "react-native";
import { Appbar, Card, Button } from "react-native-paper";

import { useState, useEffect } from "react";
import { getDeliveries, updateDelivery } from "../api/deliveryService";

export default function DeliveryListScreen({ navigation }) {
  const [deliveries, setDeliveries] = useState([]);
  const [isUpdate, setISUpdate] = useState(false);

  const updateStatus = async (item) => {
    const dataDelivery = {
      stutus_delivery: 1,
    };
    setISUpdate(true);
    await updateDelivery(item.id, dataDelivery);
    navigation.navigate("DeliveryList");
    setISUpdate(!isUpdate);
  };

  useEffect(() => {
    const fetchDeliveries = async () => {
      const data = await getDeliveries();
      setDeliveries(data);
    };

    fetchDeliveries();
  }, [isUpdate]);
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
                    color:
                      item.stutus_delivery === "Проведено" ? "green" : "orange",
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
                <Button
                  mode="contained"
                  disabled={item.stutus_delivery === "Проведено"}
                  onPress={() => {
                    updateStatus(item);
                  }}
                >
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
