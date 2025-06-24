// import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Card,
  Text,
  TextInput,
  Divider,
  useTheme,
} from "react-native-paper";
import { createDelivery } from "../api/deliveryService";

const CreateDeliveryScreen = ({ navigation }) => {
  const theme = useTheme();
  const [service, setService] = useState(null);
  const [packaging, setPackaging] = useState(null);
  const [modelNumber, setModelNumber] = useState(null);
  const [isCreateEnabled, setIsCreateEnabled] = useState(false);

  const [deliveryTime, setDeliveryTime] = useState("");
  const [distance, setDistance] = useState(null);
  const [status, setStatus] = useState(null);
  const [technicalStatus, setTechnicalStatus] = useState("");
  // const [selectedFileUri, setSelectedFileUri] = useState(null);

  useEffect(() => {
    

    setIsCreateEnabled(
      service?.name &&
        packaging?.name &&
        modelNumber?.name &&
        deliveryTime &&
        distance &&
        status?.name &&
        technicalStatus
    );
  }, [
    service,
    packaging,
    modelNumber,
    deliveryTime,
    distance,
    status,
    technicalStatus,
  ]);

  // const handleSelectFile = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });

  //     if (!result.canceled && result.assets.length > 0) {
  //       setSelectedFileUri(result.assets[0].uri); // Получаем путь к изображению
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const funFormCreate = async () => {
    const forms = {
      travel_time: deliveryTime,
      distance: distance,
      mediafile: null,
      technical_condition: technicalStatus,
      number_model: modelNumber.id,
      stutus_delivery: status.id,
      package: packaging.id,
      user: 1,
      service: [service.id],
    };
    await createDelivery(forms);
    navigation.navigate("DeliveryList");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Модель и номер:</Text>
            <Text>
              {modelNumber?.name} {modelNumber?.model_name}
            </Text>

            <Button
              mode="outlined"
              onPress={() => {
                navigation.navigate("ModelNumber", { setModelNumber });
              }}
              style={styles.serviceButton}
            >
              {">"}
            </Button>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Время в пути
            </Text>
            <TextInput
              value={deliveryTime}
              onChangeText={setDeliveryTime}
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Дистанция
            </Text>
            <TextInput
              value={distance}
              onChangeText={setDistance}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          {/* <Divider style={styles.divider} />
          <View style={styles.row}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Медиафайл
            </Text>

            <TextInput
              value={selectedFileUri}
              editable={false}
              style={styles.input}
            />
            <Button
              style={styles.serviceButton}
              mode="contained"
              icon="upload"
              onPress={handleSelectFile}
            ></Button>
          </View> */}

          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Услуга:</Text>
            <Text>{service?.name}</Text>

            <Button
              mode="outlined"
              onPress={() =>
                navigation.navigate("ServiceSelection", { setService })
              }
              style={styles.serviceButton}
            >
              {">"}
            </Button>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Статус доставки
            </Text>
            <Text>{status?.name}</Text>

            <Button
              mode="outlined"
              onPress={() => navigation.navigate("Status", { setStatus })}
              style={styles.serviceButton}
            >
              {">"}
            </Button>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Упаковка
            </Text>
            <Text>{packaging?.name}</Text>

            <Button
              mode="outlined"
              onPress={() =>
                navigation.navigate("PackagingSelection", { setPackaging })
              }
              style={styles.serviceButton}
            >
              {">"}
            </Button>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Тех. исправность
            </Text>
            <Text>{technicalStatus}</Text>

            <Button
              mode="outlined"
              onPress={() =>
                navigation.navigate("Technical", { setTechnicalStatus })
              }
              style={styles.serviceButton}
            >
              {">"}
            </Button>
          </View>
        </Card.Content>
      </Card>
      {isCreateEnabled ? (
        <Button
          mode="contained"
          style={styles.createButton}
          // disabled={!isCreateEnabled}
          onPress={() => funFormCreate()}
        >
          Создать
        </Button>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 20,
  },
  sectionTitle: {
    padding: 2,
    marginBottom: 8,
    fontWeight: "bold",
  },
  courierText: {
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  serviceButton: {
    borderColor: "#BB86FC",
  },
  statusText: {
    marginVertical: 8,
    color: "#03DAC6",
  },
  createButton: {
    marginTop: "auto",
    paddingBottom: 3,
    backgroundColor: "darkviolet",
    marginBottom: 50,
  },
  input: {
    maxHeight: 5,
  },
});

export default CreateDeliveryScreen;
