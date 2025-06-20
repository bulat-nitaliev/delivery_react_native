import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Text, useTheme } from 'react-native-paper';

const services = [
  'До клиента',
  'Физ.лицо',
  'Перемещение между складами',
  'Юр.лицо',
  'Документы',
  'Мед.товары',
  'Особые товары',
  'Другое',
];

const ServiceSelectionScreen = ({ navigation, route }) => {
  const theme = useTheme();
  const { setService } = route.params;

  const handleSelect = (service) => {
    setService(service);
    navigation.goBack();
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          {services.map((service, index) => (
            <View key={index}>
              <Button 
                mode="outlined" 
                style={styles.serviceItem}
                onPress={() => handleSelect(service)}
              >
                <View style={styles.serviceRow}>
                  <Text>{service}</Text>
                  <Text>8 позиции</Text>
                </View>
              </Button>
              <View style={styles.divider} />
            </View>
          ))}

          <Button 
            mode="outlined" 
            style={[styles.serviceItem, { borderColor: '#03DAC6' }]}
            onPress={() => console.log('Температурный режим')}
          >
            <Text>Температурный режим</Text>
            <Text>Добавить</Text>
          </Button>

          <Button 
            mode="outlined" 
            style={[styles.serviceItem, { borderColor: '#03DAC6' }]}
            onPress={() => console.log('Хрупкий груз')}
          >
            <Text>Хрупкий груз</Text>
            <Text>Добавить</Text>
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
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
  serviceItem: {
    marginVertical: 4,
    borderColor: '#BB86FC',
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 8,
  },
});

export default ServiceSelectionScreen;