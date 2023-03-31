module.exports = {
	content: ["./*.html", "./js/script.js"],
	theme: {
		extend: {
			colors: {
				cyan: 'hsl(180, 66%, 49%)',
				cyanLight: 'hsl(180, 66%, 69%)',
				darkViolet: 'hsl(257, 27%, 26%)',
				red: 'hsl(0, 87%, 67%)',
				grayisViolet: 'hsl(257, 7%, 63%)',
				veryDarkBlue: 'hsl(255, 11%, 22%)',
				veryDarkViolet: 'hsl(260, 8%, 14%)',
				facebook: '#0165E1',
				twitter: '#1DA1F2',
				pinterest: '#E60023',
				instagram: '#E1306C',
			},

			fontFamily: {
				sans: ['Poppins', 'sans-serif']
			},

			spacing: {
				180: '32rem',
			},

			backgroundImage: {
				'cta-mobile': 'url("../images/bg-boost-mobile.svg")',
				'cta-desktop': 'url("../images/bg-boost-desktop.svg")',
			},
		},
	},
	plugins: [],
}
