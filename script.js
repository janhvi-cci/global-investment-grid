/* ====================================
   GLOBAL INVESTMENT GRID - JAVASCRIPT
   ==================================== */

// ====== SAMPLE PROJECT DATA ======
const projectsData = [
    {
        id: 1,
        name: "Green Hydrogen Development Project",
        country: "India",
        region: "Asia",
        sector: "Renewable Energy",
        investment: "USD 850 Million",
        investmentValue: 850,
        stage: "Development",
        type: "Greenfield",
        opportunity: "Equity / Joint Venture",
        description: "A proposed investment opportunity in the renewable energy sector for green hydrogen production.",
        overview: "Develop a large-scale green hydrogen production facility with electrolysis technology for industrial and export applications.",
        requirements: "Equity investor, Technology partner, Project developer",
        highlights: ["Renewable energy integration", "Industrial applications", "Infrastructure development", "Export potential"]
    },
    {
        id: 2,
        name: "Smart Logistics Infrastructure Corridor",
        country: "Vietnam",
        region: "Asia",
        sector: "Infrastructure",
        investment: "USD 1.2 Billion",
        investmentValue: 1200,
        stage: "Planning",
        type: "Greenfield",
        opportunity: "PPP / Developer",
        description: "Advanced logistics network connecting major economic zones.",
        overview: "Build a multi-modal logistics corridor with smart technology integration for regional trade.",
        requirements: "Infrastructure investor, Technology integrator, Government partnership",
        highlights: ["Regional connectivity", "Smart technology", "Trade facilitation", "Job creation"]
    },
    {
        id: 3,
        name: "Advanced Electronics Manufacturing Hub",
        country: "Singapore",
        region: "Asia",
        sector: "Manufacturing",
        investment: "USD 500 Million",
        investmentValue: 500,
        stage: "Implementation",
        type: "Brownfield",
        opportunity: "Equity / Joint Venture",
        description: "Expansion of electronics manufacturing capacity in Southeast Asia.",
        overview: "Establish a regional electronics manufacturing and assembly center.",
        requirements: "Manufacturing expertise, Capital investment, Supply chain partners",
        highlights: ["Regional hub", "High-tech manufacturing", "Supply chain integration", "Tech transfer"]
    },
    {
        id: 4,
        name: "Digital Infrastructure & Data Center",
        country: "United Arab Emirates",
        region: "Middle East",
        sector: "Technology",
        investment: "USD 600 Million",
        investmentValue: 600,
        stage: "Development",
        type: "Greenfield",
        opportunity: "Equity / Debt",
        description: "State-of-the-art data center and digital infrastructure development.",
        overview: "Develop a mega data center complex supporting AI and cloud services.",
        requirements: "Technology investor, Operations expertise, Power infrastructure",
        highlights: ["AI-ready infrastructure", "Regional hub", "Cloud services", "Data security"]
    },
    {
        id: 5,
        name: "Renewable Energy Park (Solar & Wind)",
        country: "Germany",
        region: "Europe",
        sector: "Renewable Energy",
        investment: "USD 450 Million",
        investmentValue: 450,
        stage: "Implementation",
        type: "Greenfield",
        opportunity: "Joint Venture",
        description: "Large-scale renewable energy park combining solar and wind technologies.",
        overview: "Develop integrated solar and wind farm with battery storage.",
        requirements: "Energy investor, Technology expertise, Land developer",
        highlights: ["Carbon neutral", "Energy storage", "Grid modernization", "Export ready"]
    },
    {
        id: 6,
        name: "Healthcare & Medical Devices Park",
        country: "India",
        region: "Asia",
        sector: "Healthcare",
        investment: "USD 350 Million",
        investmentValue: 350,
        stage: "Planning",
        type: "Greenfield",
        opportunity: "PPP",
        description: "Integrated medical devices manufacturing and healthcare services hub.",
        overview: "Create a world-class healthcare manufacturing and innovation cluster.",
        requirements: "Healthcare investor, Medical expertise, Innovation partners",
        highlights: ["Medical innovation", "Export quality", "Employment", "Technology hub"]
    },
    {
        id: 7,
        name: "Agricultural Processing & Export Hub",
        country: "Kenya",
        region: "Africa",
        sector: "Agriculture",
        investment: "USD 250 Million",
        investmentValue: 250,
        stage: "Development",
        type: "Greenfield",
        opportunity: "Equity / Joint Venture",
        description: "Modern agricultural processing facility for regional export.",
        overview: "Develop value-added agricultural processing and export capabilities.",
        requirements: "Agricultural investor, Processing expertise, Export network",
        highlights: ["Local sourcing", "Export markets", "Processing tech", "Rural development"]
    },
    {
        id: 8,
        name: "Tourism & Hospitality Complex",
        country: "Indonesia",
        region: "Asia",
        sector: "Tourism",
        investment: "USD 380 Million",
        investmentValue: 380,
        stage: "Development",
        type: "Brownfield",
        opportunity: "Equity / Joint Venture",
        description: "Integrated tourism and hospitality development on heritage sites.",
        overview: "Build sustainable tourism infrastructure with cultural preservation.",
        requirements: "Hospitality investor, Tourism expertise, Heritage management",
        highlights: ["Sustainable tourism", "Cultural heritage", "Employment", "Local benefits"]
    },
    {
        id: 9,
        name: "Port & Maritime Infrastructure",
        country: "United Arab Emirates",
        region: "Middle East",
        sector: "Infrastructure",
        investment: "USD 2.5 Billion",
        investmentValue: 2500,
        stage: "Planning",
        type: "Greenfield",
        opportunity: "PPP / Concession",
        description: "Mega port development with modern maritime facilities.",
        overview: "Develop a world-class port with integrated logistics services.",
        requirements: "Infrastructure investor, Port operations, Maritime expertise",
        highlights: ["Strategic location", "Global trade", "Container capacity", "Regional hub"]
    },
    {
        id: 10,
        name: "Smart City Development",
        country: "Saudi Arabia",
        region: "Middle East",
        sector: "Technology",
        investment: "USD 1.8 Billion",
        investmentValue: 1800,
        stage: "Implementation",
        type: "Greenfield",
        opportunity: "PPP",
        description: "Comprehensive smart city project with integrated IoT and AI solutions.",
        overview: "Build a fully integrated smart city with digital infrastructure.",
        requirements: "Smart city investor, Technology provider, Urban planning",
        highlights: ["IoT integration", "Sustainability", "Digital governance", "Innovation hub"]
    },
    {
        id: 11,
        name: "Semiconductor Manufacturing Facility",
        country: "Japan",
        region: "Asia",
        sector: "Manufacturing",
        investment: "USD 3 Billion",
        investmentValue: 3000,
        stage: "Planning",
        type: "Greenfield",
        opportunity: "Joint Venture / Consortium",
        description: "Advanced semiconductor fabrication plant.",
        overview: "Establish a high-tech semiconductor manufacturing facility.",
        requirements: "Semiconductor expertise, Capital, Technology partners",
        highlights: ["Advanced tech", "Regional supply", "R&D hub", "High employment"]
    },
    {
        id: 12,
        name: "Rail & Transit Network Expansion",
        country: "Brazil",
        region: "South America",
        sector: "Infrastructure",
        investment: "USD 4 Billion",
        investmentValue: 4000,
        stage: "Development",
        type: "Greenfield",
        opportunity: "PPP / Concession",
        description: "Regional rail and transit network modernization.",
        overview: "Develop modern rail infrastructure connecting major cities.",
        requirements: "Infrastructure investment, Rail expertise, Project management",
        highlights: ["Regional connectivity", "Modernization", "Sustainability", "Economic impact"]
    },
    {
        id: 13,
        name: "EdTech & Digital Learning Hub",
        country: "India",
        region: "Asia",
        sector: "Technology",
        investment: "USD 200 Million",
        investmentValue: 200,
        stage: "Development",
        type: "Greenfield",
        opportunity: "Equity / Venture",
        description: "Digital learning platform and infrastructure development.",
        overview: "Create a comprehensive digital education ecosystem.",
        requirements: "EdTech investor, Education expertise, Technology platform",
        highlights: ["Digital literacy", "Innovation", "Accessibility", "Employment"]
    },
    {
        id: 14,
        name: "Sustainable Mining Operations",
        country: "South Africa",
        region: "Africa",
        sector: "Infrastructure",
        investment: "USD 750 Million",
        investmentValue: 750,
        stage: "Development",
        type: "Brownfield",
        opportunity: "Equity / Joint Venture",
        description: "Modern sustainable mining facility with environmental focus.",
        overview: "Develop responsible mining operations with green technologies.",
        requirements: "Mining investor, Sustainability expertise, Operations",
        highlights: ["Sustainable practices", "Environmental focus", "Resource efficiency", "Employment"]
    },
    {
        id: 15,
        name: "Aviation & Aerospace Hub",
        country: "Australia",
        region: "Oceania",
        sector: "Manufacturing",
        investment: "USD 900 Million",
        investmentValue: 900,
        stage: "Planning",
        type: "Greenfield",
        opportunity: "Equity / Joint Venture",
        description: "Regional aviation and aerospace manufacturing center.",
        overview: "Establish a regional center for aerospace component manufacturing.",
        requirements: "Aerospace investor, Manufacturing expertise, Supply chain",
        highlights: ["Advanced manufacturing", "Export quality", "Regional hub", "Technology transfer"]
    }
];

