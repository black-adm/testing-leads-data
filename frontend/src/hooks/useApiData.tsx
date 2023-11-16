import { useState, useEffect } from 'react';
import { api } from '../api';
import { Lead } from '../types/lead';

const useApiData = (formData: any) => {
  const [data, setData] = useState<Lead>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Lead>('leads', formData); // Adjust the endpoint
        setData(response.data);
      } catch (error) {
        setError('Erro ao buscar dados');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [formData]); // Include formData in the dependency array if you want to react to changes in formData

  return { data, loading, error };
};

export default useApiData;
