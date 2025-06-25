import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";
import DetailDelivery from "../api/detailDelivery";



const ServiceSelectionScreen = ({ navigation, route }) => {
  const theme = useTheme();
  const { setService } = route.params;

  const handleSelect = (service) => {
    setService(service);
    navigation.goBack();
  };
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const fetchService = async () => {
      const data = await DetailDelivery.getService();
      console.log(data);

      setResponse(data);
    };

    fetchService();
  }, []);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          {response?.map((service, index) => (
            <View key={index}>
              <Button
                mode="outlined"
                style={styles.serviceItem}
                onPress={() => handleSelect(service)}
              >
                <View style={styles.serviceRow}>
                  <Text>{service.name}</Text>
                  
                </View>
              </Button>
              <View style={styles.divider} />
            </View>
          ))}

          
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
    borderColor: "#BB86FC",
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 8,
  },
});

export default ServiceSelectionScreen;
