// ========================================
// Blues Academy - Interactive Features
// ========================================

// Scale Data
const scaleData = {
    'Am': { notes: ['A', 'C', 'D', 'E', 'G'], type: 'Menor' },
    'Em': { notes: ['E', 'G', 'A', 'B', 'D'], type: 'Menor' },
    'Dm': { notes: ['D', 'F', 'G', 'A', 'C'], type: 'Menor' },
    'Gm': { notes: ['G', 'B♭', 'C', 'D', 'F'], type: 'Menor' },
    'Cm': { notes: ['C', 'E♭', 'F', 'G', 'B♭'], type: 'Menor' },
    'A': { notes: ['A', 'C#', 'D', 'E', 'G'], type: 'Maior' },
    'E': { notes: ['E', 'G#', 'A', 'B', 'D'], type: 'Maior' },
    'D': { notes: ['D', 'F#', 'G', 'A', 'C'], type: 'Maior' },
    'G': { notes: ['G', 'B', 'C', 'D', 'F'], type: 'Maior' },
    'C': { notes: ['C', 'E', 'F', 'G', 'B♭'], type: 'Maior' }
};

// Diagram Data - Position starting frets for each key
const diagramPositions = {
    'Am': { pos1: 5, pos2: 8, pos3: 12, pos4: 0, pos5: 2 },
    'Em': { pos1: 12, pos2: 3, pos3: 7, pos4: 7, pos5: 9 },
    'Dm': { pos1: 10, pos2: 13, pos3: 5, pos4: 5, pos5: 7 },
    'Gm': { pos1: 3, pos2: 6, pos3: 10, pos4: 10, pos5: 0 },
    'Cm': { pos1: 8, pos2: 11, pos3: 3, pos4: 3, pos5: 5 },
    'A': { pos1: 5, pos2: 8, pos3: 12, pos4: 0, pos5: 2 },
    'E': { pos1: 12, pos2: 3, pos3: 7, pos4: 7, pos5: 9 },
    'D': { pos1: 10, pos2: 13, pos3: 5, pos4: 5, pos5: 7 },
    'G': { pos1: 3, pos2: 6, pos3: 10, pos4: 10, pos5: 0 },
    'C': { pos1: 8, pos2: 11, pos3: 3, pos4: 3, pos5: 5 }
};

// Transpose offsets - how many frets to shift from Am (base key)
const transposeOffsets = {
    'Am': 0,
    'Em': 7,
    'Dm': 5,
    'Gm': -2,
    'Cm': 3,
    'A': 0,
    'E': 7,
    'D': 5,
    'G': -2,
    'C': 3
};

// Diagram templates - Relative patterns (offsets from starting fret)
const diagramTemplates = {
    '1': {
        title: 'Posição 1 - Padrão Box',
        info: 'Posição mais usada no blues. Memorize este padrão primeiro!',
        // Pattern: [string][fret offset from base]
        pattern: {
            e: [0, 3, 4],
            B: [0, 3, 4],
            G: [0, 2, 4],
            D: [0, 2, 4],
            A: [0, 2, 4],
            E: [0, 3, 4]
        }
    },
    '2': {
        title: 'Posição 2 - Extensão',
        info: 'Extensão natural da Posição 1. Ótima para frases ascendentes.',
        pattern: {
            e: [0, 2, 4],
            B: [0, 2, 4],
            G: [0, 3, 4],
            D: [0, 3, 4],
            A: [0, 3, 4],
            E: [0, 2, 4]
        }
    },
    '3': {
        title: 'Posição 3 - Oitava',
        info: 'Repete o padrão da Posição 1 em região mais aguda.',
        pattern: {
            e: [0, 3, 4],
            B: [0, 2, 4],
            G: [0, 2, 4],
            D: [0, 2, 4],
            A: [0, 3, 4],
            E: [0, 3, 4]
        }
    },
    '4': {
        title: 'Posição 4 - Cordas Soltas',
        info: 'Região grave. Ótima para riffs pesados e som encorpado.',
        pattern: {
            e: [0, 3, 5],
            B: [0, 1, 3, 5],
            G: [0, 2, 5],
            D: [0, 2, 5],
            A: [0, 2, 5],
            E: [0, 3, 5]
        }
    },
    '5': {
        title: 'Posição 5 - Conexão',
        info: 'Posição de transição. Use para conectar diferentes regiões do braço.',
        pattern: {
            e: [0, 1, 3, 4],
            B: [0, 2, 3, 4],
            G: [1, 2, 3, 4],
            D: [1, 2, 3, 4],
            A: [1, 2, 3, 4],
            E: [0, 1, 3, 4]
        }
    },
    'full': {
        title: 'Braço Completo',
        info: 'Visão completa da escala. Use para entender conexões entre posições.',
        pattern: null // Will be handled separately
    }
};

