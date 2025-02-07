import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchPlaces,
  addPlace,
  updatePlace,
  deletePlace,
} from '../api/Place';

// Fetch all places
export const usePlaces = () => {
  return useQuery(['places'], fetchPlaces);
};

// Add place
export const useAddPlace = () => {
  const queryClient = useQueryClient();
  return useMutation(addPlace, {
    onSuccess: () => queryClient.invalidateQueries(['places']),
  });
};

// Update place
export const useUpdatePlace = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, data }) => updatePlace(id, data), {
    onSuccess: () => queryClient.invalidateQueries(['places']),
  });
};

// Delete place
export const useDeletePlace = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePlace, {
    onSuccess: () => queryClient.invalidateQueries(['places']),
  });
};
