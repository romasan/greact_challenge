import { graphql } from "react-apollo";
import query from "../query.gql";

const data = graphql(query, {
    options: props => ({
        variables: {
            id: props.match.params.id,
        },
    }),
});

export default data;