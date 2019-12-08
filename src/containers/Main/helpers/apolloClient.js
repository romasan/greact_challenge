import ApolloClient from "apollo-boost";
import { githibAPIUri } from "@config";

const githubToken = localStorage.githubToken;

const apolloClient = new ApolloClient({
    uri: githibAPIUri,
    request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${githubToken}`
          }
        });
    }
});

export default apolloClient;