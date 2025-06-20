// import axios from "axios";

// const API_URL = "https://your-api-url.com/api/";

// export const getDeliveries = async () => {
//   const response = await axios.get(`${API_URL}deliveries/`);
//   return response.data;
// };

// export const createDelivery = async (data) => {
//   const formData = new FormData();
//   // Добавление полей в formData
//   const response = await axios.post(`${API_URL}deliveries/`, formData);
//   return response.data;
// };

// export const updateDeliveryStatus = async (id, status) => {
//   const response = await axios.patch(`${API_URL}deliveries/${id}/`, { status });
//   return response.data;
// };

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
    const response = await $api.post(`/api/deliveries/`, deliveryData);
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
    console.log(response.data);

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
