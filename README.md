# Veritas_AI

## Project Description

Veritas AI (Claim adjustment platform).

## Tools used

### Frontend

- React.js
- Tailwind CSS
- Typescript

### Backend

- Python

## Table of Contents

- About
- Features
- Usage (Installation & Setup)
- Project Structure
- Explanation of Key folders and files
- Design Approach
- Contributions

## About

Veritas AI is an AI-powered adjustment claim platform that fastens and authenticates the process of Claim verification in Insurance companies. With Veritas AI, insurance firms can now verify customers' claim faster and more acurately.

## Features

- Navigation (sidebar, topbar)
- Dashboard overview
- Claims table (with filtering/sorting)
- Claim details view
- Claim creation flow
- Reports & Analytics (charts, insights)
- Notifications system
- Settings page

## Usage (installation and Setup)

### Installation

1 **Clone the Repository**
git clone https://github.com/your-username/your-repo.git
cd your-repo

2. **Install dependencies**
   npm install

3. **Setup environment variables**
   create a .env file the root directory and add the required variables
   NEXT_PUBLIC_API_URL=your_api_url
   DATABASE_URL=your_database_url

### usage

1. **Start the development server**
   npm run dev
   This app will running at https://localhost:3000

2. **Build for production**
   npm run build

3. **Run production server**
   npm run start

## Project Structure

my-project/
├── public/
│ ├── assets/ # Static images, fonts, icons, etc.
│ └── favicon.ico
│
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── Button/
│ │ │ ├── Button.tsx
│ │ │ └── Button.module.css (or .scss / styled)  
│ │ ├── Card/
│ │ ├── Table/
│ │ └── ...  
│ │
│ ├── features/ # Feature-based modules / domains
│ │ ├── claims/
│ │ │ ├── ClaimList.tsx
│ │ │ ├── ClaimDetail.tsx
│ │ │ └── types.ts
│ │ ├── reports/
│ │ ├── settings/
│ │ └── auth/
│ │
│ ├── layouts/ # Page layout components (e.g. sidebar + header)
│ │ ├── DashboardLayout.tsx
│ │ └── AuthLayout.tsx
│ │
│ ├── pages/ # Pages or routes (if using Next.js / file-based routing)
│ │ ├── index.tsx
│ │ ├── claims/
│ │ │ ├── index.tsx
│ │ │ └── [claimId].tsx
│ │ ├── reports.tsx
│ │ └── settings.tsx
│ │
│ ├── hooks/ # Custom React hooks
│ │ └── useFetchClaims.ts
│ │
│ ├── context/ # React Contexts or global state providers
│ │ └── AuthContext.tsx
│ │
│ ├── services/ # API calls / data fetching
│ │ └── claimsApi.ts
│ │
│ ├── utils/ # Helper functions, formatters, etc.
│ │ └── dateUtils.ts
│ │
│ ├── styles/ # Global style files (e.g. tailwind, resets)
│ │ ├── globals.css
│ │ └── tailwind.css
│ │
│ ├── types/ # Shared TypeScript types
│ │ └── index.ts
│ │
│ ├── App.tsx Root component (if not using Next.js)
| └── App.css
│
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
├── README.md
└── vite.config.ts # Or next.config.js / webpack configs

## Explanation of Key Folders & Files

| Folder / File                            | Purpose                                                                                                                     |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `public/`                                | Contains static assets served as-is (images, icons, etc.)                                                                   |
| `src/components/`                        | Reusable UI components (buttons, cards, table rows, etc.)                                                                   |
| `src/features/`                          | Domain-specific modules (claims, reports, settings). Contains components, hooks, types, state logic related to that domain. |
| `src/layouts/`                           | Higher-order components that wrap pages (e.g. common header, sidebar)                                                       |
| `src/pages/`                             | Top-level routes/pages (for concatenating into the application navigation)                                                  |
| `src/hooks/`                             | Custom hooks used across the app                                                                                            |
| `src/context/`                           | React Context providers for global state (e.g. user auth, theme)                                                            |
| `src/services/`                          | API client logic, fetch / axios calls, endpoints                                                                            |
| `src/utils/`                             | Pure functions, formatters, helper utilities                                                                                |
| `src/types/`                             | TypeScript types and interfaces shared across modules                                                                       |
| `tailwind.config.js / postcss.config.js` | Configuration for TailwindCSS and PostCSS                                                                                   |
| `tsconfig.json`                          | TypeScript compiler settings                                                                                                |
| `.env`                                   | Environment variables (API endpoints, keys)                                                                                 |
| `vite.config.ts`                         | Configuration for Vite (if using Vite)                                                                                      |
| `README.md`                              | Project documentation                                                                                                       |

## Contributions

### We welcome contributions! To contribute to this project, please follow these steps:

- Fork the repository
- Click the "Fork" button at the top right of this page.
- Clone your fork locally
  git clone https://github.com/your-username/your-repo.git
  cd your-repo
- Create a new branch
  git checkout -b feature/your-feature-name
- Make your changes
- Follow the coding style and project structure.
- Commit your changes
  git commit -m "Add: your detailed commit message"
- Push your branch
  git push origin feature/your-feature-name
- Open a Pull Request
- Go to the original repository and Click New Pull Request.
- Describe your changes clearly.

### Contribution guidelines.

- Use clear, descriptive commit messages.
- Keep pull requests focused (one feature/bug fix at a time).
- Write tests for new features if applicable.
- Check existing issues or open a new one before starting major work.
