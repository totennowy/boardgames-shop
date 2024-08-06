import axios from 'axios';
import { API_URL } from './apiConfig';

export const getBestsellers = async (limit = 12, offset = 0) => {
  const response = await axios.get(`${API_URL}/bestsellers`, {
    params: {
      limit,
      offset,
    },
  });
  return response.data;
};
