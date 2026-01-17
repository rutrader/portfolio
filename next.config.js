const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['geist'],
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}

module.exports = nextConfig