// ========================================
// Section Navigation
// ========================================

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.dataset.section;

            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update active section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');

            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ========================================
// Transpose Utility
// ========================================

function transposeLick(tabContent, offset) {
    if (offset === 0) return tabContent;

    // Function to transpose a single number
    function transposeNumber(match, num) {
        const fret = parseInt(num);

        // Don't transpose open strings (0) if offset would make them negative
        if (fret === 0 && offset < 0) return match;

        const newFret = fret + offset;

        // Don't allow negative frets
        if (newFret < 0) return match;

        return match.replace(num, newFret.toString());
    }

    // Transpose regular fret numbers (e.g., "---5---", "|7-", "-12-")
    // But avoid numbers in parentheses (bend targets) and preserve special notation
    let transposed = tabContent;

    // Handle bend notation separately: 7b(9) becomes (7+offset)b(9+offset)
    transposed = transposed.replace(/(\d+)b\((\d+)\)/g, (match, fret, target) => {
        const newFret = parseInt(fret) + offset;
        const newTarget = parseInt(target) + offset;
        return newFret >= 0 ? `${newFret}b(${newTarget})` : match;
    });

    // Handle hammer-on/pull-off: 5h8p5 becomes (5+offset)h(8+offset)p(5+offset)
    transposed = transposed.replace(/(\d+)([hp])(\d+)/g, (match, fret1, technique, fret2) => {
        const newFret1 = parseInt(fret1) + offset;
        const newFret2 = parseInt(fret2) + offset;
        if (newFret1 < 0 || newFret2 < 0) return match;
        return `${newFret1}${technique}${newFret2}`;
    });

    // Handle regular fret numbers (not already handled)
    // Match numbers that are not inside parentheses and not already part of bend/hammer notation
    transposed = transposed.replace(/(?<![b(hp\d])(\d+)(?![)\dhp])/g, (match, num) => {
        const fret = parseInt(num);
        if (fret === 0 && offset < 0) return match;
        const newFret = fret + offset;
        return newFret >= 0 ? newFret.toString() : match;
    });

    return transposed;
}

function updateAllLicks(key) {
    const offset = transposeOffsets[key];
    const lickTabs = document.querySelectorAll('.tab');

    lickTabs.forEach(tab => {
        // Store original content on first transpose
        if (!tab.dataset.originalContent) {
            tab.dataset.originalContent = tab.textContent;
        }

        // Transpose from original content
        const originalContent = tab.dataset.originalContent;
        const transposedContent = transposeLick(originalContent, offset);
        tab.textContent = transposedContent;
    });
}

// ========================================
// Key Selector
// ========================================

function initKeySelector() {
    const keyButtons = document.querySelectorAll('.key-btn');
    const currentKeySpan = document.getElementById('current-key');
    const licksCurrentKeySpan = document.getElementById('licks-current-key');
    const notesDisplay = document.getElementById('notes-display');

    keyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedKey = button.dataset.key;

            // Update active button
            keyButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update scale display
            updateScaleDisplay(selectedKey, currentKeySpan, notesDisplay);

            // Update licks context key
            if (licksCurrentKeySpan) {
                licksCurrentKeySpan.textContent = selectedKey;
            }

            // Update diagrams
            updateDiagram();

            // Update all licks to new key
            updateAllLicks(selectedKey);

            // Add animation to notes display
            notesDisplay.style.animation = 'none';
            setTimeout(() => {
                notesDisplay.style.animation = 'fadeIn 0.35s ease';
            }, 10);
        });
    });
}