// ====== APPLICATION STATE ======
let currentFilters = {
    country: '',
    sector: '',
    size: '',
    stage: '',
    type: '',
    search: ''
};

let currentProject = null;
let savedProjects = JSON.parse(localStorage.getItem('savedProjects')) || [];

// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    renderProjects(projectsData);
    setupEventListeners();
    generateWorldMap();
    populateCountriesView();
});

// ====== FILTER SETUP ======
function initializeFilters() {
    // Get unique countries and sectors
    const countries = [...new Set(projectsData.map(p => p.country))].sort();
    const sectors = [...new Set(projectsData.map(p => p.sector))].sort();

    // Populate country filter
    const countrySelect = document.getElementById('filter-country');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });

    // Populate sector filter
    const sectorSelect = document.getElementById('filter-sector');
    sectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        sectorSelect.appendChild(option);
    });
}

// ====== PROJECT RENDERING ======
function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    if (projects.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 30px; color: #666;">No projects found matching your filters.</p>';
        return;
    }

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        const isSaved = savedProjects.includes(project.id);

        card.innerHTML = `
            <span class="project-badge">Sample Project</span>
            <h3>${project.name}</h3>
            <div class="project-meta">${project.country} | ${project.region}</div>
            <div class="project-details">
                <div><strong>Sector:</strong> ${project.sector}</div>
                <div><strong>Investment:</strong> ${project.investment}</div>
                <div><strong>Stage:</strong> ${project.stage}</div>
                <div><strong>Type:</strong> ${project.type}</div>
            </div>
            <button class="btn-secondary save-project-btn" data-id="${project.id}" title="${isSaved ? 'Remove from saved' : 'Save project'}">
                ${isSaved ? '★ SAVED' : '☆ SAVE'}
            </button>
            <button class="btn-primary view-project-btn" data-id="${project.id}">VIEW PROJECT</button>
        `;

        grid.appendChild(card);
    });

    // Attach event listeners to new buttons
    document.querySelectorAll('.view-project-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = parseInt(this.dataset.id);
            showProjectDetails(projectId);
        });
    });

    document.querySelectorAll('.save-project-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = parseInt(this.dataset.id);
            toggleSaveProject(projectId);
        });
    });
}

