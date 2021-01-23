import React, { useEffect, useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import { Category } from '../Category';
import { List, Item } from './styles';

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://petgram-rest-api.herokuapp.com/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};

const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <>
          <Item>
            <Skeleton
              style={{ marginBottom: '25px' }}
              variant='circle'
              width={75}
              height={75}
            />
          </Item>
          <Item>
            <Skeleton
              style={{ marginBottom: '25px' }}
              variant='circle'
              width={75}
              height={75}
            />
          </Item>
          <Item>
            <Skeleton
              style={{ marginBottom: '25px' }}
              variant='circle'
              width={75}
              height={75}
            />
          </Item>
          <Item>
            <Skeleton
              style={{ marginBottom: '25px' }}
              variant='circle'
              width={75}
              height={75}
            />
          </Item>
        </>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
