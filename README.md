# LearnHub - Udemy-Style Landing Page

A modern, responsive landing page inspired by Udemy, featuring a 3x3 course grid with pagination.

## Features

- 🎨 Modern, clean UI with purple gradient theme
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔄 Pagination system (9 courses per page in 3x3 grid)
- ⚡ Fast loading, no dependencies required
- 🎯 Easy to customize and deploy

## Local Development

Simply open `index.html` in your web browser - no build process required!

## Deployment Options

### Option 1: Deploy to Netlify (Recommended - Easiest)

#### Method A: Drag & Drop
1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up for a free account
3. Drag and drop this entire folder into the Netlify dashboard
4. Your site is live! 🎉

#### Method B: Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Deploy from this directory
netlify deploy

# Follow the prompts, then deploy to production
netlify deploy --prod
```

### Option 2: Deploy to Vercel

#### Method A: Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from this directory
vercel

# Follow the prompts
```

#### Method B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com/)
2. Sign up for a free account
3. Click "Add New Project"
4. Import your Git repository or upload files
5. Click "Deploy"

### Option 3: Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push this code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```
3. Go to repository Settings → Pages
4. Select "main" branch as source
5. Click Save
6. Your site will be live at: `https://username.github.io/repository-name`

### Option 4: Deploy to Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com/)
2. Sign up for a free account
3. Click "Create a project"
4. Connect your Git repository or upload files directly
5. Click "Deploy"

### Option 5: Traditional Web Hosting (cPanel, FTP)

1. Connect to your web host via FTP (FileZilla, etc.)
2. Upload all files to your `public_html` or `www` directory
3. Access your site via your domain

## File Structure

```
u2-website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Course data and pagination logic
├── README.md           # This file
├── .gitignore          # Git ignore file
└── netlify.toml        # Netlify configuration (optional)
```

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #a435f0;      /* Main purple */
    --secondary-color: #5624d0;    /* Dark purple */
    --text-primary: #1c1d1f;       /* Main text */
    /* ... more variables ... */
}
```

### Adding More Courses

Add course objects to the `allCourses` array in `script.js`:

```javascript
{
    id: 28,
    title: "Your Course Title",
    instructor: "Instructor Name",
    rating: 4.7,
    ratingCount: 12345,
    price: "$79.99",
    emoji: "🎓",
    badge: "New"
}
```

### Changing Courses Per Page

Modify the `coursesPerPage` variable in `script.js`:

```javascript
const coursesPerPage = 9; // Change to 6, 12, etc.
```

### Updating Site Content

- **Logo**: Change "LearnHub" in `index.html`
- **Hero Title**: Edit the `.hero-title` content
- **Categories**: Modify the categories section in `index.html`
- **Footer**: Update footer links and information

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance

- 🚀 No external dependencies
- ⚡ Vanilla JavaScript (no frameworks)
- 📦 Minimal file size
- 🎯 Fast loading time

## License

Feel free to use this template for personal or commercial projects.

## Support

For issues or questions, please create an issue in the repository.

---

Made with ❤️ for online learning platforms

