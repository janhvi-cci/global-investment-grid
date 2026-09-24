# Global Investment Grid (GIG)

## Connecting Global Capital with Global Opportunities

A comprehensive frontend-only investment opportunity discovery portal.

---

## 🎯 Overview

**Global Investment Grid (GIG)** is a government-style investment opportunity portal prototype. It allows investors to discover, search, and express interest in investment projects across countries and sectors.

**Important:** This is a **frontend demonstration portal**. All project data, statistics, and information shown are illustrative and for demonstration purposes only.

---

## 📋 Features

### Core Functionality
- ✅ **Search & Discovery** - Search projects by name, country, sector, or keyword
- ✅ **Advanced Filtering** - Filter by country, sector, investment size, project stage, and opportunity type
- ✅ **Project Details** - View comprehensive information about each investment opportunity
- ✅ **Express Interest** - Submit interest forms for projects
- ✅ **Save Projects** - Bookmark favorite projects using browser localStorage
- ✅ **Country Explorer** - Browse opportunities by country and region
- ✅ **Sector Explorer** - Explore investment opportunities by sector
- ✅ **Interactive World Map** - Lightweight SVG-based world map with hover and click interactions
- ✅ **Mobile Responsive** - Fully responsive design for desktop, tablet, and mobile
- ✅ **Accessible** - Semantic HTML, keyboard navigation, proper color contrast

### Government-Style Design
- Clean, institutional aesthetic
- Professional color palette
- Structured information layout
- No unnecessary animations or flashy effects
- Formal, trustworthy appearance

---

## 📁 Project Structure

```
gig-website/
├── index.html       # Main HTML file (all content)
├── style.css        # Complete stylesheet
├── script.js        # All JavaScript functionality
├── world-map-data.js # SVG country outlines for the interactive world map
└── README.md        # This file
```

### Technology Stack
- **HTML5** - Semantic markup
- **CSS3** - Responsive design with media queries
- **Vanilla JavaScript** - No frameworks or external dependencies
- **localStorage** - For saving projects

---

## 🚀 How to Use

### Opening the Website
1. Open `index.html` in any modern web browser
2. No server or build process required
3. Works completely offline

### Main Features

#### Search & Filter
1. Use the search bar on the homepage to find projects by keyword
2. Use the advanced filters section to narrow results by:
   - Country
   - Sector
   - Investment Size
   - Project Stage
   - Opportunity Type
3. Click "APPLY FILTERS" to see results
4. Click "RESET" to clear all filters

#### View Project Details
1. Click "VIEW PROJECT" on any project card
2. Review comprehensive project information
3. Click "EXPRESS INTEREST" to submit an expression of interest
4. Click "SAVE PROJECT" to bookmark the project

#### Explore by Country
1. Scroll to "Explore by Country" section
2. Click any country button to filter projects for that country
3. Automatically navigates to filtered results

#### Interactive World Map
1. Hover over countries on the map to see opportunity counts
2. Click a country to filter opportunities from that region
3. Map shows key sectors and project count for each country

#### Save Projects
- Click the star icon (☆/★) to save/unsave projects
- Saved projects are stored in browser localStorage
- Saved state persists across browser sessions

---

## 📊 Sample Data

The website includes 15 demonstration projects with realistic scenarios:

- **Infrastructure** - Port, rail, logistics, and connectivity projects
- **Renewable Energy** - Solar, wind, and green hydrogen projects
- **Manufacturing** - Electronics, semiconductors, and aerospace
- **Technology** - Data centers, smart cities, EdTech platforms
- **Healthcare** - Medical devices and healthcare services
- **Agriculture** - Processing and export hubs
- **Tourism** - Hospitality and heritage sites
- **Mining** - Sustainable resource extraction

All projects are clearly marked as "Sample Project" and are fictional for demonstration purposes.

---

## 🎨 Design Specifications

### Color Palette
- **Primary:** #12355B (Dark Navy)
- **Secondary:** #1D5FA7 (Government Blue)
- **Accent:** #F4A340 (Orange/Gold)
- **Green:** #2E7D5B (Accent Green)
- **Background:** #F5F7F9 (Light Gray)
- **Text:** #1F2933 (Dark Gray)

### Typography
- Font: Arial, Helvetica, sans-serif (system fonts)
- No external font imports needed
- Clean, professional hierarchy

---

## 📱 Responsive Breakpoints

