> [!WARNING]
> **Repository transition (effective May 31st, 2026):** This codebase will eventually be superseded by the updated [_SanityPress (with TypeGen)_](https://sanitypress.dev). Plan new projects and migrations toward that repo. After the transition date, **this repository will be archived** as **`sanitypress-2023`** so the historical template remains available, while ongoing development focuses on TypeGen SanityPress.

# 🖤 SanityPress

> _Ready, Set, Impress._

An opinionated, fully customizable Next.js (App Router) and Sanity starter template with Tailwind CSS and pre-built schema for rapid website development.

[Docs](https://2023.sanitypress.dev/docs) | [Blog](https://2023.sanitypress.dev/blog) | [Modules](https://2023.sanitypress.dev/docs/modules) | [Studio screenshots](https://2023.sanitypress.dev/studio-screenshots) | [Sanity.io](https://www.sanity.io/templates/sanitypress-2023)

```sh
npm create sanity@latest -- --template nuotsu/sanitypress
```

## Key Features

- [x] ✨ Next.js 16 (App Router, RSC, Typescript) with Tailwind 4
- [x] 📕 [Pre-configured Sanity schema](/src/sanity/schemaTypes/index.ts) & [frontend components](/src/ui/)
- [x] ✏️ [Visual editing](https://2023.sanitypress.dev/blog/visual-editing) in an [embedded Sanity Studio](https://2023.sanitypress.dev/blog/why-you-should-embed-your-studio)
- [x] ⌨️ Auto-generated [sitemap](https://2023.sanitypress.dev/sitemap.xml) + [Blog RSS feed](https://2023.sanitypress.dev/blog/rss.xml)
- [x] ⚡ [Perfect Lighthouse scores](https://2023.sanitypress.dev/blog/how-fast-is-sanitypress) on desktop and mobile.

## Getting Started

Full instructions on the [docs](https://2023.sanitypress.dev/docs).

### 1. Install with the Sanity CLI

Run the following command to initialize this template on your local computer.

```sh
npm create sanity@latest -- --template nuotsu/sanitypress
```

See the documentation if you are [having issues with the CLI](https://www.sanity.io/help/cli-errors).

Alternatively, you can also clone or fork [the GitHub template](https://github.com/nuotsu/sanitypress-2023) to set up manually.

### 2. Start local server

Run the following command to start the development server:

- Website: http://localhost:3000
- Sanity Studio: http://localhost:3000/admin

```sh
npm run dev
```

### 3. Add content

In your new Sanity Studio, publish the **required** `site` and `page` documents.

| Document        | Slug           | Use             | Required? | Notes                                                                                               |
| --------------- | -------------- | --------------- | :-------: | --------------------------------------------------------------------------------------------------- |
| `site`          |                | Global settings |    ✅     |                                                                                                     |
| `page`          | `index`        | Homepage        |    ✅     |                                                                                                     |
| `page`          | `404`          | Page not found  |           |                                                                                                     |
| `page`          | `blog`         | Blog listing    |           | Add the [**Blog frontpage**](https://2023.sanitypress.dev/docs/modules/blog-frontpage) module       |
| `global-module` | `blog/` (path) | Blog post       |           | Add the [**Blog post content**](https://2023.sanitypress.dev/docs/modules/blog-post-content) module |

Read the [Getting Started docs](https://2023.sanitypress.dev/docs/getting-started) for more information.

Alternatively, you can import the demo dataset:

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

Adjust frontend styles, edit/add Sanity schema and modules, and [more](https://2023.sanitypress.dev/blog/the-developers-guide-to-customizing-sanitypress).

## How to Support

- [🧡 Donations](https://2023.sanitypress.dev/how-to-support)
- [🩷 Sponsor on GitHub](https://github.com/sponsors/nuotsu)
- [☕ Buy me a coffee](https://buymeacoffee.com/nuotsu)
