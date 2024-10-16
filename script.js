new Vue({
	el: "#app",
	data: {
		siteName: "Karolina Fitness",
		pages: [
			{name: "Hjem", url: "index.html"},
			{name: "Om meg", url: "om-meg.html"},
			{name: "Tjenester", url: "tjenester.html"},
			{name: "FAQ", url: "faq.html"},
			{name: "Snakk med meg", url: "snakk-med-meg.html"},
		],
		welcomeMessage: "Velkommen til Helseveileder Karolina",
		tagline: "Din personlige trener for en sunnere livsstil",
		ctaButtonText: "Bestill en konsultasjon",
		features: [
			{
				title: "Personlig Trening",
				description: "Skreddersydde treningsprogrammer for dine mål",
			},
			{
				title: "Ernæringsrådgivning",
				description: "Kostholdsplaner tilpasset din livsstil",
			},
			{
				title: "Livsstilscoaching",
				description: "Helhetlig tilnærming til din helse og velvære",
			},
		],
		footerText: "© 2024 Helseveileder Karolina. Alle rettigheter reservert.",
		currentYear: new Date().getFullYear(),
		totalClients: 150,
		activeClients: 75,
	},
	computed: {
		fullSiteName() {
			return this.siteName + " - Personlig Trener";
		},
		currentPageCount() {
			return this.pages.length;
		},
		clientRetentionRate() {
			return ((this.activeClients / this.totalClients) * 100).toFixed(1) + "%";
		},
		copyrightNotice() {
			return `© ${this.currentYear} ${this.siteName}. Alle rettigheter reservert.`;
		},
	},
	methods: {
		bookConsultation() {
			alert(
				"Takk for din interesse! Vi vil kontakte deg snart for å avtale en konsultasjon."
			);
		},
	},
    
});
