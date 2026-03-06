# PlaceO

This repository contains a full-stack project with a Node.js/Express backend and a React frontend (built with Vite).

## ✅ What’s safe and included
- `backend/` folder (**code only**)
  - `index.js`, `config/`, `models/`, `routes/`, `package.json`, etc.
  - `backend/.env.example` (no secrets)
- `placeo-app/` folder (**frontend code**)
  - `src/` and `public/` directories
  - `package.json`, `index.html`
- `.gitignore` (ignores `node_modules`, `.env`, logs, etc.)
- This README and any docs you add

## 🔒 Sensitive things kept out of Git
- `backend/.env` with real MongoDB URI and any other secrets
- `node_modules/` in both backend and frontend
- build artifacts (`dist`, `build`, etc.)
- log files
- IDE/editor settings

## 🚀 Deployment Instructions

### Backend (e.g. Heroku, Railway, Azure)
1. **Install dependencies locally**
   ```bash
   cd backend
   npm install
   ```
2. **Add environment variables on the host platform**
   - `MONGODB_URI` = `mongodb+srv://<user>:<pass>@.../PlaceO`
   - (Optional) `PORT`, `NODE_ENV`, `JWT_SECRET`, etc.
3. **Ensure `backend/config/db.js` uses `process.env.MONGODB_URI`** (already done).
4. **Start server**
   ```bash
   npm start
   ```
5. On platforms like Heroku, set the buildpack to Node and push the repo or connect via GitHub.

### Frontend (e.g. Vercel, Netlify)
1. **Install and build**
   ```bash
   cd placeo-app
   npm install
   npm run build
   ```
2. **Deploy** using Vercel/Netlify by pointing the service at this repository. It will detect Vite.

### Full-stack on one platform (optional)
- Use Heroku/Render/Railway to host both; set `heroku-postbuild` to build frontend or serve static files from Express.
- Example: copy built `dist` to `backend/public` and serve with `express.static`.

## 📁 GitHub Upload Steps
```bash
cd c:/Users/Lenovo/OneDrive/Desktop/PlaceO
# Make sure .gitignore is correct
git init
git add .
# verify ignored files
git check-ignore -v backend/.env
# commit and push
git commit -m "Initial commit - safe code only"
git branch -M main
git remote add origin https://github.com/LakshmiNikitha-developer/PlaceO.git
git push -u origin main
```

> **Note:** if you already pushed and accidentally added a secret, rotate it immediately and remove the file from history (e.g. `git filter-branch` or `bfg`).

## 📌 After Upload Checklist
- [ ] Confirm `.env` is **not** in GitHub (should show as ignored)
- [ ] Check repository on GitHub: code only, no credentials
- [ ] Create GitHub Actions workflows if you want automatic deploys (optional but recommended)

---

Feel free to customize this README with more project details, setup steps for contributors, or links to your GitHub profile:

https://github.com/LakshmiNikitha-developer
