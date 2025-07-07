
console.log("constants.js loaded");

export const STORAGE_KEY = 'chrono-timeline-data';
export const THEME_DEFINITIONS = {
    'theme-minimalist': {
        name: 'Minimalist',
        colors: {
            '--color-bg': '#FFFFFF',
            '--color-text-primary': '#111827',
            '--color-text-secondary': '#6B7280',
            '--color-accent': '#3B82F6',
            '--color-border': '#E5E7EB',
        },
        fonts: ['Inter']
},
'theme-blueprint': {
    name: 'Blueprint',
    colors: {
        '--color-bg': '#0D244F',
        '--color-text-primary': '#FFFFFF',
        '--color-text-secondary': '#A97D1',
        '--color-accent': '#FFD369',
        '--color-border': '#334E7D',
    },
    fonts: ['Roboto Mono']
}
};

export const WELCOME_TIMELINE_DATA = [
    {
        id: 'welcome-1',
        date: 'Today',
        title: 'Welcome to Chrono!',
        description: 'This is an interactive timeline. You can create, visualize, and share your stories. Let\'s get started.',
        imageUrl: ''
    },
    {
        id: 'welcome-2',
        date: 'Step 1',
        title: 'Create Your First Event',
        description: 'Click the "+ Add Event" button in the top right to open the editor and start building your own narrative.',
        imageUrl: ''
    },
    {
        id: 'welcome-3',
        date: 'Step 2',
        title: 'Choose Your Style',
        description: 'Use the "Theme" dropdown to give your timeline a unique look and feel. Find the one that best tells your story.',
        imageUrl: ''
    }
];



