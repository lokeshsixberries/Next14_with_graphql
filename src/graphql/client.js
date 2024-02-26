'use client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const ApolloProviders = ({children}) => {
    const client = new ApolloClient({
        uri: 'https://infabode-staging.com/graphql',
        cache: new InMemoryCache(),
    });

    return(
        <>
        <ApolloProvider client={client}>{children}</ApolloProvider>;
        </>
    )

}

export default ApolloProviders;