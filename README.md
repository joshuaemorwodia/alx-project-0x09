# ALX Project 0x08 - Dynamic Image Generator

This project is a basic image generation app built using **Next.js** and **TypeScript**. It allows users to enter prompts and "generate" corresponding images using placeholder logic.

## Features

- Uses React state to handle user input and image display
- Responsive layout styled with Tailwind CSS
- Clickable image cards with prompt display
- Organized with TypeScript interfaces

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alx-project-0x08.git
   cd alx-project-0x08
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Folder Structure

```
alx-project-0x08/
├── components/
│   └── common/
│       └── ImageCard.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   └── index.tsx
├── tsconfig.json
├── tailwind.config.js
└── ...
```

## Notes

- The app currently uses placeholder image generation via `https://via.placeholder.com`.
- You can replace this with real API integration later.
