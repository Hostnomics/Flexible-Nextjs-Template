import NextAuth from "next-auth"

//Example (~53:47) from: https://next-auth.js.org/getting-started/example 

// import GithubProvider from "next-auth/providers/github"
// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // ...add more providers here
//   ],
// }
// export default NextAuth(authOptions)


import { NextAuthOptions, User } from 'next-auth';

// immport some adapters (53:57)
import { AdapterUser } from 'next-auth/adapters';

import GoogleProvider from 'next-auth/providers/google'

import jsonwebtoken from 'jsonwebtoken'
import { JWT } from 'next-auth/jwt'

// (54:54) Export authOptions of type NextAuthOptions (equal to an object, here a providers array)
export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
        clientId: "",
        clientSecret: ''
    })
    ]
}