function updateScaleDisplay(key, currentKeySpan, notesDisplay) {
    const scale = scaleData[key];

    // Update key name
    currentKeySpan.textContent = key;

    // Update notes
    notesDisplay.innerHTML = scale.notes
        .map(note => `<span class="note-pill">${note}</span>`)
        .join('');
}

// ========================================
// Position Tabs
// ========================================

function initPositionTabs() {
    const tabButtons = document.querySelectorAll('.position-tabs .tab-btn');
    const tabContents = document.querySelectorAll('.position-tabs .tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const position = button.dataset.position;
            const parentTabs = button.closest('.position-tabs');

            // Update active tab button within this group
            parentTabs.querySelectorAll('.tab-btn').forEach(btn =>
                btn.classList.remove('active')
            );
            button.classList.add('active');

            // Update active tab content within this group
            parentTabs.querySelectorAll('.tab-content').forEach(content => {
                if (content.dataset.position === position) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });

            // Smooth scroll to content
            setTimeout(() => {
                parentTabs.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 100);
        });
    });
}

// ========================================
// Guitarist Tabs
// ========================================

function initGuitaristTabs() {
    const tabButtons = document.querySelectorAll('.guitarist-tabs .tab-btn');
    const tabContents = document.querySelectorAll('.guitarist-tabs .tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const guitarist = button.dataset.guitarist;
            const parentTabs = button.closest('.guitarist-tabs');

            // Update active tab button within this group
            parentTabs.querySelectorAll('.tab-btn').forEach(btn =>
                btn.classList.remove('active')
            );
            button.classList.add('active');

            // Update active tab content within this group
            parentTabs.querySelectorAll('.tab-content').forEach(content => {
                if (content.dataset.guitarist === guitarist) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });

            // Smooth scroll to content
            setTimeout(() => {
                parentTabs.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 100);
        });
    });
}

// ========================================
// Licks are now organized by guitarist
// No filter functionality needed - licks are already
// organized from beginner to advanced within each tab
// ========================================

// ========================================
// Smooth Animations
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// ========================================
// Keyboard Shortcuts
// ========================================

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Alt + Number to switch sections
        if (e.altKey) {
            const sections = ['pentatonic', 'greek-modes', 'exercises', 'progressions'];
            const num = parseInt(e.key);

            if (num >= 1 && num <= 4) {
                const sectionId = sections[num - 1];
                const navItem = document.querySelector(`[data-section="${sectionId}"]`);
                if (navItem) navItem.click();
            }
        }

        // Escape to clear filters (show all)
        if (e.key === 'Escape') {
            const activeSection = document.querySelector('.content-section.active');
            const allButton = activeSection?.querySelector('.filter-btn[data-level="all"]');
            if (allButton) allButton.click();
        }
    });
}

// ========================================
// Mobile Menu Handling
// ========================================

function initMobileMenu() {
    let startX = 0;
    let currentX = 0;

    const navMenu = document.querySelector('.nav-menu');

    if (window.innerWidth <= 768) {
        navMenu.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        navMenu.addEventListener('touchmove', (e) => {
            currentX = e.touches[0].clientX;
        });
    }
}

// ========================================
// Local Storage for Preferences
// ========================================

function initLocalStorage() {
    // Save last selected key
    const keyButtons = document.querySelectorAll('.key-btn');
    keyButtons.forEach(button => {
        button.addEventListener('click', () => {
            localStorage.setItem('lastSelectedKey', button.dataset.key);
        });
    });

    // Restore last selected key
    const lastKey = localStorage.getItem('lastSelectedKey');
    if (lastKey) {
        const button = document.querySelector(`.key-btn[data-key="${lastKey}"]`);
        if (button) button.click();
    }

    // Save last viewed section
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            localStorage.setItem('lastSection', item.dataset.section);
        });
    });

    // Restore last section
    const lastSection = localStorage.getItem('lastSection');
    if (lastSection) {
        const navItem = document.querySelector(`[data-section="${lastSection}"]`);
        if (navItem && window.location.hash === '') {
            navItem.click();
        }
    }
}

