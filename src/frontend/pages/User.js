import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';
import { SubmitButton } from '../Components/SubmitButton';
import { Layout } from '../Components/Layout';

const User = (props) => {
  const { user } = props;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  return (
    <Layout title='User'>
      <h1>{user.name}</h1>
      <SubmitButton onSubmit={handleLogout}>Logout</SubmitButton>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
