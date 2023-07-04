

## Install next.js

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
        - npm install @headlessui/react  _(~7:38 - Comment box and drop down elements?)_
        - cloudinary (image upload)
        - jsonwebtoken @types/jsonwebtoken (**authentication**)
        - **GraphQL** - graphql-request (**to make graphql actions**)
        - next-auth - (**also for authentication**)
    
2. Install **_one dev dependency_**
    - `npm install @grafbase/sdk --save-dev`
        - _significantly speeds up our development(?)_






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




*Default Message* [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
