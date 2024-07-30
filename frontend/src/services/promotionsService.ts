import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getPromotions = async (limit = 12, offset = 0) => {
  const response = await axios.get(`${API_URL}/promotions`, {
    params: {
      limit,
      offset,
    },
  });
  return response.data;
};