// ========================================
// Performance Optimization
// ========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize resize events
window.addEventListener('resize', debounce(() => {
    // Recalculate layouts if needed
    console.log('Window resized');
}, 250));

// ========================================
// URL Hash Navigation
// ========================================

function initHashNavigation() {
    function navigateToHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const navItem = document.querySelector(`[data-section="${hash}"]`);
            if (navItem) {
                navItem.click();
            }
        }
    }

    // Navigate on load
    navigateToHash();

    // Navigate on hash change
    window.addEventListener('hashchange', navigateToHash);
}

// ========================================
// Accessibility Improvements
// ========================================

function initAccessibility() {
    // Add ARIA labels
    document.querySelectorAll('.key-btn').forEach(btn => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('aria-label', `Select ${btn.dataset.key} key`);
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-label', `View ${btn.textContent}`);
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('aria-label', `Filter ${btn.dataset.level} licks`);
    });

    // Focus management for tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.focus();
        });
    });
}

// ========================================
// Print Functionality
// ========================================

function initPrintButton() {
    // Add print button functionality (if you add a print button later)
    window.addEventListener('beforeprint', () => {
        // Show all licks when printing
        document.querySelectorAll('.lick-card.hidden').forEach(card => {
            card.classList.add('show-for-print');
            card.classList.remove('hidden');
        });
    });

    window.addEventListener('afterprint', () => {
        // Restore filter state
        document.querySelectorAll('.lick-card.show-for-print').forEach(card => {
            card.classList.remove('show-for-print');
            card.classList.add('hidden');
        });
    });
}

// ========================================
// Diagram Selector
// ========================================

function initDiagramSelector() {
    const positionSelect = document.getElementById('position-select');
    const licksPositionSpan = document.getElementById('licks-current-position');

    if (!positionSelect) return;

    // Handle position selection
    positionSelect.addEventListener('change', () => {
        const selectedOption = positionSelect.options[positionSelect.selectedIndex];
        const positionText = selectedOption.text;

        // Update licks context position
        if (licksPositionSpan) {
            licksPositionSpan.textContent = positionText;
        }

        // Update diagram
        updateDiagram();

        // Add animation
        const diagramDisplay = document.querySelector('.diagram-display');
        if (diagramDisplay) {
            diagramDisplay.style.animation = 'none';
            setTimeout(() => {
                diagramDisplay.style.animation = 'fadeIn 0.35s ease';
            }, 10);
        }
    });
}

function generateDiagramPattern(pattern, startingFret) {
    const strings = ['e', 'B', 'G', 'D', 'A', 'E'];
    const lines = [];

    // Calculate the range of frets we need to show
    const allFrets = [];
    strings.forEach(str => {
        pattern[str].forEach(offset => {
            allFrets.push(startingFret + offset);
        });
    });
    const minFret = Math.min(...allFrets);
    const maxFret = Math.max(...allFrets);

    // Build each string line
    strings.forEach(str => {
        const stringPattern = pattern[str];
        let line = `${str}|`;

        // Build the visual representation
        for (let fret = minFret; fret <= maxFret; fret++) {
            const offset = fret - startingFret;
            if (stringPattern.includes(offset)) {
                // This fret has a note
                const fretStr = fret.toString();
                if (fretStr.length === 1) {
                    line += `---${fretStr}---`;
                } else {
                    line += `--${fretStr}---`;
                }
            } else {
                // Empty fret (no note here)
                line += `-------`;
            }
        }
        line += '|';
        lines.push(line);
    });

    return lines.join('\n');
}

