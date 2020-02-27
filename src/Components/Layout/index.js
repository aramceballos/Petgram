import React from 'react';
import { Helmet } from 'react-helmet';

export const Layout = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram</title>}
        {description && <meta name="description" content={description} />}
      </Helmet>
      {children}
    </>
  );
};
