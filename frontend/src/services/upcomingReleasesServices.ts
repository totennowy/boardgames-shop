import axios from 'axios';
import { API_URL } from './apiConfig';

export const getUpcomingReleases = async (limit = 12, offset = 0) => {
  const response = await axios.get(`${API_URL}/upcoming-releases`, {
    params: {
      limit,
      offset,
    },
  });
  return response.data;
};
