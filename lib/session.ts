//Added (~53:38): https://youtu.be/986hztrfaSQ?si=Aki-WGdzGFwGqm5r&t=3218
import { getServerSession } from 'next-auth/next';

import { NextAuthOptions, User } from 'next-auth';

import { AdapterUser } from 'next-auth/adapters';

import GoogleProvider from 'next-auth/providers/google';

//(54:20)
import jsonwebtoken from 'jsonwebtoken';

import { JWT } from 'next-auth/jwt';


//(54:45) export authOptions of type NextAuthOptions equal to an object {} with providers: [] array
export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: ''
        })
    ]
}