// ====== PROJECT FILTERING ======
function filterProjects() {
    currentFilters.country = document.getElementById('filter-country').value;
    currentFilters.sector = document.getElementById('filter-sector').value;
    currentFilters.size = document.getElementById('filter-size').value;
    currentFilters.stage = document.getElementById('filter-stage').value;
    currentFilters.type = document.getElementById('filter-type').value;
    syncMapSelection(currentFilters.country);

    let filtered = projectsData.filter(project => {
        // Country filter
        if (currentFilters.country && project.country !== currentFilters.country) return false;

        // Sector filter
        if (currentFilters.sector && project.sector !== currentFilters.sector) return false;

        // Size filter
        if (currentFilters.size) {
            const [min, max] = parseSize(currentFilters.size);
            if (project.investmentValue < min || project.investmentValue > max) return false;
        }

        // Stage filter
        if (currentFilters.stage && project.stage !== currentFilters.stage) return false;

        // Type filter
        if (currentFilters.type && project.type !== currentFilters.type) return false;

        // Search filter
        if (currentFilters.search) {
            const search = currentFilters.search.toLowerCase();
            return project.name.toLowerCase().includes(search) ||
                   project.country.toLowerCase().includes(search) ||
                   project.sector.toLowerCase().includes(search);
        }

        return true;
    });

    renderProjects(filtered);
}

