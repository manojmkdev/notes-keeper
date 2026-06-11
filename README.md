# Notes Keeper 📝

A modern, responsive, and feature-rich note-taking web application built with React, styled with clean custom CSS, and powered by Gemini AI.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-notes--keeper--zeta.vercel.app-blue?style=for-the-badge&logo=vercel)](https://notes-keeper-zeta.vercel.app/login)

---

## ℹ️ About the Project

**Notes Keeper** is a sleek note-taking application designed for capturing, organizing, and managing thoughts, tasks, and ideas. The application features user authentication, custom note categorization, rich text editing, and an advanced **Gemini AI integration** to help refine, correct, and summarize your notes. 

The application is fully responsive, offering a seamless user experience across mobile, tablet, and desktop devices. It persists user data locally using `localStorage` and integrates directly with the Google Gemini API for real-time writing assistance.

🔗 **Live Link**: [https://notes-keeper-zeta.vercel.app/login](https://notes-keeper-zeta.vercel.app/login)

---

## 🚀 Key Features

*   🤖 **Gemini AI Assistant**: Built-in "Fix with AI" helper that automatically reviews rough drafts, corrects grammar/spelling, structure bullet points, and provides side-by-side comparison previews powered by Gemini 2.5 Flash Lite.
*   ✍️ **Rich Text Editor**: Rich note drafting (bold, italic, underline, headers, lists, code blocks, quote blocks) powered by React Quill.
*   🎨 **Visual Personalization**: Color-code individual notes with a custom pastel color palette (Red, Orange, Yellow, Green, Teal, Blue, Purple, Pink).
*   📁 **Notebooks**: Create and manage custom folders/notebooks to group related notes together.
*   🏷️ **Tags**: Custom multi-colored labels to tag notes for multi-dimensional filtering.
*   📌 **Note Operations**:
    *   **Pin**: Keep important notes pinned to the top of your list.
    *   **Archive**: Declutter your main view by moving notes into the Archive.
    *   **Trash**: Safely delete notes to the Trash. You can restore notes or permanently delete them here.
*   🔍 **Instant Search & Sorting**: Real-time content and title searching, alongside sorting by Title, Created Date, or Last Updated.
*   👤 **Profile & Statistics**: User account profile with automatic usage statistics (active notes, notebooks, tags, archive count).
*   📱 **Responsive Layout**: Fluid drawer sidebar, grid/list view toggles, and screen-adapted modals for mobile devices.

---

## 🛠️ Tech Stack

*   **Frontend**: React 19, React Router v7
*   **Editor**: React Quill (via `react-quill-new`)
*   **AI Engine**: Gemini 2.5 Flash Lite API
*   **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Media Queries)
*   **Data Persistence**: Browser LocalStorage (divided per-user account)
*   **Utilities**: UUID (Unique Note/Notebook/Tag generation), React Toastify (Smooth notifications)

---

## ⚙️ Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/manojmkdev/notes-keeper.git
cd notes-keeper
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory of the project:
```env
REACT_APP_GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 4. Run the development server
```bash
npm start
```
The application will open in your default browser at `http://localhost:3000`.

---

## 📂 Project Structure

```text
notes-keeper/
├── public/
└── src/
    ├── components/          # Reusable UI components
    │   ├── NoteCard.js      # Individual note card representation
    │   ├── NoteEditor.js    # Rich text editor modal & AI comparison view
    │   ├── NoteViewer.js    # Read-only note viewer modal
    │   ├── Sidebar.js       # Main navigation layout
    │   └── Topbar.js        # Search bar and user profile dropdown
    ├── pages/               # Page components / routes
    │   ├── AllNotes.js      # Main notes dashboard (also handles Archive, Trash, Settings)
    │   ├── Auth.css         # Styling for authentication forms
    │   ├── Home.js          # Nested route parent container
    │   ├── NotebooksPage.js # Notebook manager page
    │   ├── TagsPage.js      # Tags manager page
    │   ├── Profile.js       # User profile details and statistics
    │   ├── Login.js         # User login screen
    │   └── Signup.js        # User signup screen
    ├── utils/               # Storage and AI API helpers
    │   ├── ai.js            # Gemini API Integration
    │   └── Storage.js       # LocalStorage CRUD operations for user assets
    ├── App.js               # Route declaration & protected/guest wrappers
    └── index.js             # App entry point
```

---

## 📄 License

This project is licensed under the MIT License.
