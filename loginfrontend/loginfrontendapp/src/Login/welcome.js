import React from 'react';
import { useSelector } from "react-redux";
import { selectLoginUser } from './login.selector';

const WelcomePage = () => {
    const selectedLoginUser = useSelector(selectLoginUser);
    console.log(selectedLoginUser, '222222222');
  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <h3>Id:- {selectedLoginUser?.userInfo.id}</h3>
      <h3>UserName:- {selectedLoginUser?.userInfo.userName}</h3>
      <h3>Password:- {selectedLoginUser?.userInfo.password}</h3>
    </div>
  );
};

export default WelcomePage;