function parseSize(sizeRange) {
    const ranges = {
        '0-500': [0, 500],
        '500-1000': [500, 1000],
        '1000-5000': [1000, 5000],
        '5000+': [5000, Infinity]
    };
    return ranges[sizeRange] || [0, Infinity];
}

function resetFilters() {
    document.getElementById('filter-country').value = '';
    document.getElementById('filter-sector').value = '';
    document.getElementById('filter-size').value = '';
    document.getElementById('filter-stage').value = '';
    document.getElementById('filter-type').value = '';
    document.getElementById('search-input').value = '';
    currentFilters = {
        country: '',
        sector: '',
        size: '',
        stage: '',
        type: '',
        search: ''
    };
    syncMapSelection('');
    renderProjects(projectsData);
}

// ====== PROJECT DETAILS ======
function showProjectDetails(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    currentProject = project;
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('project-detail-content');

    content.innerHTML = `
        <div style="margin-bottom: 20px;">
            <a href="#" class="back-link" onclick="closeModal('project-modal'); return false;" style="color: #1D5FA7; text-decoration: none; font-size: 12px;">← Back to Opportunities</a>
        </div>
        <h2 style="font-size: 20px; color: #12355B; margin-bottom: 8px;">${project.name}</h2>
        <span class="project-badge">Sample Project</span>
        <div style="margin-top: 16px; border-top: 1px solid #D9DEE5; padding-top: 16px;">
            <h3 style="font-size: 14px; color: #12355B; margin-bottom: 12px; font-weight: bold;">PROJECT OVERVIEW</h3>
            <p style="font-size: 13px; color: #666; margin-bottom: 16px; line-height: 1.6;">${project.overview}</p>
        </div>
        <div style="border-top: 1px solid #D9DEE5; padding-top: 16px;">
            <h3 style="font-size: 14px; color: #12355B; margin-bottom: 12px; font-weight: bold;">INVESTMENT DETAILS</h3>
            <div style="display: grid; gap: 10px;">
                <div><strong style="color: #12355B;">Country:</strong> ${project.country}</div>
                <div><strong style="color: #12355B;">Region:</strong> ${project.region}</div>
                <div><strong style="color: #12355B;">Sector:</strong> ${project.sector}</div>
                <div><strong style="color: #12355B;">Project Stage:</strong> ${project.stage}</div>
                <div><strong style="color: #12355B;">Project Type:</strong> ${project.type}</div>
                <div><strong style="color: #12355B;">Investment Required:</strong> ${project.investment}</div>
                <div><strong style="color: #12355B;">Opportunity:</strong> ${project.opportunity}</div>
            </div>
        </div>
        <div style="border-top: 1px solid #D9DEE5; padding-top: 16px; margin-top: 16px;">
            <h3 style="font-size: 14px; color: #12355B; margin-bottom: 12px; font-weight: bold;">PROJECT REQUIREMENTS</h3>
            <p style="font-size: 13px; color: #666;">${project.requirements}</p>
        </div>
        <div style="border-top: 1px solid #D9DEE5; padding-top: 16px; margin-top: 16px;">
            <h3 style="font-size: 14px; color: #12355B; margin-bottom: 12px; font-weight: bold;">KEY HIGHLIGHTS</h3>
            <ul style="font-size: 13px; color: #666; margin-left: 20px;">
                ${project.highlights.map(h => `<li style="margin-bottom: 6px;">${h}</li>`).join('')}
            </ul>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 24px;">
            <button class="btn-primary" onclick="openInterestModal(); return false;" style="flex: 1;">EXPRESS INTEREST</button>
            <button class="btn-secondary" onclick="toggleSaveProject(${project.id}); return false;" style="flex: 1;">${savedProjects.includes(project.id) ? '★ SAVED' : '☆ SAVE PROJECT'}</button>
        </div>
    `;

    modal.classList.add('active');
}

