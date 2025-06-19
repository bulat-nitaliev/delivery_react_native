import { Card, useTheme } from 'react-native-paper';

const DeliveryCard = ({ delivery }) => {
  const theme = useTheme();
  
  return (
    <Card style={{ backgroundColor: theme.colors.surface }}>
      <Card.Title 
        title={`№${delivery.number}`}
        subtitle={`${delivery.duration} часа • ${delivery.distance} км`}
      />
      <Card.Content>
        <Text>Услуга: {delivery.service}</Text>
        <Text>Упаковка: {delivery.packaging}</Text>
        <StatusBadge status={delivery.status} />
      </Card.Content>
      <Card.Actions>
        <Button>Редактировать</Button>
        <Button>Провести</Button>
      </Card.Actions>
    </Card>
  );
};