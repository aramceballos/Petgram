import React, { useState, useEffect } from 'react';
import { ListOfPhotoCardsComponent } from '../Components/ListOfPhotoCards/index';
import { ThreeHorseLoading } from 'react-loadingg';

const usePhotocardsData = (categoryId) => {
  const [photos, setPhotocards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://ec2-13-57-245-72.us-west-1.compute.amazonaws.com/photos')
      .then((res) => res.json())
      .then((response) => {
        setPhotocards(response.data);
        setLoading(false);
      });
  }, []);

  if (categoryId !== undefined) {
    const photosFiltered = photos.filter(
      (photo) => photo.categoryId.toString() === categoryId.toString(),
    );

    return { photos: photosFiltered, loading };
  }

  return { photos, loading };
};

export const ListOfPhotoCards = ({ categoryId }) => {
  const { photos, loading } = usePhotocardsData(categoryId);

  if (loading) return <ThreeHorseLoading />;

  return <ListOfPhotoCardsComponent photos={photos} />;
};