function toggleSaveProject(projectId) {
    const index = savedProjects.indexOf(projectId);
    if (index > -1) {
        savedProjects.splice(index, 1);
    } else {
        savedProjects.push(projectId);
    }
    localStorage.setItem('savedProjects', JSON.stringify(savedProjects));
    
    // Re-render to update button states
    const countryFilter = document.getElementById('filter-country').value;
    const sectorFilter = document.getElementById('filter-sector').value;
    const sizeFilter = document.getElementById('filter-size').value;
    const stageFilter = document.getElementById('filter-stage').value;
    const typeFilter = document.getElementById('filter-type').value;

    filterProjects();
}

// ====== SEARCH ======
function handleSearch() {
    currentFilters.search = document.getElementById('search-input').value;
    filterProjects();
}

// ====== NAVIGATION & MODALS ======
function setupEventListeners() {
    // Filter buttons
    document.getElementById('apply-filters').addEventListener('click', filterProjects);
    document.getElementById('reset-filters').addEventListener('click', resetFilters);

    // Search
    document.getElementById('search-btn').addEventListener('click', handleSearch);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleSearch();
    });

    // Search tags
    document.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            document.getElementById('search-input').value = this.dataset.search;
            handleSearch();
        });
    });

    // Quick access cards
    document.getElementById('explore-opportunities').addEventListener('click', () => {
        document.getElementById('filter-country').value = '';
        document.getElementById('filter-sector').value = '';
        filterProjects();
        document.querySelector('.opportunities-section').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('explore-countries').addEventListener('click', () => {
        document.querySelector('#explore-countries-sec').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('explore-sectors').addEventListener('click', () => {
        document.querySelector('#explore-sectors-sec').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('explore-btn').addEventListener('click', () => {
        document.querySelector('.opportunities-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Modal buttons
    document.getElementById('login-btn').addEventListener('click', () => openModal('login-modal'));
    document.getElementById('register-btn').addEventListener('click', () => openModal('register-modal'));
    document.getElementById('promoter-register-btn').addEventListener('click', () => openModal('promoter-modal'));

    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
        });
    });

    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });

    // Forms
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Demo: Login functionality not implemented.');
        closeModal('login-modal');
    });

    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Demo: Registration recorded.');
        closeModal('register-modal');
    });

    document.getElementById('promoter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Demo: Promoter registration recorded.');
        closeModal('promoter-modal');
    });

    document.getElementById('interest-form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('interest-form').style.display = 'none';
        document.getElementById('interest-success').style.display = 'block';
    });

    // Mobile menu
    setupMobileMenu();

    // Country buttons
    document.querySelectorAll('.country-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const country = this.dataset.country;
            document.getElementById('filter-country').value = country;
            filterProjects();
            document.querySelector('.opportunities-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Sector buttons
    document.querySelectorAll('.sector-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const sector = this.dataset.sector;
            document.getElementById('filter-sector').value = sector;
            filterProjects();
            document.querySelector('.opportunities-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Dropdown handling on mobile
    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

function openInterestModal() {
    if (!currentProject) return;
    closeModal('project-modal');
    document.getElementById('interest-form').style.display = 'block';
    document.getElementById('interest-success').style.display = 'none';
    openModal('interest-modal');
}

// ====== WORLD MAP (interactive SVG built from world-map-data.js) ======
const SVG_NS = 'http://www.w3.org/2000/svg';
const MAP_HIT_AREA = ['United Arab Emirates', 'Vietnam', 'Singapore', 'United Kingdom']; // small countries get a larger hover area
let selectedMapCountry = '';
let lastPointerType = 'mouse';
let tooltipTimer = null;

function svgEl(tag, attrs) {
    const el = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(k => el.setAttribute(k, attrs[k]));
    return el;
}

function getCountryStats(name) {
    const list = projectsData.filter(p => p.country === name);
    return {
        count: list.length,
        sectors: [...new Set(list.map(p => p.sector))]
    };
}

function generateWorldMap() {
    const svg = document.getElementById('world-map');
    if (!svg || typeof WORLD_MAP === 'undefined') return;

    svg.setAttribute('viewBox', WORLD_MAP.viewBox);
    svg.innerHTML = '';

    // Background land (not interactive)
    svg.appendChild(svgEl('path', { 'class': 'map-land', d: WORLD_MAP.land, 'fill-rule': 'evenodd' }));

    // Interactive countries: only those that exist in the website's country data
    const names = Object.keys(WORLD_MAP.countries).concat(Object.keys(WORLD_MAP.markers || {}));
    names.forEach(name => {
        const stats = getCountryStats(name);
        const available = stats.count > 0;

        const g = svgEl('g', {
            'class': 'country-group ' + (available ? 'available' : 'no-data'),
            'data-country': name,
            'aria-label': available ? name + ' - view investment opportunities' : name + ' - no sample opportunities yet'
        });
        if (available) {
            g.setAttribute('tabindex', '0');
            g.setAttribute('role', 'button');
        }

        const marker = WORLD_MAP.markers && WORLD_MAP.markers[name];
        if (marker) {
            g.appendChild(svgEl('circle', { 'class': 'map-hit', cx: marker.x, cy: marker.y, r: 5 }));
            g.appendChild(svgEl('circle', { 'class': 'country', cx: marker.x, cy: marker.y, r: marker.r }));
        } else {
            g.appendChild(svgEl('path', { 'class': 'country', d: WORLD_MAP.countries[name], 'fill-rule': 'evenodd' }));
            if (MAP_HIT_AREA.includes(name)) {
                g.appendChild(svgEl('path', { 'class': 'map-hit-stroke', d: WORLD_MAP.countries[name] }));
            }
        }

        g.addEventListener('pointerdown', function(e) { lastPointerType = e.pointerType || 'mouse'; });
        g.addEventListener('pointerenter', onCountryEnter);
        g.addEventListener('pointermove', onCountryMove);
        g.addEventListener('pointerleave', onCountryLeave);
        g.addEventListener('click', onCountryClick);
        g.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activateCountry(name, true);
            }
        });
        g.addEventListener('focus', function() { renderMapInfo(name); });
        g.addEventListener('blur', function() { renderMapInfo(selectedMapCountry); });

        svg.appendChild(g);
    });

    // Tapping empty map area hides the tooltip (touch devices)
    svg.addEventListener('click', function(e) {
        if (!e.target.closest('.country-group')) hideMapTooltip();
    });

    // Info panel button (works on every device)
    const infoBtn = document.getElementById('map-info-btn');
    if (infoBtn) {
        infoBtn.addEventListener('click', function() {
            if (selectedMapCountry) filterByCountry(selectedMapCountry);
        });
    }

    // Keep the map in step with an existing country filter
    syncMapSelection(document.getElementById('filter-country').value);
}

function countryFromEvent(e) {
    return e.currentTarget.getAttribute('data-country');
}

function onCountryEnter(e) {
    lastPointerType = e.pointerType || 'mouse';
    if (lastPointerType === 'touch') return;
    const name = countryFromEvent(e);
    e.currentTarget.classList.add('hover');
    renderMapInfo(name);
    showMapTooltip(name, e.clientX, e.clientY);
}

function onCountryMove(e) {
    if ((e.pointerType || 'mouse') === 'touch') return;
    positionMapTooltip(e.clientX, e.clientY);
}

function onCountryLeave(e) {
    e.currentTarget.classList.remove('hover');
    if ((e.pointerType || 'mouse') === 'touch') return;
    hideMapTooltip();
    renderMapInfo(selectedMapCountry);
}

function onCountryClick(e) {
    const name = countryFromEvent(e);
    const touchLike = lastPointerType === 'touch';
    if (touchLike) {
        // Touch: first tap shows the country information, the panel button opens it
        selectMapCountryOnly(name);
        showMapTooltip(name, e.clientX, e.clientY);
        clearTimeout(tooltipTimer);
        tooltipTimer = setTimeout(hideMapTooltip, 3500);
    } else {
        activateCountry(name, true);
    }
}

// Select a country and (optionally) open its opportunities
function activateCountry(name, open) {
    const stats = getCountryStats(name);
    selectMapCountryOnly(name);
    if (open && stats.count > 0) {
        hideMapTooltip();
        filterByCountry(name);
    }
}

function selectMapCountryOnly(name) {
    setMapSelection(name);
    renderMapInfo(name);
}

// ----- Selected state -----
function setMapSelection(name) {
    selectedMapCountry = name || '';
    document.querySelectorAll('#world-map .country-group').forEach(g => {
        g.classList.toggle('selected', !!name && g.getAttribute('data-country') === name && g.classList.contains('available'));
    });
}

// Called when the country filter changes elsewhere (country buttons, dropdown, reset)
function syncMapSelection(name) {
    setMapSelection(name);
    renderMapInfo(name);
}

// ----- Info panel -----
function renderMapInfo(name) {
    const title = document.getElementById('map-country-name');
    const info = document.getElementById('map-country-info');
    const btn = document.getElementById('map-info-btn');
    if (!title || !info) return;

    if (!name) {
        title.textContent = 'Hover over a country';
        info.textContent = 'Click to explore opportunities';
        if (btn) btn.hidden = true;
        return;
    }

    const stats = getCountryStats(name);
    title.textContent = name;
    if (stats.count > 0) {
        info.innerHTML = '<strong>Investment Opportunities:</strong> ' + stats.count + '<br>' +
            '<strong>Key Sectors:</strong> ' + stats.sectors.join(', ');
    } else {
        info.innerHTML = '<strong>Investment Opportunities:</strong> 0<br>No sample opportunities listed yet.';
    }
    if (btn) {
        btn.hidden = stats.count === 0;
        btn.textContent = 'VIEW ' + name.toUpperCase() + ' OPPORTUNITIES';
    }
}

// ----- Tooltip -----
function showMapTooltip(name, clientX, clientY) {
    const tip = document.getElementById('map-tooltip');
    if (!tip) return;
    const stats = getCountryStats(name);
    tip.innerHTML = '<strong>' + name + '</strong>' +
        '<span>Investment Opportunities: ' + stats.count + '</span>' +
        (stats.count > 0
            ? '<span>Key Sectors: ' + stats.sectors.join(', ') + '</span>'
            : '<span>No sample projects listed yet</span>');
    tip.classList.add('visible');
    positionMapTooltip(clientX, clientY);
}

function positionMapTooltip(clientX, clientY) {
    const tip = document.getElementById('map-tooltip');
    const box = document.getElementById('map-container');
    if (!tip || !box || !tip.classList.contains('visible')) return;

    const rect = box.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const w = tip.offsetWidth;
    const h = tip.offsetHeight;
    const gap = 14;

    let left = x + gap;
    if (left + w > rect.width - 4) left = x - w - gap;
    left = Math.max(4, Math.min(left, rect.width - w - 4));

    let top = y + gap;
    if (top + h > rect.height - 4) top = y - h - gap;
    top = Math.max(4, Math.min(top, rect.height - h - 4));

    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
}

function hideMapTooltip() {
    const tip = document.getElementById('map-tooltip');
    if (tip) tip.classList.remove('visible');
}

// Opens the existing country view: filters the opportunities list to the country and scrolls to it
function filterByCountry(country) {
    document.getElementById('filter-country').value = country;
    filterProjects();
    document.querySelector('.opportunities-section').scrollIntoView({ behavior: 'smooth' });
}

// ====== COUNTRY VIEW ======
function populateCountriesView() {
    const countries = [...new Set(projectsData.map(p => p.country))];
    
    // This is handled by the HTML buttons, but we can add dynamic functionality here
    document.querySelectorAll('.country-btn').forEach(btn => {
        const country = btn.dataset.country;
        const count = projectsData.filter(p => p.country === country).length;
        if (count === 0) {
            btn.style.opacity = '0.6';
            btn.disabled = true;
        }
    });
}

// ====== UTILITY FUNCTIONS ======
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Mobile responsive dropdown adjustments
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('nav-menu').classList.remove('active');
    }
});
