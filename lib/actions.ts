//Created at (1:11:30): https://youtu.be/986hztrfaSQ?si=tUFjl9XIrDfImZV1&t=4290
import { GraphQLClient } from 'graphql-request';

//At (1:20:15) after creating new directory graphql/index.ts we can import our function getUserQuery to use in makeGraphQLRequest function below
// https://youtu.be/986hztrfaSQ?si=eiJHXdule9Nnv6_9&t=4815
import { createUserMutation, getUserQuery } from '../../graphql' //he used from '@/graphql'

//Make application both localhost and application ready (1:12:44)
const isProduction = process.env.NODE_ENV === 'production';

//apiUrl will depend on whether or not you are in production (1:13:40)
// Spin up local endpoint for testing in terminal with 
// npx grafbase@0.24 dev
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql';

//apiKey also depends on whether or not you are in production (1:14:38)
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein'; //local can be anything.

//serverUrl also depends on production (1:15:30). NEXT_PUBLIC_SERVER_URL is the url of our deployed website
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

//Define new instance of client (1:12:30)
const client = new GraphQLClient(apiUrl)

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        //make a connection to our database
        //client is a connection to our graph base DB.
        return await client.request(query, variables)
    } catch(e: any){
        console.log("Error in lib/actions.ts makeGraphQLRequest function catch block was: ",e)
        throw e;
    }
}

//(1:16:45) export getUser function for sessions.ts => Navbar.tsx?: https://youtu.be/986hztrfaSQ?si=Nz9zRaG666GAUbCv&t=4605
export const getUser = (email: string) => {
    // return makeGraphQLRequest()
    // Instead of making the actual request here, import new file in new top level directory called graphql
    // (1:20:20) call the getUserQuery from graphql/index.ts

        // returns a user (via graphql/index.ts) and all the user attributes defined therein
        return makeGraphQLRequest(getUserQuery, {email})
}


//(1:22:20) export the next query createUser which will be written in `graphql/index.ts` and used in `lib/session.ts`
export const createUser = (name: string, email: string, avatarUrl: string) => {
    const variables = {
        input: {
            name, email, avatarUrl
        }
    }

    return makeGraphQLRequest(createUserMutation, variables)
}