import { useCallback } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from 'utils/api';

export const useTemplates = () => {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ['templates'],
    queryFn: async () => {
      const result = await api.get('/templates');
      return result;
    },
    onSuccess: () => {
      console.log('Success');
    },
    onError: () => {
      console.log('Error');
    },
  });

  const { mutateAsync: onCreate, isLoading: onCreateLoading } = useMutation(
    useCallback(async (payload) => {
      const result = await api.post('/templates', payload);
      return result;
    }, []),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['templates']);
        console.log('Success');
      },
      onError: () => {
        console.log('Error');
      },
    }
  );

  return {
    data: data?.data?.result,
    loading: isFetching || onCreateLoading,
    onCreate,
  };
};
