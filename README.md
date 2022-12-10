# Interview ChatGPT

Allow ChatGPT to "listen" and "tell" me what it thinks about a healthy home office.

## Workflow

![workflow](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuN8hoiyhISrBKT2rKt1AJCu6CQqKYa5KOcbAPZuNJ10X3vGkoIzAnPHN2Yv8JKtEq2t9ror9hIXHGZK8GnRJHf0u5WiLe3PYo3jd99Qu1uIWQ8U9KMwwKWXG0EJSOh33bL3CGPSa8VmKS0OWE38mJ700Ce5H1G00)

```
@startuml
Frontend -> Backend : send audio
Backend -> Backend: store audio
Backend -> "Speech-to-text" : send audio
"Speech-to-text" -> Backend : send text
Backend -> Backend : store text
Backend -> ChatGPT : send text
ChatGPT -> Backend : send text
Backend -> Backend : store text
Backend -> "Text-to-speech" : send text
"Text-to-speech" -> Backend : send audio
Backend -> Backend : store audio
Backend -> Frontend : send audio
@enduml
```

I created the diagram using [PlantUML](https://www.plantuml.com/). Below is the text from which the diagram was created.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/
tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
