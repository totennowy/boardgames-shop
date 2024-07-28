import { useContext } from 'react';
import { APIContext } from './APIContext';

export const useAPIContext = () => {
  const context = useContext(APIContext);
  if (!context) {
    throw new Error('useAPIContext must be used within an APIProvider');
  }
  return context;
};
