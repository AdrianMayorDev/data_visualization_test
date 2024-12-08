import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	sassOptions: {
		prependData: `
        @use './src/app/styles/base/_typography.scss';
        @use './src/app/styles/base/_palette.scss';
        @use './src/app/styles/base/_breakpoints.scss';
        @use './src/app/styles/base/_spacing.scss';
      `,
	},
};

export default nextConfig;
