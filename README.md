# Metolio

![Logo](public/screenshot.png)
Images from [Unsplash](https://unsplash.com/)

Metolio is a quick and easy way to build your own website to share your contact details, resume, portfolio, and blog. The nextjs framework is used to statically generate each page so its lightning fast and SEO searchable.

## Key Features

- Easy to modify
- Fully SEO Compliant
- Open graph metadata generator
- Lightning fast page load
- Static website build
- Extensive markdown support

## Core Tech stack

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [PrimeReact](https://www.primefaces.org/primereact/) - The ultimate collection of design-agnostic, flexible and accessible React UI Components.
- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a language for application-scale JavaScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open data/bio.ts to update the placeholder details to you information

## Deploy

Once updated you can generate a static version of the website for easy deployment.

```bash
npm run build
```

Copy the /out folder to your http server. I recommend [Vercel](https://vercel.com/) or [AWS S3](https://aws.amazon.com/s3/) for simple and reliable hosting but any static hosting provider will work
