import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Card, Button, Text } from "react-native-paper";
import { deleteDelivery, updateDelivery } from "../api/deliveryService";

export default function DeliveryDetailScreen({ route, navigation }) {
  // Получаем данные доставки из параметров навигации
  const { delivery } = route.params;
  const deleteDeliveryId = async (item) => {
    await deleteDelivery(item);
    navigation.navigate("DeliveryList");
  };
  const updateStatus = async (item) => {
    const dataDelivery = {
      stutus_delivery: 1 ,
    };
    console.log(dataDelivery);

    await updateDelivery(item.id, dataDelivery);
    navigation.navigate("DeliveryList");
  };

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={`Доставка № ${delivery.id}`} />
        {/* <Appbar.Action
          icon="pencil"
          onPress={() => navigation.navigate("EditDelivery", { delivery })}
        /> */}
      </Appbar.Header>

      {/* Основная информация */}
      <Card style={styles.card}>
        <Card.Title title="Основная информация" />
        <Card.Content>
          <Text variant="bodyMedium">Модель: {delivery.model}</Text>
          <Text variant="bodyMedium">Номер: {delivery.number_model}</Text>
        </Card.Content>
      </Card>

      {/* Время в пути */}
      <Card style={styles.card}>
        <Card.Title title="Время в пути" />
        <Card.Content>
          <Text variant="bodyMedium">Длительность: {delivery.travel_time}</Text>
        </Card.Content>
      </Card>

      {/* Дистанция */}
      <Card style={styles.card}>
        <Card.Title title="Дистанция" />
        <Card.Content>
          <Text variant="bodyMedium">Расстояние: {delivery.distance} км</Text>
        </Card.Content>
      </Card>

      {/* Дополнительная информация */}
      <Card style={styles.card}>
        <Card.Title title="Дополнительно" />
        <Card.Content>
          <Text variant="bodyMedium">Услуга: {delivery.service}</Text>
          <Text variant="bodyMedium">Упаковка: {delivery.package}</Text>
          <Text variant="bodyMedium">Статус: {delivery.stutus_delivery}</Text>
          <Text variant="bodyMedium">
            Тех. состояние: {delivery.technical_condition}
          </Text>
          {delivery.mediaFile && (
            <Text variant="bodyMedium">Файл: {delivery.mediaFile.name}</Text>
          )}
        </Card.Content>
      </Card>

      {/* Кнопки действий */}
      <View style={styles.actions}>
        <Button
          mode="contained"
          onPress={() => {
            updateStatus(delivery);
          }}
          style={styles.actionButton}
          disabled={delivery.stutus_delivery === "Проведено"}
        >
          {delivery.stutus_delivery === "Проведено"
            ? "Уже проведена"
            : "Провести доставку"}
        </Button>

        <Button
          mode="outlined"
          onPress={() => {
            deleteDeliveryId(delivery.id);
          }}
          style={styles.actionButton}
        >
          Удалить доставку
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  card: {
    margin: 10,
    backgroundColor: "#1E1E1E",
  },
  actions: {
    margin: 20,
  },
  actionButton: {
    marginBottom: 10,
  },
});
