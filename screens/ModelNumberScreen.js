import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";
import DetailDelivery from "../api/detailDelivery";

const ModelNumberScreen = ({ navigation, route }) => {
  const theme = useTheme();
  const { setModel, setNumber } = route.params;
  const [response, setResponse] = useState([])

  const handleSelect = (pack) => {
    setNumber(pack.name);
    setModel(pack.model_name);
    navigation.goBack();
  };
  useEffect(() => {
      const fetchPackage = async () => {
        const data = await DetailDelivery.getNumberModel();
        setResponse(data)
      };
  
      fetchPackage();
    }, []);
  

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          {response.map((pack, index) => (
            <View key={index}>
              <Button
                mode="outlined"
                style={styles.packItem}
                onPress={() => handleSelect(pack)}
              >
                <View style={styles.serviceRow}>
                  <Text>{pack.name} {pack.model_name}</Text>
                  <Text>Добавить</Text>
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
  packItem: {
    marginVertical: 8,
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
    marginVertical: 4,
  },
});

export default ModelNumberScreen;
