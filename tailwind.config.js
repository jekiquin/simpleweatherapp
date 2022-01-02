module.exports = {
	content: ['src/**/*.{js, jsx, ts, tsx}'],
	theme: {
		extend: {
			height: {
				30: '7.5rem'
			},
			gridTemplateColumns: {
				custom: '2fr, repeat(4, 1fr), 3fr'
			}
		}
	},
	plugins: []
};
