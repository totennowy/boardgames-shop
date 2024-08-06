import axios from 'axios';
import { API_URL } from './apiConfig';

export const getPromotions = async (limit = 12, offset = 0) => {
  const response = await axios.get(`${API_URL}/promotions`, {
    params: {
      limit,
      offset,
    },
  });
  return response.data;
};
