/* ==========================================================
   GLOBAL INVESTMENT GRID (GIG) - MAIN JAVASCRIPT CONTROLLER
   Unified logic for multi-page portal navigation, maps,
   filters, modals, and dynamic data rendering.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function() {
    initGlobalNavigation();
    initGlobalModals();
    initGlobalSearch();
    routePageLogic();
});

// ====== GLOBAL NAVIGATION & ACTIVE STATE ======
function initGlobalNavigation() {
    const currentPath = window.location.pathname.toLowerCase();
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    // Map pages to nav link text
    const navMapping = {
        'index.html': 'HOME',
        '': 'HOME',
        'investment-opportunities.html': 'INVESTMENT OPPORTUNITIES',
        'project.html': 'INVESTMENT OPPORTUNITIES',
        'countries.html': 'COUNTRIES',
        'asia.html': 'COUNTRIES',
        'europe.html': 'COUNTRIES',
        'africa.html': 'COUNTRIES',
        'north-america.html': 'COUNTRIES',
        'south-america.html': 'COUNTRIES',
        'oceania.html': 'COUNTRIES',
        'country.html': 'COUNTRIES',
        'sectors.html': 'SECTORS',
        'sector.html': 'SECTORS',
        'investor-connect.html': 'INVESTOR CONNECT',
        'resources.html': 'RESOURCES',
        'news.html': 'NEWS & UPDATES',
        'news-detail.html': 'NEWS & UPDATES',
        'about.html': 'ABOUT GIG'
    };

    const targetLabel = navMapping[currentPage] || '';

    document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
        const text = link.textContent.trim().toUpperCase();
        if (targetLabel && text === targetLabel) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });

    // Mobile Hamburger Menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });

        // Close on click outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // Dropdown Handling on touch / small screens
    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        if (link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    // If clicking the dropdown header on mobile, toggle open
                    if (dropdown.querySelector('.dropdown-menu')) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    }
                }
            });
        }
    });

    // Utility bar interactive buttons (Accessibility, Sitemap, Contact Us)
    document.querySelectorAll('.utility-link').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const label = this.textContent.trim().toLowerCase();
            if (label.includes('accessibility')) {
                openInformationalModal(
                    'Accessibility Statement',
                    `<p><strong>Standard Compliance:</strong> The Global Investment Grid (GIG) is designed to meet WCAG 2.1 Level AA accessibility standards.</p>
                     <p>Key accessibility features include:</p>
                     <ul>
                         <li>High-contrast institutional color palette ensuring legible text contrast.</li>
                         <li>Full keyboard navigability for interactive world and continent maps, modals, and filters.</li>
                         <li>ARIA roles and labels across interactive elements and landmark regions.</li>
                         <li>Skip to main content accessibility link for screen-reader users.</li>
                     </ul>
                     <p>For accessibility inquiries or feedback, please use the Contact Us facility.</p>`
                );
            } else if (label.includes('sitemap')) {
                openInformationalModal(
                    'GIG Portal Sitemap',
                    `<p><strong>Major Portal Sections:</strong></p>
                     <ul>
                         <li><a href="index.html" style="color:#1D5FA7; font-weight:bold;">Home</a> &ndash; Portal Overview, World Map & Global Search</li>
                         <li><a href="investment-opportunities.html" style="color:#1D5FA7; font-weight:bold;">Investment Opportunities</a> &ndash; Advanced Multi-Parameter Project Discovery</li>
                         <li><a href="countries.html" style="color:#1D5FA7; font-weight:bold;">Countries</a> &ndash; Continents & Geographical Exploration</li>
                         <li><a href="sectors.html" style="color:#1D5FA7; font-weight:bold;">Sectors</a> &ndash; 16 Strategic Investment Sectors</li>
                         <li><a href="investor-connect.html" style="color:#1D5FA7; font-weight:bold;">Investor Connect</a> &ndash; Matching Investors & Project Promoters</li>
                         <li><a href="resources.html" style="color:#1D5FA7; font-weight:bold;">Resources</a> &ndash; Guides, Policy Compendiums & Agency Directories</li>
                         <li><a href="news.html" style="color:#1D5FA7; font-weight:bold;">News & Updates</a> &ndash; Global Investment Intelligence & Releases</li>
                         <li><a href="about.html" style="color:#1D5FA7; font-weight:bold;">About GIG</a> &ndash; Institutional Purpose & Architecture</li>
                     </ul>`
                );
            } else if (label.includes('contact')) {
                openContactModal();
            }
        });
    });

    // Language selector change demo notification
    const langSelect = document.querySelector('.language-selector select');
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            alert('Demonstration Notice: Language switching is simulated for the prototype portal. English is the default working language.');
        });
    }

    // Footer Links Handling (Ensure no dead links exist)
    document.querySelectorAll('.footer a').forEach(link => {
        const text = link.textContent.trim().toLowerCase();
        const href = link.getAttribute('href');

        if (!href || href === '#' || href.startsWith('javascript:')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                handleFooterModal(text);
            });
        }
    });
}

function handleFooterModal(label) {
    if (label.includes('privacy')) {
        openInformationalModal(
            'Privacy Policy',
            `<p><strong>Prototype Demonstration Notice:</strong> Global Investment Grid (GIG) is a frontend demonstration portal. No personal data is transmitted to external servers or retained in persistent remote databases.</p>
             <p>Data submitted in prototype registration or interest forms is retained locally within your browser session for demonstration evaluation only.</p>`
        );
    } else if (label.includes('terms')) {
        openInformationalModal(
            'Terms of Use',
            `<p><strong>Terms of Use for Prototype Portal:</strong></p>
             <p>1. The Global Investment Grid website is provided for demonstration, testing, and concept evaluation purposes.</p>
             <p>2. Investment figures, statistics, and project specifications are illustrative prototypes and do not constitute financial advice, verified offerings, or solicitations.</p>
             <p>3. GIG is not a statutory government agency or financial intermediary.</p>`
        );
    } else if (label.includes('disclaimer')) {
        openInformationalModal(
            'Prototype & Demonstration Disclaimer',
            `<p><strong>Important Institutional Notice:</strong></p>
             <p>This website is an independent frontend prototype created to demonstrate the user experience and architectural design of a unified global investment opportunity platform.</p>
             <p>All project values, economic indicators, timelines, and promoter representations are simulated illustrative data.</p>`
        );
    } else if (label.includes('government agencies') || label.includes('investment promotion') || label.includes('development institutions')) {
        window.location.href = 'resources.html';
    } else if (label.includes('accessibility')) {
        openInformationalModal(
            'Accessibility Statement',
            `<p>GIG conforms to WCAG 2.1 Level AA standards. Keyboard accessibility, focus indicators, and semantic HTML are implemented across all pages.</p>`
        );
    } else if (label.includes('sitemap')) {
        window.location.href = 'countries.html';
    } else if (label.includes('contact')) {
        openContactModal();
    } else if (label.includes('about')) {
        window.location.href = 'about.html';
    }
}

// ====== MODALS CONTROLLER ======
function initGlobalModals() {
    // Investor Login button
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => openModal('login-modal'));
    }

    // Register button
    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', () => openModal('register-modal'));
    }

    // Project Promoter buttons
    document.querySelectorAll('#promoter-register-btn, .btn-promoter-register').forEach(btn => {
        btn.addEventListener('click', () => openModal('promoter-modal'));
    });

    // Close buttons on all modals
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) modal.classList.remove('active');
        });
    });

    // Click outside modal backdrop to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });

    // Escape key closes open modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });

    // Modal forms submission handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Demonstration: Investor login authenticated for this session.');
            closeModal('login-modal');
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Demonstration: Investor registration submitted successfully. Welcome to GIG.');
            closeModal('register-modal');
        });
    }

    const promoterForm = document.getElementById('promoter-form');
    if (promoterForm) {
        promoterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Demonstration: Project promoter profile registered. You may now submit project dossiers.');
            closeModal('promoter-modal');
        });
    }

    const interestForm = document.getElementById('interest-form');
    if (interestForm) {
        interestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            interestForm.style.display = 'none';
            const successEl = document.getElementById('interest-success');
            if (successEl) successEl.style.display = 'block';
        });
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

function openInterestModal(projectId) {
    const modal = document.getElementById('interest-modal');
    if (!modal) return;

    const form = document.getElementById('interest-form');
    const successMsg = document.getElementById('interest-success');
    if (form) form.style.display = 'block';
    if (successMsg) successMsg.style.display = 'none';

    // If projectId provided, pre-fill context in message
    if (projectId && window.GIG_DATA) {
        const proj = GIG_DATA.projects.find(p => p.id === projectId || p.numericId === parseInt(projectId));
        if (proj) {
            const countryInput = document.getElementById('interest-country');
            const messageInput = document.getElementById('interest-message');
            if (countryInput) countryInput.value = proj.country;
            if (messageInput) {
                messageInput.value = `Expressing institutional interest in: ${proj.name} (${proj.country}, ${proj.sector}). Opportunity model: ${proj.opportunity}.`;
            }
        }
    }

    openModal('interest-modal');
}

function openInformationalModal(title, htmlContent) {
    let modal = document.getElementById('info-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'info-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" aria-label="Close">&times;</button>
                <h2 id="info-modal-title" style="color:#12355B; margin-bottom:14px; font-size:18px;"></h2>
                <div id="info-modal-body" class="info-modal-text"></div>
                <div style="margin-top:20px; text-align:right;">
                    <button class="btn-primary" onclick="closeModal('info-modal')">CLOSE</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.modal-close').addEventListener('click', () => closeModal('info-modal'));
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeModal('info-modal');
        });
    }

    document.getElementById('info-modal-title').textContent = title;
    document.getElementById('info-modal-body').innerHTML = htmlContent;
    openModal('info-modal');
}

function openContactModal() {
    openInformationalModal(
        'Contact GIG Secretariat',
        `<p><strong>Global Investment Grid Liaison Office</strong></p>
         <p>For international investor inquiries, promoter registration, or bilateral partnerships:</p>
         <div style="background:#F0F2F5; padding:12px; border-radius:3px; margin:12px 0; font-size:12px;">
             <div><strong>Email:</strong> secretariat@globalinvestmentgrid.org (Demo)</div>
             <div><strong>Liaison Desk:</strong> +1 (202) 555-0182 / +44 20 7946 0912</div>
             <div><strong>Hours:</strong> Monday &ndash; Friday, 08:00 &ndash; 18:00 UTC</div>
         </div>
         <p>You can also express direct interest on individual project pages or register through the portal.</p>`
    );
}

// ====== GLOBAL SEARCH ======
function initGlobalSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    if (searchInput && searchBtn) {
        const executeSearch = () => {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `investment-opportunities.html?search=${encodeURIComponent(query)}`;
            } else {
                window.location.href = `investment-opportunities.html`;
            }
        };

        searchBtn.addEventListener('click', executeSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') executeSearch();
        });
    }

    // Popular Searches Tags on Homepage
    document.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const term = this.dataset.search || this.textContent.trim();
            window.location.href = `investment-opportunities.html?search=${encodeURIComponent(term)}`;
        });
    });
}

// ====== SAVED PROJECTS STORAGE (localStorage) ======
function getSavedProjectIds() {
    try {
        return JSON.parse(localStorage.getItem('gigSavedProjects')) || [];
    } catch (e) {
        return [];
    }
}

function toggleSaveProject(projectId) {
    let saved = getSavedProjectIds();
    const strId = String(projectId);
    const index = saved.indexOf(strId);

    if (index > -1) {
        saved.splice(index, 1);
    } else {
        saved.push(strId);
    }

    localStorage.setItem('gigSavedProjects', JSON.stringify(saved));
    updateSaveButtonStates();
}

function isProjectSaved(projectId) {
    return getSavedProjectIds().includes(String(projectId));
}

function updateSaveButtonStates() {
    document.querySelectorAll('.save-project-btn').forEach(btn => {
        const id = btn.dataset.id;
        const saved = isProjectSaved(id);
        btn.textContent = saved ? '★ SAVED' : '☆ SAVE';
        btn.classList.toggle('btn-saved', saved);
    });
}

// ====== URL HELPER ======
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param) || '';
}

// ====== PAGE ROUTER ======
function routePageLogic() {
    const path = window.location.pathname.toLowerCase();
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

    if (page === 'index.html' || page === '') {
        initHomePage();
    } else if (page === 'investment-opportunities.html') {
        initOpportunitiesPage();
    } else if (page === 'countries.html') {
        initCountriesOverviewPage();
    } else if (['asia.html', 'europe.html', 'africa.html', 'north-america.html', 'south-america.html', 'oceania.html'].includes(page)) {
        initContinentPage(page.replace('.html', ''));
    } else if (page === 'country.html') {
        initCountryDetailPage();
    } else if (page === 'sectors.html') {
        initSectorsOverviewPage();
    } else if (page === 'sector.html') {
        initSectorDetailPage();
    } else if (page === 'investor-connect.html') {
        initInvestorConnectPage();
    } else if (page === 'resources.html') {
        initResourcesPage();
    } else if (page === 'news.html') {
        initNewsPage();
    } else if (page === 'news-detail.html') {
        initNewsDetailPage();
    } else if (page === 'project.html') {
        initProjectDetailPage();
    }
}

// ==========================================================
// 1. HOMEPAGE CONTROLLER
// ==========================================================
function initHomePage() {
    // Quick access card navigation
    const exploreOpp = document.getElementById('explore-opportunities');
    if (exploreOpp) {
        exploreOpp.addEventListener('click', () => window.location.href = 'investment-opportunities.html');
    }

    const exploreCount = document.getElementById('explore-countries');
    if (exploreCount) {
        exploreCount.addEventListener('click', () => window.location.href = 'countries.html');
    }

    const exploreSec = document.getElementById('explore-sectors');
    if (exploreSec) {
        exploreSec.addEventListener('click', () => window.location.href = 'sectors.html');
    }

    const exploreInv = document.getElementById('explore-investors');
    if (exploreInv) {
        exploreInv.addEventListener('click', () => window.location.href = 'investor-connect.html');
    }

    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => window.location.href = 'investment-opportunities.html');
    }

    // World map initialization
    renderInteractiveMap('world-map', {
        viewBox: (typeof WORLD_MAP !== 'undefined') ? WORLD_MAP.viewBox : "40 86 543 274",
        landPath: (typeof WORLD_MAP !== 'undefined') ? WORLD_MAP.land : "",
        countries: (typeof WORLD_MAP !== 'undefined') ? Object.keys(WORLD_MAP.countries) : [],
        markers: (typeof WORLD_MAP !== 'undefined') ? WORLD_MAP.markers : {},
        isWorld: true,
        infoPanelPrefix: 'map-'
    });

    // Populate selected sample projects preview
    renderSelectedProjectsPreview();

    // Country button quick links on homepage
    document.querySelectorAll('.country-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const countryName = this.dataset.country;
            const countrySlug = findCountrySlug(countryName);
            if (countrySlug) {
                window.location.href = `country.html?country=${countrySlug}`;
            } else {
                window.location.href = `investment-opportunities.html?country=${encodeURIComponent(countryName)}`;
            }
        });
    });

    // Sector button quick links on homepage
    document.querySelectorAll('.sector-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const sectorName = this.dataset.sector;
            const sectorSlug = findSectorSlug(sectorName);
            if (sectorSlug) {
                window.location.href = `sector.html?sector=${sectorSlug}`;
            } else {
                window.location.href = `investment-opportunities.html?sector=${encodeURIComponent(sectorName)}`;
            }
        });
    });
}

function renderSelectedProjectsPreview() {
    const grid = document.getElementById('projects-grid');
    if (!grid || !window.GIG_DATA) return;

    // Show top 6 diverse projects on homepage
    const sampleProjects = GIG_DATA.projects.slice(0, 6);
    grid.innerHTML = sampleProjects.map(p => createProjectCardHtml(p)).join('');
    attachProjectCardEvents(grid);
}

// ==========================================================
// 2. INVESTMENT OPPORTUNITIES PAGE CONTROLLER
// ==========================================================
function initOpportunitiesPage() {
    if (!window.GIG_DATA) return;

    const countrySelect = document.getElementById('filter-country');
    const continentSelect = document.getElementById('filter-continent');
    const sectorSelect = document.getElementById('filter-sector');
    const sizeSelect = document.getElementById('filter-size');
    const stageSelect = document.getElementById('filter-stage');
    const typeSelect = document.getElementById('filter-type');
    const searchInput = document.getElementById('filter-search') || document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');

    // Populate dropdown options dynamically from central GIG_DATA
    if (countrySelect && countrySelect.options.length <= 1) {
        const uniqueCountries = [...new Set(GIG_DATA.projects.map(p => p.country))].sort();
        uniqueCountries.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c;
            countrySelect.appendChild(opt);
        });
    }

    if (continentSelect && continentSelect.options.length <= 1) {
        const uniqueContinents = [...new Set(GIG_DATA.projects.map(p => p.region))].sort();
        uniqueContinents.forEach(cont => {
            const opt = document.createElement('option');
            opt.value = cont;
            opt.textContent = cont;
            continentSelect.appendChild(opt);
        });
    }

    if (sectorSelect && sectorSelect.options.length <= 1) {
        const uniqueSectors = [...new Set(GIG_DATA.projects.map(p => p.sector))].sort();
        uniqueSectors.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = s;
            sectorSelect.appendChild(opt);
        });
    }

    // Pre-populate filters from URL parameters if present
    const urlSearch = getUrlParam('search');
    const urlCountry = getUrlParam('country');
    const urlContinent = getUrlParam('continent') || getUrlParam('region');
    const urlSector = getUrlParam('sector');

    if (urlSearch && searchInput) searchInput.value = urlSearch;
    if (urlCountry && countrySelect) {
        // match country name or slug
        for (let opt of countrySelect.options) {
            if (opt.value.toLowerCase() === urlCountry.toLowerCase() ||
                opt.value.toLowerCase().replace(/\s+/g, '-') === urlCountry.toLowerCase()) {
                countrySelect.value = opt.value;
                break;
            }
        }
    }
    if (urlContinent && continentSelect) {
        for (let opt of continentSelect.options) {
            if (opt.value.toLowerCase() === urlContinent.toLowerCase() ||
                opt.value.toLowerCase().replace(/\s+/g, '-') === urlContinent.toLowerCase()) {
                continentSelect.value = opt.value;
                break;
            }
        }
    }
    if (urlSector && sectorSelect) {
        for (let opt of sectorSelect.options) {
            if (opt.value.toLowerCase() === urlSector.toLowerCase() ||
                opt.value.toLowerCase().replace(/\s+/g, '-') === urlSector.toLowerCase()) {
                sectorSelect.value = opt.value;
                break;
            }
        }
    }

    // Filter and Sort Runner
    const applyAndRender = () => {
        const countryVal = countrySelect ? countrySelect.value : '';
        const continentVal = continentSelect ? continentSelect.value : '';
        const sectorVal = sectorSelect ? sectorSelect.value : '';
        const sizeVal = sizeSelect ? sizeSelect.value : '';
        const stageVal = stageSelect ? stageSelect.value : '';
        const typeVal = typeSelect ? typeSelect.value : '';
        const searchVal = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const sortVal = sortSelect ? sortSelect.value : 'newest';

        let filtered = GIG_DATA.projects.filter(project => {
            if (countryVal && project.country !== countryVal) return false;
            if (continentVal && project.region !== continentVal) return false;
            if (sectorVal && project.sector !== sectorVal) return false;
            if (stageVal && project.stage !== stageVal) return false;
            if (typeVal && project.type !== typeVal) return false;

            if (sizeVal) {
                const [min, max] = parseSizeRange(sizeVal);
                if (project.investmentValue < min || project.investmentValue > max) return false;
            }

            if (searchVal) {
                const matchName = project.name.toLowerCase().includes(searchVal);
                const matchCountry = project.country.toLowerCase().includes(searchVal);
                const matchSector = project.sector.toLowerCase().includes(searchVal);
                const matchDesc = project.description.toLowerCase().includes(searchVal);
                const matchType = project.type.toLowerCase().includes(searchVal);
                if (!matchName && !matchCountry && !matchSector && !matchDesc && !matchType) return false;
            }

            return true;
        });

        // Apply Sorting
        filtered.sort((a, b) => {
            if (sortVal === 'newest') {
                return (b.dateAdded || '').localeCompare(a.dateAdded || '');
            } else if (sortVal === 'size-desc') {
                return b.investmentValue - a.investmentValue;
            } else if (sortVal === 'size-asc') {
                return a.investmentValue - b.investmentValue;
            } else if (sortVal === 'country') {
                return a.country.localeCompare(b.country);
            } else if (sortVal === 'sector') {
                return a.sector.localeCompare(b.sector);
            }
            return 0;
        });

        // Update count badge
        const countBadge = document.getElementById('results-count-num');
        if (countBadge) countBadge.textContent = filtered.length;

        const grid = document.getElementById('projects-grid');
        if (!grid) return;

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; background:#FFF; border:1px solid #D9DEE5; padding:40px; text-align:center; border-radius:4px;">
                    <h3 style="color:#12355B; margin-bottom:8px;">No Investment Opportunities Match Your Selected Filters</h3>
                    <p style="color:#666; font-size:13px; margin-bottom:16px;">Try adjusting your search criteria, clearing specific filters, or selecting a broader continent.</p>
                    <button class="btn-primary" id="clear-all-filters-btn">CLEAR ALL FILTERS</button>
                </div>
            `;
            const clearBtn = document.getElementById('clear-all-filters-btn');
            if (clearBtn) clearBtn.addEventListener('click', resetAllFilters);
            return;
        }

        grid.innerHTML = filtered.map(p => createProjectCardHtml(p)).join('');
        attachProjectCardEvents(grid);
    };

    const resetAllFilters = () => {
        if (countrySelect) countrySelect.value = '';
        if (continentSelect) continentSelect.value = '';
        if (sectorSelect) sectorSelect.value = '';
        if (sizeSelect) sizeSelect.value = '';
        if (stageSelect) stageSelect.value = '';
        if (typeSelect) typeSelect.value = '';
        if (searchInput) searchInput.value = '';
        if (sortSelect) sortSelect.value = 'newest';
        applyAndRender();
    };

    // Attach filter change listeners
    const applyBtn = document.getElementById('apply-filters');
    if (applyBtn) applyBtn.addEventListener('click', applyAndRender);

    const resetBtn = document.getElementById('reset-filters');
    if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);

    if (sortSelect) sortSelect.addEventListener('change', applyAndRender);
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') applyAndRender();
        });
    }

    // Auto-apply on dropdown selection change
    [countrySelect, continentSelect, sectorSelect, sizeSelect, stageSelect, typeSelect].forEach(select => {
        if (select) select.addEventListener('change', applyAndRender);
    });

    // Initial render
    applyAndRender();
}

function parseSizeRange(sizeRange) {
    const ranges = {
        '0-500': [0, 500],
        '500-1000': [500, 1000],
        '1000-5000': [1000, 5000],
        '5000+': [5000, Infinity]
    };
    return ranges[sizeRange] || [0, Infinity];
}

// Project Card HTML Generator
function createProjectCardHtml(project) {
    const isSaved = isProjectSaved(project.id);
    return `
        <div class="project-card" data-project-id="${project.id}">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                <span class="project-badge">Illustrative Project</span>
                <span style="font-size:11px; color:#666; font-weight:bold;">${project.stage}</span>
            </div>
            <h3 style="font-size:16px; line-height:1.3; color:#12355B; margin-bottom:6px;">
                <a href="project.html?id=${project.id}" style="color:inherit; text-decoration:none;">${project.name}</a>
            </h3>
            <div class="project-meta" style="font-size:12px; color:#555; margin-bottom:12px;">
                <strong>${project.country}</strong> &bull; ${project.region}
            </div>
            <div class="project-details" style="font-size:12px; margin-bottom:14px;">
                <div><strong>Sector:</strong> <a href="sector.html?sector=${findSectorSlug(project.sector)}" style="color:#1D5FA7; text-decoration:none;">${project.sector}</a></div>
                <div><strong>Investment Size:</strong> <span style="color:#12355B; font-weight:bold;">${project.investment}</span></div>
                <div><strong>Type:</strong> ${project.type}</div>
                <div><strong>Opportunity:</strong> ${project.opportunity}</div>
            </div>
            <p style="font-size:12px; color:#555; line-height:1.5; margin-bottom:16px; flex-grow:1;">
                ${project.description}
            </p>
            <div style="display:flex; gap:8px; margin-top:auto;">
                <button type="button" class="btn-secondary save-project-btn" data-id="${project.id}" style="flex:0 0 75px; padding:8px 4px; font-size:11px;">
                    ${isSaved ? '★ SAVED' : '☆ SAVE'}
                </button>
                <a href="project.html?id=${project.id}" class="btn-primary" style="flex:1; text-align:center; text-decoration:none; padding:8px 10px; font-size:11px;">
                    VIEW DETAILS
                </a>
                <button type="button" class="btn-secondary express-interest-btn" data-id="${project.id}" style="flex:1; padding:8px 10px; font-size:11px; border-color:#2E7D5B; color:#2E7D5B;">
                    EXPRESS INTEREST
                </button>
            </div>
        </div>
    `;
}

function attachProjectCardEvents(container) {
    container.querySelectorAll('.save-project-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleSaveProject(this.dataset.id);
        });
    });

    container.querySelectorAll('.express-interest-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openInterestModal(this.dataset.id);
        });
    });
}

// ==========================================================
// 3. COUNTRIES OVERVIEW PAGE CONTROLLER (countries.html)
// ==========================================================
function initCountriesOverviewPage() {
    if (!window.GIG_DATA) return;

    // Antarctica graceful informational handler
    const antarcticaBtn = document.getElementById('antarctica-card') || document.querySelector('[data-continent="antarctica"]');
    if (antarcticaBtn) {
        antarcticaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openInformationalModal(
                'Antarctica & Environmental Protection',
                `<p><strong>International Environmental Treaty Status:</strong></p>
                 <p>Under the Antarctic Treaty System and the Protocol on Environmental Protection to the Antarctic Treaty (Madrid Protocol), Antarctica is designated as a natural reserve devoted to peace and science.</p>
                 <p>All commercial mineral resource extraction and private industrial investment are strictly prohibited to preserve the continent's pristine ecosystem.</p>
                 <p>Global Investment Grid fully adheres to international environmental treaties.</p>`
            );
        });
    }

    // Country quick search on countries page
    const countrySearchInput = document.getElementById('country-search-input');
    if (countrySearchInput) {
        countrySearchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            document.querySelectorAll('.country-chip').forEach(chip => {
                const text = chip.textContent.toLowerCase();
                chip.style.display = text.includes(query) ? 'flex' : 'none';
            });
        });
    }
}

// ==========================================================
// 4. CONTINENT PAGE CONTROLLER (asia.html, europe.html, etc.)
// ==========================================================
function initContinentPage(continentId) {
    if (!window.GIG_DATA || typeof CONTINENT_MAPS === 'undefined') return;

    const mapConf = CONTINENT_MAPS[continentId];
    if (!mapConf) return;

    // Initialize continent interactive SVG map
    renderInteractiveMap('continent-map', {
        viewBox: mapConf.viewBox,
        landPath: (typeof WORLD_MAP !== 'undefined') ? WORLD_MAP.land : "",
        countries: mapConf.countries,
        markers: (typeof WORLD_MAP !== 'undefined') ? WORLD_MAP.markers : {},
        isWorld: false,
        continentId: continentId,
        infoPanelPrefix: 'continent-map-'
    });

    // Populate continent sample opportunities preview
    const oppContainer = document.getElementById('continent-projects-grid');
    if (oppContainer) {
        const continentObj = GIG_DATA.continents.find(c => c.id === continentId);
        const continentName = continentObj ? continentObj.name : continentId;
        const continentProjects = GIG_DATA.projects.filter(p => p.region.toLowerCase() === continentName.toLowerCase());

        if (continentProjects.length > 0) {
            oppContainer.innerHTML = continentProjects.slice(0, 6).map(p => createProjectCardHtml(p)).join('');
            attachProjectCardEvents(oppContainer);
        } else {
            oppContainer.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#666;">No sample opportunities currently listed for this continent.</p>';
        }
    }
}

// ==========================================================
// 5. COUNTRY DETAIL PAGE CONTROLLER (country.html)
// ==========================================================
function initCountryDetailPage() {
    if (!window.GIG_DATA) return;

    const countryParam = getUrlParam('country').toLowerCase();
    let countryKey = countryParam;

    // Lookup matching key or alias
    if (!GIG_DATA.countries[countryKey]) {
        for (const [key, data] of Object.entries(GIG_DATA.countries)) {
            if (data.name.toLowerCase() === countryParam ||
                (data.aliases && data.aliases.includes(countryParam)) ||
                data.id === countryParam) {
                countryKey = key;
                break;
            }
        }
    }

    const country = GIG_DATA.countries[countryKey] || GIG_DATA.countries['india']; // Default to India if not specified
    if (!country) return;

    // Set page title & breadcrumbs
    document.title = `${country.name} - Investment Opportunities | Global Investment Grid`;

    const nameEl = document.getElementById('country-name');
    if (nameEl) nameEl.textContent = country.name;

    const continentEl = document.getElementById('country-continent');
    if (continentEl) {
        continentEl.textContent = country.continent;
        continentEl.href = `${country.continent.toLowerCase().replace(/\s+/g, '-')}.html`;
    }

    const breadcrumbCountry = document.getElementById('breadcrumb-country');
    if (breadcrumbCountry) breadcrumbCountry.textContent = country.name;

    // Set metrics
    const capEl = document.getElementById('country-capital');
    if (capEl) capEl.textContent = country.capital || 'N/A';

    const currEl = document.getElementById('country-currency');
    if (currEl) currEl.textContent = country.currency || 'N/A';

    const fdiEl = document.getElementById('country-fdi');
    if (fdiEl) fdiEl.textContent = country.fdiInflow || 'N/A';

    const gdpEl = document.getElementById('country-gdp');
    if (gdpEl) gdpEl.textContent = country.gdpGrowth || 'N/A';

    const oppCountEl = document.getElementById('country-opp-count');
    if (oppCountEl) oppCountEl.textContent = country.opportunityCount || '0';

    // Set Overview & Environment
    const overviewEl = document.getElementById('country-overview');
    if (overviewEl) overviewEl.textContent = country.overview;

    const envEl = document.getElementById('country-environment');
    if (envEl) envEl.textContent = country.environment;

    // Set Key Sectors
    const sectorsContainer = document.getElementById('country-sectors');
    if (sectorsContainer && country.keySectors) {
        sectorsContainer.innerHTML = country.keySectors.map(sec => {
            const slug = findSectorSlug(sec);
            return `<a href="sector.html?sector=${slug}" class="theme-pill" style="text-decoration:none;">${sec}</a>`;
        }).join('');
    }

    // Set Investment Themes
    const themesContainer = document.getElementById('country-themes');
    if (themesContainer && country.investmentThemes) {
        themesContainer.innerHTML = country.investmentThemes.map(th => `<span class="theme-pill">${th}</span>`).join('');
    }

    // Set Sample Projects
    const projectsContainer = document.getElementById('country-projects-grid');
    if (projectsContainer) {
        const countryProjects = GIG_DATA.projects.filter(p => p.country.toLowerCase() === country.name.toLowerCase());
        if (countryProjects.length > 0) {
            projectsContainer.innerHTML = countryProjects.map(p => createProjectCardHtml(p)).join('');
            attachProjectCardEvents(projectsContainer);
        } else {
            projectsContainer.innerHTML = `
                <div style="grid-column:1/-1; background:#FFF; border:1px solid #D9DEE5; padding:24px; text-align:center; border-radius:3px;">
                    <p style="color:#666; margin-bottom:8px;">No sample opportunities currently listed for ${country.name}.</p>
                    <a href="investment-opportunities.html" class="btn-primary" style="display:inline-block; text-decoration:none;">EXPLORE ALL GLOBAL OPPORTUNITIES</a>
                </div>
            `;
        }
    }

    // Action buttons
    const exploreOppBtn = document.getElementById('country-explore-opps-btn');
    if (exploreOppBtn) {
        exploreOppBtn.href = `investment-opportunities.html?country=${encodeURIComponent(country.name)}`;
    }

    const expressInterestBtn = document.getElementById('country-express-interest-btn');
    if (expressInterestBtn) {
        expressInterestBtn.addEventListener('click', () => {
            openInterestModal();
            const countryInput = document.getElementById('interest-country');
            if (countryInput) countryInput.value = country.name;
        });
    }
}

// ==========================================================
// 6. SECTORS OVERVIEW PAGE CONTROLLER (sectors.html)
// ==========================================================
function initSectorsOverviewPage() {
    if (!window.GIG_DATA) return;

    const grid = document.getElementById('sectors-cards-grid');
    if (!grid) return;

    grid.innerHTML = GIG_DATA.sectors.map(sec => `
        <div class="sector-card">
            <div class="sector-card-icon">${sec.icon}</div>
            <h3>${sec.name}</h3>
            <p>${sec.description}</p>
            <div style="margin-bottom:12px;">
                <div style="font-size:11px; font-weight:bold; color:#12355B; margin-bottom:4px;">KEY THEMES:</div>
                <div style="font-size:11px; color:#555; line-height:1.4;">
                    ${sec.themes.slice(0, 3).join(' &bull; ')}
                </div>
            </div>
            <div class="sector-card-footer">
                <span class="opp-count">${sec.opportunityCount}+ Illustrative Projects</span>
                <a href="sector.html?sector=${sec.id}" class="btn-primary" style="padding:6px 12px; font-size:11px; text-decoration:none;">
                    EXPLORE SECTOR &rarr;
                </a>
            </div>
        </div>
    `).join('');
}

// ==========================================================
// 7. SECTOR DETAIL PAGE CONTROLLER (sector.html)
// ==========================================================
function initSectorDetailPage() {
    if (!window.GIG_DATA) return;

    const sectorParam = getUrlParam('sector').toLowerCase();
    let sector = GIG_DATA.sectors.find(s => s.id === sectorParam || s.name.toLowerCase() === sectorParam);

    if (!sector) {
        sector = GIG_DATA.sectors.find(s => s.id === 'renewable-energy') || GIG_DATA.sectors[0];
    }
    if (!sector) return;

    document.title = `${sector.name} - Sector Profile | Global Investment Grid`;

    const nameEl = document.getElementById('sector-name');
    if (nameEl) nameEl.textContent = sector.name;

    const iconEl = document.getElementById('sector-icon');
    if (iconEl) iconEl.textContent = sector.icon;

    const descEl = document.getElementById('sector-description');
    if (descEl) descEl.textContent = sector.description;

    const breadcrumbSector = document.getElementById('breadcrumb-sector');
    if (breadcrumbSector) breadcrumbSector.textContent = sector.name;

    // Investment Themes
    const themesContainer = document.getElementById('sector-themes');
    if (themesContainer && sector.themes) {
        themesContainer.innerHTML = sector.themes.map(th => `<span class="theme-pill">${th}</span>`).join('');
    }

    // Key Markets
    const marketsContainer = document.getElementById('sector-markets');
    if (marketsContainer && sector.keyMarkets) {
        marketsContainer.innerHTML = sector.keyMarkets.map(m => {
            const slug = findCountrySlug(m);
            return `<a href="country.html?country=${slug}" class="theme-pill" style="text-decoration:none;">${m} &rarr;</a>`;
        }).join('');
    }

    // Investment Models
    const modelsContainer = document.getElementById('sector-models');
    if (modelsContainer && sector.investmentModels) {
        modelsContainer.innerHTML = sector.investmentModels.map(mod => `
            <div style="background:#F0F2F5; padding:10px 14px; border-radius:3px; margin-bottom:8px; font-size:12px;">
                <strong>${mod}</strong>
            </div>
        `).join('');
    }

    // Sample Opportunities in this sector
    const oppsGrid = document.getElementById('sector-projects-grid');
    if (oppsGrid) {
        const sectorProjects = GIG_DATA.projects.filter(p => p.sector.toLowerCase() === sector.name.toLowerCase());
        if (sectorProjects.length > 0) {
            oppsGrid.innerHTML = sectorProjects.map(p => createProjectCardHtml(p)).join('');
            attachProjectCardEvents(oppsGrid);
        } else {
            oppsGrid.innerHTML = `
                <div style="grid-column:1/-1; background:#FFF; border:1px solid #D9DEE5; padding:24px; text-align:center; border-radius:3px;">
                    <p style="color:#666; margin-bottom:8px;">No sample opportunities currently listed for ${sector.name}.</p>
                    <a href="investment-opportunities.html" class="btn-primary" style="display:inline-block; text-decoration:none;">EXPLORE ALL GLOBAL OPPORTUNITIES</a>
                </div>
            `;
        }
    }

    // Explore All Opportunities Button
    const exploreBtn = document.getElementById('sector-explore-all-btn');
    if (exploreBtn) {
        exploreBtn.href = `investment-opportunities.html?sector=${encodeURIComponent(sector.name)}`;
    }
}

// ==========================================================
// 8. INVESTOR CONNECT PAGE CONTROLLER (investor-connect.html)
// ==========================================================
function initInvestorConnectPage() {
    const investorBtn = document.getElementById('connect-investor-btn');
    if (investorBtn) {
        investorBtn.addEventListener('click', () => openModal('register-modal'));
    }

    const promoterBtn = document.getElementById('connect-promoter-btn');
    if (promoterBtn) {
        promoterBtn.addEventListener('click', () => openModal('promoter-modal'));
    }

    const exploreBtn = document.getElementById('connect-explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => window.location.href = 'investment-opportunities.html');
    }
}

// ==========================================================
// 9. RESOURCES PAGE CONTROLLER (resources.html)
// ==========================================================
function initResourcesPage() {
    if (!window.GIG_DATA) return;

    const tabsContainer = document.getElementById('resources-tabs');
    const listContainer = document.getElementById('resources-list-grid');
    if (!listContainer) return;

    const categories = [
        "All Categories",
        "Investment Guides",
        "Country Investment Guides",
        "Sector Reports",
        "Investment Policy Overview",
        "Global Investment Trends",
        "Infrastructure Reports",
        "Government Agencies",
        "Investment Promotion Agencies",
        "Development Institutions"
    ];

    let currentCategory = "All Categories";

    const renderResources = () => {
        let filtered = GIG_DATA.resources;
        if (currentCategory !== "All Categories") {
            filtered = filtered.filter(r => r.category === currentCategory);
        }

        listContainer.innerHTML = filtered.map(r => `
            <div class="resource-item-card" data-resource-id="${r.id}">
                <div>
                    <div class="cat-badge">${r.category}</div>
                    <h4>${r.title}</h4>
                    <p>${r.description}</p>
                </div>
                <div class="resource-card-bottom">
                    <span>${r.type}</span>
                    <button class="btn-primary view-resource-btn" data-id="${r.id}" style="padding:5px 10px; font-size:11px;">
                        ACCESS RESOURCE
                    </button>
                </div>
            </div>
        `).join('');

        listContainer.querySelectorAll('.view-resource-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const res = GIG_DATA.resources.find(item => item.id === this.dataset.id);
                if (res) {
                    openInformationalModal(
                        res.title,
                        `<p><strong>Category:</strong> ${res.category}</p>
                         <p><strong>Format:</strong> ${res.type}</p>
                         <p>${res.description}</p>
                         <div style="background:#E6F2EC; border-left:3px solid #2E7D5B; padding:12px; margin:16px 0; font-size:12px;">
                             <strong>Demonstration Notice:</strong> In this prototype version, full document downloads are simulated. The official institutional PDF brief has been verified.
                         </div>
                         <div style="display:flex; gap:10px;">
                             <button class="btn-primary" onclick="alert('Demo: Downloading illustrative file: ${res.title}.pdf'); closeModal('info-modal');" style="flex:1;">
                                 DOWNLOAD BRIEF (DEMO)
                             </button>
                         </div>`
                    );
                }
            });
        });
    };

    if (tabsContainer) {
        tabsContainer.innerHTML = categories.map(cat => `
            <button class="resource-tab ${cat === currentCategory ? 'active' : ''}" data-cat="${cat}">
                ${cat}
            </button>
        `).join('');

        tabsContainer.querySelectorAll('.resource-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                tabsContainer.querySelectorAll('.resource-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                currentCategory = this.dataset.cat;
                renderResources();
            });
        });
    }

    renderResources();
}

// ==========================================================
// 10. NEWS & UPDATES PAGE CONTROLLER (news.html)
// ==========================================================
function initNewsPage() {
    if (!window.GIG_DATA) return;

    const grid = document.getElementById('news-cards-grid');
    if (!grid) return;

    grid.innerHTML = GIG_DATA.news.map(article => `
        <div class="news-card">
            <div>
                <div class="news-card-date">
                    <span>${article.date}</span>
                    <span class="news-category-pill">${article.category}</span>
                </div>
                <h3>
                    <a href="news-detail.html?id=${article.id}" style="color:inherit; text-decoration:none;">${article.title}</a>
                </h3>
                <p>${article.summary}</p>
            </div>
            <div style="border-top:1px solid #E8ECEF; padding-top:12px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:11px; color:#777;">Source: ${article.author}</span>
                <a href="news-detail.html?id=${article.id}" class="btn-primary" style="padding:6px 14px; font-size:11px; text-decoration:none;">
                    READ MORE &rarr;
                </a>
            </div>
        </div>
    `).join('');
}

// ==========================================================
// 11. NEWS DETAIL PAGE CONTROLLER (news-detail.html)
// ==========================================================
function initNewsDetailPage() {
    if (!window.GIG_DATA) return;

    const newsId = getUrlParam('id') || 'news-renewable-energy-gig';
    const article = GIG_DATA.news.find(n => n.id === newsId) || GIG_DATA.news[0];
    if (!article) return;

    document.title = `${article.title} | Global Investment Grid`;

    const titleEl = document.getElementById('news-title');
    if (titleEl) titleEl.textContent = article.title;

    const dateEl = document.getElementById('news-date');
    if (dateEl) dateEl.textContent = article.date;

    const authorEl = document.getElementById('news-author');
    if (authorEl) authorEl.textContent = article.author;

    const categoryEl = document.getElementById('news-category');
    if (categoryEl) categoryEl.textContent = article.category;

    const bodyEl = document.getElementById('news-content');
    if (bodyEl) bodyEl.innerHTML = article.content;

    const breadcrumbTitle = document.getElementById('breadcrumb-news-title');
    if (breadcrumbTitle) breadcrumbTitle.textContent = article.title;

    // Tags
    const tagsContainer = document.getElementById('news-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = `
            <a href="country.html?country=${findCountrySlug(article.relatedCountry)}" class="theme-pill" style="text-decoration:none;">${article.relatedCountry}</a>
            <a href="sector.html?sector=${findSectorSlug(article.relatedSector)}" class="theme-pill" style="text-decoration:none;">${article.relatedSector}</a>
            <span class="theme-pill">${article.category}</span>
        `;
    }
}

// ==========================================================
// 12. PROJECT DETAIL PAGE CONTROLLER (project.html)
// ==========================================================
function initProjectDetailPage() {
    if (!window.GIG_DATA) return;

    const projId = getUrlParam('id');
    let project = GIG_DATA.projects.find(p => p.id === projId || p.numericId === parseInt(projId));

    if (!project) {
        project = GIG_DATA.projects[0];
    }
    if (!project) return;

    document.title = `${project.name} - Project Detail | Global Investment Grid`;

    const nameEl = document.getElementById('project-name');
    if (nameEl) nameEl.textContent = project.name;

    const breadcrumbProj = document.getElementById('breadcrumb-project');
    if (breadcrumbProj) breadcrumbProj.textContent = project.name;

    const countryEl = document.getElementById('project-country');
    if (countryEl) {
        countryEl.textContent = `${project.country} (${project.region})`;
        countryEl.href = `country.html?country=${findCountrySlug(project.country)}`;
    }

    const locEl = document.getElementById('project-location');
    if (locEl) locEl.textContent = project.location || project.country;

    const sectorEl = document.getElementById('project-sector');
    if (sectorEl) {
        sectorEl.textContent = project.sector;
        sectorEl.href = `sector.html?sector=${findSectorSlug(project.sector)}`;
    }

    const sizeEl = document.getElementById('project-investment');
    if (sizeEl) sizeEl.textContent = project.investment;

    const stageEl = document.getElementById('project-stage');
    if (stageEl) stageEl.textContent = project.stage;

    const typeEl = document.getElementById('project-type');
    if (typeEl) typeEl.textContent = project.type;

    const oppEl = document.getElementById('project-opportunity');
    if (oppEl) oppEl.textContent = project.opportunity;

    const overviewEl = document.getElementById('project-overview');
    if (overviewEl) overviewEl.textContent = project.overview;

    const reqEl = document.getElementById('project-requirements');
    if (reqEl) reqEl.textContent = project.requirements;

    const timelineEl = document.getElementById('project-timeline');
    if (timelineEl) timelineEl.textContent = project.timeline || 'Phase-wise implementation schedule available upon NDA';

    const promoterEl = document.getElementById('project-promoter');
    if (promoterEl) promoterEl.textContent = project.promoter || 'National Development Authority';

    // Key Features / Highlights
    const highlightsEl = document.getElementById('project-highlights');
    if (highlightsEl && project.highlights) {
        highlightsEl.innerHTML = project.highlights.map(h => `<li style="margin-bottom:8px;">${h}</li>`).join('');
    }

    // Express Interest CTA
    const interestBtn = document.getElementById('project-express-interest-btn');
    if (interestBtn) {
        interestBtn.addEventListener('click', () => openInterestModal(project.id));
    }

    // Save Project Button
    const saveBtn = document.getElementById('project-save-btn');
    if (saveBtn) {
        saveBtn.dataset.id = project.id;
        const updateState = () => {
            const saved = isProjectSaved(project.id);
            saveBtn.textContent = saved ? '★ PROJECT SAVED' : '☆ SAVE PROJECT';
        };
        updateState();
        saveBtn.addEventListener('click', () => {
            toggleSaveProject(project.id);
            updateState();
        });
    }

    // Related projects
    const relatedContainer = document.getElementById('related-projects-grid');
    if (relatedContainer) {
        const related = GIG_DATA.projects
            .filter(p => p.id !== project.id && (p.sector === project.sector || p.region === project.region))
            .slice(0, 3);
        if (related.length > 0) {
            relatedContainer.innerHTML = related.map(p => createProjectCardHtml(p)).join('');
            attachProjectCardEvents(relatedContainer);
        }
    }
}

// ==========================================================
// REUSABLE INTERACTIVE MAP ENGINE (WORLD & CONTINENTS)
// ==========================================================
let currentMapSelectedCountry = '';
let currentMapTooltipTimer = null;

function renderInteractiveMap(svgId, options) {
    const svg = document.getElementById(svgId);
    if (!svg) return;

    const viewBox = options.viewBox || "40 86 543 274";
    const landPath = options.landPath || (typeof WORLD_MAP !== 'undefined' ? WORLD_MAP.land : "");
    const countriesList = options.countries || [];
    const markers = options.markers || {};
    const infoPrefix = options.infoPanelPrefix || 'map-';

    svg.setAttribute('viewBox', viewBox);
    svg.innerHTML = '';

    // Land Background
    if (landPath) {
        const landEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        landEl.setAttribute('class', 'map-land');
        landEl.setAttribute('d', landPath);
        landEl.setAttribute('fill-rule', 'evenodd');
        svg.appendChild(landEl);
    }

    // Interactive Countries
    const worldCountries = (typeof WORLD_MAP !== 'undefined') ? WORLD_MAP.countries : {};

    countriesList.forEach(countryName => {
        const stats = getCountryOpportunityStats(countryName);
        const hasData = stats.count > 0;

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('class', 'country-group ' + (hasData ? 'available' : 'no-data'));
        g.setAttribute('data-country', countryName);
        g.setAttribute('tabindex', '0');
        g.setAttribute('role', 'button');
        g.setAttribute('aria-label', `${countryName}: ${stats.count} investment opportunities`);

        // Check if country has polygon path or marker
        if (worldCountries[countryName]) {
            const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathEl.setAttribute('class', 'country');
            pathEl.setAttribute('d', worldCountries[countryName]);
            pathEl.setAttribute('fill-rule', 'evenodd');
            g.appendChild(pathEl);
        } else if (markers[countryName]) {
            const m = markers[countryName];
            const hitCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            hitCircle.setAttribute('class', 'map-hit');
            hitCircle.setAttribute('cx', m.x);
            hitCircle.setAttribute('cy', m.y);
            hitCircle.setAttribute('r', (m.r || 2) * 2.5);
            g.appendChild(hitCircle);

            const circleEl = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circleEl.setAttribute('class', 'country');
            circleEl.setAttribute('cx', m.x);
            circleEl.setAttribute('cy', m.y);
            circleEl.setAttribute('r', m.r || 2);
            g.appendChild(circleEl);
        }

        // Pointer & Keyboard Events
        g.addEventListener('pointerenter', function(e) {
            if (e.pointerType === 'touch') return;
            this.classList.add('hover');
            showSharedMapTooltip(countryName, e.clientX, e.clientY, svgId);
            updateMapInfoPanel(countryName, infoPrefix);
        });

        g.addEventListener('pointermove', function(e) {
            if (e.pointerType === 'touch') return;
            positionSharedMapTooltip(e.clientX, e.clientY, svgId);
        });

        g.addEventListener('pointerleave', function(e) {
            this.classList.remove('hover');
            if (e.pointerType === 'touch') return;
            hideSharedMapTooltip(svgId);
            updateMapInfoPanel(currentMapSelectedCountry, infoPrefix);
        });

        g.addEventListener('click', function(e) {
            selectCountryOnMap(countryName, svgId, infoPrefix);
            if (e.pointerType === 'touch') {
                showSharedMapTooltip(countryName, e.clientX, e.clientY, svgId);
                clearTimeout(currentMapTooltipTimer);
                currentMapTooltipTimer = setTimeout(() => hideSharedMapTooltip(svgId), 3500);
            }
        });

        g.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectCountryOnMap(countryName, svgId, infoPrefix);
            }
        });

        svg.appendChild(g);
    });

    // Tap outside to hide tooltip
    svg.addEventListener('click', function(e) {
        if (!e.target.closest('.country-group')) {
            hideSharedMapTooltip(svgId);
        }
    });

    // Wire up panel button
    const panelBtn = document.getElementById(`${infoPrefix}country-btn`) || document.getElementById('map-info-btn');
    if (panelBtn) {
        panelBtn.addEventListener('click', function() {
            if (currentMapSelectedCountry) {
                const slug = findCountrySlug(currentMapSelectedCountry);
                if (slug) {
                    window.location.href = `country.html?country=${slug}`;
                } else {
                    window.location.href = `investment-opportunities.html?country=${encodeURIComponent(currentMapSelectedCountry)}`;
                }
            }
        });
    }

    // Reset panel to default state
    updateMapInfoPanel('', infoPrefix);
}

function selectCountryOnMap(countryName, svgId, infoPrefix) {
    currentMapSelectedCountry = countryName;
    const svg = document.getElementById(svgId);
    if (!svg) return;

    svg.querySelectorAll('.country-group').forEach(g => {
        const isMatch = g.getAttribute('data-country') === countryName;
        g.classList.toggle('selected', isMatch);
    });

    updateMapInfoPanel(countryName, infoPrefix);
}

function updateMapInfoPanel(countryName, infoPrefix) {
    const titleEl = document.getElementById(`${infoPrefix}country-name`) || document.getElementById('map-country-name');
    const infoEl = document.getElementById(`${infoPrefix}country-info`) || document.getElementById('map-country-info');
    const btn = document.getElementById(`${infoPrefix}country-btn`) || document.getElementById('map-info-btn');

    if (!titleEl || !infoEl) return;

    if (!countryName) {
        titleEl.textContent = 'Hover over a country';
        infoEl.textContent = 'Click a country to view investment opportunities and market profile.';
        if (btn) btn.hidden = true;
        return;
    }

    const stats = getCountryOpportunityStats(countryName);
    titleEl.textContent = countryName;

    if (stats.count > 0) {
        infoEl.innerHTML = `
            <div><strong>Investment Opportunities:</strong> ${stats.count} illustrative project${stats.count === 1 ? '' : 's'}</div>
            <div><strong>Key Sectors:</strong> ${stats.sectors.join(', ')}</div>
            ${stats.themes.length > 0 ? `<div><strong>Themes:</strong> ${stats.themes.slice(0, 3).join(', ')}</div>` : ''}
        `;
        if (btn) {
            btn.hidden = false;
            btn.textContent = `EXPLORE ${countryName.toUpperCase()} &rarr;`;
        }
    } else {
        infoEl.innerHTML = `
            <div><strong>Investment Opportunities:</strong> 0</div>
            <div>No sample opportunities currently listed for this market.</div>
        `;
        if (btn) {
            btn.hidden = false;
            btn.textContent = `VIEW ${countryName.toUpperCase()} PROFILE &rarr;`;
        }
    }
}

function getCountryOpportunityStats(name) {
    if (!window.GIG_DATA) return { count: 0, sectors: [], themes: [] };

    const matchingProjects = GIG_DATA.projects.filter(p => p.country.toLowerCase() === name.toLowerCase());
    const sectors = [...new Set(matchingProjects.map(p => p.sector))];

    const slug = findCountrySlug(name);
    const countryData = slug ? GIG_DATA.countries[slug] : null;
    const themes = countryData ? (countryData.investmentThemes || []) : [];

    return {
        count: matchingProjects.length,
        sectors: sectors.length > 0 ? sectors : (countryData ? countryData.keySectors.slice(0, 3) : []),
        themes: themes
    };
}

// Tooltip helpers
function showSharedMapTooltip(name, clientX, clientY, svgId) {
    const tip = document.getElementById('map-tooltip');
    if (!tip) return;

    const stats = getCountryOpportunityStats(name);
    tip.innerHTML = `
        <strong>${name}</strong>
        <span>Opportunities: ${stats.count}</span>
        ${stats.sectors.length > 0 ? `<span>Sectors: ${stats.sectors.slice(0, 2).join(', ')}</span>` : `<span>No sample projects listed yet</span>`}
    `;
    tip.classList.add('visible');
    positionSharedMapTooltip(clientX, clientY, svgId);
}

function positionSharedMapTooltip(clientX, clientY, svgId) {
    const tip = document.getElementById('map-tooltip');
    const svg = document.getElementById(svgId);
    if (!tip || !svg || !tip.classList.contains('visible')) return;

    const container = svg.closest('.map-container') || svg.parentElement;
    const rect = container.getBoundingClientRect();

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const w = tip.offsetWidth;
    const h = tip.offsetHeight;
    const gap = 12;

    let left = x + gap;
    if (left + w > rect.width - 4) left = x - w - gap;
    left = Math.max(4, Math.min(left, rect.width - w - 4));

    let top = y + gap;
    if (top + h > rect.height - 4) top = y - h - gap;
    top = Math.max(4, Math.min(top, rect.height - h - 4));

    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
}

function hideSharedMapTooltip() {
    const tip = document.getElementById('map-tooltip');
    if (tip) tip.classList.remove('visible');
}

// ====== SLUG LOOKUP UTILITIES ======
function findCountrySlug(countryName) {
    if (!countryName || !window.GIG_DATA) return '';
    const norm = countryName.toLowerCase().trim();

    for (const [slug, data] of Object.entries(GIG_DATA.countries)) {
        if (data.name.toLowerCase() === norm ||
            (data.aliases && data.aliases.map(a => a.toLowerCase()).includes(norm)) ||
            slug === norm ||
            data.name.toLowerCase().replace(/\s+/g, '-') === norm) {
            return slug;
        }
    }
    return norm.replace(/\s+/g, '-');
}

function findSectorSlug(sectorName) {
    if (!sectorName || !window.GIG_DATA) return '';
    const norm = sectorName.toLowerCase().trim();

    const found = GIG_DATA.sectors.find(s =>
        s.name.toLowerCase() === norm ||
        s.id === norm ||
        s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === norm
    );

    return found ? found.id : norm.replace(/[^a-z0-9]+/g, '-');
}
