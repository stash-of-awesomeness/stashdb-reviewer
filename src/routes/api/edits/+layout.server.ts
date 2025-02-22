import { Client, setContextClient, cacheExchange, fetchExchange } from '@urql/svelte';

const client = new Client({
  url: 'https://stashdb.org/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

setContextClient(client);
