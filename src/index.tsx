import App from './components/App';
import {
  ApolloClient,
  ApolloProvider,
  // gql,
  NormalizedCacheObject,
} from '@apollo/client';
import { cache } from './cache';
//@ts-ignore
import ReactDOM from 'react-dom';




const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
