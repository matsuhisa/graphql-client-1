import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from 'react-apollo'
import ApoloCiient, { gql } from 'apollo-boost'

const client = new ApoloCiient({ uri : 'http://localhost:4000/graphql' })
// const query = gql`{
//   totalUsers
// }`

// console.log(`cache`, client.extract())
// client.query({query})
//   .then(({data}) => console.log(`data`, data))
//   .catch(console.error)

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
