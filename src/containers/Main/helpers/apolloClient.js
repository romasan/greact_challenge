import ApolloClient from "apollo-boost";
import { token, githibAPIUri } from "@config";

const apolloClient = new ApolloClient({
    uri: githibAPIUri,
    request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${token}`
          }
        });
    }
});

export default apolloClient;