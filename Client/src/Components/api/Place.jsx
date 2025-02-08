// Place.jsx (API Functions and `usePlaces` Hook)

import { useQuery } from '@tanstack/react-query';
import axiosInstance from './Index';  // Adjust the path as needed

// Fetch places
export const fetchPlaces = async () => {
  const response = await axiosInstance.get('/places');
  return response.data;
};

// Add place
export const addPlace = async (data) => {
  const response = await axiosInstance.post('/places', data);
  return response.data;
};

// Update place
export const updatePlace = async (id, data) => {
  const response = await axiosInstance.put(`/places/${id}`, data);
  return response.data;
};

// Delete place
export const deletePlace = async (id) => {
  const response = await axiosInstance.delete(`/places/${id}`);
  return response.data;
};

// Fetch all places (React Query hook)
export const usePlaces = () => {
  return useQuery({
    queryKey: ['places'],
    queryFn: fetchPlaces,
  })
  
};
