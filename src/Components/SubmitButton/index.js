import React from 'react';
import { Button } from './styles';

export const SubmitButton = ({ children, onSubmit, disabled }) => {
  return (
    <Button onClick={onSubmit} disabled={disabled}>
      {children}
    </Button>
  );
};
