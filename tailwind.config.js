module.exports = {
	content: ['src/**/*.{js, jsx, ts, tsx}'],
	theme: {
		extend: {
			height: {
				30: '7.5rem'
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
