> [!WARNING]
> **Repository transition (effective May 31st, 2026):** This codebase will eventually be superseded by the updated [_SanityPress with TypeGen_](https://typed.sanitypress.dev). Plan new projects and migrations toward that repo. After the transition date, **this repository will be archived** as **`sanitypress-2023`** so the historical template remains available, while ongoing development focuses on TypeGen SanityPress.

# 🖤 SanityPress

> _Ready, Set, Impress._

An opinionated, fully customizable Next.js (App Router) and Sanity starter template with Tailwind CSS and pre-built schema for rapid website development.

[Demo](https://sanitypress.dev) | [Docs](https://sanitypress.dev/docs) | [Blog](https://sanitypress.dev/blog) | [Modules](https://sanitypress.dev/docs/modules) | [Studio screenshots](https://sanitypress.dev/studio-screenshots) | [Sanity.io](https://www.sanity.io/templates/sanitypress)

```sh
npm create sanity@latest -- --template nuotsu/sanitypress
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnuotsu%2Fsanitypress&env=NEXT_PUBLIC_BASE_URL,NEXT_PUBLIC_SANITY_PROJECT_ID,NEXT_PUBLIC_SANITY_DATASET,SANITY_API_READ_TOKEN&envDescription=Values%20needed%20to%20connect%20a%20Sanity%20CMS&envLink=https%3A%2F%2Fsanitypress.dev%2Fdocs%2Fgetting-started&demo-title=SanityPress&demo-description=Official%20website%20and%20blog%20for%20SanityPress%2C%20built%20with%20SanityPress&demo-url=https%3A%2F%2Fsanitypress.dev&demo-image=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Felyfelq1%2Fproduction%2F7fb61a2b110f509582f0f43cb1e397f8fa9e5c07-2814x1798.png%3Fw%3D1600)

![](https://cdn.sanity.io/images/elyfelq1/production/a0fee34f50f6dadca1d8fed050431b60356f418c-2228x1114.png)

## Key Features

- [x] ✨ Next.js 16 (App Router, RSC, Typescript) with Tailwind 4
- [x] 📕 [Pre-configured Sanity schema](/src/sanity/schemaTypes/index.ts) & [frontend components](/src/ui/)
- [x] ✏️ [Visual editing](https://sanitypress.dev/blog/visual-editing) in an [embedded Sanity Studio](https://sanitypress.dev/blog/why-you-should-embed-your-studio)
- [x] ⌨️ Auto-generated [sitemap](https://sanitypress.dev/sitemap.xml) + [Blog RSS feed](https://sanitypress.dev/blog/rss.xml)
- [x] ⚡ [Perfect Lighthouse scores](https://sanitypress.dev/blog/how-fast-is-sanitypress) on desktop and mobile.

## Getting Started

Full instructions on the [docs](https://sanitypress.dev/docs).

### 1. Install with the Sanity CLI

Run the following command to initialize this template on your local computer.

```sh
npm create sanity@latest -- --template nuotsu/sanitypress
```

See the documentation if you are [having issues with the CLI](https://www.sanity.io/help/cli-errors).

Alternatively, you can also clone or fork [the GitHub template](https://github.com/nuotsu/sanitypress) to set up manually.

### 2. Start local server

Run the following command to start the development server:

- Website: http://localhost:3000
- Sanity Studio: http://localhost:3000/admin

```sh
npm run dev
```

### 3. Add content

In your new Sanity Studio, publish the **required** `site` and `page` documents.

| Document        | Slug           | Use             | Required? | Notes                                                                                          |
| --------------- | -------------- | --------------- | :-------: | ---------------------------------------------------------------------------------------------- |
| `site`          |                | Global settings |    ✅     |                                                                                                |
| `page`          | `index`        | Homepage        |    ✅     |                                                                                                |
| `page`          | `404`          | Page not found  |           |                                                                                                |
| `page`          | `blog`         | Blog listing    |           | Add the [**Blog frontpage**](https://sanitypress.dev/docs/modules/blog-frontpage) module       |
| `global-module` | `blog/` (path) | Blog post       |           | Add the [**Blog post content**](https://sanitypress.dev/docs/modules/blog-post-content) module |

Read the [Getting Started docs](https://sanitypress.dev/docs/getting-started) for more information.

Alternatively, you can import the [demo site](https://demo.sanitypress.dev) dataset:

```sh
sanity dataset import src/sanity/demo.tar.gz
```

### 4. Set up deployments

#### 1. Create a GitHub repository

Create a GitHub repository from this project. [Learn more](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).

#### 2. Set up deployments

Create a new [Vercel](https://vercel.com) / [Netlify](https://www.netlify.com) / etc project, connecting it to your Github repository

Set up your deployment settings, such as the **Root Directory** to your Next.js app.

#### 3. Set environment variables

Configure your Environment Variables in Vercel / Netlify / etc.

```ini
NEXT_PUBLIC_BASE_URL="" # https://sanitypress.dev

NEXT_PUBLIC_SANITY_PROJECT_ID="" # abcdefgh
NEXT_PUBLIC_SANITY_DATASET="" # production
SANITY_API_READ_TOKEN="" # "Viewer" token from https://sanity.io/manage

NEXT_PUBLIC_GITHUB_TOKEN="" # recommended to add to display GitHub stars & forks
```

#### 4. Add a deployment widget to enable deployments directly from the Studio.

- Vercel: [`vercel-dashboard-widget`](https://www.sanity.io/plugins/vercel-dashboard-widget)
- Netlify: [`sanity-plugin-dashboard-widget-netlify`](https://www.sanity.io/plugins/sanity-plugin-dashboard-widget-netlify)

### 5. Customize

Adjust frontend styles, edit/add Sanity schema and modules, and [more](https://sanitypress.dev/blog/the-developers-guide-to-customizing-sanitypress).

## How to Support

- [🧡 Donations](https://sanitypress.dev/how-to-support)
- [🩷 Sponsor on GitHub](https://github.com/sponsors/nuotsu)
- [☕ Buy me a coffee](https://buymeacoffee.com/nuotsu)
