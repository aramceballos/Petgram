import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://ec2-13-57-245-72.us-west-1.compute.amazonaws.com/categories')
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
        <Item key='loading'>
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
