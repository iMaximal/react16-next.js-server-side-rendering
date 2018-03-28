import React from 'react';
import User from '../../components/User';

const authIndexPage = props => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name="Max" age={30} />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  console.log(context); // look at server console
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'Super App (Auth)' });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