function updateDiagram() {
    const selectedKeyBtn = document.querySelector('.key-btn.active');
    const positionSelect = document.getElementById('position-select');

    if (!selectedKeyBtn || !positionSelect) return;

    const key = selectedKeyBtn.dataset.key;
    const position = positionSelect.value;

    const template = diagramTemplates[position];
    const keyData = scaleData[key];

    // Update title
    const titleElement = document.getElementById('diagram-title');
    titleElement.textContent = `${template.title} em ${key}`;

    // Update info text
    const infoElement = document.getElementById('diagram-info');
    infoElement.textContent = template.info;

    // Update fretboard pattern
    const fretboardElement = document.getElementById('diagram-fretboard');

    if (position === 'full') {
        // For full fretboard, show the complete pattern
        const fullPattern = generateFullFretboard(key);
        fretboardElement.textContent = fullPattern;

        // Update subtitle
        const subtitleElement = document.getElementById('diagram-subtitle');
        subtitleElement.textContent = 'Todo o braço';
    } else {
        // Get the starting fret for this key and position
        const posKey = `pos${position}`;
        const startingFret = diagramPositions[key][posKey];

        // Generate the diagram with real fret numbers
        const diagramPattern = generateDiagramPattern(template.pattern, startingFret);
        fretboardElement.textContent = diagramPattern;

        // Update subtitle (casa/fret number)
        const subtitleElement = document.getElementById('diagram-subtitle');
        subtitleElement.textContent = `Casa ${startingFret}`;
    }
}

function generateFullFretboard(key) {
    // Full fretboard pattern for Am pentatonic
    // For other keys, this is a simplified representation
    const keyData = scaleData[key];
    const type = keyData.type;
    const offset = transposeOffsets[key];

    // Define the Am pattern (offset 0)
    const basePattern = {
        e: [0, 3, 5, 8, 10, 12, 15],
        B: [0, 1, 5, 8, 10, 13, 15],
        G: [0, 1, 2, 5, 7, 9, 12, 14],
        D: [0, 1, 2, 5, 7, 10, 12, 14],
        A: [0, 2, 5, 7, 10, 12, 15],
        E: [0, 3, 5, 8, 10, 12, 15]
    };

    const strings = ['e', 'B', 'G', 'D', 'A', 'E'];
    const lines = [];

    strings.forEach(str => {
        const frets = basePattern[str].map(f => f + offset);
        let line = `${str}|`;

        for (let fret = 0; fret <= 17; fret++) {
            if (frets.includes(fret)) {
                const fretStr = fret.toString();
                if (fretStr.length === 1) {
                    line += `--${fretStr}--`;
                } else {
                    line += `-${fretStr}--`;
                }
            } else {
                line += '-----';
            }
        }
        line += '|';
        lines.push(line);
    });

    return lines.join('\n') + `\n\nTodas as notas da pentatônica ${type.toLowerCase()} no braço`;
}

// ========================================
// Initialize Everything
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎸 Blues Academy initialized');

    // Core functionality
    initNavigation();
    initKeySelector();
    initGuitaristTabs();
    initDiagramSelector();

    // Enhancements
    initScrollAnimations();
    initKeyboardShortcuts();
    initMobileMenu();
    initLocalStorage();
    initHashNavigation();
    initAccessibility();
    initPrintButton();

    // Show welcome message
    console.log('%c🎸 Atalhos de teclado:', 'font-weight: bold; font-size: 14px;');
    console.log('Alt + 1-4: Navegar entre seções');
    console.log('Esc: Mostrar todos os licks');

    // Performance monitoring (development only)
    if (window.location.hostname === 'localhost') {
        console.log('%c⚡ Performance:', 'font-weight: bold; font-size: 14px;');
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log(`Página carregada em ${Math.round(perfData.loadEventEnd)}ms`);
            }, 0);
        });
    }
});

// ========================================
// Service Worker (PWA - Optional)
// ========================================

// Uncomment to enable PWA functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registrado'))
            .catch(err => console.log('Service Worker erro:', err));
    });
}
*/