- **Desktop:** 1024px+ (full layout)
- **Tablet:** 768px - 1023px (adjusted grid layout)
- **Mobile:** < 768px (hamburger menu, stacked layout)

Features adapt automatically for smaller screens.

---

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Form labels and descriptions
- Keyboard navigation support
- Focus indicators on interactive elements
- Good color contrast ratios
- Alt text support for images
- Skip-to-content link
- ARIA labels where appropriate

---

## 🔧 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Requires JavaScript enabled.

---

## 📝 Modals & Forms

The website includes several modal dialogues:

1. **Investor Login** - Frontend demo form
2. **Investor Registration** - Frontend demo form
3. **Express Interest in Project** - Submits interest (demo)
4. **Project Promoter Registration** - Frontend demo form

All forms are frontend-only and do not send data anywhere. Messages appear to confirm submission.

---

## 💾 Local Storage

The website uses browser localStorage to:
- Save bookmarked projects
- Remember user selections

Data is stored locally in the browser and is not sent to any server.

---

## 🗺️ World Map

- Country outlines were traced from the supplied world map image into lightweight SVG paths (`world-map-data.js`, ~45 KB)
- No map libraries, APIs or WebGL
- Hover highlights a country (saffron) and shows a small tooltip with opportunity count and key sectors
- Click opens that country's opportunities (same behaviour as the "Explore by Country" buttons)
- Selected country is shown in green and stays in sync with the country buttons / filter dropdown
- Touch devices: tap a country to see its details, then use the "View opportunities" button
- Counts and sectors are read live from `projectsData`; only countries present in that data are interactive
- France, United Kingdom and Canada are outlined but have no sample projects yet, so they are not clickable

---

## 📧 Demo Modals

Several modals are included for demonstration:

- **Investor Login Modal** - Shows login form
- **Investor Registration Modal** - Shows registration form
- **Express Interest Modal** - Collects interest information
- **Project Promoter Registration** - Recruitment form

All submissions show a demo confirmation message without sending data.

---

## ⚙️ Technical Details

### JavaScript Features
- Vanilla JavaScript (no frameworks)
- Event delegation for performance
- Simple state management
- localStorage API for persistence
- SVG manipulation for map

### CSS Features
- CSS Grid and Flexbox layouts
- Mobile-first responsive design
- CSS variables for theming
- CSS transitions for smooth interactions
- Media queries for responsive breakpoints

### Performance
- Lightweight HTML (< 100KB)
- Minimal CSS (< 50KB)
- Efficient JavaScript (< 30KB)
- No external dependencies
- No images or large assets (map is inline SVG)
- Loads instantly on modern computers

---

## 🎓 Educational Use

This is a great example of:
- Government/institutional web design
- Pure HTML/CSS/JavaScript development
- Responsive web design patterns
- Form handling and validation
- Simple state management
- localStorage usage
- SVG manipulation
- Accessibility best practices

---

## 📋 Navigation Structure

**Main Menu:**
- HOME
- INVESTMENT OPPORTUNITIES
- COUNTRIES
- SECTORS
- INVESTORS
- PROJECT PROMOTERS
- RESOURCES
- ABOUT GIG

**Quick Links:**
- Investment Opportunities
- Countries
- Sectors
- Investor Connect

---

## 🔐 Privacy & Disclaimer

**This is a frontend demonstration portal.**

- No data is sent to any server
- No cookies are stored (except localStorage)
- No user tracking
- No analytics
- All project data is fictional
- Statistics are illustrative only
- Not a real government website

---

## 📞 Contact & Support

This is a demonstration project created as a prototype for a Global Investment Grid concept.

For more information about the concept and features, refer to the website footer.

---

## 📄 License

This project is provided as a demonstration/prototype.

---

## ✅ Testing Checklist

- [x] All navigation links work
- [x] Search functionality works
- [x] Filters apply correctly
- [x] Project details display properly
- [x] Express interest form submits
- [x] Save project functionality works
- [x] World map is interactive
- [x] Mobile menu works
- [x] All modals open and close
- [x] Forms validate inputs
- [x] No console errors
- [x] Responsive design works on all screen sizes

---

**Version:** 1.0  
**Last Updated:** September 2026  
**Status:** Frontend Prototype Complete ✅

---

## 🚀 Getting Started

1. Download or clone this folder
2. Open `index.html` in your browser
3. Start exploring investment opportunities!

No installation, no build process, no dependencies required.

Enjoy exploring the Global Investment Grid! 🌍
