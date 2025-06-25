

import $api from "./http";

export const getDeliveries = async () => {
  try {
    
    const response = await $api.get(`/api/deliveries/`);
    
    
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении доставок:", error);
    console.log(error);
    return [];
  }
};

export const createDelivery = async (deliveryData) => {
  try {
    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await $api.post(`/api/deliveries/`, deliveryData, config);

    return response.data;
  } catch (error) {
    console.error("Ошибка при создании доставки:", error);
    throw error;
  }
};

export const updateDelivery = async (id, deliveryData) => {
  try {
    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await $api.patch(
      `/api/deliveries/${id}/`,
      deliveryData,
      config
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка при обновлении доставки:", error);
    throw error;
  }
};

export const deleteDelivery = async (id) => {
  try {
    await $api.delete(`/api/deliveries/${id}/`);
    console.log("delete", id);

    return true;
  } catch (error) {
    console.error("Ошибка при удалении доставки:", error);
    return false;
  }
};
