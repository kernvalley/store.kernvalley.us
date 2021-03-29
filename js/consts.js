export const GA = null;

export const env = (location.hostname === 'localhost' || location.hostname.endsWith('.netlify.live'))
	? 'development'
	: 'production';

export const dev = env === 'development';

export const site = {
	title: 'Kern Valley Store',
};

export const storePages = [
	'clothing',
	'souvenirs',
	'whiskeyflats',
	'derby',
];
