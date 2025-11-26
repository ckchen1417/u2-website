# 📁 Project Structure

```
u2-website/
│
├── 🌐 Core Website Files (Required)
│   ├── index.html              # Main HTML page
│   ├── styles.css              # All styling and design
│   └── script.js               # Course data and pagination logic
│
├── 📚 Documentation (Helpful)
│   ├── README.md               # Full documentation
│   ├── QUICKSTART.md          # Get started in 2 minutes
│   ├── DEPLOYMENT.md          # Detailed deployment guide
│   └── PROJECT-STRUCTURE.md   # This file
│
├── ⚙️ Configuration Files (For Deployment)
│   ├── package.json           # NPM configuration
│   ├── netlify.toml           # Netlify settings
│   ├── vercel.json            # Vercel settings
│   └── .gitignore             # Git ignore rules
│
└── 🚀 Deployment Scripts (Optional)
    ├── deploy.sh              # Unix/Mac deployment script
    └── deploy.bat             # Windows deployment script
```

## 📄 File Descriptions

### Core Files (Must Keep)

**index.html** (145 lines)
- Complete HTML structure
- Header with navigation and search
- Hero section with call-to-action
- Course grid container
- Pagination controls
- Categories section
- Footer

**styles.css** (400+ lines)
- CSS variables for easy theming
- Responsive design (mobile, tablet, desktop)
- Modern purple gradient theme
- Hover effects and transitions
- Grid layouts for courses (3x3)
- Professional typography

**script.js** (270+ lines)
- 27 sample courses with data
- Pagination system (9 courses per page)
- Dynamic course rendering
- Page navigation logic
- Smooth scrolling
- Responsive page number display

### Documentation Files

**README.md**
- Complete project overview
- All deployment options
- Customization guide
- Browser support info
- Performance details

**QUICKSTART.md**
- 2-minute deployment guide
- Local testing instructions
- Quick customization checklist
- Platform comparison table

**DEPLOYMENT.md**
- Step-by-step deployment guides
- Command-line instructions
- Troubleshooting section
- Pro tips and best practices

### Configuration Files

**package.json**
- Project metadata
- NPM scripts for local development
- Deployment commands
- Repository information

**netlify.toml**
- Netlify-specific configuration
- Security headers
- Cache control settings
- Redirect rules

**vercel.json**
- Vercel deployment settings
- Route configuration
- Build optimization
- Header configuration

**.gitignore**
- Excludes system files
- Ignores editor configs
- Prevents sensitive data commits
- Keeps repository clean

### Deployment Scripts

**deploy.sh** (Unix/Mac)
- Interactive deployment menu
- Auto-installs required CLIs
- Supports Netlify, Vercel, GitHub Pages
- User-friendly prompts

**deploy.bat** (Windows)
- Windows-compatible version
- Same features as deploy.sh
- PowerShell/CMD compatible

## 🎯 Minimum Required Files

To deploy your site, you only need these 3 files:

```
✅ index.html
✅ styles.css
✅ script.js
```

All other files are optional helpers!

## 📦 What to Deploy

### Option 1: Everything (Recommended)
Upload all files - keeps documentation accessible

### Option 2: Core Files Only
Just upload the 3 core files for minimal footprint

### Option 3: With Configuration
Upload core files + config for your platform:
- **Netlify**: Add `netlify.toml`
- **Vercel**: Add `vercel.json`
- **GitHub Pages**: Add `.gitignore`

## 🔧 Customization Map

### Change Colors
📝 Edit `styles.css` → Find `:root` section (lines 11-18)

### Add/Edit Courses
📝 Edit `script.js` → Find `allCourses` array (lines 2-250)

### Change Brand Name
📝 Edit `index.html` → Find "LearnHub" (multiple places)

### Modify Layout
📝 Edit `styles.css` → Find `.courses-grid` (line 156)

### Change Courses Per Page
📝 Edit `script.js` → Line 253: `const coursesPerPage = 9;`

## 📊 File Sizes

| File | Size | Purpose |
|------|------|---------|
| index.html | ~6 KB | Structure |
| styles.css | ~12 KB | Design |
| script.js | ~10 KB | Logic |
| **Total** | **~28 KB** | **Fast loading!** |

## 🚀 Performance

- ✅ No external dependencies
- ✅ No build process needed
- ✅ No frameworks (pure vanilla JS)
- ✅ Optimized for speed
- ✅ Mobile-friendly
- ✅ SEO-ready

## 📱 Responsive Breakpoints

- 📱 Mobile: < 768px (1 column)
- 📱 Tablet: 768px - 1024px (2 columns)
- 💻 Desktop: > 1024px (3 columns)

## 🎨 Color Scheme

```css
Primary Purple:    #a435f0
Secondary Purple:  #5624d0
Text Dark:         #1c1d1f
Text Light:        #6a6f73
Background:        #f7f9fa
Border:            #d1d7dc
```

## ✅ Deployment Checklist

Before deploying:

- [ ] Test locally by opening `index.html`
- [ ] Check all 3 pages of courses work
- [ ] Verify mobile responsive design
- [ ] Customize brand name if desired
- [ ] Update meta tags in `index.html`
- [ ] Choose deployment platform
- [ ] Follow deployment guide
- [ ] Test live site on multiple devices
- [ ] Share your new site! 🎉

---

**Need help?** Check out `QUICKSTART.md` for the fastest deployment method!

