import React, { useState, useEffect } from 'react';
import { PhotoCard } from '../Components/PhotoCard';
import { ThreeHorseLoading } from 'react-loadingg';

const usePhotocardsData = (categoryId) => {
  const [photo, setPhotocards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://ec2-13-57-245-72.us-west-1.compute.amazonaws.com/photos/${categoryId}`,
    )
      .then((res) => res.json())
      .then((response) => {
        setPhotocards(response.data);
        setLoading(false);
      });
  }, []);

  return { photo, loading };
};

export const PhotoCardWithQuery = ({ id }) => {
  const { photo, loading } = usePhotocardsData(id);
  useEffect(() => {
    console.log('si');
  }, []);

  if (loading) return <ThreeHorseLoading />;

  return <PhotoCard {...photo} />;
};
