## Key Project Next.js Installations:

- npm install -g npm

1. `npx create-next-app@latest ./`
   - Typescript - yes
   - Eslint - no
   - Tailwind CSS - yes
   - `src/ directory` - yes
   - Use App Router - Hell yes
   - Would you like to customize the efault import alias? - No

## Dependencies

1. Install **headless ui**
   - `npm install @headlessui/react cloudinary jsonwebtoken @types/jsonwebtoken graphql-request next-auth` (_#8:15_)
     - npm install @headlessui/react _(~7:38 - Comment box and drop down elements?)_
     - cloudinary (image upload)
     - jsonwebtoken @types/jsonwebtoken (**authentication**)
     - **GraphQL** - graphql-request (**to make graphql actions**)
     - next-auth - (**also for authentication**)
2. Install **_one dev dependency_**

   - `npm install @grafbase/sdk --save-dev`
     - _significantly speeds up our development(?)_

3. Install the [Grafbase SDK](https://www.npmjs.com/package/@grafbase/sdk) at (37:38)

   - `npx grafbase init --config-format typescript`

4. Install [NextAuth.js](https://next-auth.js.org/getting-started/example) at (52:02)
   - `npm install next-auth`
   - Create **App Router** at this directory: `pages/api/auth/[...nextauth].js`

---

---

## Next.js Format Structure

1. Three main files:

   - src/app/page.tsx
   - src/app/layout.tsx
   - globals.css

2. (11:26) **Public** folder Download: https://drive.google.com/file/d/1l3_LHBjWOXokxlTIUJAyMp4gBoUHP_H4/view

   - Download [project Public Folder Assets Here](https://drive.google.com/file/d/1l3_LHBjWOXokxlTIUJAyMp4gBoUHP_H4/view)

3. (12:01) - update **Tailwind.config.js**

   - copy from gist

4. (XX) common.types.ts

5. (17:14) - Double click component, **CTRL + Space** to quickly import.

6. (20:55) - Install **Tailwind CSS IntelliSense VS Extension** by Tailwind Labs

   -

7. Install the **Grafbase SDK** at (37:38)

   - https://www.npmjs.com/package/@grafbase/sdk

   - Initialize a new project:
     - `npx grafbase init --config-format typescript`

8. Update github. Then import repository into [grafbase.com/new](https://grafbase.com/new) at [(44:28)](https://youtu.be/986hztrfaSQ?t=2668)

   - (1) Connect github account.
   - (2) Approve repository to connect to.
   - (3) Click **Import** button.
     - If error _Repository does not contain grafbase/schema graphql file._, see at (44:32)
   - (4) Click **Deploy**
   - (5) Click **CONNECT** button
   - (6) Get the Grafbase **API Endpoint** and **API Key**

9. At [(45:08)](https://youtu.be/986hztrfaSQ?t=2708) set up project `.env` file to store Grafbase API Endpoint and Key.

10. At 46:26 - Implement **AuthProviders** using **(1) Next Auth** and **(2) _connected to Grafbase_**

11. At [(50:30)](https://youtu.be/986hztrfaSQ?t=3030) - What are **Providers** and Set them up.

    - Fetch **providers** with a _useEffect()_ hook

12. (52:02) - Add **NextAuth.js**

    - Address the error we received `app-index.js:32 [next-auth][error][CLIENT_FETCH_ERROR] `

      - ![api error](https://i.imgur.com/c5UwOaI.png)

    - Go to [NextAuth.js](https://next-auth.js.org/) and see the [Getting Started Docs Here.](https://next-auth.js.org/getting-started/example)

    - `npm install next-auth`
    - Create **App Router** at this directory: `pages/api/auth/[...nextauth].js`

13. Create a new [console.cloud.google.com project](https://console.cloud.google.com/)

    - Name: `Promptopia-providers`

      - Go to **APIs & Services** => **OAuth consent screen**
      - Type can be **external**. Add email and project name, just leave other options blank and hit **Save and Continue**.

    - Then select **APIs & Services** => **Credentials** => _Create Credentials_ => **OAuth Client Id**
      - _Application Type_ = **Web Application**
      - _Application Name_ = **Flexibble**
      - _Authorized JavaScript Origins_ = **http://localhost:3000**
      - _Authorized Redirect URIs_ = **http://localhost:3000/api/auth/callback/google**
      - Then click **Create**

14. Complete `lib/sessions.ts`

15. Create utility function in `lib/sessions.ts` to use in `Navbar.tsx` to get current session of user

    - (1:05:50) - import `SessionInterface` from `../common.types` and define it in `lib/sessions.ts`
    - ```js
        import { SessionInterface } from '../common.types';

        //Create utility function to determine if user is logged in (ie Navbar.tsx) at (1:05:50): https://youtu.be/986hztrfaSQ?si=h_rCesP04IUylZFC&t=3950
        export async function getCurrentUser(){
            //specify type as SessionInterface
            const session = await getServerSession(authOptions) as SessionInterface;
        }
      ```

    - Project has `commmon.types.ts` with helper functions.

16. Set up first graphQL interaction in new file `lib/actions.ts` [(1:11:30)](https://youtu.be/986hztrfaSQ?si=tUFjl9XIrDfImZV1&t=4290)

    - Import `{ GraphQLClient } from 'graphql-request';`
    - spin up local **grafbase** server using 0.24 if you are on windows with command:
      - **npx grafbase@0.24 dev**
    -

17. Set up new folder **graphql** with file `index.ts` [(1:17:35)](https://youtu.be/986hztrfaSQ?si=iTq0_ZrmDH9hKiTl&t=4655)
    - In `graphql/index.ts` we an write all of our queries via => `lib/actions.ts` => `lib/sessions.ts` => `components/AuthProviders.tsx` (?) => `components/Navbar.tsx`

---

---

_Default Message_ [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
