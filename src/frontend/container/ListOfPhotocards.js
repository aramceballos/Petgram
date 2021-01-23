import React, { useState, useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import { ListOfPhotoCardsComponent } from '../Components/ListOfPhotoCards/index';

const usePhotocardsData = (categoryId) => {
  const [photos, setPhotocards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://petgram-rest-api.herokuapp.com/photos')
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

  if (loading)
    return (
      <div style={{ padding: '0 15px' }}>
        <Skeleton
          style={{ marginTop: '15px', borderRadius: '10px' }}
          variant='rect'
          height={200}
        />
        <div style={{ display: 'flex', marginTop: '5px' }}>
          <Skeleton variant='circle' width={30} height={30} />
          <Skeleton style={{ marginLeft: '10px' }} variant='text' width='80%' />
        </div>
        <Skeleton
          style={{ marginTop: '15px', borderRadius: '10px' }}
          variant='rect'
          height={200}
        />
        <div style={{ display: 'flex', marginTop: '5px' }}>
          <Skeleton variant='circle' width={30} height={30} />
          <Skeleton style={{ marginLeft: '10px' }} variant='text' width='80%' />
        </div>
      </div>
    );

  return <ListOfPhotoCardsComponent photos={photos} />;
};
