import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-fetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create(initialState) {
  const uri = 'https://api.graph.cool/simple/v1/cj3janzsw53tk0170pnnjuzmg';
  const credentials = 'same-origin';
  const opts = { credentials };
  const ssrMode = !process.browser;
  const networkInterface = createNetworkInterface({ uri, opts })

  return new ApolloClient({
    initialState,
    ssrMode,
    networkInterface
  })
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
