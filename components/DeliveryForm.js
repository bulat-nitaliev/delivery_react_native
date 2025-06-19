import { DateTimePicker, SelectInput } from "./custom";

const DeliveryForm = ({ initialData }) => {
  return (
    <>
      <SelectInput
        label="Модель транспорта"
        options={transportModels}
        value={initialData.model}
      />

      <DateTimePicker
        label="Время отправки"
        value={initialData.departureTime}
      />

      <DateTimePicker label="Время доставки" value={initialData.deliveryTime} />

      <TextInput
        label="Дистанция (км)"
        keyboardType="numeric"
        value={initialData.distance}
      />

      <MediaUploader onFileSelect={(file) => console.log(file)} />

      <SelectInput
        label="Услуга"
        options={services}
        value={initialData.service}
      />

      <SelectInput
        label="Упаковка"
        options={packagingTypes}
        value={initialData.packaging}
      />
    </>
  );
};
