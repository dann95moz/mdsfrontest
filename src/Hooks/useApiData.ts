import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import { Image } from '../api/api.interface';




function useApiData(endpoint: string) {
  return useQuery<Image[], Error>({
    queryKey: [endpoint],
    queryFn: async () => {
      const { data } = await api.get<Image[]>(endpoint);
      return data;
    },
    retry: 1, // Intenta la petición una vez más si falla
    refetchOnWindowFocus: false, // No recargar al enfocar la ventana
  });
}

export default useApiData;