// import React, { useState } from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import { Appbar, TextInput, Button, RadioButton, Card } from 'react-native-paper';

// export default function CreateDeliveryScreen({ navigation }) {
// const [model, setModel] = useState('');
// const [departureTime, setDepartureTime] = useState('');
// const [deliveryTime, setDeliveryTime] = useState('');
// const [distance, setDistance] = useState('');
// const [service, setService] = useState('');
// const [packaging, setPackaging] = useState('');
// const [status, setStatus] = useState('В ожидании');
// const [technicalStatus, setTechnicalStatus] = useState('Исправно');

//   const handleCreate = () => {
//     console.log('Создание доставки:', {
//       model,
//       departureTime,
//       deliveryTime,
//       distance,
//       service,
//       packaging,
//       status,
//       technicalStatus
//     });
//     navigation.goBack();
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Appbar.Header>
//         <Appbar.BackAction onPress={() => navigation.goBack()} />
//         <Appbar.Content title="Новая доставка" />
//       </Appbar.Header>

//       <Card style={styles.card}>
//         <Card.Title title="Модель и номер" />
//         <Card.Content>

//           <TextInput
//             label="Модель"
//             value={model}
//             onChangeText={setModel}
//             style={styles.input}
//             theme={{ colors: { text: 'white' } }}
//           />
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Title title="Время в пути" />
//         <Card.Content>
// <TextInput
//   label="Отправка"
//   value={departureTime}
//   onChangeText={setDepartureTime}
//   style={styles.input}
//   placeholder="Сегодня в 12:09"
// />
//           <TextInput
//             label="Доставка"
//             value={deliveryTime}
//             onChangeText={setDeliveryTime}
//             style={styles.input}
//             placeholder="Сегодня в 20:09"
//           />
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Title title="Дистанция" />
//         <Card.Content>
// <TextInput
//   label="Дистанция (км)"
//   value={distance}
//   onChangeText={setDistance}
//   keyboardType="numeric"
//   style={styles.input}
// />
//           <TextInput
//             label="Откуда"
//             style={styles.input}
//             placeholder="55.751244, 37.617779"
//           />
//           <TextInput
//             label="Куда"
//             style={styles.input}
//             placeholder="55.755814, 37.617635"
//           />
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Title title="Услуга" />
//         <Card.Content>
//           <RadioButton.Group onValueChange={setService} value={service}>
//             <RadioButton.Item label="До клиента" value="До клиента" />
//             <RadioButton.Item label="Документы" value="Документы" />
//             <RadioButton.Item label="Мед.товары" value="Мед.товары" />
//           </RadioButton.Group>
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Title title="Упаковка" />
//         <Card.Content>
//           <RadioButton.Group onValueChange={setPackaging} value={packaging}>
//             <RadioButton.Item label="Пакет до 1 кг" value="Пакет до 1 кг" />
//             <RadioButton.Item label="Конверт" value="Конверт" />
//             <RadioButton.Item label="Коробка" value="Коробка" />
//           </RadioButton.Group>
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Title title="Статус" />
//         <Card.Content>
//           <RadioButton.Group onValueChange={setStatus} value={status}>
//             <RadioButton.Item label="В ожидании" value="В ожидании" />
//             <RadioButton.Item label="В процессе" value="В процессе" />
//             <RadioButton.Item label="Завершено" value="Завершено" />
//           </RadioButton.Group>
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Title title="Техническое состояние" />
//         <Card.Content>
//           <RadioButton.Group onValueChange={setTechnicalStatus} value={technicalStatus}>
//             <RadioButton.Item label="Исправно" value="Исправно" />
//             <RadioButton.Item label="Требуется ремонт" value="Требуется ремонт" />
//           </RadioButton.Group>
//         </Card.Content>
//       </Card>

//       <Button
//         mode="contained"
//         onPress={handleCreate}
//         style={styles.button}
//       >
//         Создать доставку
//       </Button>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//   },
//   card: {
//     margin: 10,
//     backgroundColor: '#1E1E1E',
//   },
//   input: {
//     marginBottom: 10,
//     backgroundColor: '#2D2D2D',
//   },
//   button: {
//     margin: 20,
//   },
// });
import * as ImagePicker from "expo-image-picker";
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

const CreateDeliveryScreen = ({ navigation }) => {
  const theme = useTheme();
  const [service, setService] = useState(null);
  const [packaging, setPackaging] = useState(null);
  const [model, setModel] = useState(null);
  const [number, setNumber] = useState(null);
  const [isCreateEnabled, setIsCreateEnabled] = useState(false);

  const [deliveryTime, setDeliveryTime] = useState("");
  const [distance, setDistance] = useState(null);
  const [status, setStatus] = useState(null);
  const [technicalStatus, setTechnicalStatus] = useState(null);
  const [selectedFileUri, setSelectedFileUri] = useState(null);
  const [formCreateDelivery, setFormCreateDelivery] = useState({
    service,
    packaging,
    model,
    number,
    deliveryTime,
    distance,
    status,
    technicalStatus,
    selectedFileUri,
  });

  useEffect(() => {
    setIsCreateEnabled(
      service &&
        packaging &&
        model &&
        number &&
        deliveryTime &&
        distance &&
        status &&
        technicalStatus
    );
    setFormCreateDelivery({
      service,
      packaging,
      model,
      number,
      deliveryTime,
      distance,
      status,
      technicalStatus,
      selectedFileUri,
    });
  }, [
    service,
    packaging,
    model,
    number,
    deliveryTime,
    distance,
    status,
    technicalStatus,
  ]);

  const handleSelectFile = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setSelectedFileUri(result.assets[0].uri); // Получаем путь к изображению
      }
    } catch (err) {
      console.error(err);
    }
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
              {model} {number}
            </Text>

            <Button
              mode="outlined"
              onPress={() => {
                navigation.navigate("ModelNumber", { setModel, setNumber });
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

          <Divider style={styles.divider} />
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
          </View>

          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Услуга:</Text>
            <Text>{service}</Text>

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
            <Text>{status}</Text>

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
            <Text>{packaging}</Text>

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
                navigation.navigate("PackagingSelection", { setPackaging })
              }
              style={styles.serviceButton}
            >
              {">"}
            </Button>
          </View>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={styles.createButton}
        disabled={!isCreateEnabled}
        onPress={() => console.log("Доставка создана", formCreateDelivery)}
      >
        Создать
      </Button>
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
    backgroundColor: "#BB8",
    marginBottom: 50,
  },
  input: {
    maxHeight: 5,
  },
});

export default CreateDeliveryScreen;
