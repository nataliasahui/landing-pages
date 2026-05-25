# Govfacematch

Marketing site for Govfacematch, built with [Next.js](https://nextjs.org).

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Edit `app/page.tsx` to update the homepage. The page auto-reloads as you save.

## Deployment

The site deploys to **Incode Labs** at https://website.labs.incode.com.

Deploys run automatically when changes are pushed to `main` in [`IncodeTechnologies/website`](https://github.com/IncodeTechnologies/website) — the GitHub Actions workflow in `.github/workflows/deploy.yml` builds the Docker image, pushes it to ECR, and applies the Terraform module declared in `labspec.yaml`.

To tear the app down, run the **Deploy Incode Labs Application** workflow manually with `destroy_app: true`.
