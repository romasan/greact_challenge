import { graphql } from "react-apollo";
import query from "../query.gql";
import { login } from "@config";

const data = graphql(query, {
    options: {
        variables: {
            login,
        },
    },
});

export default data;