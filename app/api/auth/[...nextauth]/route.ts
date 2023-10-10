import NextAuth from "next-auth";

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


//Built out (57:30) and uses lib/session.ts: https://youtu.be/986hztrfaSQ?si=RA5CKSXc1NXfLEEL&t=3450
// import { authOptions } from '@/lib/session';
import { authOptions } from '../../../../lib/session';


const handler = NextAuth(authOptions)

//(57:50) - allow us to make GET and POST requests using next-auth
export { handler as GET, handler as POST }