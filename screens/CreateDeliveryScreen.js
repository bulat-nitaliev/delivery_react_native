// import React from 'react';
// import { View, Text } from 'react-native';
// import { Appbar } from 'react-native-paper';

// export default function CreateDeliveryScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1 }}>
//       <Appbar.Header>
//         <Appbar.BackAction onPress={() => navigation.goBack()} />
//         <Appbar.Content title="Новая доставка" />
//       </Appbar.Header>
//       <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
//         Форма создания доставки
//       </Text>
//     </View>
//   );
// }

import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button, RadioButton, Card } from 'react-native-paper';

export default function CreateDeliveryScreen({ navigation }) {
  const [model, setModel] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [distance, setDistance] = useState('');
  const [service, setService] = useState('');
  const [packaging, setPackaging] = useState('');
  const [status, setStatus] = useState('В ожидании');
  const [technicalStatus, setTechnicalStatus] = useState('Исправно');

  const handleCreate = () => {
    console.log('Создание доставки:', {
      model,
      departureTime,
      deliveryTime,
      distance,
      service,
      packaging,
      status,
      technicalStatus
    });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Новая доставка" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Title title="Модель и номер" />
        <Card.Content>
          
          <TextInput
            label="Модель"
            value={model}
            onChangeText={setModel}
            style={styles.input}
            theme={{ colors: { text: 'white' } }}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Время в пути" />
        <Card.Content>
          <TextInput
            label="Отправка"
            value={departureTime}
            onChangeText={setDepartureTime}
            style={styles.input}
            placeholder="Сегодня в 12:09"
          />
          <TextInput
            label="Доставка"
            value={deliveryTime}
            onChangeText={setDeliveryTime}
            style={styles.input}
            placeholder="Сегодня в 20:09"
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Дистанция" />
        <Card.Content>
          <TextInput
            label="Дистанция (км)"
            value={distance}
            onChangeText={setDistance}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            label="Откуда"
            style={styles.input}
            placeholder="55.751244, 37.617779"
          />
          <TextInput
            label="Куда"
            style={styles.input}
            placeholder="55.755814, 37.617635"
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Услуга" />
        <Card.Content>
          <RadioButton.Group onValueChange={setService} value={service}>
            <RadioButton.Item label="До клиента" value="До клиента" />
            <RadioButton.Item label="Документы" value="Документы" />
            <RadioButton.Item label="Мед.товары" value="Мед.товары" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Упаковка" />
        <Card.Content>
          <RadioButton.Group onValueChange={setPackaging} value={packaging}>
            <RadioButton.Item label="Пакет до 1 кг" value="Пакет до 1 кг" />
            <RadioButton.Item label="Конверт" value="Конверт" />
            <RadioButton.Item label="Коробка" value="Коробка" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Статус" />
        <Card.Content>
          <RadioButton.Group onValueChange={setStatus} value={status}>
            <RadioButton.Item label="В ожидании" value="В ожидании" />
            <RadioButton.Item label="В процессе" value="В процессе" />
            <RadioButton.Item label="Завершено" value="Завершено" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Техническое состояние" />
        <Card.Content>
          <RadioButton.Group onValueChange={setTechnicalStatus} value={technicalStatus}>
            <RadioButton.Item label="Исправно" value="Исправно" />
            <RadioButton.Item label="Требуется ремонт" value="Требуется ремонт" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Button 
        mode="contained" 
        onPress={handleCreate} 
        style={styles.button}
      >
        Создать доставку
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  card: {
    margin: 10,
    backgroundColor: '#1E1E1E',
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#2D2D2D',
  },
  button: {
    margin: 20,
  },
});