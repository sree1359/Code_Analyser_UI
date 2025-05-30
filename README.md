# 🔍 Codebase Analyzer (React + Vite + FastAPI)

This project is a full-stack code analysis tool that allows users to analyze Python repositories or local paths to gain insights about the codebase structure, file summaries, method details, and complexity notes.

---

## 🧠 Features

- ✨ React + Vite frontend with HMR
- ⚡ FastAPI backend for repository analysis
- 📄 File-by-file insights: summaries, method signatures, and descriptions
- 🎯 Easy-to-use interface with clean UI
- 📁 Dynamic file viewer with method breakdowns
- 🌐 Axios/fetch API integration with error handling

---

## 🛠️ Tech Stack

### Frontend

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (for utility-first styling)
- [Axios](https://axios-http.com/) (for HTTP requests)

### Backend

- [FastAPI](https://fastapi.tiangolo.com/)
- Python 3.9+

---

## 🧩 Project Structure

```
root/
├── backend/                    # FastAPI backend
│   └── main.py                 # Analyze API route
├── frontend/
│   ├── src/
│   │   ├── App.jsx             # Main React component
│   │   ├── components/
│   │   │   └── CodeExplorer.jsx # Displays analysis output
│   │   ├── api/
│   │   │   └── axiosInstance.js # Axios instance (optional)
│   │   └── index.css           # Styling
│   └── index.html
├── README.md
└── ...
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/codebase-analyzer.git
cd codebase-analyzer
```

### 2. Setup Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

This will start the backend server at `http://127.0.0.1:8000`.

### 3. Setup Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

The frontend will be served at `http://localhost:5173`.

---

## 📬 API Route

### POST `/analyseJson`

**Request body:**

```json
{
  "repo_url": "https://github.com/username/repo"
}
```

**Response:**

```json
{
  "success": true,
  "insights": [
    {
      "file": "path/to/file.py",
      "insight": {
        "file_summary": "...",
        "methods": [...],
        "complexity_notes": "..."
      }
    }
  ]
}
```

---

## 📸 UI Preview

- Sidebar with clickable file names
- Main panel with:
  - File path
  - Summary and complexity notes
  - Methods list with signatures and descriptions

---

## 💡 Future Improvements

- TypeScript support
- Syntax highlighting for code
- GitHub repo cloning integration
- Dockerized deployment

---

## 📄 License

MIT License
