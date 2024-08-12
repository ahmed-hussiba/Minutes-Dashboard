import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch('/api/drivers/');
  if (!response.ok) {
    throw new Error('Failed to fetch drivers');
  }
  return response.json();
};

const useDrivers = () => {
  const { data, error, isLoading } = useSWR('api/drivers/', fetcher, {
    refreshInterval: 3000
  });

  return {
    driversData: data,
    isLoading,
    error,
  };
};

export default useDrivers;
