import {makeExecutableSchema,addMockFunctionsToSchema} from 'graphql-tools';
import { find } from 'lodash';
import { resolvers } from './resolvers';


const typeDefs = `

type Channel {
  id: Int!
  firstname: String
  lastname: String
  phone : String
  email : String
  address : String
}

type Query {
  channels: [Channel]
  channel(id: Int!): Channel
}

type Mutation {
  edit(id:Int!,email: String, phone: String, address: String): Channel
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
