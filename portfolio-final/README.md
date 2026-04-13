# Pranjal Navgale — Developer Portfolio

Futuristic engineering portfolio with full-stack backend.

## Stack
- **Frontend**: HTML/CSS/JS (production-ready, or migrate to Next.js)
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Animations**: CSS + Canvas (particle network, scroll reveals, custom cursor)

---

## Quick Start

### Frontend
Open `portfolio.html` directly in a browser, or serve it:
```bash
npx serve . -l 3000
```

### Backend
```bash
cd backend
npm install
# Set env vars:
export MONGO_URI=mongodb://localhost:27017/portfolio
export PORT=5000
export FRONTEND_URL=http://localhost:3000
npm run dev
```

### Environment Variables
Create `backend/.env`:
```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio
PORT=5000
FRONTEND_URL=https://yourportfolio.com
```

---

## API Endpoints

### POST /api/contact
Submit a contact message.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Let's build something together."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message received, John. I'll get back to you at john@example.com soon.",
  "id": "64abc123..."
}
```

### GET /api/health
Returns server status.

---

## Deployment

### Frontend (Vercel)
```bash
vercel deploy
```

### Backend (Railway / Render)
1. Push to GitHub
2. Connect repo to Railway or Render
3. Set environment variables
4. Deploy

---

## Customization Checklist
- [ ] Update email, GitHub, LinkedIn links in `portfolio.html`
- [ ] Add real GitHub username to repo links
- [ ] Update project GitHub URLs
- [ ] Set real `MONGO_URI` in production
- [ ] Add domain to `FRONTEND_URL` in CORS config

---

## Folder Structure
```
portfolio/
├── portfolio.html          # Complete frontend
├── README.md
└── backend/
    ├── server.js           # Express app entry
    ├── package.json
    ├── routes/
    │   └── contact.js      # POST /api/contact
    └── models/
        └── Contact.js      # MongoDB schema
```
