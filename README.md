# Ace Courtroom Battles <img src="https://github.com/user-attachments/assets/cead3c62-c674-4b58-a0d8-67eafa6c7b95" alt="Ace Attorney Logo" width="50" height="50" />

Ace Courtroom Battles is a responsive web application built with **Astro**, inspired by the Ace Attorney series. This project was created as a final showcase of my full-stack development skills, highlighting features such as character interactions, review of the courtroom battles, and user-driven voting. It combines modern technologies to deliver an engaging and dynamic experience.

## 🚀 Features

- **Interactive Pages**: Includes dynamic animations, sound effects, and a logo inspired by Ace Attorney.
- **Character Profiles**: Browse attorneys and prosecutors with hover effects, view individual profiles, and interact with their voice lines.
- **Rankings**: Users can log in with Google Auth and vote for their favorite characters. The app displays rankings with real-time data.
- **Courtroom Battles**: Detailed pages showcasing iconic courtroom battles, complete with case information, visual dialogue interactions, and background music.
- **Highlights Section**: Watch videos of full courtroom cases directly on the website.

## 🛠️ Tech Stack

- **Framework**: Astro
- **Authentication**: Astro Auth (Google Auth0)
- **Styles**: CSS and Tailwind
- **Language**: TypeScript
- **Database**: 
  - **Primary**: Turso DB
  - **Local**: SQL Server (switchable)
- **ORM**: Prisma
- **Deployment**: Vercel

## 🛠️ Installation and Configuration

To run the project locally, follow these steps:

### Clone the repository

````
git clone https://github.com/jigcolapaolo/ace-courtroom-battles.git
````

### Install dependencies

````
npm install --force
````

> [!NOTE]  
> Use the --force flag to avoid dependency conflicts when installing or removing packages.


### Database Configuration
This project allows you to switch between **Turso DB** and **SQL Server** for the database. To change databases:

1. Comment/uncomment the relevant code in:
   - `prisma/schema.prisma`
   - `prisma/client.ts`
2. Run the following command every time you switch:
````
npx prisma generate
````

## 🧞 Astro Commands


| Command                   | Action                                              |
| :------------------------ | :-----------------------------------------------    |
| `npm install`             | Install dependencies                                |
| `npm run dev`             | Starts the local development server at `localhost:4321`     |
| `npm run build`           | Builds the app for production in `./dist/`          |
| `npm run astro ...`       | Runs Astro CLI commands, such as `astro add`, `astro check`|
| `npm run astro -- --help` | Displays help for the Astro CLI                     |


## 🧪 Tests

This app includes end-to-end (E2E) testing with Playwright.

### Run E2E Tests with Playwright


To run all tests:
````
npx playwright test
````
To run tests with a UI:
````
npx playwright test --ui
````
