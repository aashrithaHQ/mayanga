# Mayanga

A minimalist, aesthetic affiliate website. Built with Astro + Decap CMS.

**Live site:** `https://aashrithaHQ.github.io/mayanga/`
**Admin panel:** `https://aashrithaHQ.github.io/mayanga/admin/`

---

## Deploy to GitHub Pages — Step-by-Step

### 1. Create a GitHub repository

1. Go to https://github.com/new
2. **Repository name:** `mayanga`
3. **Visibility:** Public (required for GitHub Pages free tier)
4. Click **Create repository**

### 2. Push the code to GitHub

Run these commands in your terminal (from the `mayanga` project folder):

```bash
git init
git add .
git commit -m "Initial commit: Mayanga site"
git branch -M main
git remote add origin https://github.com/aashrithaHQ/mayanga.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to https://github.com/aashrithaHQ/mayanga/settings/pages
2. Under **Source**, select **GitHub Actions**
3. That's it — the `.github/workflows/deploy.yml` file will handle the rest

### 4. Wait for the first deploy

1. Go to https://github.com/aashrithaHQ/mayanga/actions
2. You'll see a workflow running. Wait for it to turn green ✅
3. Your site is live at: **https://aashrithaHQ.github.io/mayanga/**

### 5. Set up the admin panel (Decap CMS)

1. Visit https://aashrithaHQ.github.io/mayanga/admin/
2. Click **"Login with GitHub"**
3. Authorize the app
4. You're in! Click **"New Article"** to write your first post

> **Note:** Decap CMS will ask you to configure a GitHub OAuth app for authentication. The simplest way is to use the **GitHub OAuth proxy** at https://oauth.decap-cms.org — just follow the instructions on that page.

---

## Local Development

```bash
npm install
npm run dev
```

## Adding Articles via the CMS

1. Go to `/admin` and log in with GitHub
2. Click **"New Article"**
3. Fill in: Title, Slug, Category, Date, Excerpt, Featured Image
4. Write your article in the markdown editor
5. Optionally add **Products** (for affiliate cards at the bottom)
6. Click **Publish** — it commits to your repo and deploys automatically

## Sections

| Page | Slug | Description |
|------|------|-------------|
| Home | `/` | Polaroid hero + featured articles |
| Art | `/art/` | Paintings, prints & creative supplies |
| Beauty | `/beauty/` | Skincare, makeup & self-care rituals |
| Fashion | `/fashion/` | Clothing, accessories & jewellery |
| Curio | `/curio/` | Decor, curiosities & the aesthetic life |
| Stationery | `/stationery/` | Notebooks, pens & paper goods |
| Study | `/study/` | Desk setup, tools & quiet focus |

## Tech Stack

- **Astro** — Static site generator
- **Decap CMS** — Browser-based content editor
- **GitHub Pages** — Hosting
- **GitHub Actions** — Automatic deploy
