# Govfacematch — archived in favor of IncodeTechnologies/website

> **This repository is no longer the working copy.** All development and deploys
> happen on [`IncodeTechnologies/website`](https://github.com/IncodeTechnologies/website).

The Incode Labs deploy pipeline (AWS OIDC) only trusts `IncodeTechnologies/website`,
so pushes here never deployed to https://website.labs.incode.com.

## Collaborators — switch your local clone

```bash
git remote set-url origin https://github.com/IncodeTechnologies/website.git
git fetch origin
git checkout main
git reset --hard origin/main
```

If you're missing access to `IncodeTechnologies/website`, ping Sofia Carrington.

## Why both repos existed

The personal copy held in-progress feature work while the Labs deploy was being
set up on the Incode org repo. All of that work has now been merged into
`IncodeTechnologies/website/main` (signed squash commit `acca4cb`).
