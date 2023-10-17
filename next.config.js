const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = (phase) => ({
	experimental: {
		serverComponentsExternalPackages: [],
	},
	distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next" : "build",
});
