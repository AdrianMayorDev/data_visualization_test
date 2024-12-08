import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	sassOptions: {
		prependData: `
        @use './src/styles/base/_typography.scss';
        @use './src/styles/base/_palette.scss';
        @use './src/styles/base/_breakpoints.scss';
        @use './src/styles/base/_spacing.scss';
      `,
	},
};

export default nextConfig;
