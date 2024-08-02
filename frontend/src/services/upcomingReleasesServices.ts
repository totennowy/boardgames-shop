import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getUpcomingReleases = async (limit = 12, offset = 0) => {
  const response = await axios.get(`${API_URL}/upcoming-releases`, {
    params: {
      limit,
      offset,
    },
  });
  return response.data;
};
