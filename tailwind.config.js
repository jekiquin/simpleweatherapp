module.exports = {
	content: ['src/**/*.{js, jsx, ts, tsx}'],
	theme: {
		extend: {
			height: {
				30: '7.5rem',
				119: '30rem',
				129: '32.25rem'
			},
			gridTemplateColumns: {
				custom: '2fr, repeat(4, 1fr), 2fr',
				'custom-mobile': '2fr, repeat(2, 1fr), 2fr'
			},
			minWidth: {
				480: '480px'
			}
		}
	},
	plugins: []
};
