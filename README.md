# Sankalp Bhat - Portfolio Website

A clean, professional dark-themed portfolio website built with Next.js and Tailwind CSS, designed for GitHub Pages hosting.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Professional dark theme with smooth animations
- **Smooth Navigation**: Smooth scrolling between sections with active state tracking
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **GitHub Pages Ready**: Configured for static export and GitHub Pages deployment

## Sections

- **Home**: Hero section with introduction and profile image
- **About**: Personal story, skills, and background information
- **Projects**: Showcase of featured projects with technologies used
- **Publications**: Academic papers and research contributions
- **Resume**: Experience, education, and downloadable resume
- **Contact**: Contact information and social media links

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/sankalp-bhat/sankalp-bhat.github.io.git
cd sankalp-bhat.github.io
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To build the static site for GitHub Pages:

\`\`\`bash
npm run build
\`\`\`

This will create an `out` directory with the static files ready for deployment.

## Deployment to GitHub Pages

1. Create a repository named `username.github.io` (replace `username` with your GitHub username)
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Set source to "Deploy from a branch"
5. Select the branch containing your built files
6. Your site will be available at `https://username.github.io`

## Customization

### Personal Information

Update the following in `app/page.tsx`:
- Name and title in the hero section
- About me content
- Skills and technologies
- Project information
- Publication details
- Contact information
- Social media links

### Styling

The website uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Component styles directly in the JSX

### Images

Replace placeholder images:
- Profile picture: Update the Image component in the hero section
- Project images: Add project screenshots to the public directory

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: contact@sankalpbhat.dev
- **LinkedIn**: [Sankalp Bhat](https://www.linkedin.com/in/sankalp-bhat-20a397a4/)
- **GitHub**: [sankalp-bhat](https://github.com/sankalp-bhat)
