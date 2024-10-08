import axios from 'axios';
import { API_URL } from './apiConfig';

export const getProductById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`, {});
  return response.data;
};
