// script.js
new Vue({
    el: '#app',
    data: {
        siteName: 'Helseveileder Karolina',
        currentPage: 'Hjem',
        pages: [
            { name: 'Hjem', url: 'index.html' },
            { name: 'Om meg', url: 'om-meg.html' },
            { name: 'Tjenester', url: 'tjenester.html' },
            { name: 'FAQ', url: 'faq.html' },
            { name: 'Snakk med meg', url: 'snakk-med-meg.html' }
        ],
        welcomeMessage: 'Velkommen til Helseveileder Karolina',
        tagline: 'Din personlige trener for en sunnere livsstil',
        ctaButtonText: 'Bestill en konsultasjon',
        features: [
            { title: 'Personlig Trening', description: 'Skreddersydde treningsprogrammer for dine mål' },
            { title: 'Ernæringsrådgivning', description: 'Kostholdsplaner tilpasset din livsstil' },
            { title: 'Livsstilscoaching', description: 'Helhetlig tilnærming til din helse og velvære' }
        ],
        footerText: '© 2024 Helseveileder Karolina. Alle rettigheter reservert.'
    },
    methods: {
        bookConsultation() {
            alert('Takk for din interesse! Vi vil kontakte deg snart for å avtale en konsultasjon.');
        }
    },
    created() {
        // Set current page based on URL
        const path = window.location.pathname;
        const page = this.pages.find(p => p.url === path.substr(path.lastIndexOf('/') + 1));
        if (page) {
            this.currentPage = page.name;
        }
    }
});