# Stanford HealthPath

AI-powered health guidance platform built as a Stanford School of Medicine research initiative. Describe a health concern, get structured diagnostic routes, initial tests, possible diagnoses with treatments, and next steps — all from a single query.

## Features

- **Symptom analysis** — natural language health concern input with autocomplete suggestions
- **Diagnostic routes** — fastest, normal, and complex resolution pathways with timelines and likelihoods
- **Initial tests** — recommended tests for days 1–3
- **Possible diagnoses** — expandable cards with treatment options, success rates, and timelines
- **Next steps** — follow-up actions for weeks 2–3
- **File upload** — attach images, PDFs, or documents for richer context
- **Skeleton loading** — shimmer placeholders and animated thinking steps while awaiting API response

## Tech Stack

- React 18 + React Router 7
- Material UI (MUI) 6
- Axios
- Context API for global state
- Deployed on Vercel

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Backend

Production endpoints (Render):
- `POST https://healthpath-backend-1-vurf.onrender.com/query` — text query
- `POST https://healthpath-backend-1-vurf.onrender.com/upload` — file + prompt
- `POST https://healthpath-backend.onrender.com/suggestions` — autocomplete

## Build

```bash
npm run build
```

Output in `build/`. Deployed automatically via Vercel on push to `main`.
