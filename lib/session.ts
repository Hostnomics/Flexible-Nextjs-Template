//Added (~53:38): https://youtu.be/986hztrfaSQ?si=Aki-WGdzGFwGqm5r&t=3218
import { getServerSession } from 'next-auth/next';

import { NextAuthOptions, User } from 'next-auth';

import { AdapterUser } from 'next-auth/adapters';

import GoogleProvider from 'next-auth/providers/google';

//(54:20)
import jsonwebtoken from 'jsonwebtoken';

import { JWT } from 'next-auth/jwt';
import { SessionInterface } from '../common.types';


//(54:45) export authOptions of type NextAuthOptions equal to an object {} with providers: [] array
export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            //using an ! tells it that it could be undefined
            // clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    // jwt - json web token. encode and decode will have the token and secret destructured
    // jwt: {
    //     encode: ({ secret, token }) => {

    //     }, 
    //     decode: async ({ secret, token }) => {

    //     }
    // },
    //theme for our authentication
    theme: {
        colorScheme: 'light',
        logo: '/logo.png'
    },
    //(56:44) setup callbacks
    callbacks: {
        async session({ session }) {
            //triggered every time a user visits the page, set up a new session
            //Test out by just returning session to get rid of typescript error (1:01:48): https://youtu.be/986hztrfaSQ?si=g3vV8v76sfh_UeRb&t=3708
            return session;
        },
        //user is of type AdapterUser or
        async signIn({ user }: {user: AdapterUser | User}){
            try {
                //(1) get the user from DB if the user exists (1:02:38)

                //(2) create the user if they don't exist

                //(3) return true.
                return true;

            } catch(e: any) {
                console.log("error in lib/session.ts authOptions, callback signIn catch block was ", e);
                //return false to indicate that something went wrong (1:03:10)
                return false;
            }
        }
    }

}

//Create utility function to determine if user is logged in (ie Navbar.tsx) at (1:05:50): https://youtu.be/986hztrfaSQ?si=h_rCesP04IUylZFC&t=3950
export async function getCurrentUser(){
    //specify type as SessionInterface
    const session = await getServerSession(authOptions) as SessionInterface;

    return session; 
}