

import $api from "./http";


export default class DetailDelivery {
  static async getPackage(){
    try {
      const response =  await $api.get('/api/package/')
      return response.data
    } catch (error) {
      console.log(error);
      
    }
    
  }
  static async getService(){
    
    try {
      const response =  await $api.get('/api/service/')
      return response.data
    } catch (error) {
      console.log(error);
      
    }
  }
  static async getStatus(){
    try {
      const response =  await $api.get('/api/status/')
      return response.data
    } catch (error) {
      console.log(error);
      
    }
  }
  static async getNumberModel(){
    try {
      const response =  await $api.get('/api/number_model/')
      return response.data
    } catch (error) {
      console.log(error);
      
    }
  }
  
}