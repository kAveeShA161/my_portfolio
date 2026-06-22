# Kaveesha Sewmini Portfolio

A responsive personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide icons. It showcases profile information, education, projects, skills, articles, certifications, volunteering, contact links, and a downloadable CV.

## Screenshots

Add project screenshots here after capturing the site.

| Desktop | Mobile |
| --- | --- |
| <img width="1900" height="840" alt="Desktop screenshot" src="https://github.com/user-attachments/assets/39da9581-2aad-47a6-a95a-df47210bc40e" /> | <img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/b7a80e4a-2d10-4750-8066-2a3b25053e1e" />
 |
| <img width="1898" height="842" alt="Desktop screenshot" src="https://github.com/user-attachments/assets/89ca4f74-764b-45ee-94c4-a11a9b49d2a2" /> | <img width="720" height="1600" alt="Mobile screenshot" src="https://github.com/user-attachments/assets/b64a4a82-e432-4a6b-ae1f-59cb82152b84" /> |
| <img width="1893" height="838" alt="Desktop screenshot" src="https://github.com/user-attachments/assets/c767cd5e-5a87-4b66-b5f7-a1de9a091345" /> | <img width="720" height="1600" alt="Mobile screenshot" src="https://github.com/user-attachments/assets/46d5a788-5cde-429b-9315-b9fd34c24f98" /> |
| <img width="1893" height="840" alt="Desktop screenshot" src="https://github.com/user-attachments/assets/51b96ff9-6a2a-47bf-bd04-8c73d36d0a4d" /> | <img width="720" height="1600" alt="Mobile screenshot" src="https://github.com/user-attachments/assets/653ee5a6-4e28-4791-9715-da8126c21435" /> |
| <img width="1900" height="843" alt="Desktop screenshot" src="https://github.com/user-attachments/assets/9d5ae6f4-6378-44ad-8bbb-c0e3ab52633a" /> | <img width="720" height="1600" alt="Mobile screenshot" src="https://github.com/user-attachments/assets/99f23250-eb0d-425e-ba89-e788a6c856a7" /> |
| <img width="1891" height="838" alt="Desktop screenshot" src="https://github.com/user-attachments/assets/5a32de69-0cc2-4c66-bd72-1d1da8ea1387" /> | <img width="720" height="1600" alt="Mobile screenshot" src="https://github.com/user-attachments/assets/9d2c4020-69ce-4d77-803f-7048bcded9c0" /> |
| <img width="1891" height="840" alt="Desktop screenshot" src="https://github.com/user-attachments/assets/a3b57253-7faa-4aa8-b820-721492f0ab6d" /> | <img width="720" height="1600" alt="Mobile screenshot" src="https://github.com/user-attachments/assets/2d78b12b-00f7-4908-be4f-61cfa48449ee" /> |


## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons
- React Router DOM
- ESLint
- GitHub Pages deployment support

## Features

- Responsive portfolio layout
- Dark and light theme support
- Animated hero section
- Education timeline/cards
- Filterable projects dropdown
- Skills and expertise cards
- Filterable articles dropdown with horizontal carousel
- Certifications section
- Volunteering and extracurricular section
- Contact section
- Downloadable CV

## Folder Structure

```text
my_portfolio/
|-- public/
|   |-- Docs/
|   |   `-- KaveeshaSewmini_CV_SoftwareEngineer.pdf
|   |-- images/
|   |   |-- Certificates/
|   |   |-- ExtraCurricular/
|   |   `-- ...
|   |-- favicon.png
|   `-- icons.svg
|-- src/
|   |-- components/
|   |   |-- Articles.tsx
|   |   |-- Certificates.tsx
|   |   |-- Contact.tsx
|   |   |-- Education.tsx
|   |   |-- ExtraCurricular.tsx
|   |   |-- Footer.tsx
|   |   |-- Hero.tsx
|   |   |-- Navbar.tsx
|   |   |-- Projects.tsx
|   |   |-- ResumeDownload.tsx
|   |   |-- SectionWrapper.tsx
|   |   |-- Skills.tsx
|   |   `-- ThemeProvider.tsx
|   |-- constants/
|   |   `-- resume.ts
|   |-- App.tsx
|   |-- app.css
|   |-- index.css
|   `-- index.tsx
|-- eslint.config.js
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- tsconfig.json
`-- vite.config.ts
```

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

### Clone the Repository

```bash
git clone https://github.com/kAveeShA161/my_portfolio.git
cd my_portfolio
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open the local URL printed in the terminal, usually:

```text
http://localhost:5173/my_portfolio/
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## How to Customize

### Update Personal Information

Edit these files:

- `src/components/Hero.tsx` - hero text, profile image, social links, and CV button
- `src/components/Navbar.tsx` - navigation links and displayed name
- `src/components/Contact.tsx` - contact details and social/contact links
- `src/components/Footer.tsx` - footer content

### Update Projects

Edit `projectsData` in:

```text
src/components/Projects.tsx
```

Each project supports:

- `title`
- `description`
- `image`
- `tags`
- `liveUrl`
- `githubUrl`

Place project images in:

```text
public/images/
```

### Update Skills

Edit `skillCategories` and `SkillIcon` in:

```text
src/components/Skills.tsx
```

Use `skillCategories` to add, remove, or reorder skill cards. Add matching entries in `SkillIcon` when you want a specific icon for a skill.

### Update Articles

Edit `articlesData` in:

```text
src/components/Articles.tsx
```

Each article supports:

- `title`
- `excerpt`
- `date`
- `readTime`
- `url`
- `image`
- `tags`

### Update Education

Edit:

```text
src/components/Education.tsx
```

### Update Certifications

Edit:

```text
src/components/Certificates.tsx
```

Place certificate images in:

```text
public/images/Certificates/
```

### Update Volunteering and Extra Curricular Activities

Edit:

```text
src/components/ExtraCurricular.tsx
```

Place related images in:

```text
public/images/ExtraCurricular/
```

### Update the CV

Replace the PDF in:

```text
public/Docs/
```

Then update the file name in:

```text
src/constants/resume.ts
```

### Update Images

Most images are loaded from `public/images`. For Vite with the current GitHub Pages base path, image paths use:

```text
/my_portfolio/images/image-name.png
```

If you rename the repository or deploy under a different base path, update `base` in:

```text
vite.config.ts
```

## Deployment

This project includes GitHub Pages deployment support.

Build before deploying:

```bash
npm run build
```

Deploy the `dist` folder:

```bash
npm run deploy
```

If deploying somewhere other than GitHub Pages, update `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/'
})
```

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - run TypeScript checks and create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint
- `npm run deploy` - deploy `dist` to GitHub Pages

## License

This portfolio is for personal use. Update this section if you want to publish it under a specific open-source license.
